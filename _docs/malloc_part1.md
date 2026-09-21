---
layout: doc
title: "Malloc (part 1 of 3)"
learning_objectives:
  - Memory Allocation and Management
  - Performance Optimization
---
See [Malloc Home]({% link _docs/malloc.md %}), [Part 2]({% link _docs/malloc_part2.md %}) and [Part 3]({% link _docs/malloc_part3.md %}).

## Part 1 Objective

The purpose of this assignment part is for you to learn the fundamental concepts behind memory allocation. By the end of the week, our expectation is that you will have build up a strong understanding of malloc internals, and be prepared to make informed design choices when implementing your own allocator!

## Important Things to Note

This first part is about _understanding the concepts_ of an efficient memory allocator.
In preparation for your course staff interview, each student in the study group should be sufficiently prepared to answer _any_ of the questions from any section below i.e. Course staff will ask each of you directly in turn, a question chosen at random. They may deliberately choose items that you didn't present in your videos. (i.e. our intent is that everyone is encouraged to learn-all-the-things!)

We suggest you record one video for each of the 5 sections below (i.e. 5 videos in total). Each student must present different items (so as a group decide in advance who presents what!). No need to stop the video to change who presents; you can huddle around one laptop, or be in a real Zoom call - either works. For some sections, we require that you use a **whiteboard** to draw out a given concept as you explain it. You may use Zoom's whiteboard feature, websites like [Excalidraw](https://excalidraw.com/), or simply record you and your partner in front of a physical whiteboard!

## The Assignment

### 0. POSIX Heap Memory (Select one topic per partner)
1. What are the difference between `malloc` and `calloc`; when would you choose `malloc`? When would you choose `calloc`?
2. Measure the speed difference in a function using 4KB stack memory v temporarily reserving heap (see code examples below)? Hint: Why must you be careful about compiler optimizations in the code below?

```c
void use_stack() { char data[4096]; memset(data, 0, 4096); return;}
void use_malloc() { char* data = malloc(4096); memset(data, 0, 4096); free(data); return;}
void use_calloc() { char* data = calloc(4096,1); free(data); return;}
```

3. What is the Heap area called in the POSIX process model. What is the purpose of `sbrk()`? What do real memory allocators use instead?


### 1. Memory Allocation Basics (Select two topics per partner, explain with whiteboard)
1. How do we keep track of, and reuse memory blocks? 
2. What are Placement strategies? Explain the following strategies: First, Worst, Best, Next.
3. What are sentinel values?
4. Explain the anatomy of a single memory block. What do we store in each region?
   
### 2. Memory Allocation Performance (Select all topics, both partners discuss together, explain with whiteboard)
1. With your partner, compare and contrast Implict & Explict free lists. What are advantages/disadvantages of each scheme? 
2. With you partner, explain block splitting & coalescing. What are the benefits of implementing each behavior? What might happen if we didn't implement these?

### 3. Alternative Memory Allocators Schemes (Select one topic per partner)
1. How does a Buddy Allocator work? What are the advantages / disadvantages?
2. How does a memory pool work?  What are the advantages / disadvantages?
3. How does a SLAB allocator work, and where would you typically find it?  What are the advantages / disadvantages?

### 4. Memory allocation techniques in other languages (Select two topics per partner)
Explain and contrast how:

1. Java allocates and frees-up memory for objects?
2. Rust allocates and releases memory for objects?
3. Ruby allocates and releases memory for objects?
4. Python allocates and releases memory for objects?

## Grading and Submission

You will demonstrate your competency, first, through the recording of your videos. Later, at the completion of this project you will also be interviewed and asked questions by course staff.

In your malloc repo, create a file 'malloc_part1.txt' and include ~5 link(s) (assuming you recorded one video per section) to your mediaspace videos. See the video demo - [how to record, publish, and expectations]({% link _tutorials/video_demo.md %}) for further information.

Don't forget to `git add`, `commit`, and `push`, and check that the links you provide play for anyone when not logged in to mediaspace.

You should plan to complete your videos in the first week of this MP, so you have enough time to work on part 2 and part 3; but this is not a fixed deadline; they will not be graded until after this assignment closes.
