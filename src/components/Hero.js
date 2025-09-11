import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-greeting">Hello, I'm</span>
            <span className="hero-name">Alixandra Acker</span>
          </h1>
          <h2 className="hero-subtitle">
            Strategic Program Leader & AI Governance Expert
          </h2>
          <p className="hero-description">
            Specializing in security enablement and AI governance across enterprise environments. 
            Cambridge AI safety research foundation with 3+ years managing large-scale technology 
            deployments, including $450M+ program oversight across 190+ countries.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-container">
            <img 
              src="/ali-pic.jpeg" 
              alt="Alixandra Acker - Strategic Program Leader & AI Governance Expert"
              className="hero-image"
            />
            <div className="hero-image-overlay">
              <div className="ai-ethics-badge">
                <span className="badge-text">AI Ethics Expert</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
