---
layout: doc
title: Syllabus
---

# Syllabus

## Formal Course Description

This course is an introduction to System Programming. System Programming refers to writing code that prioritizes operating system support for programmers. A computer needs an operating system to manage its resources and provide support for common functions, such as accessing peripherals. There are two categories of "customers" that an operating system must support.

The first category is the community of users. We have all used computers, and you may recognize operating systems' functions such as creating folders (directories) and moving files around. These are examples of operating system support for users. User support is not the objective of this course.

The second category of users is programmers. This course addresses this category. When you write a program, it may have to interact with physical hardware (memory, flash storage, screen, network, etc.). For example, you may want to get input from a keyboard or mouse; you may want to read some configuration file stored on disk; you may want to output data to a screen or printer; or you may want to access a remote server across a network.

The operating system presents common interfaces for programmers to perform these functions. It also provides useful abstractions such as "tasks" (also called processes), "threads", and "semaphores". You can make the computer multi-task by creating new tasks or new threads. You can make these tasks coordinate and synchronize by using semaphores. You can tell the computer the order in which you want tasks to be executed by using a scheduling policy. Finally, you can manage computer memory by calling on the function for memory management.

## Learning Goals/Skills

* Identify the basic components of an operating system, describe their purpose, and explain how they function.
* Write, compile, debug, and execute C programs that correctly use system interfaces provided by POSIX or a POSIX-like operating system.
* Be familiar with important POSIX system calls and invoke them correctly from within C programs.
* Describe the difference between programs, processes, and threads.
* Write a memory allocator or [malloc]({% link _pages/malloc_hall_of_fame.html %}).
* Explain the meaning and purpose of process control blocks and other mechanisms that the operating system uses to implement the process and thread abstractions.
* Write, compile, debug, and execute C programs that create, manage and terminate processes and threads on POSIX.
* Define concurrency and explain the problems that may arise because of concurrent execution of multiple processes or threads. Explain how these problems can be avoided. Write code that avoids these problems.
* Define semaphores, mutexes, and other synchronization primitives. Also, explain their purpose, and describe their internal implementation.
* Describe possible problems that arise from improper use of synchronization primitives (such as deadlocks) and present their solutions.
* Write, compile, debug, and execute C programs that use POSIX synchronization primitives.
* Describe operating system scheduling and use POSIX interfaces to set and modify scheduling policy parameters.
* Define POSIX signals and signal handlers, and describe their use.
* Write, compile, debug, and execute C programs with processes and threads that interact by invoking and catching signals.
* Describe the concepts of I/O devices, files, directories.
* Explain the internal implementation of files systems and operating system I/O.
* Write, compile, debug, and execute C programs that use files and I/O on POSIX.
* Describe the machine memory hierarchy, describe its components such as caches and virtual memory, and explain memory management mechanisms pertaining to these components such as paging and segmentation.
* Write, compile, debug, and execute C programs that make use of memory management functions.
* Describe the protocols (such as TCP and IP) and interfaces (such as sockets) used for communication among different computers.
* Write distributed applications that communicate across a network.
* Understands and uses system security mechanisms to build secure programs.
* By the end of this course, you should be proficient at writing programs that take full advantage of operating system support.
* Can analyze how a specific security error (e.g. buffer overflow, file access control, page access control) impacts the Confidentiality, Integrity and/or Availability of data or service.
* Can identify multiple development practices (e.g. design reviews, code reviews, testing) as important practices to build secure programs.
* Can briefly describe well-known security case studies (e.g. network protocol implementation errors, CPU side channel attacks) and how they comprise the Confidentiality, Integrity and/or Availability of data or service.

## Grading

The grading breakdown is published on the [course homepage]({% link _pages/index.html %}) and is subject to minor changes.

We publish the following thresholds:

|   Points   |  Minimum Grade  |
|------------|-----------------|
| [90 - 100] | A-              |
| [80 - 90)  | B-              |
| [70 - 80)  | C-              |

Grading issues should be raised with your TA during section or by email. Missing scores need to be reported within 3 days of being published.

### Regrades

There will be opportunities for regrades of the weekly programming assignments. The regrade policy will be announced at the end of the semester.

### Lab Attendance

Lab Attendance is required for all students who are on campus. One lab drop is allowed.

## Quizzes

There will be 6 CBTF Quizzes.

## Assignments

There will be 14 Weekly Small Programming Assignments. These must be completed without AI. Our expectation is that these assignments are completed with your assigned lab partner. Every 4 weeks, you will be assigned a new lab partner; this information will be accessible through Broadway. If you have repeated issues contacting your partner, collaborating on assignments with them, or other difficulties that you believe are impeding your learning, please contact the TA of your lab section as soon as possible. They will reassign you to a new group, or allow you to finish a given assignment on your own as they see fit. You may be assigned a maximum of two lab partners for a given assignment in order to accommodate sections with odd enrollment counts.

There will also be 4 System Projects that extend over multiple weeks. We expect you to use agentic AI for these projects.

## Extenuating Circumstances

If you have an extenuating circumstance that you believe is not covered by the accomodations presently in the syllabus,
please contact the admin email (cs341admin@illinois.edu) immediately. 

## Academic Integrity

All students are bound by the University's academic integrity policy, [Article 1, Part 4 of the Student Code](https://studentcode.illinois.edu/article1/part4/1-401/). Suspected violations will be reported.

This course has two different rules for AI use, and which one applies depends on the assignment:

* **Weekly programming assignments (no AI).** These must be your own work. Do not use AI assistants or agentic coding tools to write, complete, or debug your solution. You must work with your assigned lab partner for the entirety of the assignment; both of you must be able to explain every line you submit. 
* **System projects (with AI).** We expect you to use agentic AI on these projects. Using AI here is not a violation - it is the point of the assignment. You remain responsible for everything you submit, including code that an AI tool wrote for you.

Regardless of which rule applies, do not submit work that is not yours to submit: do not copy from another student, from a previous semester's solution, or from a public repository of course solutions, and do not share or publish your own solutions where other students can find them.

If you are unsure whether something is permitted, ask the course staff before you do it.

## Land Acknowledgment Statement

Please see our important Diversity Statement <a href="/statements#LandAcknowledgementStatement">here</a>.

## Sexual Misconduct Policy and Reporting Statement

Please see our important Diversity Statement <a href="/statements#SexualMisconductPolicyStatement">here</a>.

## Diversity Statement

Please see our important Diversity Statement <a href="/statements#InclusivityStatement">here</a>.

## Mental Health Statement

Please see our important Mental Health Statement <a href="/statements#MentalHealthStatement">here</a>.

## CS Cares Statement

Please see our important CS Cares Statement <a href="/statements#CSCaresStatement">here</a>.
