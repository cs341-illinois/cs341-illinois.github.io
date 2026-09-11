---
layout: doc
title: "Malloc (part 1 of 3)"
learning_objectives:
  - Memory Allocation and Management
  - Performance Optimization
---
See [Malloc Home]({% link _docs/malloc.md %}), [Part 2]({% link _docs/malloc_part2.md %}) and [Part 3]({% link _docs/malloc_part3.md %}).

## Part 1 Objective

The purpose of this assignment is for you to learn about memory allocation.

## Important Things to Note

This first part is about _understanding the concepts_ of an efficient memory allocator.
In preparation for your course staff interview, each student in the study group should be sufficiently prepared to answer _any_ of the questions from any section below i.e. Course staff will ask each of you directly in turn, a question chosen at random. They may deliberately choose items that you didn't present in your zoom recording. (i.e. our intent is that everyone is encouraged to learn-all-the-things!)

We suggest you record one video for each of the 3 sections below (i.e. 3 videos in total). For your recorded Zoom video(s), each student will present on *two items from each section*. Each student must present different items (so as a group decide in advance who presents what!). No need to stop the video to change who presents; you can huddle around one laptop, or be in a real Zoom call - either works. 

## The Assignment

### 0. POSIX Heap Memory
1. What are the difference between `malloc` and `calloc`; when would you choose `malloc` one? When would you choose `calloc`?
2. Measure the speed difference in a function using 4KB stack memory v temporarily reserving heap (see code examples below)? Hint: Why must you be careful about compiler optimizations in the code below?

`C
void use_stack() { char data[4096]; memset(data, 0, 4096); return;}
void use_malloc() { char* data = malloc(4096); memset(data, 0, 4096); free(data); return;}
void use_calloc() { char* data = calloc(4096,1); free(data); return;}
`
3. What is the Heap area called in the POSIX process model. What is the purpose of `sbrk()`/`brk`? What do real memory allocators use instead?


### 1. Memory Allocation Basics
1. Block Coalescing and Splitting. Your partner has a basic malloc and free working. Now Record a discussion with your partner(s) that walks throught details so that they can implement block splitting and coalescing
2. What are Placement strategies, First, Worst, Best, Next?
3. What are sentinel values?
   
### Memory Allocation Performance
1. Explain 3 optimizations that can speed up heap allocator.

### Alternative Memory Allocators Schemes
1. How does a Buddy Allocator work? What are the advantages / disadvantages?
2. How does a memory pool work?  What are the advantages / disadvantages?
3. How does a SLAB allocator work, and where would you typically find it?  What are the advantages / disadvantages?

# Memory allocation techniques in other languages
What is special about how 
4. Java allocates and frees-up memory for objects?
5. Rust allocates and releases memory for objects?
6. Ruby allocates and releases memory for objects?
7. Python allocates and releases memory for objects?

## Grading and Submission

You will demonstrate your competency by first recording a video or videos.  Later, at the completion of this project you will also be interviewed and asked questions by course staff.

In your shell repo create a file 'shell_part1.txt' and include ~3 link(s) (assuming you recorded one video per section) to your mediaspace videos. See the video demo - [how to record, publish, and expectations]({% link _tutorials/video_demo.md %}) for further information.

Don't forget to `git add`, `commit`, and `push`, and check that the links you provide play for anyone when not logged in to mediaspace.

You should plan to complete your videos in the first week of this MP, so you have enough time to work on part 2 and part 3; but this is not a fixed deadline; they will not be graded until after this assignment closes.

