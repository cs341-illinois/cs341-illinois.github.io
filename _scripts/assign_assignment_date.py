from pathlib import Path
from datetime import datetime, timedelta
import yaml

ASSIGNMENT_FILE = Path(__file__).parent / "../_data/assignments.yaml"
# start from Sunday, Week 1
FIRST_WEEK_START = datetime(2026, 1, 19)
BREAKS = [
    (datetime(2026, 3, 16), datetime(2026, 3, 23)),  # Spring Break, to 23 00:00
]
MAX_WEEK = 15
SKIPS = ["Lovable Linux"]
DUMP_ICS = True
OVERRIDE_DATE = {
    "Extreme Edge Cases": [[datetime(2026, 1, 26, 18), datetime(2026, 2, 3, 23, 59)]]
}


def are_overlapping(range1_start, range1_end, range2_start, range2_end):
    return range1_start <= range2_end and range1_end >= range2_start


print(
    f"Loaded breaks: "
    + ", ".join(
        f"{start.strftime('%Y-%m-%d')} to {end.strftime('%Y-%m-%d')}"
        for start, end in BREAKS
    )
)

# assign week numbers to dates
week_dates = [FIRST_WEEK_START]
for week in range(1, MAX_WEEK):
    next_week = week_dates[-1] + timedelta(weeks=1)
    while any(
        break_start <= next_week < break_end for break_start, break_end in BREAKS
    ):
        next_week += timedelta(weeks=1)
    week_dates.append(next_week)

print(
    "Week start dates:"
    + "".join(
        f"\nWeek {i+1}: {date.strftime('%Y-%m-%d')}"
        for i, date in enumerate(week_dates)
    )
)

schedule = yaml.safe_load(ASSIGNMENT_FILE.read_text())
labs = schedule["labs"]
mps = schedule["mps"]
print(f"Loaded {len(labs)} labs and {len(mps)} mps")

for l in labs:
    if l["name"] in SKIPS:
        print(f"Skipping lab: {l['name']}")
        continue
    # lab release in Tue 6 PM of the week
    rweek = int(l["releaseDate"].removeprefix("Week "))
    dweek = int(l["dueDate"].removeprefix("Week "))
    print(f"Processing lab: {l['name']} (release week {rweek}, due week {dweek})")
    if l["name"] in OVERRIDE_DATE:
        ovr = OVERRIDE_DATE[l["name"]][0]
        print(
            f"  Overriding dates: Date={ovr[0].strftime('%Y-%m-%d %H:%M')} Due={ovr[1].strftime('%Y-%m-%d %H:%M')}"
        )
        l["submissions"][0]["releaseDate"] = ovr[0].strftime("%Y-%m-%d %H:%M")
        l["submissions"][0]["due_date"] = ovr[1].strftime("%Y-%m-%d %H:%M")
        continue
    rweek_date = week_dates[rweek - 1] + timedelta(days=1, hours=18)  # Tuesday 6 PM
    # calculation is 9 days later
    # however if it's covered by a break
    dweek_date = rweek_date.replace(hour=0) + timedelta(
        days=8, hours=23, minutes=59
    )  # Wednesday 11:59 PM
    for b in BREAKS:
        if are_overlapping(b[0], b[1], rweek_date, dweek_date):
            print(f"  Adjusted due date for break, original due date: {dweek_date}")
            if dweek_date < b[1]:
                dweek_date = b[1] + (dweek_date - b[0])
            elif dweek_date >= b[1]:
                dweek_date += b[1] - b[0]
    print(
        f"  Date={rweek_date.strftime('%Y-%m-%d %H:%M')} Due={dweek_date.strftime('%Y-%m-%d %H:%M')}"
    )
    l["submissions"][0]["releaseDate"] = rweek_date.strftime("%Y-%m-%d %H:%M")
    l["submissions"][0]["due_date"] = dweek_date.strftime("%Y-%m-%d %H:%M")

