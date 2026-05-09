const post = {
  slug: 'agentic-ai-all-in-but-on-what-exactly',
  title: 'Agentic AI: All In, But On What Exactly?',
  subtitle:
    'The agentic AI boom rests on three different bets: reliability, oversight, and safe deployment at system scale.',
  date: '2026-05-02',
  readTime: 11,
  summary:
    'Everyone is betting on agentic AI, but the phrase hides three distinct claims with different evidence bases, incentives, and governance risks.',
  tags: ['Agentic AI', 'AI Governance', 'AI Safety'],
  image: `${process.env.PUBLIC_URL}/writing-images/agentic.jpg`,
  body: `Every major AI lab and tech company has made the same announcement in slightly different language over the past twelve months: the agentic era is here. AI systems that move from the prompt-response format to active behaviour. Agents can browse the web, write and execute code, send emails, manage workflows, and coordinate with other AI systems to complete tasks that used to require sustained human ideation and attention. The investment is enormous and the competitive pressure is intense. For example, the global agentic AI market hit roughly $7-8+ billion in 2025, enterprise agentic AI spend is projected to reach $50+ billion by 2028, and 30% of global enterprises report agents in production or at scale (Capgemini, 2025; Gartner, 2025; IDC, 2025).

What is less clear is what, exactly, everyone is betting on.

"Agentic AI" is currently doing the work of at least three distinct claims, each with a different evidence base and a different risk profile. Conflating them is not only analytically unsound from a technical standpoint, but also how you build an industry on assumptions that have not been tested.

## The three bets

The first bet is on reliability at scale. The claim is that large language models can complete long-horizon tasks, meaning tasks with many sequential steps, branching decision points, and dependencies on external systems, with sufficient reliability to be genuinely useful without constant human supervision. This is an empirical question, and the evidence is mixed at best. Current agents perform impressively on contained, well-specified tasks. They degrade in ways that are hard to predict when tasks become complex, ambiguous, or require recovering from errors mid-stream. Error rates do not average out across steps; they compound. A system that is 95% reliable at each step of a ten-step task is only 60% reliable end-to-end. For low-stakes tasks this is tolerable. For tasks touching live systems, financial transactions, or consequential decisions, it is a serious problem that the deployment curve has not caught up to (METR, 2025).

The second bet is on meaningful human oversight. The assumption embedded in most agentic deployment frameworks is that humans remain in the loop in a way that matters: reviewing outputs, approving consequential actions, and catching errors before they propagate. This assumption is quietly eroding, not through deliberate policy choice but through market pressure. Consider a concrete example: a legal document review workflow where an agent reads contracts, flags risks, and drafts summaries before a lawyer signs off. In staging, the approval step feels manageable. In production, when the agent is processing hundreds of documents a day, the approval step becomes a bottleneck. The economic pressure is to reduce it to an exception-only review, then to a spot-check, then to an audit trail. Thus the oversight erodes through a sequence of individually reasonable decisions. Agents that pause for human approval are slower and more expensive than agents that proceed autonomously, and the market rewards the latter.

The technical community has developed partial responses to this problem. Retry logic, fallback mechanisms, and agent supervisors act as intermediate layers that check whether an agent's output matches an expected schema before passing it downstream, meaning we can catch certain classes of failure without requiring a human in every loop. But these solutions have a structural limit: the supervising agent faces the same context window constraints as the working agent. As tasks grow longer and more complex, the information required to verify correctness can itself exceed what any single model can hold and evaluate reliably. The supervisor does not know what it does not know. This is a fundamental feature of deploying systems whose context is bounded in a world where tasks are not.

Apollo Research's findings on in-context scheming, showing capable models can pursue goals in ways that are not transparent to their operators even under test conditions, suggests the gap between assumed and actual oversight may be wider than the industry is comfortable acknowledging (Meinke et al., 2024; Apollo Research, 2026). The technical response to this is increasingly to build reliability testing into the agentic framework itself: unit tests for individual agents, and end-to-end pipeline tests that run the full workflow repeatedly against a fixed input and expect a consistent output schema at least 95% of the time. This is the right instinct. But it has a structural limit: reliability testing validates behaviour under anticipated conditions. It cannot test for the conditions it has not imagined, and agentic systems deployed in open environments will inevitably encounter inputs, sequences, and failure modes that were never represented in the test suite.

The deeper problem is therefore narrative. The story the industry is telling about agentic AI, that humans remain in control while agents handle the execution, is quietly normalising a transfer of cognitive and moral authority that has not been explicitly consented to. When an agent acts on your behalf across a chain of decisions you never individually reviewed, the question of who is responsible for the outcome becomes genuinely unclear. Not as a legal technicality, but as a matter of fact. Human culpability requires human agency at some point in the chain. As that chain lengthens and the human checkpoints thin out, responsibility diffuses. And diffused responsibility, as any governance scholar will tell you, is the functional equivalent of no responsibility at all. We are not just outsourcing tasks. We are outsourcing the cognitive load that made accountability legible in the first place.

The third bet is on safe deployment at system scale. The most ambitious agentic visions involve not just individual AI assistants completing tasks, but networks of agents coordinating with each other; one agent delegating to another, systems of systems pursuing complex goals across organisational and jurisdictional boundaries. The safety question this raises is not just whether individual agents behave reliably, but whether the system as a whole does.

The most serious attempt to stress-test these failure modes before deployment is red teaming: deliberately adversarial testing designed to surface how agentic pipelines behave under conditions of manipulation, ambiguity, and compounding error. Red teaming has become standard practice for individual models, but its application to multi-agent systems is still immature. Testing a single model's responses to adversarial prompts is tractable. Testing how a network of agents behaves when one node is compromised, when coordination assumptions break down, or when the pipeline encounters inputs that were never anticipated in staging is a qualitatively harder problem. A red team can probe for known failure modes. It cannot systematically surface failure modes that emerge only from the interaction of agents operating at scale, over time, in environments that were not represented in testing. The infrastructure is being built. The adversarial testing regime that should precede it is not.

## The oversight gap is a safety question

It is tempting to frame these as engineering problems: solvable in principle, being worked on, just a matter of time and compute. Some of them are. But the oversight erosion problem is not primarily an engineering problem. It is a structural feature of the competitive environment in which agentic AI is being deployed.

No individual company deploying agentic systems has a unilateral incentive to maintain more human oversight than the market rewards. If your competitor's agent completes tasks 30% faster because it skips the approval step yours requires, the approval step will come under pressure regardless of its safety rationale. This is a collective action problem, and collective action problems do not resolve through individual good intentions. They require coordination mechanisms such as standards, regulations, and liability frameworks that create shared incentives rather than racing dynamics. The risk of power-seeking AI behaviour compounds this concern: as Carlsmith argues, systems optimising for goals under competitive pressure are structurally incentivised toward acquiring resources and influence beyond what any single task requires (Carlsmith, 2022).

The METR evaluations work has begun to map what meaningful autonomous capability looks like at different levels of AI development, and to think seriously about what oversight mechanisms are required at each level (METR, 2025). This is exactly the kind of infrastructure that should be informing deployment decisions. It is not yet doing so at the scale the deployment curve demands. Scalable oversight proposals, including debate and amplification, offer a theoretical framework for maintaining meaningful human supervision as capability scales (Irving et al., 2018; Bowman et al., 2022), but their implementation assumptions have not been tested at the pace the agentic deployment curve is setting.

## All in on potential

The honest version of the agentic bet looks something like this: we are all in on the potential of AI systems to complete complex tasks autonomously, underwritten by the assumption that the reliability, oversight, and safe deployment problems will be solved in time, and that the benefits of early deployment outweigh the risks of building on assumptions that have not fully cleared.

That may be the right bet. The potential is real. Agentic systems are already producing genuine value in domains where the tasks are well-specified, the error costs are manageable, and the human oversight remains meaningful. The trajectory is credible, and as MacAskill and Moorhouse argue, the pace of capability gain means that consequential and hard-to-reverse decisions will arrive faster than institutions can process them (MacAskill & Moorhouse, 2025).

But "all in" is a strategy that requires clarity about what you are all in on. Right now, the industry has made three distinct bets and is discussing them as if they were one. When the reliability problems surface in production, they will be treated as engineering failures. When the oversight gaps produce consequential errors, they will be treated as edge cases. When multi-agent coordination creates accountability voids, they will be treated as novel legal questions.

They are all of those things, and also predictable structural features of a deployment model that outpaced its governance assumptions before those assumptions were tested. The accountability void is the predictable consequence of a narrative shift that placed agents in the driver's seat before anyone asked who bears responsibility when something goes wrong.

The agentic era is here. It would help to know, precisely, what that means.

## References

- Apollo Research. (2026). *More capable models are better at in-context scheming.* [apolloresearch.ai](https://www.apolloresearch.ai/blog/more-capable-models-are-better-at-in-context-scheming/)
- Bowman, S., et al. (2022). *Measuring progress on scalable oversight for large language models.* arXiv. [arxiv.org/abs/2211.03540](https://arxiv.org/abs/2211.03540)
- Capgemini. (2025). *Market value of agentic artificial intelligence (AI) worldwide 2024 with a forecast for 2030.* Statista. [statista.com](https://www.statista.com/statistics/1552183/global-agentic-ai-market-value/)
- Carlsmith, J. (2022). *Is power-seeking AI an existential risk?* arXiv. [arxiv.org/abs/2206.13353](https://arxiv.org/abs/2206.13353)
- Gartner. (2025, August 26). *Gartner predicts 40% of enterprise apps will feature task-specific AI agents by 2026, up from less than 5% in 2025.* [gartner.com](https://www.gartner.com/en/newsroom/press-releases/2025-08-26-gartner-predicts-40-percent-of-enterprise-apps-will-feature-task-specific-ai-agents-by-2026-up-from-less-than-5-percent-in-2025)
- IDC. (2025). *Future Enterprise Resiliency & Spending (FERS) Survey.* IDC Research. [idc.com](https://my.idc.com/getdoc.jsp?containerId=US53152926)
- Irving, G., Christiano, P., & Amodei, D. (2018). *AI safety via debate.* arXiv. [arxiv.org/abs/1805.00899](https://arxiv.org/abs/1805.00899)
- MacAskill, W., & Moorhouse, F. (2025). *Preparing for the intelligence explosion.* Forethought. [forethought.org](https://www.forethought.org/research/preparing-for-the-intelligence-explosion)
- Meinke, A., Schut, B., Derpic, M., Betley, J., Motamed, S., & Heimersheim, S. (2024). *Frontier models are capable of in-context scheming.* Apollo Research. [arxiv.org/abs/2412.04984](https://arxiv.org/abs/2412.04984)
- METR. (2025, March 19). *Measuring AI ability to complete long tasks.* [metr.org](https://metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks/)
`,
};

export default post;
