---
layout: doc
title: "Malloc (part 3 of 3)"
learning_objectives:
  - Benchmarking
  - Debugging memory issues
---
See [Malloc Home]({% link _docs/malloc.md %}), [Part 1]({% link _docs/malloc_part1.md %}) and [Part 2]({% link _docs/malloc_part2.md %}).

## Backstory

Perhaps the pay raise was too good to be true? This is your second day at <em>Discreet Drone Services</em> and probably the wildest startup company you've ever had the misfortune to work at. Rumors are flying about your boss -  where is he? Why is he hiding? Someone claims that he is being blackmailed by Ren - the shady HR person who was weirdly aggressive to you on your first day who took your picture for you ID badge and then kept on talking about AI pics while staring at your photo?No one seems to have time for you, and they're all just running around madly. Will the company even survive 2 weeks so that you get a paycheck? Maybe it's time to already move one but at least one paycheck would be nice, given the current state of your bank balance.

The CEO walks up to you and asks two things. Firstly "Are you smart enough to solve the Jay Queue thing - It seems important - at least your boss Thaddeus mentioned that he wanted you on it as soon as you arrived" Secondly, would you mind looking at virtual machine capture of Thadius's machine? He needs someone that can report directly to them and he doesn't trust the employees to be impartial"

He hands your thumb drive.
"Thadius's password probably started with Drone. 

## Overview and To-Do

Malloc extensions
Sentinel. Padding Detect Underflow overflow.
securefree() memset

Debugging malloc
Debugging application that uses malloc. Using glibc instrumentation options

Benchmarking implementations
Test performance of jq using tcmalloc/jemalloc//glibcmalloc,no-opfree,onepool/yourmalloc
Example json data: https://jsonlint.com/datasets/http-status-codes https://microsoftedge.github.io/Demos/json-dummy-data/



## Grading / Deliverables


Your .c files (above) should compile without error using a recent version of `clang` on your CS341 VM.

## Interview Clinic Expectations

You are expected to be able to speak on the knowledge you gained during this section, i.e. it is fair game for the interview clinic discussions. 

This means things including but not limited to:
