---
layout: doc
title: "Malloc (part 3 of 3)"
learning_objectives:
  - Benchmarking
  - Debugging memory issues
---
See [Malloc Home]({% link _docs/malloc.md %}), [Part 1]({% link _docs/malloc_part1.md %}) and [Part 2]({% link _docs/malloc_part2.md %}).

## Backstory

I have no detailed memory of what happened or how I got here. I remember day dreaming about heap allocators and not looking where I was going ... walking into that post and hitting my head wasn't my brightest moment.

## Overview and To-Do

Sentinel. Underflow overflow.

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
