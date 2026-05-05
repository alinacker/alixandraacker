import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Where technology meets ethics, and research meets real-world impact.</p>

        <div className="about-body">
          <div className="about-image-wrap">
            <img
              src={`${process.env.PUBLIC_URL}/ali_pic_v2.jpg`}
              alt="Alixandra Acker"
              className="about-photo"
            />
          </div>

          <div className="about-text">
            <p>
              I'm a researcher, governance specialist, and consultant based in London, working at the intersection of AI safety, political economy, and global development. I'm motivated by a simple throughline: how AI capabilities interact with existing power structures, and who bears the risk when governance fails. In practice, that means focusing on how institutions can deploy AI responsibly, not just efficiently, so innovation strengthens oversight, security, and sustainability.
            </p>
            <p>
              I came to this through an unusual path: undergraduate research on global security and justice, a Cambridge MPhil studying multi-agent reinforcement learning, agritech innovation, and AI-enabled biotech governance, and several years delivering large-scale technology programs across 190+ countries for governments, NGOs, and startups. That combination of research depth and operational experience shapes how I work day to day: translating between the technical frontier and the institutions that have to govern it, whether they be commercial, governmental, or scientific.
            </p>
            <p>
              Currently I design AI governance simulations with Google DeepMind at Intelligence Rising, lead data strategy and business analysis at Accenture Song, and conduct independent research on the political economy of frontier AI safety. I work best in roles that demand both strategic rigour and ethical nuance, where the research has to actually land somewhere.
            </p>
            <p>
              Outside of work I'm usually found in a community garden, hiking somewhere cold, or reading about things that have nothing to do with AI — which, it turns out, is often where the best ideas come from.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat">
              <span className="stat-number">$450M+</span>
              <span className="stat-label">Program Oversight</span>
            </div>
            <div className="stat">
              <span className="stat-number">190+</span>
              <span className="stat-label">Countries Served</span>
            </div>
            <div className="stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years of Professional and Research Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
