---
layout: doc
title: "Shell (part 1 of 3)"
learning_objectives:
  - Using a shell
  - Shell coa
  - Learning How a Shell Works
  - Fork, Exec, Wait
  - Signals
  - Processes
  - Zombie Processes
wikibook:
  - "Forking, Part 1: Introduction"
  - "Forking, Part 2: Fork, Exec, Wait"
  - "Process Control, Part 1: Wait macros, using signals"
---
See [Part 2](shell_part2.md) and [Part 3](shell_part3.md).

# WORK IN PROGRESS - LA is still working on this

## Part 1 Objective / Deliverable / Checkpoint

The purpose of this assignment is not to give you course points (like <tt>++</tt> or <tt>fork(2)</tt> that's a side effect!) but to encourage you to become competent in using a terminal shell to accomplish things

By the end of the week you should have explored how to use a shell to accomplish different tasks and then recorded your videos. 

## Important Things to Note

This first part is about _using_ the shell, and interacting with processs, signals.
In preparation for your couse staff interview, each student in the study group should be sufficiently prepared to answer _any_ of the questions from any section below i.e. Course staff will ask each of you directly in turn, a question chosen at random. They may deliberately choose items that you didn't present in your zoom recording. (i.e. our intent is that everyone is encouraged to learns-all-the-things!)

For the recorded Xoom video, each student will present on *two items from each section*. Each student must present different items (so as a group decide in advance who presents what).

# Shell skills (work in progress - LA working on this)

# Process Control Questions
(Pick 2 each) As a computer scientist who understands POSIX you are proficient and can use, explain, and demonstrate the following in an interview. Tip: You will need to create shell program (mywork.sh) or example .c program to create an effective demo.
* How would send SIGKILL to all of your processes named 'bash' ?
* Show how run a long running program in the background.
* In the shell how would you use `ps` to find out the pid and command line of your already running process (e.g. bash)?
* Send SIGSTOP to pause a running program and then open it in the debugger. Can you use CTRL-Z, sigkill from within a C program or from a shell to send this signal?
* What's the purpose of sighup; Show me how I can run a program even after I log out?
  

Processes | Start and control foreground and background processes | See below. |
| Process Control | Start processes, send signals | `ps a` `kill` `killall python` | 
| Shell Redirection | Redirect standard input, output, error | `./myshell < commands.txt > output.log` and `>>` to append output |
| grep | Use grep to match | I could find examples of malloc in the source dir  `grep -r malloc src` |
| compile | Use a c compile | To compile a debug build I'd use `clang -g -o hello hello.c` |
| git | Show file differences that haven't been staged | I'd use `git diff` and `git status` |

## Example advanced questions - putting it all together. "Carefully explain each part of the following"

`strace clang-18 2>&1 | grep write`
`echo "export secretkey=123" >> ~/.bashrc`
`source .env`
`kill -SIGKILL 123`
`killall python`



## Grading and Submission

You will demonstrate your competency by first recording a video or videos. Later, at the completion of this project you will also be interviewed and asked questions by course staff.


