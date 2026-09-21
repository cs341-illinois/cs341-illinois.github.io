---
layout: doc
title: "Malloc (part 3 of 3)"
learning_objectives:
  - Benchmarking
  - Comparing different memory allocators in a real application
  - System Forensics
---
See [Malloc Home]({% link _docs/malloc.md %}), [Part 1]({% link _docs/malloc_part1.md %}) and [Part 2]({% link _docs/malloc_part2.md %}).

## Backstory

This is only your second day at <em>Discreet Drone Services</em>. Not only is it >100F outside it's hot and chaotic inside. Wild rumors and questions are flying about the company's future and Thaddea, who was supposed to meet you yesterday to get you started has vanished. "Where is she?" "She's hiding" "She was kidnapped" "She eloped to Mexico for love" "The VIPs walked out!" "They loved the dramatic demo!" -  Everyone has their own uninformed guesses about Thaddea dissappearance and the state of the company. Will the company even survive 2 weeks? You're not so sure. Will you get a letter of recommendation at the end, or even get paid in 2 weeks? Whatever happened, it's starting to become clear that <em>Discreet Drone Services</em> and Thaddea are in a <em>heap of trouble</em>.

The CEO interrupts your musing and asks, "I need you to solve the Day?Jay? Queue Allocation thing; I know Thaddea wanted you working on it ASAP and said we need solid defensible auditable engineering answers yesterday." And, "Look none of this makes sense to me. I don't know who to trust right now, so I'm turning to you. My IT wiz imaged Thaddea's laptop before it lost power,"  - the CEO hands you a USB drive - "And pulled the sha256 of her password ... it's here on some paper somewhere. So I need you to login and tell me what happened to my friend Thaddea. It's not like her to just run away from problems."

The CEO hands you a small USB drive and a slip of baldy coffee-stained paper with "sha256: ebddfa36f5af..." - but the rest of the hexadecimal digits are unreadable, plus some unreadable scratch notes taken from Thaddea's desk about memory allocators, the words <tt>memset</tt> <tt>jq</tt> plus various doodles of different Drones.
You recently had to set your own password for your login, so you recall Discreet Drone Services' rules. Each password must be 10 characters, have upper and lowercase characters, digits, and a punctuation character. Other than that, people don't seem too concerned about password security around here; maybe brute-forcing attempts or some smart guessing is possible? You start designing a C program in your head using that sha256 sum. But maybe you should also try a few obvious guesses that spring to mind...

After the CEO leaves, you start a VM using Thaddea's [Laptop Image Memory Snapshot]({% link forensic-vm447/index.html %})

## Overview and To-Do

This evening you'll present to the senior drone engineering panel. They urgently want to see your report on jq optimization, the results of your experiments, your findings of using different jq with different allocators and different allocator settings. It will be a long session; expect the team to review your work carefully and grill you; you need to be prepared.

Here are some example multi-part questions that the engineering team might ask you -
1. Was Thaddea's <tt>jq</tt> drone warnings correct? Can you show us how to reproduce the OOM bug when heap memory is limited to 96 MB for mimalloc heap alloctors? For example, we expect the following to fail with OOM,
<tt>ulimit -v 98304; LD_PRELOAD=$PWD/mimalloc/build/libmimalloc.so.3 jq "length" batch-99-2m.json'</tt>
2. Between glibc, jemalloc and mimalloc which allocator would you recommend for the drone? Prove to us that you verified that your choice can parse the given geo json data within the 96 MB memory ulimit.
3. The team ask you to explain the "ulimit -v" and "LD_PRELOAD" parts i.e. what does that line do? What is `jq` anyway?
4. How does the performance of your owb part2 allocator compare to `jemalloc`, `mimalloc` on this data? Do you have any good reasons to recommend or not recommend your own allocator? What is `tcmalloc` good for and why are you not even evaluating it?
5. If we cleaned up the json file ie., removed the unnecessary null entries, are there good reasons (e.g. processing time, memory usage) to recommend jemalloc, glibc, or mimalloc over the other allocators?
6. In case the drone is captured, the security rep also wants sensitive data to be erased (overwritten) from heap memory as soon as possible and will ask if this is possible with `jq`. After doing some research what do you recommend i.e. how should they implement this?

Later,  - a flash of inspiration - you suddenly understand the fate of Thaddea, you burst into see the CEO's office barely able to speak while you catch your breath...

 * What will you tell the CEO? Where is Thaddea, what happened to her, and what actions do you immediately recommend they do at the Red Mesa site?

## Grading / Deliverables
Reports and experiments (but not the video links) for part3 should be inside the repo, in the sub directory './Drone'
For each of the 6 allocator questions above, your repo will be the supportijng evidence of your understanding and work that supports your findings. Your repo will contani

i) Links to the Short video demonstrations in Mediaspace of your code and findings.
ii) In your repo the results of your work and any small test source and data files used to support your findings. 
The engineering team are suspicious of claims without evidence; you repo will need to contain enough items that they can reproduce your results, or at at least trust you.

* Include a file in the root of your repo, create `./malloc_part3.txt` with the 6 links in to your shared video files on MediaSpace (don't forget to make each video public and unlisted, and create a shared link).
* Do not add large files > 10MB (large json files, mp4s) to your git repo. large data should be hosted elsewhere and downloadedor generated with a script.

You may co-present with your partner(s) on each question; however you must present an equal amount of content and "air time."

## Interview Clinic Expectations

Your interview may include questions similar to any of the 6 allocator questions above.

