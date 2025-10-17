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
            Strategic Program Leader in AI Safety and Governance
          </h2>
          <h3 className="hero-subheadline">
            Bridging research, policy, and implementation to enable responsible AI at scale.
          </h3>
          <p className="hero-description">
            I specialize in AI and technology systems spanning healthcare, cybersecurity, diplomacy, and sustainability — driving secure, ethical, and resilient digital transformation. With a Cambridge foundation in AI safety research and over three years leading enterprise programs, I've managed initiatives exceeding $450M in scope, advancing trust, compliance, and accountability across 190+ countries.
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
              src={`${process.env.PUBLIC_URL}/ali_pic_hero.jpg`} 
              alt="Alixandra Acker - Strategic Program Leader & AI Safety and Governance"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
