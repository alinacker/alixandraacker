import distributionProblem from './ai-safety-distribution-problem';
import energyBill from './energy-bill-nobody-is-paying';

export const posts = [distributionProblem, energyBill].sort(
  (a, b) => new Date(b.date) - new Date(a.date)
);

export const getPostBySlug = (slug) => posts.find((p) => p.slug === slug);
