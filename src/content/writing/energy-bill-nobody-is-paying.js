const post = {
  slug: 'energy-bill-nobody-is-paying',
  title: 'The Energy Bill Nobody Is Paying',
  subtitle:
    "AI's resource consumption is a governance problem disguised as a technical one — and we already have the principles to address it.",
  date: '2026-04-27',
  readTime: 7,
  summary:
    "Hyperscalers externalise grid impact, water use, and rate increases onto the public. The Polluter Pays Principle and energy justice frameworks already exist to address this — they're just not being applied.",
  tags: ['AI Governance', 'Energy', 'Political Economy'],
  image: `${process.env.PUBLIC_URL}/writing-images/energybill.jpg`,
  body: `A single query to an advanced AI model uses roughly ten times the electricity of a Google search. By 2030, data centers driven primarily by AI could consume more electricity than Japan. Anthropic itself has estimated that training a single frontier model will require five gigawatts of power by 2027 (roughly twice the peak electricity demand of New York City).

These numbers are arresting. But a recent Brookings analysis of AI's global energy demands makes a more uncomfortable argument: we don't actually know how accurate any of them are. Corporate disclosures on AI's energy footprint remain inconsistent, non-standardised, and often incomplete. Companies choose different methodologies — including median versus mean consumption, inference only versus full training costs, market-based versus location-based emissions accounting — in ways that make cross-model comparisons nearly meaningless. When DeepSeek claimed it trained its R1 model for $294,000, the figure covered only the final reinforcement-learning stage, excluding the far more compute-intensive pre-training phase. The number was technically true and substantively misleading.

This is not just a transparency problem, rather a governance problem, and an old one at that. We have well-established principles for managing exactly this kind of situation. We have mostly chosen not to apply them.

## The resource question is a power question

The Brookings report frames AI's energy demands primarily as an infrastructure challenge: grid capacity, interconnection queues, the race between data center construction timelines and permitting processes for new power generation. These are real constraints. In mature data center markets like Dublin and Northern Virginia, data centers already account for up to 80% of local electricity demand. Seven of thirteen major US grid regions are projected to operate below critical safety margins by 2030.

But the distribution of these impacts deserves more attention than the report gives it. The energy demand is concentrated geographically in a small number of hyperscale clusters, but the consequences radiate outward in ways that are structurally uneven. Ratepayers in Virginia are subsidising AI infrastructure through utility rate increases. Communities hosting data centers bear environmental burdens such as noise, water consumption, land use — with limited local economic return. When data centers drive up power purchase agreement prices by 35% globally, the costs are socialised while the benefits accrue narrowly.

This is where the *energy justice* framework becomes analytically useful. Developed within climate policy and just transition literature, energy justice asks a simple question: who bears the costs of energy transitions, and who captures the benefits? Applied to AI infrastructure, the answer is troubling. The communities absorbing the transition costs (grid strain, water stress, land pressure, rising electricity bills) are typically not the communities capturing the economic value of the technology being built. Rural Virginia, rural Ireland, Malaysia, and Thailand are being positioned as the energy infrastructure layer of a global AI economy whose value flows elsewhere.

Experience suggests that when the costs and benefits of AI development are unevenly distributed, the issue surfaces less as a market question and more as a governance one, with downstream effects on political support for long-term infrastructure.

## Jevons at the frontier

The Brookings report introduces what may be the most important concept in the AI energy debate: **Jevons Paradox**. The economic principle holds that as a resource becomes more efficient to use, total consumption tends to increase rather than decrease, because lower per-unit costs drive higher overall demand. Google reduced the median energy consumption per Gemini prompt by a factor of 33 between May 2024 and May 2025. Its absolute electricity consumption from data centers grew by 27% in the same period. Overall emissions rose 51% between 2019 and 2024.

Efficiency gains are real. They are also being outpaced by demand growth at every level. The IEA projects global data center electricity consumption will more than double by 2030 despite anticipated efficiency improvements. Much of the policy response to AI's energy footprint is premised on the assumption that efficiency gains will eventually close the gap. If Jevons holds — and the evidence suggests it does — that assumption is structurally incorrect.

The implication for governance is significant. Voluntary reporting frameworks, efficiency benchmarks, and corporate sustainability commitments are likely to be insufficient if the underlying demand trajectory is driven by competitive dynamics that no individual actor can unilaterally opt out of. This is a collective action problem. And collective action problems require collective solutions, which is where the second underused principle enters.

## The Polluter Pays

The **Polluter Pays Principle** is one of the foundational instruments of environmental economics and international environmental law. Enshrined in the OECD's guiding principles since 1972 and embedded in EU environmental policy, it holds that those who produce pollution or impose costs on shared resources should bear the costs of managing them instead of passing them to the public. It has been applied to carbon emissions, industrial waste, and water contamination. It has almost never been applied rigorously to AI's energy externalities.

The case for applying it here is straightforward. Hyperscalers are currently externalising significant costs onto ratepayers, grid operators, local communities, and water systems. A single hyperscale data center campus can demand as much electricity as a large industrial city, but unlike industrial facilities, AI data centers typically face no direct pricing mechanism for their grid impacts, no mandatory community benefit requirements, and no binding water consumption limits in most jurisdictions. The public absorbs the infrastructure costs; the private actor captures the compute capacity.

The Polluter Pays Principle would suggest a different architecture: energy taxes or levies on AI compute proportional to grid impact, mandatory community benefit agreements as conditions of planning permission, binding water consumption caps tied to regional scarcity levels, and pricing mechanisms that force data center operators to internalise the cost of grid upgrades they necessitate. Some of this is beginning to emerge: Ireland's grid connection policy now requires data centers to demonstrate on-site generation capability and demand flexibility during grid stress events, effectively shifting the stability burden from the public utility to the private operator. This is the right direction but is not yet the norm.

## What governance would actually require

The Brookings report catalogues existing international frameworks — the OECD AI Principles, the G7 Hiroshima Process, UNESCO's ethics recommendation, the EU AI Act's reporting requirements — and finds them wanting. Most are voluntary, non-binding, and lack standardised metrics. What adequate governance would actually require, viewed through these two principles together, looks something like this:

Mandatory, standardised disclosure of energy and water consumption across the full model lifecycle from training, inference, to infrastructure, with common methodologies that prevent selective reporting. Binding demand flexibility requirements embedded in interconnection agreements, not left to voluntary corporate commitments. Community benefit frameworks that ensure the localities hosting data center infrastructure share meaningfully in the economic value generated. And pricing mechanisms such as levies, impact fees, or resource charges that make the externalities of AI compute visible in the cost structure of the companies producing them.

The tools to address these issues are already on the table. The Polluter Pays Principle has shaped heavy industry for decades, and energy justice frameworks have guided renewable transitions in Germany, South Africa, and parts of the United States. The challenge is institutional: whether existing authorities are willing and able to apply these principles to a fast-moving industry with significant political influence.

Meanwhile, the physical infrastructure of the AI economy is being built at a pace that outstrips regulatory capacity almost everywhere. Decisions about where data centers are sited, how they are powered, and who absorbs the costs are being made in real time. Those choices determine who captures the value of AI and who bears its externalities. The frameworks to govern those outcomes already exist. Whether they are applied is a question of institutional choice.

## Source

- Tanner, B., Belle, D., Kerry, C.F., Kyosovska, N., Renda, A., Tabassi, E., & Wyckoff, A.W. (2026). *Global energy demands within the AI regulatory landscape.* Brookings Institution. [brookings.edu](https://www.brookings.edu/articles/global-energy-demands-within-the-ai-regulatory-landscape/)
`,
};

export default post;
