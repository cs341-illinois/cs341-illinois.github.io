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

## Important Things to Note

At the completion of shell there will be 30 minute in-person interview with you and your partner by course staff. Part of the interview will the 'shell debrief' where you can be asked to demonstrate your knowledge about using using and creating shells. This first part is about using the shell and common shell commands.

# Shell skills (work in progress)

| Skill | Description | Example interview demo |
| --- | --- |
| Process Control | Start processes, send signals | `ps` `kill` | 
| Redirection | Redirect standard input, output, error | `./myshell < commands.txt >>output.log` |
| grep | Use grep to match | Find examples of malloc in the source dir ? | `grep -r malloc src` |
| git diff | Show file differences that haven't been staged | `git diff`

Example advanced questions - putting it all together. "What does the following do and why? How does the following work?"
`strace clang-18 2>&1 | grep write `




## Grading and Submission

More details will be posted here.
