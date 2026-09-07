---
layout: doc
title: "Shell (Overview)"
learning_objectives:
  - Using a shell
  - Shell commands
  - Learning How a Shell Works
  - Fork, Exec, Wait
  - Signals
  - Processes
  - Zombie Processes
wikibook:
  - "Forking, Part 1: Introduction"
  - "Forking, Part 2: Fork, Exec, Wait"
  - "Process Control, Part 1: Wait macros, using signals"
---
See [Part1](shell_part1.html), [Part 2](shell_part2.html) and [Part 3](shell_part3.html).

## Backstory

Some people know how to click on buttons, use GUIs, and Web Apps. As a computer scientist your time is precious and you have much more power and quicker methods at your fingertips. There is a third way because you can use a shell like a musical instrument. And quickly too. Which is a good thing - you overslept, lost your keys, stubbed your toe, forgot the root password - and they say now it's up to you to _fix-all-the-things!_ and _Save The World_. Maybe.

## Assignment Overview

This is a 3-part assignment, with each section strengthening and assessing different aspects of your work with a shell in CS341. 

In part 1, you'll use your choice of an existing shell to run a slew of different, common shell commands and explain what they do, in order to gain confidence in your own manipulation of a shell and knowledge of all it can do. Your main deliverable will be video demos/discussions.

In part 2, you'll implement your own shell (most reminiscent to the 'old CS341 MPs'). You will be able to use AI to help you out in this endeavor, but you are NOT allowed to copy any text verbatim from the assignment page. This will be enforced strictly, encouraging you to frame the problem statement(s) in your own words in order to build an application. Your main deliverable will be your own output score from running your shell on our Broadway On Demand autograder. 

In part 3, you'll dig into some common ways shells can have errors by creating your own 'bad' shells and explaining what/how they are bad. Your main deliverable will be video demos/discussions.

**Note**: Start this assignment early! Read the specifications early! Connect with your partner early! These projects will be multi-week, so it is important to keep yourselves accountable and on track. There are many different aspects to digest and account for in this assignment, so starting early is essential for both your sanity and your learning! Would you rather do this right and learn a lot, or do this badly last minute and then have to scramble "re-learn" things for your interview clinic? The choice is yours... ;)

## Deliverable Submission

The 'home base' for this project will be you and your partners corresponding Github Repo. 

*** UDAY :Insert instructions on how to make and use the partner github repo***
NOTE: if you haven't created your own individual repo for the course yet, the shared process will not work. Make sure to do this before these next steps. 

See the video demo - [how to record, publish, and expectations]({% link _tutorials/video_demo.md %}) 

The CS341 autograder is [Broadway]({{ site.data.constants.broadway_on_demand_link }}). The specific assignment page on Broadway will also tell you who your partner is and provide a link to your shared Github repo.

### What should be in my Github Repo?
Each assignment page will go more in depth on the specific file namings or folders you'll need to submit, but here is an overall checklist for you:
- A text file titled "shell_part1.txt" where you'll link all part 1 videos + any other relevant info
- Source files for part2 (your shell)
- A text file titled "shell_part3.txt" where you'll link all part 2 videos + any other relevant info
- A folder containing your "bad_shells"

## Important Things to Note - Interview Clinic / Knowledge Assessment

At the completion of the shell project there will be a 30 minute in-person interview with you and your partner(s) by course staff. Part of the interview will the 'shell debrief' where you will be asked to demonstrate your knowledge about using shells, creating shells, and diagnosing 'bad shells'. Our goal with these interviews is to keep you accountable to what you know and don't know in the course, as well as encourage a culture of truly learning this content deeply through curiosity, exploration, and discussion rather than only rote memorization and point gathering. 

## Grading

Each portion of this project will comprise of the following percentage of the project 1 grade:

| Component                                  | Weight |
|---------------------------------------------|--------|
| Part 1 Videos + Part 3 Videos                | 25%    |
| Part 2 Autograder score                      | 25%    |
| 'Shell' Debrief Portion of Interview Clinic  | 50%    |

Projects are worth 18% of the course total and all AI-assisted exploration projects will be equally weighted. We expect to release 4 (maybe 3) projects. Thus this project is worth approximately 5% of your total grade.

