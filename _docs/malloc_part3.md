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

This is only your second day at <em>Discreet Drone Services</em> and it's chaos. Wild rumors and questions are flying about the company's future and Thaddea who was supposed to meet you yesterday and get you started. Where is he? Why is he hiding? Was he kidnapped? Did he flee to Mexico because of some deal gone bad or for love? Everyone has a pet theory. Will the company even survive 2 weeks? Will you even get paid? Whatever happened, it's pretty clear that the company and Thadius are in a <em>heap of trouble</em>.

The CEO interrupts your day-dreaming and asks "I need you to solve the Jay Queue Allocation thing; Thaddea wanted you on it ASAP and said we need solid defensible auditable engineering answers yesterday." And, "Look none of this makes sense and I don't know who to trust right now, so I'm turning to you. IT imaged Thaddea's laptop," he hands you a USB drive, "and pulled the sha256 of her password. So I need you to login and tell me what happened to my friend Thaddea. It's not like her to just run away from problems."

He hands you a small USB drive and a slip of paper with "sha256: ebddfa36f5af47714dd1a1591fa5ead58b613f13ac78e88f90ab00e353856a00" plus some notes about the jq project.
From creating your own login account, you know Discreet Drone Services' password rules. Each password must be 10 characters, have upper and lowercase characters, digits, and a punctuation character."

That's not much but the company name has given you some ideas; maybe brute-forcing or smart guessing is possible? You mentally start designing a C program but also will try a few obvious guesses.

Start a VM using [Thaddea's Laptop Image]({% link forensic-vm447/index.html %})

## Overview and To-Do (Under construction)

In 3 days you'll present to the senior drone engineering team. They will want to see your report on jq optimization, results of your experiments, your findings of using different jq with different allocators and different allocator settings. It will be a long session and the team will pour over your work and grill you; you need to be prepared.


Here are some of the questions that the team may ask you -
1. Was Thaddea's jq drone warning correct? Can you reproduce OOM when heap memory is limited to 96 MB for certain heap alloctors?
2. Which allocator would you recommend for the Drone? Have you verified that it can parse 10 MB of json data within the 96 MB limit?

Thaddea suggested a different allocater, mimalloc for the Web App because, "We care about the tail. No user should ever see a slow response - watch p99, not the mean" 

3. Can you experimentally confirm mimalloc is a good choice if you care about p99 for the web service?
4. Another team uses jq in a script and cares about start up time and processing small data files and will ask which allocator they should use, or does it not matter?
5. Another team works with classified data and wants <tt>free</tt> to also clean the heap memory. If you want to ensure that json data is removed from RAM when heap memory is freed, which allocator would be a good choice? Is the overhead significant if working with 10 MB of data.
6. How does you allocator compare to jemalloc, tcmalloc? Is it competitive? Why / Why not?
7. Did Thaddea make any mistakes in this research notes?
8. What will you tell the CEO? In particular where is Thaddea and can he be saved?

Example json data: https://jsonlint.com/datasets/http-status-codes https://microsoftedge.github.io/Demos/json-dummy-data/

There are multiple allocators that you will explore using with jq. These include glibc, tcmalloc, jemalloc, and mimalloc. 
Create a report that gives an example scenario for each allocator where it would be best (or great) choice and the worst (or a poor) choice.


## Grading / Deliverables (Under construction)
All reports and experiments should be inside a directory 'jq-drone'

## Interview Clinic Expectations (Under construction)
