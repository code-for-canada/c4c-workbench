---
name: discovery-proof-of-concept
description: Put rough versions of the short-listed concepts in front of real users and decision makers to learn which direction is worth taking into Alpha, and what we still misunderstand about the problem.
---

# Prerequisites
- Review `discovery-report.html` and `research-plan.html`. If the report has no short list of concepts yet, suggest brainstorming first.
- If `research-plan.html` already has a concept testing activity, help the user add results, synthesize them, or plan another round.

# Testing the direction
This activity compares the short-listed concepts with real people. It answers two questions:

- **Are we solving the right problem?** Do the concepts surface needs, users, or constraints our research missed?
- **Which direction is worth pursuing?** Which concept do real users and decision makers respond to, and why?

It does NOT test whether people can use a design, or whether it can be built. Usability of the chosen direction, technical feasibility, and requirements all belong in Alpha.

A test worth running has a *possible no*. "Users liked it" isn't evidence; what they said about their own past experience when they saw it is.

## 1. Plan the sessions

Ask a few questions first: who can they realistically reach in the next couple of weeks, and which of the concepts' assumptions worry them most?

Add a **Concept testing** activity to `research-plan.html`, using its existing interview guide and debrief sections. If there's no research plan yet, suggest running `discovery-research` first.
- **Research objective** — the WWHTBT assumptions that would most change the choice if they're wrong.
- **Who to involve** — a handful of end users (including someone from an excluded group where possible), plus 1–2 decision makers or frontline staff to check viability. 4–6 sessions is plenty.
- **Interview guide** — show each concept briefly (vary the order between sessions), then ask about their real experience ("Tell me about the last time you…"), what would matter or not matter to them, and what's missing. Avoid "Would you use this?"

## 2. Build the concepts

Create one `concepts.html` that shows each short-listed concept as a rough storyboard or a 3–5 screen click-through of the end user's key moments. Add floating "Concept A", "Concept B", etc. buttons at the bottom to switch between them.

Keep it deliberately rough so people react to the idea, not the polish:
- Greyscale, plain text, no branding, no logos.
- Show only what's needed to make the concept understandable. Fake any data or functionality with plain JavaScript.
- Make each concept clearly different from the others; if two look alike, merge them or sharpen the difference.
- No badges, numbering, eyebrow text, disclaimers, or descriptive text that isn't needed for the session.

Check once with the user that each concept conveys its key idea, then stop. Iterating on layout, flow, and wording is Alpha work.

## 3. Synthesize (when the user comes back with results)

Look for patterns across the sessions' notes, then update `discovery-report.html` (as described in the `workbench-guide` skill):

1. **The problem and the people** — new needs, users, pain points, excluded groups, constraints. If the challenge statement or outcome no longer holds, revise it, and recommend revisiting `discovery-research` if the change is big.
2. **The direction** — the chosen concept (or a combination), the evidence for it, and why the others were set aside. Link to `concepts.html` and the session notes.
3. **Still unknown** — the assumptions that remain open about the chosen direction. These become the starting point for Alpha.

If the results are mixed, it's fine to recommend another quick round with a revised short list rather than forcing a choice. If none of the concepts landed, recommend going back to brainstorming with what was learned.

## 4. Close out
Summarize what we built, what it tests, and the next step.

## Teaching the method
If the user asks why this step matters, how it works, or says they're new to it, read `references/lesson.md` and explain it briefly in your own words, then return to the activity.
