---
layout: doc
title: "Shell (part 3 of 3)"
learning_objectives:
  - Diagnosing and explaining common shell/process-control bugs
wikibook:
  - "Forking, Part 1: Introduction"
  - "Forking, Part 2: Fork, Exec, Wait"
  - "Process Control, Part 1: Wait macros, using signals"
---

## Backstory

Oh my! It turns out creating a :fire: shell was insufficient. The best team wants just one new person and its likely to be you or that frenemy from *your neighboring town*. They like your shell but to really test your knowledge the team wants to see if you understand and can explain how shell things can go wrong too.

## Overview and To-Do

For each common shell issue in the bulleted list down below, you are tasked with creating a "bad shell" with that issue present. After creating your shell, you must record a video demonstrating and explaining why the "bad" aspect of each shell is a problem. 

> ⚠️ Before demoing a fork bomb, set a limit on the number of processes you can create with `ulimit -u <limit>` (100–200 is reasonable) in your terminal session. This prevents the fork bomb from taking down your entire VM. If you fork bomb your CS Cloud VM anyway, notify course staff with your VM number.

- Zombie processes (and how to observe them using `ps`)
- Calling unsafe functions (e.g. `printf`) inside a signal handler
- Fork bombs caused by unhandled `exec()` errors
- Not flushing input and output before forking, when stdin and stdout are both redirected to files

## More on Videos

## Grading and Expected Output

It is expected that in your project repo, you provide all 'bad shell' files you created and utilize in your demo video in a folder titled 'bad_shells', with each file named the following, respectively: 

- zombie_process.c
- printf_signal_handler.c
- forkbomb_on_exec_fail.c
- noflush_before_fork.c

In each file, provide a comment at the top listing the proper command used to demo the problem (i.e. the command you used in your final demo, that a course staff could run as well and get the same result).

## Interview Clinic Expectations

## What does a good video look like?