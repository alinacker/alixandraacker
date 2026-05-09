const post = {
  slug: 'rethinking-overton-window-age-of-ai',
  title: 'Rethinking the Overton Window in the Age of AI',
  subtitle:
    'AI has fractured and accelerated the information infrastructure that political feasibility depends on.',
  date: '2026-05-06',
  readTime: 7,
  summary:
    'The Overton Window still exists, but AI has changed the mechanisms that move it, making legitimacy harder to read and harder to govern.',
  tags: ['AI Governance', 'Public Policy', 'Political Economy'],
  image: `${process.env.PUBLIC_URL}/writing-images/overton.jpg`,
  body: `Every public policy student can recite it. The Overton Window, named after the political theorist Joseph Overton, describes the range of ideas that a society considers politically acceptable at any given moment (Youvan, 2024). Ideas outside the window are unthinkable; those at its edges are radical; those at its center become policy. The concept endures in policy education because it disciplines thinking about political feasibility. It explains why some proposals are dead on arrival regardless of merit, while others move from fringe to inevitable. It is, at its core, a map of political possibility.

For a long time, that map held. When students, including myself, of international relations and public policy were tracking the normalization of relations with China, the slow institutionalization of cybersecurity as a national security priority, or the tortured consensus-building around development financing, the Overton Window was a reliable diagnostic. Ideas moved through it, advocates pushed at its edges, institutions responded. The process was slow, legible, and at least in principle, governable.

Then AI became largely accessible to everyone at once.

## The Infrastructure the Window Depended On

At its core, the Overton Window is a theory about information infrastructure. It assumes that there is a shared public discourse: a set of agenda-setters, media, academics, think tanks, political parties, whose legitimating work moves ideas from the fringe toward the center. It assumes that the public, broadly defined, is consuming something like the same information environment, and that shifts in that environment are traceable. It assumes, crucially, that the window moves at a speed that institutions can track.

None of those assumptions fully hold anymore. Algorithmic feeds have replaced shared media environments with personalized information ecosystems. What appears thinkable, even imaginable, is now partly a function of which platform a person uses, which accounts they follow, and which engagement signals their feed has learned to optimize for. In this model, the agenda fragments continuously. A policy idea can be radical on one platform and mainstream on another, simultaneously, in ways that make the classical window almost impossible to locate with precision.

The acceleration of the AI development cycle compounds this. A frontier model release is now a political event. Take Anthropic's release of Claude Opus 4.7 on April 16, 2026. Google Trends query shows the release generated a roughly ten-fold increase in global search attention, with Google Trends interest rising from low single-digit baseline levels to peaks above 60 within two days of announcement (Chavez, 2026). These releases shift public intuitions about what AI can do, reset assumptions about risk timelines, and generate a wave of commentary, counter-commentary, and policy response, all within days. The Overton Window, classically conceived, moves over months and years. AI capability discourse moves over weeks. The governance machinery was not built for that tempo.

## Two Shifts That Illustrate the Gap

Consider nuclear energy rehabilitation as a case of classical Overton movement. For decades following Chernobyl and Three Mile Island, nuclear power sat well outside the window of acceptable energy policy in most Western democracies. Its rehabilitation, now largely complete across the political spectrum, took thirty years of sustained advocacy, a shift in the salience of climate change, and the deliberate work of identifiable actors: scientists, think tanks, sympathetic politicians, and eventually major intergovernmental bodies. The window moved, but it moved through traceable legitimation. Governance could observe the shift and respond to it.

Contrast this with the trajectory of AGI risk as a policy concern. Five years ago, serious engagement with artificial general intelligence timelines sat firmly at the fringe; the domain of a small community of researchers whose institutional credibility was, at best, contested. By 2023, it was generating Senate testimony (US Senate Committee, 2023). By 2025, it was structuring the mandates of government bodies across multiple jurisdictions (Ngo et al., 2025; Bengio et al., 2024). The window did not move through the classical legitimation pathway. It moved through a combination of capability demonstrations, viral public discourse, and the direct political engagement of the labs themselves, as parties with obvious interests in shaping how risk was framed (MacAskill & Moorhouse, 2025). The shift was real. Whether it was legitimate, in the sense of reflecting a genuinely informed public consensus, is a harder question.

## What This Means for Governance

The Overton Window still exists, but its boundaries have moved in a world of AI reconfiguration. Ideas still move from unthinkable to policy. But the mechanism has changed in ways that matter for democratic governance. When the window moves through classical legitimation, gradual, contested, involving many actors with different interests, governance institutions can track and respond to it. When the window moves through algorithmic acceleration and capability demonstration, the shift can precede institutional capacity to assess it by years.

This creates a specific governance risk. Policymakers who rely on the Overton Window as a diagnostic means of reading where public tolerance for a given intervention actually sits are now reading a signal that may be fractured across incompatible information environments. A policy that appears mainstream in one ecosystem may be radical in another. Acting on the window without accounting for its fragmentation produces rules that lack the legitimacy required to be durable.

The prescriptive implication is not to restore some imagined unified public discourse, as that would be both impossible and undesirable. Rather, legitimacy must now be actively constructed rather than passively assumed. Two structural instruments follow from this.

The first is mandatory legitimation periods before major AI regulations come into force. Not a public comment box that aggregates written submissions from those already engaged, but a deliberately constructed cross-ecosystem deliberation process that is designed to reach communities that do not share information environments with the policymakers writing the rules. The design challenge is real. Meaningful participation requires active outreach, accessible formats, and institutional willingness to treat the outputs as binding constraints rather than advisory input. This is more expensive and slower than conventional consultation. It is also the minimum condition for producing rules that will hold across a public that no longer shares a window. Likewise, visibility, trending across platforms, generating media coverage, is not a proxy for consent. Legitimacy in a fragmented information environment has to be assembled deliberately, or it does not exist at all.

The second instrument addresses the speed mismatch directly. Sunset clauses, or provisions that automatically expire regulations after a fixed period, are the standard tool for managing policy under uncertainty (Model Diplomat, 2026). But they are calibrated to legislative time instead of technological time. A regulation written to govern a particular class of AI capability may be obsolete within eighteen months of passing, or may never have been stress-tested against the systems it was designed to constrain. A more structurally honest approach links regulatory review to capability thresholds, not calendar timelines. These thresholds would be predefined, publicly benchmarked, and activated when systems cross measurable task-horizon metrics rather than electoral milestones (METR, 2025). This reframes the governance problem correctly. The Overton Window is no longer moving on a human schedule, and the instruments designed to track and respond to it should not be either. Regulation that automatically enters review when a new capability class emerges is imperfect, since threshold-setting is itself a contested political act. Still, it calibrates oversight to the actual pace at which political possibility is being remade.

The window itself still stands. The problem is its frame, and governing as though it remains intact is how you produce rules that will not hold.

## References

- Bengio, Y., et al. (2024). *Managing extreme AI risks amid rapid progress.* Science, 384(6698). [science.org](https://www.science.org/doi/10.1126/science.adn0117)
- Chavez, J. (2026, April 16). *Claude Opus 4.7: Benchmarks, pricing, context & what's new.* LLM Stats. [llm-stats.com](https://llm-stats.com/blog/research/claude-opus-4-7-launch)
- MacAskill, W., & Moorhouse, F. (2025). *Preparing for the intelligence explosion.* Forethought. [forethought.org](https://www.forethought.org/research/preparing-for-the-intelligence-explosion)
- METR. (2025). *Measuring AI ability to complete long tasks.* [metr.org](https://metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks/)
- Model Diplomat. (2026, April 24). *Sunset clause.* Model Diplomat Glossary. [modeldiplomat.com](https://modeldiplomat.com/learn/glossary/sunset-clause)
- Ngo, R., Chan, L., & Mindermann, S. (2025). *The alignment problem from a deep learning perspective.* arXiv. [arxiv.org](https://arxiv.org/abs/2209.00626)
- US Senate Committee on the Judiciary, Subcommittee on Privacy, Technology, and the Law. (2023, May 16). *Oversight of A.I.: Rules for artificial intelligence* [Hearing]. [judiciary.senate.gov](https://www.judiciary.senate.gov/committee-activity/hearings/oversight-of-ai-rules-for-artificial-intelligence)
- Youvan, D. C. (2024). *Shifting boundaries of acceptability: Examining the Overton Window and its modern manipulators in US discourse.* ResearchGate. [researchgate.net](https://www.researchgate.net/publication/385385191)
`,
};

export default post;
