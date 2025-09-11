import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Me</h2>
            <p className="about-description">
              Strategic program leader specializing in security enablement and AI governance across 
              enterprise environments. I combine Cambridge AI safety research foundation with 3+ years 
              managing large-scale technology deployments, including $450M+ program oversight and 
              cross-functional coordination across 190+ countries.
            </p>
            <p className="about-description">
              Expert in translating complex technical security requirements into scalable operational 
              frameworks while accelerating mission-critical AI research and development. Proven track 
              record building stakeholder alignment, designing outcome-focused metrics, and agile delivery support.
            </p>
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
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="about-image-container">
              <img 
                src="/ali-pic.jpeg" 
                alt="Alixandra Acker - Strategic Program Leader"
                className="about-profile-image"
              />
              <div className="about-image-decoration">
                <div className="decoration-circle"></div>
                <div className="decoration-circle"></div>
                <div className="decoration-circle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
