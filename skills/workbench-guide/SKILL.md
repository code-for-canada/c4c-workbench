---
name: workbench-guide
description: Guide the user through a cohesive process and show which activity to do next when building a technology project. Use when the user wants to start a project do discovery, or when an activity wraps up and next step is needed.
---

The workbench skills help a user run a technology project successfully, with each one building on the previous to ensure the right context is available to generate better outputs. Each activity also has a lesson available to help them understand the why. 


## Discovery activities, in order

| # | Skill | What it settles | Outputs |
|---|---|---|---|
| 1 | `discovery-defining-success` | The outcome we're aiming for | `headline.html` |
| 2 | `discovery-research` | Users, interest holders, current technology, the challenge statement | `research-plan.html`, `environmental-scan.html` |
| 3 | `discovery-brainstorming` | Genuinely different concepts, narrowed to a short list | `brainstorm.html` |

Discovery isn't linear, something new is often learned in each activity and that information has to cascade back from the beginning (are we still aiming for the same outcome) through research and development (do our assumptions still hold). Dont hesitate to recommend refinement or or deletion of less relevant assumptions.

## Orienting and moving on

Check the html outputs and changelog exist to determine where in the process we are. Briefly, the user where they are and recommend one next step. 

For each activity, first ask if they want to get started or learn more about the outcome the activity will help them with.

When an activity wraps up, name the next activity, suggest starting it in a new conversation. If an assessment shows a gap that belongs to an earlier activity, recommend going back to it before moving forward.


## Assessing progress

When the user seems unsure about their progress or results, or before moving past discovery, assess progress with `references/discovery-rubric.md`.

## The discovery report

`discovery-report.html` is the single readable summary of discovery that summarizes the work as it develops, and ends up as a comprehensive, readable report by the time options analysis wraps up. All HTML should be elegant, with no decorative elements, concise text, constrained/simple use of color, and strong typography hierarchy. 

Every activity keeps its own outputs and also updates the report:

- Create it if it doesn't exist.
- Update the sections the activity informs: challenge statement, what success looks like, and scope; user research; technology scan; organizational constraints; the concept short list; current assumptions/open questions.
- Link to activity outputs and sources rather than repeating them.
- Rewrite any earlier section that new evidence changes. The outcome and challenge statement often sharpen as we learn.
- End with a changelog: one dated line per meaningful change, saying what changed and why. If appropriate to your environment, create a PR with the changes between each activity.
