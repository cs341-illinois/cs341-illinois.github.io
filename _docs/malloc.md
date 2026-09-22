---
layout: doc
title: "Malloc (Overview)"
learning_objectives:
  - Memory Allocation and Management
  - Performance Optimization
  - Iterative Design
wikibook:
  - "Memory, Part 1: Heap Memory Introduction"
  - "Memory, Part 2: Implementing a Memory Allocator"
---
See [Part 1]({% link _docs/malloc_part1.md %}), [Part 2]({% link _docs/malloc_part2.md %}) and [Part 3]({% link _docs/malloc_part3.md %}).

## Backstory

This page and part 1 has no backstory. It's just you, your partner(s), and memory allocation; Human beings being human and a System Programming concept being ... well a concept. Deal with it. Worse, you need to get out of your AI comfort zone and use openmodels for this assignment (see Lumen instructions below).

See Part 2 and part 3 for their backstory.

## Assignment Overview

This is a 3-part assignment, with each section strengthening and assessing different aspects of your understanding of memory allocators. 

In part 1, you'll explore a series of fundamental topics/concepts regarding the design & implementation of memory allocators. For each section within the associated page, you and your partner will demonstrate your understanding through video explanations. Your main deliverable will be these video demos/discussions.

In part 2, you'll implement your own malloc. You will be able to use AI to help you out in this endeavor, but you are NOT allowed to copy any text verbatim from the assignment page. This will be enforced strictly, encouraging you to frame the problem statement(s) in your own words in order to build an application. Your main deliverable will be your own output score from running your malloc implementation on our Broadway On Demand autograder. 

In part 3, you'll extend your conceptual & practical knowledge of malloc even further! Within this section, you are tasked with examining a set of memory allocator implementations, that each have unique cases under which they perform better/worse than others. Your task will be to evaluate each allocator, creating reports for each one that detail best & worst use scenarios.

**Note**: Start this assignment early! Read the specifications early! Connect with your partner early! These projects will be multi-week, so it is important to keep yourselves accountable and on track. There are many different aspects to digest and account for in this assignment, so starting early is essential for both your sanity and your learning! Would you rather do this right and learn a lot, or do this badly last minute and then have to scramble "re-learn" things for your interview clinic? The choice is yours... 

## Lumen AI with OpenCode requirements (no Agentic Codex, Claude etc for this assignmemtn)

For this assignment AI / LLM models will be limited to any model available on https://lumen.ncsa.illinois.edu - you will need to enable models, generate an API key, and connect that API to opencode -

* Disable Copilot AI or any other AI tools.
* Login and enable Qwen3.8, Deepseek V4, and GLM5.3 `https://lumen.ncsa.illinois.edu/models` 
* Install opencode as the harness. On your VM, `curl -fsSL https://opencode.ai/v2/install | bash`
* Copy the json see `https://lumen.ncsa.illinois.edu/connect`
* To have OpenCode only use Lumen's models — and ignore every other installed provider — add an enabled_providers array at the top level of your config:
```json
{
  "enabled_providers": [
    "lumen"
  ]
}
```
OpenCode will then list only Lumen's models when you select a model.
* In OpenCode type /models and (if necessary type "Lumen" to find models running on Lumen)
* You have 10 Lumen Coins on Lumen (it wil slowly refresh every hour upto a max of 10); so don't leave everything until the last minute.
* Models are approximately 0.1-1 coins per 1M tokens sent
* Also be careful about using a long chat with a large context - with a bit of thought you will realize your coin usage will become quadratic.

## CS341 Partners have changed

You will have a **new partner** for this project. The CS341 autograder is [Broadway]({{ site.data.constants.broadway_on_demand_link }}). The specific assignment page on Broadway will also tell you who your partner is and provide a link to your shared Github repo.

## Deliverable Submission

The 'home base' for this project will be you and your partner's corresponding Github Repo. 

See the video demo - [how to record, publish, and expectations]({% link _tutorials/video_demo.md %}) 

To access your Github repo for the project:
1. Go to the Malloc project on [Broadway]({{ site.data.constants.broadway_on_demand_link }})
2. Check "Project Repo" section for the link, you should already be assigned and have access rights with your partner to the repo linked here.
3. If not added to the repo or can't access it, talk to a discussion TA. 

**Note**: If you aren't able to access your Github repo, make sure you've made your own illinois-cs-coursework repo for the course as a first line of defense.

**Note**: If you need to in the future make changes to your partner project repo configuration for any reason (i.e. rearranged or absent partner), speak to a discussion TA.

### How do I pull in the Release files?

1. Navigate to your project repository on GitHub (using the link provided on Broadway) and copy the clone URL by clicking the **Code** button.

2. In your terminal, clone your shared repository locally:
   ```bash
   git clone <YOUR_REPOSITORY_URL>
   cd <YOUR_REPOSITORY_DIRECTORY>
   ```

3. Add the base course repository as a remote named `upstream`:
  ```bash
  git remote add upstream https://github.com/illinois-cs-coursework/fa26_cs341_.release.git
  ```

4. Fetch and pull the base starter files from the `project` branch of the upstream remote:
  ```bash
  git fetch upstream
  git pull upstream project
  ```

### What should be in my Github Repo?
Each assignment page will go more in depth on the specific file namings or folders you'll need to submit, but here is an overall checklist for you:
- A text file titled "malloc_part1.txt" where you'll link all part 1 videos + any other relevant info
- Source files for part2 (your malloc implementation)
- A text file titled "malloc_part3.txt" where you'll link all part 3 videos + any other relevant info/links
- A folder "Drone" with supporting evidence for your part 3 videos

## Important Things to Note - Interview Clinic / Knowledge Assessment

At the completion of the malloc project there will be a 30 minute in-person interview with you and your partner(s) by course staff.


The first part of the interview will be a 'debrief', where you will be asked a selection of questions from those listed in the part 1 & part 3 sections of this assignment. Note that you may be asked to draw out (on whiteboard or otherwise) visuals to accompany your explanations! In the second part of the interview, you will be asked in detail about your own malloc implementation. Be prepared to speak not only about larger design choices and tradeoffs, but actual snippets of code that you have written. Our goal with these interviews is to keep you accountable to what you know and don't know in the course, as well as encourage a culture of truly learning this content deeply through curiosity, exploration, and discussion rather than only rote memorization and point gathering. 

## Grading

Each portion of this project will comprise of the following percentage of the project 2 grade:

| Component                                  | Weight |
|---------------------------------------------|--------|
| Part 1 Videos + Part 3 Videos and Supporting Docs   | 25%    |
| Part 2 Autograder score                      | 25%    |
| 'Malloc' Debrief Portion of Interview Clinic  | 50%    |


Projects are worth 18% of the course total and all AI-assisted exploration projects will be equally weighted. We expect to release 4 projects. Thus this project is worth approximately 5% of your total grade.
