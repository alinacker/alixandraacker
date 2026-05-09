import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-decoration">
        <svg className="hero-line" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M-50 300 C100 100, 300 500, 450 250 S700 400, 850 200" stroke="var(--color-accent)" strokeWidth="1" opacity="0.12" fill="none"/>
          <path d="M-100 450 C50 250, 250 550, 400 350 S650 500, 900 300" stroke="var(--color-accent)" strokeWidth="1" opacity="0.08" fill="none"/>
        </svg>
      </div>

      <div className="hero-content">
        <span className="hero-greeting">Hello, I'm</span>
        <h1 className="hero-name">Alixandra Acker</h1>
        <p className="hero-tagline">
          <em>AI Safety & Governance. Research to Impact.</em>
        </p>
        <p className="hero-description">
        Bridging research, policy, and technical implementation to ensure AI development goes well for everyone, not just those building it.
        </p>
        <p className="hero-description hero-description-secondary">
          AI researcher, governance specialist, and data consultant. Building AI governance simulations with Google DeepMind at Intelligence Rising, leading data strategy and business analysis at Accenture Song, and independently researching the political economy of frontier AI safety and global AI development &mdash; and writing about it.
        </p>
        <div className="hero-scroll" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
          <span className="hero-scroll-arrow">&#8595;</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
