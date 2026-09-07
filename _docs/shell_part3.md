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

For each common shell issue in the bulleted list down below, you are tasked with creating a "bad shell" with that issue present. After creating your shell, you must record a video demonstrating the process by which and explaining why the "bad" aspect of each shell is a problem.

> ⚠️ Before demoing a fork bomb, set a limit on the number of processes you can create with `ulimit -u <limit>` (100–200 is reasonable) in your terminal session. This prevents the fork bomb from taking down your entire VM. If you fork bomb your CS Cloud VM anyway, notify course staff with your VM number.

- Zombie processes (and how to observe them using `ps`)
- Calling unsafe functions (e.g. `printf`) inside a signal handler
- Fork bombs caused by unhandled `exec()` errors
- Not flushing input and output before forking, when stdin and stdout are both redirected to files

## Grading / Deliverables

It is expected that in your project repo, you provide all 'bad shell' files you created and utilize in your demo video in a folder titled 'bad_shells', with each file named the following, respectively: 

- zombie_process.c
- printf_signal_handler.c
- forkbomb_on_exec_fail.c
- noflush_before_fork.c

In each file, provide a comment at the top listing the proper command used to demo the problem (i.e. the command you used in your final demo, that a course staff could run as well and get the same result).

In a text file titled "shell_part3" put links to all demo videos, recorded per instructions/expectations found [here]({% link _tutorials/video_demo.md %})  

## Interview Clinic Expectations

You are expected to be able to speak on the knowledge you gained during this section, i.e. it is fair game for the interview clinic discussions. 

This means things including but not limited to:
- Identifying what makes a specific shell 'bad' in code blocks related to the issues analyzed in this assignment
- Explaining, in your own words, *why* each bug (zombie processes, unsafe calls in a signal handler, a fork bomb from an unhandled `exec()` failure, unflushed I/O before forking) produces the behavior it does
- Given a code snippet, predicting its observable behavior before running it (e.g. duplicated output, a hang, runaway process creation, a zombie visible in `ps`)
- Proposing a correct fix for a buggy snippet and explaining why that fix resolves the underlying issue rather than just masking the symptom
- Tying each bug back to process-control fundamentals 
- Distinguishing this assignment's bugs from similar-looking but distinct concepts (e.g. this exec-failure fork bomb vs. a classic recursive fork bomb)