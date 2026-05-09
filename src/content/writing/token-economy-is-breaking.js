const post = {
  slug: 'token-economy-is-breaking',
  title: 'The Token Economy Is Breaking',
  subtitle:
    "AI's charging model was built for a world that no longer exists.",
  date: '2026-05-02',
  readTime: 10,
  summary:
    'Agentic AI is breaking the assumptions behind per-token pricing: predictable usage, linear cost curves, and bounded task scope.',
  tags: ['Agentic AI', 'AI Economics', 'AI Governance'],
  image: `${process.env.PUBLIC_URL}/writing-images/token.jpg`,
  body: `There is a number that every major AI lab knows and very few are discussing publicly. It is the ratio between what an agentic task actually costs to run and what the current pricing model was designed to absorb. That ratio is not converging toward one. It is moving in the wrong direction, and the business model reckoning it implies is arriving faster than the industry's pricing architecture is prepared for.

To understand why, it is necessary to understand what the token economy was built on.

## The assumption that broke

When OpenAI launched the GPT-3 API in 2020, the pricing model it chose was elegant in its simplicity: you send tokens in, you receive tokens out, you pay per thousand. The model made sense for the use case it was designed around. Developers built applications where users sent queries and received responses, consumption was predictable, and the relationship between input and output was roughly linear. It was, essentially, a metered utility model applied to text generation. Legible, scalable, easy to build a business on (Altin, 2025).

The architecture has since become more granular. Most frontier providers now price input and output tokens separately, and often at different rates. A prompt, or the instruction sent to the model, costs x dollars per token to ingest and process. The response costs a different rate per output token. The final bill for a single request therefore looks something like: (input tokens x input price) + (output tokens x output price) = total cost. The logic is intuitive: shorter prompts cost less to ingest, but a compressed or underspecified prompt may produce a less precise or useful response, shifting cost to the output side through longer completions or repeated attempts. Longer, richer prompts cost more upfront but may produce more reliable outputs in fewer turns. The pricing structure creates a real engineering tradeoff, prompt compression versus output quality, that developers now have to actively manage.

This model still made sense when tasks were bounded and predictable.

Agentic AI is not that use case in the slightest.

A single agentic workflow completing a research task, coding project, or multi-step business process does not operate at the scale of hundreds of tokens (Hashmi, 2025). Token consumption routinely reaches hundreds of thousands, and occasionally millions, driven by iterative reasoning, tool calls, result processing, plan revision, repeated execution loops, and coordination across agents or external systems. So too, the token consumption curve is not linear with task complexity; it is exponential. A task that is twice as complex does not cost twice as much to run. It costs an order of magnitude more, because the number of reasoning steps, retrieval operations, and context windows required grows nonlinearly with the ambiguity and length of the horizon being managed.

Labs have known this was coming, but the pricing responses so far suggest they do not yet have a coherent answer to it.

## The patches

The current landscape of AI pricing is a collection of patches applied to a model that was not designed for this moment. Per-token pricing, the original architecture, remains dominant but increasingly perverse in an agentic context. It creates incentives to compress prompts in ways that degrade performance, rewards prompt engineering games over genuine capability, and produces bills that enterprise customers cannot predict or budget for when agentic workloads run longer than expected. The opacity is structural: you do not know what a task will cost until it is finished, which is precisely the wrong property for finance teams trying to approve AI deployment at scale.

Subscription tiers, which have been the consumer-facing response, solve the predictability problem by introducing an artificial ceiling. They work well for casual users; however, they collapse immediately under agentic workloads. A power user running multi-step research or coding agents will exhaust a monthly subscription allocation in days, sometimes hours. The current solution, rate limits, usage caps, and throttling, is only a friction mechanism. It manages the symptom rather than addressing the underlying mismatch between price and value.

Enterprise contracts move to usage-based pricing with negotiated rate cards, which is more rational but solves a different problem. Usage-based pricing works when workloads are predictable and bounded. Agentic deployment is neither. Open-ended agent tasks touching live systems, external APIs, and multi-model pipelines produce consumption patterns that no procurement team has the tools to forecast. The enterprise contract model assumes you know, roughly, how much you will use. Agentic AI makes that assumption structurally untenable.

## What a rational model might look like

The direction the industry is slowly moving toward, and has not yet arrived at, is outcome-based pricing: charging for the completed task rather than the tokens consumed to complete it. The appeal is obvious. It aligns the incentive of the provider with the value delivered to the customer, removes the perverse pressure to minimise token use at the expense of quality, and makes costs predictable in the dimension that actually matters to the buyer: what did I get, and what did it cost me.

The problem is verification. Outcome-based pricing requires a shared definition of what a successful outcome looks like, a mechanism for measuring whether it was achieved, and a dispute resolution process for the inevitable cases where the agent completed the task as specified but not as intended. These are hard problems, but not insurmountable by any means. Software development contracts have navigated versions of them for decades through milestone-based billing, acceptance criteria, and escrow arrangements, but they require a maturity of tooling and contract infrastructure that the AI industry does not yet have.

Value-based pricing, or charging proportional to the economic value generated by the task, is theoretically the most rational model and practically the most difficult to implement. It requires knowing what the task was worth to the buyer, which requires either self-reporting, which is gameable, outcome measurement, which is often impossible, or sector-specific proxies, which are narrow and contestable. It will likely emerge in specific verticals like legal research, financial analysis, and drug discovery before it generalises.

Time-based pricing, the contractor model, is the simplest alternative and the most misaligned. Charging by the hour creates direct incentives for verbosity, inefficiency, and task elongation. It is also the model most familiar to buyers trained on professional services procurement, which means it will be adopted in exactly the contexts where it is least appropriate.

## The cost of expanding ambition

The standard assumption embedded in AI pricing is straightforward: as models get cheaper per token, the cost of any given task falls proportionally, efficiency gains at the model level pass through to the task level.

A 2025 Forbes analysis observed the paradox already playing out in enterprise deployments: organisations running agentic workflows consumed more compute in a single month than in their entire prior year, while invoices barely moved (Hashmi, 2025). The framing was apt: the "token paradox," where AI becomes simultaneously cheaper per unit and more expensive in aggregate. But the mechanism behind it is more structural than a billing visibility problem, which is where the economics become useful.

William Baumol identified that in sectors where productivity is hard to improve, such as live performance, healthcare, and education, costs rise relative to sectors that can automate (Baumol & Bowen, 1966). Some activities resist compression: a string quartet still needs four musicians. The token economy appears to be running an inverse version of this problem. Per-token costs are falling rapidly. For example, Google reduced the median energy cost per Gemini prompt by a factor of 33 between May 2024 and May 2025, though that figure excludes training costs and device-side energy, making it a deliberately narrow baseline (Elsworth et al., 2025; Google Cloud Blog, 2025). Even accepting it on those terms, Google's absolute data center electricity consumption grew 27% in the same period, and global data center electricity consumption is projected to more than double by 2030 despite anticipated efficiency improvements (IEA, 2024; De Chant, 2025). Efficiency at the component level is being outpaced by expansion at the system level.

In other words, capability improvements reduce the cost per token, but they also expand what agentic systems are asked to do, increasing token consumption per task so much that total spend rises. So while each token is getting cheaper, we end up spending more because the AI is doing more tasks, at greater depth, for longer. The dynamic is familiar from cloud computing: storage costs fell dramatically year on year, yet total cloud spend kept climbing because organisations stored more data, ran more services, and retained more history than before. The same logic applies here, with task ambition playing the role that data volume played in cloud.

This dynamic is a structural feature of deploying systems that invite expanded use precisely because they become more capable. The more reliable the agent, the more ambitious the workflow it gets assigned. Thus efficiency gains and consumption growth are coupled in the agentic context. And no current pricing model has a solution to a cost curve that rises with success.

## The governance dimension

What is missing from most discussions of AI pricing is the recognition that how AI is charged for is not merely a business model question. It is a governance question with distributional consequences.

Per-token pricing at agentic scale creates a cost structure that is accessible to large enterprises and largely inaccessible to individuals, small organisations, and institutions in lower-income contexts. If the agentic AI economy prices out the majority of potential users before it has even fully launched, the concentration-of-benefit problem that already characterises the AI transition becomes structurally worse. The organisations with the resources to absorb unpredictable, high-volume token bills will capture the productivity gains, while those without will not.

I am not making the argument against pricing AI for its actual costs, but for reorienting pricing design as a lever that will shape who participates in the agentic economy and on what terms, and that it is currently being treated as a product decision rather than a policy one. Anthropic's recent commitment to securing up to 5 gigawatts of compute capacity for training and deploying its frontier models makes the stakes concrete (Anthropic, 2026a; Anthropic, 2026b). The choice of how to price AI capability is also a choice about who gets to use it.

## The reckoning

The token economy made sense for the world it was designed for, but that world no longer exists. The agentic transition has broken the assumptions underneath the pricing model: predictable consumption, linear cost curves, bounded task scope. But without yet producing a coherent replacement.

Labs are aware of this, and the public conversation has not caught up. Somewhere between the per-token invoices arriving in enterprise finance departments and the rate-limit notifications landing in power users' inboxes, a reckoning is accumulating. What matters is not the fact of a pricing model change, but how it occurs: whether it is deliberately designed with an eye to participation and access, or assembled through reactive adjustments that consolidate advantage among actors able to absorb transition costs.

The token economy is breaking, and what replaces it is still an open question, one that extends beyond commercial considerations.

*Note: More to come on this as I think it through, particularly on how input/output pricing asymmetries interact with agentic loop design, and what a governance-compatible pricing architecture might actually look like in practice.*

## References

- Altin, C. (2025). *What Is a Token? Understanding the True Cost Behind Modern LLMs.* [medium.com](https://medium.com/womenintechnology/what-is-a-token-understanding-the-true-cost-behind-modern-llms-c0fef7e1b903)
- Anthropic. (2026a, March). *American AI infrastructure: How the United States can build the future.* Via Data Center Dynamics. [datacenterdynamics.com](https://www.datacenterdynamics.com/en/news/anthropic-us-ai-needs-50gw-of-power-by-2028-frontier-models-will-require-5gw-data-centers/)
- Anthropic. (2026b, April). *Anthropic and Amazon expand collaboration for up to 5 gigawatts of capacity.* [anthropic.com](https://www.anthropic.com/news/anthropic-amazon-compute)
- Baumol, W. J., & Bowen, W. G. (1966). *Performing arts: The economic dilemma.* Twentieth Century Fund. [archive.org](https://archive.org/details/performingartsec0000baum/page/n6/mode/1up)
- De Chant, T. (2025, July 1). *Google's data center energy use doubled in 4 years.* TechCrunch. [techcrunch.com](https://techcrunch.com/2025/07/01/googles-data-center-energy-use-doubled-in-four-years/)
- Elsworth, C., et al. (2025). *Measuring the environmental impact of delivering AI at Google Scale.* arXiv. [arxiv.org](https://arxiv.org/abs/2508.15734)
- Gonzalez-del-Valle, A. (2026). *What Is Mixture of Experts (MoE)? How Modern LLMs Get Efficient LLMs.* [aiweekly.co](https://aiweekly.co/learning-ai/generative-ai/what-mixture-experts-moe-how-modern-llms-get-efficient)
- Google Cloud Blog. (2025, August 21). *Measuring the environmental impact of AI inference.* [cloud.google.com](https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference)
- Hashmi, S. (2025, November 3). *Agentic AI's token paradox: When cheaper means more expensive.* Forbes. [forbes.com](https://www.forbes.com/sites/saharhashmi/2025/11/03/agentic-ais-token-paradox-when-cheaper-means-more-expensive/)
- International Energy Agency. (2024). *Electricity 2024: Analysis and forecast to 2026.* [iea.org](https://www.iea.org/reports/electricity-2024)
- Tanner, B., Belle, D., Kerry, C. F., Kyosovska, N., Renda, A., Tabassi, E., & Wyckoff, A. W. (2026). *Global energy demands within the AI regulatory landscape.* Brookings Institution. [brookings.edu](https://www.brookings.edu/articles/global-energy-demands-within-the-ai-regulatory-landscape/)
`,
};

export default post;
