const post = {
  slug: 'ai-safety-distribution-problem',
  title: 'AI Safety Has a Distribution Problem',
  subtitle:
    'The risks of frontier AI are not shared equally. That should change how we do safety research.',
  date: '2026-04-27',
  readTime: 8,
  summary:
    'Frontier AI risk concentrates along the same fault lines as institutional capacity, data access, and geopolitical power. Safety research has not yet caught up.',
  tags: ['AI Safety', 'Governance', 'Global Majority'],
  image: `${process.env.PUBLIC_URL}/writing-images/ai-safety-distribution.jpg`,
  body: `There is a version of the AI safety conversation that takes place almost entirely within a small cluster of institutions, a handful of frontier labs, a few well-funded research centres, and the policy ecosystems that orbit them. It is a serious conversation, populated by serious people, and it is producing genuinely important work. But it has a blind spot.

The risks of misaligned or ungoverned frontier AI are not distributed equally across the world. They concentrate along fault lines of institutional capacity, data access, regulatory maturity, and geopolitical power that largely track the fault lines we already know. The populations most exposed to AI governance failure are often the least represented in the rooms where safety frameworks are designed. And the research agenda, for the most part, has not caught up to this fact.

This is not an argument against technical alignment research. It is an argument that safety research has an underexplored distributional dimension and that ignoring it makes the research itself far less complete.

## The asymmetry is structural

When a frontier AI system behaves in ways its developers did not intend, the consequences are not experienced uniformly. A well-resourced state with mature regulatory infrastructure can investigate, legislate, and respond. An institution with limited technical capacity, no access to the underlying model, and no seat at the standards-setting table cannot. The asymmetry is structural, and it compounds.

The pattern is well documented in AI in healthcare, one of the domains where the asymmetry is often the most visible and the stakes are highest. Most AI health systems are built on data sourced from a narrow set of populations, overwhelmingly from high-income countries, which means the systems perform least reliably precisely where they are most needed. A 2025 World Economic Forum analysis estimated that nearly five billion people in low- and middle-income countries risk being excluded from the benefits of medical AI entirely, not because the technology is unavailable but because the governance and data infrastructure to deploy it safely does not exist at the institutional level (WEF, 2025). The asymmetry is not just economic. It is epistemic: the communities most affected by AI governance failures have the least access to the knowledge systems (e.g. regulatory capacity, technical expertise, data ownership) needed to contest or correct them.

This pattern extends well beyond healthcare. A Brookings analysis of AI safety across Global Majority regions found that the systemic exclusion of these populations from AI development teams and training data compounds governance risk, creating a situation where the communities most exposed to AI harms have the least ability to shape, contest, or even understand the systems affecting them (Okolo & Tano, 2024).

Biosecurity makes the stakes even clearer. AI-enabled dual-use risks, where the same capabilities that accelerate beneficial research also lower barriers to harm, do not respect jurisdictional borders. But the capacity to monitor, attribute, and respond to those risks is profoundly uneven. A governance failure that might be contained in one context can cascade in another.

## Safety as a public goods problem

The emerging *Economics of Transformative AI* research agenda offers a useful frame here. Brynjolfsson, Korinek, and Agrawal's 2025 NBER research agenda explicitly frames safety risks, decision-making power concentration, and geoeconomic competition as interconnected grand challenges, a recognition that the economics profession is only beginning to catch up to (Brynjolfsson, Korinek & Agrawal, 2025). Frontier AI safety is increasingly understood as a public goods problem: systematically underprovided by market mechanisms because the benefits of safety accrue broadly while the costs are borne by individual actors operating under competitive pressure. Under US-China-EU non-cooperation dynamics, this collective action failure is particularly acute.

But the "public goods" framing has its own blind spot: it tends to treat the relevant public as the set of actors already at the table. The distributional question of *who is in that public*, who bears the externalities of governance failure, and who has the institutional capacity to participate in solutions is largely left unexamined.

This matters for research design. If safety is underprovided as a public good, the question of which actors bear the cost of that underprovision is not a secondary equity concern. It is a first-order empirical question that shapes the political economy of any proposed solution.

## What this means for research

I am not arguing that alignment researchers should become development economists. The technical problems are real and urgent and require focused expertise. But I do think the field would benefit from more researchers who take the distributional dimension seriously as an empirical question rather than a downstream policy concern.

Concretely, this might mean asking: how do capability asymmetries between jurisdictions shape the governance failure modes that alignment research is trying to prevent? How does the concentration of training data and the exclusion of certain populations from data markets affect both the safety properties of frontier models and the distribution of their risks? How do polycentric governance architectures need to be designed to be incentive-compatible not just for the actors with the most resources, but for the broader set of actors who bear the consequences?

These are not soft questions. I think they are empirically tractable, politically consequential, and largely open.

## The safety experiment

We are running an experiment in real time: deploying increasingly capable AI systems into a world with uneven institutional capacity, asymmetric data access, and governance frameworks that were not designed for this moment. As a 2025 Brookings analysis observed, risks are likely to fall disproportionately on states with fewer resources to absorb systemic shocks, yet the pressure to close the widening AI divide creates urgency to adopt AI technologies regardless (Brookings, 2025). We regard this issue as a secondary equity concern, when we should understand it as a first-order safety problem.

The question of whether this experiment goes well extends beyond technical performance. It is a question about whose safety we are optimising for, and who gets to define what *going well* means.

The AI safety field has made genuine progress on the technical dimensions of that question. It has made less progress on the distributional ones. That is the gap worth closing.

## References

- Brynjolfsson, E., Korinek, A., & Agrawal, A.K. (2025). *A Research Agenda for the Economics of Transformative AI.* NBER Working Paper 34256. [nber.org/papers/w34256](https://www.nber.org/papers/w34256)
- Okolo, C.T. & Tano, M. (2024). *Re-envisioning AI Safety Through Global Majority Perspectives.* Brookings Institution. [brookings.edu](https://www.brookings.edu/articles/a-new-writing-series-re-envisioning-ai-safety-through-global-majority-perspectives/)
- Brookings Institution (2025). *AI Safety and Security Can Enable Innovation in Global Majority Countries.* [brookings.edu](https://www.brookings.edu/articles/ai-safety-and-security-can-enable-innovation-in-global-majority-countries/)
- World Economic Forum (2025). *AI in Healthcare Risks Could Exclude 5 Billion People.* [weforum.org](https://www.weforum.org/stories/2025/10/ai-in-healthcare-risks-could-exclude-5-billion-people-here-s-what-we-can-do-about-it/)
`,
};

export default post;
