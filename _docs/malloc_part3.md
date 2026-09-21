---
layout: doc
title: "Malloc (part 3 of 3)"
learning_objectives:
  - Benchmarking
  - Debugging memory issues
  - Forensics
---
See [Malloc Home]({% link _docs/malloc.md %}), [Part 1]({% link _docs/malloc_part1.md %}) and [Part 2]({% link _docs/malloc_part2.md %}).

## Backstory

This is only your second day at <em>Discreet Drone Services</em> and it's chaos. Wild rumors and questions are flying about the company's future and Thaddeus who was supposed to meet you yesterday and get you started. Where is he? Why is he hiding? Was he kidnapped? Did he flee to Mexico because of some deal gone bad or for love? Everyone has a pet theory. Will the company even survive 2 weeks? Will you even get paid? Whatever happened, it's pretty clear that the company and Thadius are in a <em>heap of trouble</em>.

The CEO stops your day dreaming and asks "I need you to solve the Jay Queue Allocation thing; Thaddeus wanted you on it ASAP and said we need solid defensible auditable engineering answers yesterday." and, "None of this makes sense and I don't know who to trust. IT imaged Thadius's laptop," he hands you a USB drive, "So work out Thad's password and then login. Tell me what happened to my friend Thad. It's not like Thad to just run away from problems."

He hands you a small USB drive and a slip of paper with "sha256: ebddfa36f5af47714dd1a1591fa5ead58b613f13ac78e88f90ab00e353856a00"
"Discreet Drone Services' password rules; required one uppercase characters, 3-5 numbers and one punctuation character."

Open [Thad's Laptop Image]({% link forensic-vm447/index.html %})

## Overview and To-Do (Under construction)

In 3 days you'll present to the senior drone engineering team. They will want to see your report, results of your experiments, your findings of using different jq with different allocators and different allocator settings. It will be a long session and the team will pour over your work. You need to be prepared.

Here are some of the questions that the team may ask you -
1. Was Thadius's warning correct? Can you reproduce OOM when heap memory is limited to 96 MB for certain heap alloctors?
2. Which allocator would you recommend for the Drone? Have you verified that it can parse 10 MB of json data within the 96 MB limit?

Thadius suggested a different allocater, mimalloc for the Web App because, "We care about the tail. No user should ever see a slow response - watch p99, not the mean" 

3. Can you experimentally confirm mimalloc is a good choice if you care about p99 for the web service?
4. Another team uses jq in a script and cares about start up time and processing small data files and will ask which allocator they should use, or does it not matter?
5. Another team works with classified data and wants <tt>free</tt> to also clean the heap memory. If you want to ensure that json data is removed from RAM when heap memory is freed, which allocator would be a good choice? Is the overhead significant if working with 10 MB of data.
6. How does you allocator compare to jemalloc, tcmalloc? Is it competitive? Why / Why not?
7. Did Thadius make any mistakes in this research notes?
8. What will you tell the CEO? In particular where is Thadius and can he be saved?

Example json data: https://jsonlint.com/datasets/http-status-codes https://microsoftedge.github.io/Demos/json-dummy-data/


## Grading / Deliverables (Under construction)


## Interview Clinic Expectations (Under construction)
