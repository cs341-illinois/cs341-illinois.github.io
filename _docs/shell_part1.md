---
layout: doc
title: "Shell (part 1 of 3)"
learning_objectives:
  - Using a shell
  - Useful shell commands
  - Using signals
  - Working with Processes
---
See [Part 2](shell_part2.html) and [Part 3](shell_part3.html).

## Part 1 Objective

The purpose of this assignment is not to give you course points (like <tt>++</tt> or <tt>fork(2)</tt> - that's a side effect!) but to encourage you to become competent in using a terminal shell and shell commands.

By the end of the week you should have explored how to use a shell to accomplish different tasks and then recorded your videos. 

## Important Things to Note

This first part is about _using_ the shell, and interacting with processs, signals.
In preparation for your course staff interview, each student in the study group should be sufficiently prepared to answer _any_ of the questions from any section below i.e. Course staff will ask each of you directly in turn, a question chosen at random. They may deliberately choose items that you didn't present in your zoom recording. (i.e. our intent is that everyone is encouraged to learn-all-the-things!)

We suggest you record one video for each of the 3 sections below (i.e. 3 videos in total). For your recorded Zoom video(s), each student will present on *two items from each section*. Each student must present different items (so as a group decide in advance who presents what!). No need to stop the video to change who presents; you can huddle around one laptop, or be in a real Zoom call - either works. 

### 1. Shell and Terminal Foundation (Pick 2 each per partner)
1.  What does `echo export KEY=123 >> .bashrc` do and how does it work ?
2.  What does `cat *.c | sort | uniq -c | sort -nr | head -5`  do and how does it work?
3.  A reddit thread suggested compilation is much faster using "`CC=true make`". What does this do?
4.  What does `source ~/.bashrc` (equivalently, `. ~/.bashrc`) do and why might you use it?
5.  How do you use `man`, `which`, `env`, and `echo $HOME`?
6.  Why are `CTRL-A` `CTRL-E` `CTRL-U` and `CTRL-R` useful terminal shortcuts? 
7.  What do `!`, `!cl`, and `history` do?
8.  What do `head -5` , `tail -f` , `less` ,and `wc -l` do and why might you use them?

### 2. Process Control (Pick 2 each per partner)
As a computer scientist who understands POSIX you are proficient and can use, explain, and demonstrate the following in an interview. Tip: You may need to create a simple shell program (e.g., mywork.sh) or example .c program (e.g., dotwriter.c) to create an effective demo.
1. Use `pkill` to send `SIGKILL` to all of your processes named 'bash' ?
2. Use `ps` or `pgrep` to find out the pid and command line of your already running process (e.g. bash)?
3. Send `SIGSTOP` to pause a running program and then open it in the debugger.
4. Use `sighup` and `&` together
5. Use `time` and `sleep`
6. Use `ulimit` to prevent a process from using too many resouces (e.g. too many open files, too much memory).

### 3. Finding, Grepping, git amend, and others (Pick 2 each per partner)
1. Use `find` (give two different uses)?
2. Use `grep` recursively search multiple files that match your search pattern and show 1 line before and 2 lines after each match.
3. Use `git` to _add_ and _commit_ from the shell
4. Use `git` in the shell to fix the last local commit to include an extra file changes you'd forgotten
5. What do `lscpu`, `df -h /`, `free -h` and `htop` tell me about my system?
6. Explain each part of the shell line `strace -T bash -c 'echo hello>>log.txt'` (e.g. "what does the "-T" mean?)
7. Demonstrate if one wanted to just run commands in the current directory (e.g. "a.out" instead of "./a.out") how would you change `$PATH` ?

## Grading and Submission

You will demonstrate your competency by first recording a video or videos.  Later, at the completion of this project you will also be interviewed and asked questions by course staff.

In your shell repo create a file 'shell_part1.txt' and include ~3 link(s) (assuming you recorded one video per section) to your mediaspace videos. See the video demo - [how to record, publish, and expectations]({% link _tutorials/video_demo.md %}) for further information.

Don't forget to `git add`, `commit`, and `push`, and check that the links you provide play for anyone when not logged in to mediaspace.

You should plan to complete your videos in the first week of this MP, so you have enough time to work on part 2 and part 3; but this is not fixed deadline; they will not be graded until after this assignment closes.


