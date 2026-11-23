---
name: discovery-research
description: Understand and document how things work today — the end users, the other interest holders, and the current technology — so that we sharpen what we know about the problem area, what we should focus on first, and what we still need to learn.
---

# Prerequisites
* It's easier to scope and sharpen our understanding of the current state if we have an idea of what success looks like or what outcome we want. Review `discovery-report.html` (or `headline.html`) or get an idea of this first.
* If there are existing research artifacts about the current state, the user may want to do research synthesis instead, to incorporate the new findings into the research findings. Guide them through how to do that like a senior researcher would.

# Current state analysis

We always start with understanding where we are today before we can choose the best path forward. The more thoroughly we understand the context, the better the solution.

We want "Just Enough Research" (à la Erika Hall) to feel confident that:
- we're solving the right problem
- we have the right organizational support
- we're working on features that our users actually care about
- we understand the mental model of how users talk about their problems
- we know about existing solutions to the problem

First ask if the user has existing research about their users that they want to add in.

**Process**
First, we want to understand all the relevant people involved. Ask a few questions to get a lay of the land, with optional follow-up if there are important gaps in the answer. Tweak wording as needed to make sense, and don't ask questions that are already answered.

## Potential end user(s)
The end users are the people the service actually exists to serve.
1. Who are the potential end users for this work, and what are they trying to get done?
2. What does their current experience typically look like today (step by step)?
3. Where do we suspect the current process is painful for them?
4. Have they collected any research to support this (anecdotal, user interviews, analytics, etc.)?

## Excluded users
Are there users (especially end users) who might be more excluded from the current solution? If the answer is unknown or vague, the more contextualized to the goal of the service the better, but this often includes disability, language, or other groups commonly marginalized from services.
1. Who is most likely to be excluded from the current service?
2. Have you done any research to understand the experience of these users?

## Internal users
People inside your organization who interact with the end user, such as staff who operate the service.
1. Who, internally in your organization, is currently involved in the service?
2. [For each] What are their motivations, and what pain points might they currently have?
3. What specific research, if any, points to these pains right now?

## Technical folks
Whoever will be involved in setting up or maintaining the technology.
1. Who will set up or maintain the technology solution, and what pain points do they have with managing it right now?
2. What are all the tools or technologies in use today to deliver the service? [If there are existing databases or applications, we need as many details as possible here.]
3. What kind of technical capacity does the team have? Where is their focus right now?

## Decision makers
Who can approve or kill this work.
1. Who are all the people who might champion this work, or who might be gatekeepers?
2. [For each] What are their motivations, and what pain points might they currently have?
3. Are there any known milestones or deadlines that need to be met?
4. Are there any ballpark budget or financial constraints to be aware of?

NOTE: these users/groups may overlap or be incomplete, but we still want to ask all the questions appropriate to each type of user, even if they wear multiple hats.

# Pulling together our initial framing with a challenge statement
Given everything we now know, propose 3–4 challenge statements, each one highlighting a potential problem or theme that needs to be solved to get to the desired outcome. If the result is still a very broad statement, remind them that taking on a smaller challenge allows them to take more small bets instead of one big one.

A good challenge statement is a sentence or two that has all of the following:

1. **'How might we' question** — frames the overall problem as an actionable opportunity (not an implicit solution).
2. **Target user / audience** — who is experiencing the problem. (People sometimes jump to internal users — push back on that unless internal-user adoption is genuinely more strategically important for the intended outcome.)
3. **A real human problem** — includes whatever emotional, social, and functional gaps we have evidence of so far.
4. **Desirable outcome / impact** — it addresses the intended outcome (*without* prescribing the solution).
5. **Measurable success** — clear criteria for what "solved" looks like.
6. **Tightly scoped** — achieves the overall outcome while being narrow, based on targeted insights from the evidence so far ("Reduce processing time of disability applications to one day so that beneficiaries receive their first cheque within 2 weeks" is far more tenable than "Make the resident experience of getting benefits 2x faster").

Propose all of them and ask an open-ended question: "Which of these feels like the right problem to focus on first? What adjustments would you make?" If they insist on more than one, synthesize them or encourage picking one and making the others secondary.

**Artifacts**
Based on the information collected, create a first pass of our discovery artifacts capturing all the hard details we know so far. ALL of them should be updated appropriately as new information is gathered.

1. **User research plan** — use `references/research-plan-template.md` as a basis to create a customized `research-plan.html`. Target the largest open assumptions in the findings. Include the research question and the evidence that would change the team's understanding. If research already exists, focus only on material unanswered questions. This artifact is intended to be printed or downloaded and filled out. Do not add sections beyond the research itself.
2. **Automated environmental scan** — using the challenge statement, research each of the following (only where relevant). If you can run subtasks in parallel, give each scan its own. When every scan is done, assemble them into a single `environmental-scan.html` with each section in the format specified (and no extras!).
   - Jurisdictional scan: research peer jurisdictions (gov/NGO) or competitors (private sector). See `references/jurisdictional-scan.md`.
   - Marketplace scan: for problems where established product categories might be a valid approach. See `references/marketplace-scan.md`.
   - Academic & thought leadership: see `references/academic-thought-leadership.md`.
   - Policy constraints: for government or regulated industries. See `references/policy-constraints.md`.
   - AI strategy: what current AI capabilities meet specific pain points. See `references/ai-strategy.md`.
   - Open source & standards: open-source solutions, digital public goods (for gov & NGOs), and de-facto standards. See `references/custom-dev-resources.md`.

## Discovery report
When you're done, update `discovery-report.html` as described in the `workbench-guide` skill. Use `references/research-findings-template.md` as a guide to what the research sections should cover.

## Wrapping up
1. Once the artifacts are ready for review, summarize what was learned, and THEN ask if they want changes.
2. Keep assumptions current in the discovery report. Keep unanswered research questions and proposed tests in `research-plan.html`.

The partner reviews and validates these artifacts in the real world and comes back — this activity is re-enterable: synthesize what they heard into the artifacts, and raise it if there are other later activities that should be revisited based on the findings.

## Teaching the method
If the user asks why this step matters, how it works, or says they're new to it, read `references/lesson.md` and explain it briefly in your own words, then return to the interview.
