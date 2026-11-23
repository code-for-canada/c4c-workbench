---
name: discovery-brainstorming
description: Diverge on genuinely different ways the service could work, get the partner's reactions, then narrow to a short list of concepts worth testing — capturing the assumptions each one rests on.
---

# Prerequisites
A good exploratory design must be based on a clear problem definition/challenge statement, an understanding of users (goals, feelings, etc.), how things work right now, and organizational constraints.
* Review `discovery-report.html` and the research it links to (such as `environmental-scan.html`), or request current state research from the user.
* If the report already has concepts, the user may want to update them based on new research (if so, figure out and recommend how), OR start over without anchoring on them.

# Brainstorming

Explore what a great user experience would look like. The broader we can diverge and explore different directions the solution might take, the better we can test and learn before investing in a final approach. In this activity we are NOT making implementation decisions, just learning about promising and less promising approaches.

## 1. Diverge
Go deep and brainstorm yourself without the user, then return just the ideas WITH NO IN-BETWEEN REASONING or prompt references, as 1–2 plain-language sentences in bullet form, categorized into affinity groups.

### Integrative thinking
From *Creating Great Choices* by Jennifer Riel and Roger Martin. Use it when there are competing stakeholder values with valid, non-negotiable goals that pull in opposite directions, when incremental changes may fail to solve a bottleneck, or when the organization is stuck choosing between two bad outcomes.

To check whether it applies:
- Spot the core conflicting priorities in the challenge statement.
- If we streamline away all the obvious technology problems and efficiency roadblocks, will this tension still remain?

If so, do the following:
1. **Define models:** push both sides to their strongest, 100% extreme archetypes.
2. **Map trade-offs:** identify the exact benefits and downsides of both models.
3. **Explore possibilities:** invent an integrated path using each of Hidden Gem, Double Down, and Decomposition.

**Hidden Gem:** pull one vital, deeply valued nugget out of each opposing model while discarding the rest of both. What is the one thing I love most about option A, and the one thing I love most about option B? Build a brand new model using just those two pieces.

**Double Down:** take your preferred model and push it to an extreme or more intense version so that it naturally generates a vital benefit of the opposing model. Under what conditions could we take model A so far that it solves the main weakness and captures the advantage of model B?

**Decomposition:** break the overarching problem into distinct pieces or phases rather than treating it as a single choice. How can we split the problem so that model A applies fully to one part and model B applies fully to the other?

### Design thinking: when user friction is not primarily caused by conflicting organizational mandates

**Design by analogy:** every problem you are trying to solve has been solved already — just in a different context. Remember it is an analogy, not an identity. Don't go for literality, as industry benchmarking does. The source should be a similar but not identical context, or you will get something bland and unhelpful.

**Design for extremes:** based on what we know, imagine an outlier user whose experience throughout the entire process completely mismatches their needs. What could you build that meets that user's needs perfectly?

**Scaling up and down:** for each key user (users where we need to test desirability, not necessarily organizational constraints or IT users), come up with creative ways to solve their problems in three scenarios: in a day for free, in a month for $1,000, and in 5 years with $10M to build the best possible solution. Don't return every idea — synthesize the most interesting approaches into 1–2 coherent ideas.

**Process optimization algorithm:**
1. Question every requirement. Never accept that a requirement came from a department; you need to know the name of the real person who made it. Then question it, no matter how smart that person is (smart people are the most dangerous, because people are less likely to question them). Then make the requirements less dumb.
2. Delete any part or process you can. You may have to add some back later. If you do not end up adding back at least 10% of them, you didn't delete enough.
3. Simplify and optimize. This comes after step two; a common mistake is to simplify and optimize a part or process that should not exist.
4. Accelerate cycle time. Every process can be sped up, but only after the first three steps.
5. Automate. That comes last, once all the requirements have been questioned, processes deleted, and bugs shaken out.

## Insights from the environmental scan
Are there any insights in the environmental scan that can combine with other ideas or uncover new directions? Specifically, the application of AI, insights from experts, case studies, or emerging practices (no need to cite them, just synthesize the ideas).

## 2. Get reactions

Recommend the best synthesized concepts and ask for feedback: which scenarios or aspects of them feel best for end users, which are unrealistic for their organization, what's missing? We want real feedback — probe *why* a concept appeals or worries them. If crucial new information surfaces, note it briefly in the appropriate place in the discovery report.

## 3. Narrow to a short list

It's common (and good) for the strongest concepts to combine elements of several ideas while removing unnecessary distractions. Synthesize the reactions into **2–3 genuinely different concepts** worth putting in front of real users, and name the partner's current favourite. For each concept, list what would have to be true (WWHTBT) for it to work.

Don't pick a single winner here unless the partner can't reach real users before Alpha. The `discovery-proof-of-concept` skill tests the short list with real people and makes that choice on evidence. If they do need to choose now, record the choice as unvalidated.

Before finalizing, summarize our overall outcome, our "how might we", and the short list for the user. (If the core outcome or HMW has drifted, now is a good time to validate and update it.)

## 4. `brainstorm.html` artifact
Write the brainstorm to `brainstorm.html` so it can be linked from the discovery report:
- **Ideas** — everything from the diverge step, grouped into affinity groups, including any integrative thinking models.
- **Short list** — for each concept: a name, 2–3 sentences on how the service would work for the end user, who it's best and worst for, and its WWHTBT assumptions.
- **Partner's current favourite** — and why.
- **Set aside** — credible ideas that didn't make the short list, with a line on why.

When you're done, update `discovery-report.html` as described in the `workbench-guide` skill.

## Teaching the method
If the user asks why this step matters, how it works, or says they're new to it, read `references/lesson.md` and explain it briefly in your own words, then return to the activity.
