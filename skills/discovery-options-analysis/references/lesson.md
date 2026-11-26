# Making informed build vs. buy decisions

## Custom software

Custom software development traditionally has had high upfront cost and high risk for teams without modern product development expertise.

Cross-functional agile teams (consisting of designers, a product manager, and 1-3 software developers) enable organizations to iteratively build and improve custom software products that keep up with their users needs. The downside is that these teams cost in the ballpark of $.5-1M a year, and hiring this talent can be difficult for organizations with legacy technology recruitement/hiring practices.

As a result, many large organizations preferred established "enterprise" solutions that solve a wide range of common problems well enough without custom software.

## Custom off the shelf solutions (COTS)

COTS solutions advertise both flexibility, built in features, and predictable cost. Despite seeming like a safe choice within government, has in fact led to several high profile failures. To prevent vendor lock in, large COTS platforms that act as a system of record for strategically important organizational data must be interoperable with the application layer, and data must be easy to read and write via APIs.

## Low code

The benefits are fast setup and user configurability/flexibility. In practice, the breakdown happened when applied to even moderately complex problems. If choosing this path, test whether a non-developer can in fact get a properly configured minimum viable product within 1 week. 

If the low code solution is unable to provide a working demo that solves your specific requirements, or refuses to do so with a short amount of time, it is highly unlikely that the solution can be made without custom software development.

## Software as a Service: SaaS

For established software categories and niches that are very common in private sector (invoicing, document editing, task tracking, and other productivity applications). SaaS products can be very compelling - the prices should be reasonably low for the built in functionality and maintenance because the costs are amortized over thousands or millions of customers. 

SaaS solutions can be a good choice for solving problems that are not the core competency of an organization, or aren't user facing as part of a larger end user journey. However, there is a wide range of quality in these products, and in particular they should be avoided if they don't meet organizational constraints like accessibility, or are not interoperable with the rest of the organizations' tools (e.g. via API access).

We always prefer approaches that enable interoperability via APIs, use non-proprietary formats as much as possible, and are built on open standards. Using open software can include vendor managed open source solutions that problem appropriate solutions with enterprise grade (rather than a one-solution-fits all).

## How to pick in the AI era

The cost of software development is significantly lower now that the cost of writing code is at least 10-100x cheaper. That doesn't mean that custom software is the best choice for problems that the organization has no strategic interest in continuing to invest and maintain it, or where the nature of the data stored requires top end cybersecurity. 

In some scenarios, especially with lower maturity technology organizations, existing SaaS solutions may be recommended. With AI, traditional "low code" approaches are often slower to build than custom software with AI and are rarely recommended (the real underlying concerns are often IT constraints, which is a separate risk).

Overall, the best way to decide is to test whether specific user stories and requirements can be met in practice, before fully investing in one path. Modern custom software and SaaS solutions can be set up and tested with real users within a single week. We will do that in the next phase.

## Further Reading

- [**Understanding and choosing a software solution**](https://guides.18f.org/derisking-government-tech/software-solutions/) - Compares COTS, custom, heavily customized COTS, and low-code risks for government needs.
- [**How to do market research**](https://guides.18f.org/derisking-government-tech/resources/market-research/) - Shows how to assess markets, suppliers, quality, evidence, bias, and acquisition risk.
- [**Buying custom software development services**](https://guides.18f.org/derisking-government-tech/buying-development-services/) - Covers performance-based contracts, incremental budgets, prototypes, and flexible delivery team procurement.
- [**Using commercial-off-the-shelf products and services**](https://www.gov.uk/service-manual/technology/commercial-off-the-shelf-products-and-services) - Requires discovery and alpha evidence before selecting COTS for a government service.
- [**Choosing technology: an introduction**](https://www.gov.uk/service-manual/technology/choosing-technology-an-introduction) - Evaluates adaptability, total ownership cost, lock-in, security, data control, reuse, and prototyping.
- [**Choose the right tools and technology**](https://www.gov.uk/service-manual/service-standard/point-11-choose-the-right-tools-and-technology) - Requires evidence for build-buy decisions, sustainable operation, inclusion, legacy management, and future flexibility.
- [**The Technology Code of Practice**](https://www.gov.uk/guidance/the-technology-code-of-practice) - Provides criteria for government technology purchasing, reuse, integration, openness, security, privacy, and sustainability.
- [**Working with open standards**](https://www.gov.uk/service-manual/technology/working-with-open-standards) - Uses open standards to preserve competition, interoperability, flexibility, change, and sustainable cost.
- [**Moving away from legacy systems**](https://www.gov.uk/service-manual/technology/moving-away-from-legacy-systems) - Compares migration options through constraints, dependencies, realistic prototypes, APIs, contracts, and stakeholder plans.
- [**Take an ecosystem approach**](https://digital.gov.bc.ca/design/dcop/ecosystem/) - Guides build-buy choices, lock-in avoidance, interoperability, reuse, SaaS, cloud, open solutions, and internal capacity.
