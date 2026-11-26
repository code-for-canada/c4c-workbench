---
name: discovery-options-analysis
description: Complete the overall assessment of the best options for a project, synthesizing learnings from the research and build vs. buy considerations into a comprehensive report.
---

# Pre-requisites
- Discovery report with supporting evidence of user needs, org. constraints, scan of potential buy options.
- Ideally the user has actually made a proof of concept AND see if they have gotten feedback on it and if there are any refinements to be done.

## Requirements
Create a requirements.html given all the knowlege that we have.

Requirements must be:
- Cohesive. The requirements all refer to the same thing.
- Complete. No secret implicit requirements that didn’t make it onto the list. 
- Consistent. The requirements don’t contradict each other. 
- Current. Nothing obsolete, nothing that has been d-scoped
- Unambiguous. No jargon. No acronyms. No opinions. No hidden assumptions made.
- Feasible. Within the realm of possibility on this project.
- Concise. Keeping them short and clear will increase the chances that they are read, understood, remembered, and used. Aim for no more than two pages.”


Format:
Problem statement and assumptions

Goals
## Organizational goals: what needs to be solved or improved from an org perspective?
Every project begins with a rough set of goals, or concepts of success. Every individual in an organization sees them a little bit differently. Gathering these and reconciling them is essential to a functioning project.

**Non functional requirements** - bullet list prioritized by MoSCoW (Must / Should / Could / Won't)

## Functional / User goals: what needs to be solved from a user perspective?

**User story map**

Scope is a boundary, so it’s also very useful to note that which any of the stakeholders might assume to be included but is out of scope. Not touching the data pipeline this time around? Note that! Not changing the registration process? Write it down. 

Map the user stories across the phases/steps of the user journey horizontally (e.g. aware of problem > researching options > applying > completing transction), and vertically list in priority order for each phase. 

Format:

[Stage 1 name]
1. As a [user type], when [scenario], I want to [activity] so that I can [goal].

Then once stories are in priority order, draw a line for each stage at the MVP. Our goal is to have a practically achievable thin slice across the whole journey to test.

<example>

## Stage 1: Researching problem
1. As a new driver, when I get a new car I want to be confident I haven't missed some paperwork, so that I can drive it without getting in trouble.
2. As an insurance agent, when I serve someone at the counter, I want them to already have a quote so that I can spend my time efficiently.
3. As insurance marketing manager, when our insurance providers change monthly, I want my team to be able to update them without IT support so that they are always up to date.
--- 
**Future work**
4. As a new driver, when I buy my car, I want to finish all my paperwork online.

## Stage 2: Applying
1. As a user, ....
---

### Future work
...

</example>
 
## Success metrics:
The qualitative and quantitative measurements that tell you whether the project is meeting the goals? Metrics can include things like “boosts reputation of the organization among peers,” or “increases online transactions thirty percent by the six-month point.”

## Open questions
Acknowledging anything from the research that might lead to failure or unmet expectations. Every organization has its challenges. If the team understands and acknowledges these, they will be able to work around them more effectively. 
Record each material claim that still lacks evidence, and what tangible process would give just enough research to prove/disprove it.

Ask the user for feedback on this document because its important that it captures what has been learned so far without baking in irrelevant or incorrect assumptions.

---
# Build vs. Buy
Ask if the user wants a Build vs. Buy Analysis. If so, add a Build vs. Buy section in the discovery report with an assessment of both paths and then the tradeoff considerations. 

## Buy options
Now that we've explored a range of options and defined more tangible requirements, we may want to run another scan to see if there are appropriate products to buy (see discovery-research/references/marketplace-scan.md for how).

Add a comparison table with the top Buy options WITH hyperlinked evidence for/against organizational fit, technical fit, and user needs fit; For example, if pricing is a top concern/risk, the total cost of ownership should be listed as well as the hyperlinked any available pricing info. 

This should be thorough, doing extensive searching to find as much information as a determined researcher could find online since this info is often hidden. 

## Build considerations
- Architecture Overview: Given the requirements, summarize the high level system architecture (what components or technologies would be needed e.g. DB for records, authentication for logging in, etc.) without making any implementation decisions (about vendors, specific technologies, etc)
- Potential technologies: research what technology approaches are most established and/or emerging in popularity to build systems like these

## Build vs. Buy Recommendation
Before adding a final recommendation, ask them relevant questions: not to get their opinion, but to figure out what tradeoffs might be relevant. E.g. if the research didn't surface the technical capacity of their team, ask about that.

Review the references/lesson.md to understand common tradeoffs of different approaches.

Given the build and buy analysis and the specific problem, what are the main tradeoffs that the user should consider, and what is your initial recommendation.

