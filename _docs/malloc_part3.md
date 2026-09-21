---
layout: doc
title: "Malloc (part 3 of 3)"
learning_objectives:
  - Benchmarking
  - Debugging memory issues
  - System Forensics
---
See [Malloc Home]({% link _docs/malloc.md %}), [Part 1]({% link _docs/malloc_part1.md %}) and [Part 2]({% link _docs/malloc_part2.md %}).

## Backstory

This is only your second day at <em>Discreet Drone Services</em>. Not only is it crazy hot outside it's chaos inside. Wild rumors and questions are flying about the company's future and Thaddea, who was supposed to meet you yesterday and get you started. Where is she? Why is she hiding? Was she kidnapped? Did she flee to Mexico for love? Everyone has their own wild theory about Thaddea and the state of the company. Will the company even survive 2 weeks? You're not so sure. Will you get a letter of recommendation at the end, or even get paid in 2 weeks? Whatever happened, it's starting to become clear that <em>Discreet Drone Services</em> and Thaddea are in a <em>heap of trouble</em>.

The CEO interrupts your day-dreaming and asks, "I need you to solve the Jay Queue Allocation thing; I know Thaddea wanted you working on it ASAP and said we need solid defensible auditable engineering answers yesterday." And, "Look none of this makes sense to me. I don't know who to trust right now, so I'm turning to you. My IT wiz imaged Thaddea's laptop,"  - the CEO hands you a USB drive - "And pulled the sha256 of her password, it's here on some paper somewhere. So I need you to login and tell me what happened to my friend Thaddea. It's not like her to just run away from problems."

The CEO hands you a small USB drive and a slip of baldy coffee-stained paper with "sha256: ebddfa36f5af..." - the rest of the hexadecimal digits are unreadable, plus some unreadable scratch notes taken from Thaddea's desk about memory allocators, the word <tt>memset</tt> and various doodles of different Drones.
You recently created your own password for your login, so you recall Discreet Drone Services' rules. Each password must be 10 characters, have upper and lowercase characters, digits, and a punctuation character. People don't seem too concerned about security around here; maybe brute-forcing attempts or some smart guessing is possible? You mentally start designing a C program. But you also will try a few obvious guesses that come to mind...

After the CEO leaves, you start a VM using Thaddea's [Laptop Image Memory Snapshot]({% link forensic-vm447/index.html %})

## Overview and To-Do

This evening you'll present to the senior drone engineering team. They urgently want to see your report on jq optimization, the results of your experiments, your findings of using different jq with different allocators and different allocator settings. It will be a long session; expect the team will to review your work carefully and grill you; you need to be prepared.

Here are some example questions that the team may ask you -
1. Was Thaddea's <tt>jq</tt> drone warnings correct? Can you show us how to reproduce the OOM bug when heap memory is limited to 96 MB for mimalloc heap alloctors? For example, we expect the following to fail with OOM,
<tt>ulimit -v 98304; LD_PRELOAD=$PWD/mimalloc/build/libmimalloc.so.3 jq "length" batch-99-2m.json'</tt>
2. Between glibc, jemalloc and mimalloc which allocator would you recommend for the drone? Prove to us that you verified that your choice can parse the given geo json data within the 96 MB limit.
3. The team ask you to explain the "ulimit -v" and "LD_PRELOAD" parts i.e. what does that line do?
4. How does the performance of your owb part2 allocator compare to jemalloc, mimalloc on this data? Do you have any good reasons to recommend or not recommend your own allocator? 
5. If we cleaned up the json file ie., removed the unnecessary null entries, are there good reasons (e.g. processing time, memory usage) to recommend jemalloc, glibc, or mimalloc over the other allocators?
6. In case the drone is captured, the security team wants sensitive data to be erased (overwritten) from heap memory as soon as possible. After doing some research what do you recommend i.e. how should they implement this?

Later, after you figured out what happened, you burst into see the CEO's office barely able to speak while you catch your breath...

 * What will you tell the CEO? Where is Thaddea and what actions do you recommend they immediately do for her?

## Grading / Deliverables
All reports and experiments for part3 should be inside the repo directory './Drone'
For each of the 6 allocator questions above, provide evidence of your understanding and work that supports your findings-

i) A Short video demonstrations in Mediaspace of your code and findings.
ii) In to your repo the results of your work and any small test source and data files used to support your findings. 
The engineering team are suspicious of claims without evidence; you repo will need to contain enough items that they can reproduce your results, or at at least trust you.

* Include a file './Drone/videos.txt' with the 6 links in to your shared video files on MediaSpace (don't forget to make each video public and unlisted, and create a shared link).
* Do not add large files > 10MB (large json files, mp4s) to your git repo. large data should be hosted elsewhere

You may co-present with your partner(s) on each question; however you must present an equal amount of content and "air time."

## Interview Clinic Expectations

Your interview may include questions similar to any of the 6 allocator questions above.

