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

## Backstory

Some people only know how to click on buttons, use GUIs, and Web Apps. As a computer scientist you know time is precious and you have much more power at your fingertips. There is a third way; you can use a shell like a musical instrument. And quickly too. Which is a good thing; you overslept, lost your keys, and now it's up to you to fix-all-the-things and save the world.

## Part 1 Objective / Deliverable / Checkpoint

Todo. (Create and upload videos on https://mediaspace.illinois.edu/. Create shareable links and add to repo)

## Important Things to Note

At the completion of shell there will be 30 minute in-person interview with you and your partner by course staff. Part of the interview will the 'shell debrief' where you can be asked to demonstrate your knowledge about using using and creating shells. This first part is about using the shell and common shell commands.

# Shell skills (work in progress - LA working on this)

| Skill | Description | Example interview responses |
| --- | --- |  --- |
| Processes | Start and control foreground and background processes | See below |
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

# Process Control more questions
* How would you run a 'mywork.sh' in the background?
* How can I pause my program and then open it in the debugger?
* In the shell, what's the purpose of "&" "fg" and "bg"?
* What's the purpose of sighup; How can I run my program even after I log out?

## Grading and Submission
* We prefer you create one video per question but it is okay to record multiple answers per video

? Record zoom call!
? Record screencast on mediaspace.illinois.edu (with audio and your faces).
In the project repo create file 'part1-videos-links.txt' ; you will add links to your recorded mediaspace responses. *Ensure you create a shareable link for each video and paste that!*

More details will be posted here.