for m in mps:
    if m["name"] in SKIPS:
        print(f"Skipping mp: {m['name']}")
        continue
    # lab release in last Sunday 6 PM
    rweek = int(m["releaseDate"].removeprefix("Week "))
    dweek = int(m["dueDate"].removeprefix("Week "))
    print(f"Processing mp: {m['name']} (release week {rweek}, due week {dweek})")
    if m["name"] in OVERRIDE_DATE:
        ovr = OVERRIDE_DATE[m["name"]]
        for i in range(len(ovr)):
            print(
                f"  Overriding dates for submission {i}: Date={ovr[i][0].strftime('%Y-%m-%d %H:%M')} Due={ovr[i][1].strftime('%Y-%m-%d %H:%M')}"
            )
            m["submissions"][i]["releaseDate"] = ovr[i][0].strftime("%Y-%m-%d %H:%M")
            m["submissions"][i]["due_date"] = ovr[i][1].strftime("%Y-%m-%d %H:%M")
        continue
    for i in range(len(m["submissions"])):
        print(f"  Submission {i}:")
        rweek_date = week_dates[rweek + i - 1] + timedelta(days=-1, hours=18)
        dweek_date = rweek_date.replace(hour=0) + timedelta(
            days=8, hours=23, minutes=59
        )
        for b in BREAKS:
            if are_overlapping(b[0], b[1], rweek_date, dweek_date):
                print(
                    f"    Adjusted due date for break, original due date: {dweek_date}"
                )
                if dweek_date < b[1]:
                    dweek_date = b[1] + (dweek_date - b[0])
                elif dweek_date >= b[1]:
                    dweek_date += b[1] - b[0]
        print(
            f"    Date={rweek_date.strftime('%Y-%m-%d %H:%M')} Due={dweek_date.strftime('%Y-%m-%d %H:%M')}"
        )
        m["submissions"][i]["releaseDate"] = rweek_date.strftime("%Y-%m-%d %H:%M")
        m["submissions"][i]["due_date"] = dweek_date.strftime("%Y-%m-%d %H:%M")

ASSIGNMENT_FILE.write_text("---\n" + yaml.dump(schedule, sort_keys=False, indent=2))

if DUMP_ICS:
    from icalendar import Calendar, Event

    cal = Calendar()
    cal.add("prodid", "-//CS341 SP26 Assignment Schedule//EN")
    cal.add("version", "2.0")

    for l in labs:
        if l["name"] in SKIPS:
            continue

        # Release event
        release_event = Event()
        release_event.add("summary", f"{l['name']} lab - Release")
        release_event.add(
            "dtstart",
            datetime.strptime(l["submissions"][0]["releaseDate"], "%Y-%m-%d %H:%M"),
        )
        release_event.add("value", "DATE-TIME")
        cal.add_component(release_event)

        # Due event
        due_event = Event()
        due_event.add("summary", f"{l['name']} lab - Due")
        due_event.add(
            "dtstart",
            datetime.strptime(l["submissions"][0]["due_date"], "%Y-%m-%d %H:%M"),
        )
        due_event.add("value", "DATE-TIME")
        cal.add_component(due_event)

    for m in mps:
        if m["name"] in SKIPS:
            continue

        for i, sub in enumerate(m["submissions"]):
            # Release event
            release_event = Event()
            release_event.add("summary", f"{m['name']} MP Part {i+1} - Release")
            release_event.add(
                "dtstart", datetime.strptime(sub["releaseDate"], "%Y-%m-%d %H:%M")
            )
            release_event.add("value", "DATE-TIME")
            cal.add_component(release_event)

            # Due event
            due_event = Event()
            due_event.add("summary", f"{m['name']} MP Part {i+1} - Due")
            due_event.add(
                "dtstart", datetime.strptime(sub["due_date"], "%Y-%m-%d %H:%M")
            )
            due_event.add("value", "DATE-TIME")
            cal.add_component(due_event)

    ics_file = Path(__file__).parent / "../_data/assignments.ics"
    ics_file.write_bytes(cal.to_ical())
    print(f"\nICS calendar written to {ics_file}")
