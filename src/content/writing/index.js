import distributionProblem from './ai-safety-distribution-problem';
import agenticAi from './agentic-ai-all-in-but-on-what-exactly';
import energyBill from './energy-bill-nobody-is-paying';
import overtonWindow from './rethinking-overton-window-age-of-ai';
import tokenEconomy from './token-economy-is-breaking';

export const posts = [
  overtonWindow,
  tokenEconomy,
  agenticAi,
  distributionProblem,
  energyBill,
].sort((a, b) => new Date(b.date) - new Date(a.date));

export const getPostBySlug = (slug) => posts.find((p) => p.slug === slug);
