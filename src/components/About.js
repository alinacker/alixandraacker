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
              My work sits at the intersection of AI safety, governance, and global systems design, where technology meets ethics, and research meets real-world impact. I'm deeply motivated by how institutions can deploy AI responsibly, not just efficiently, ensuring that innovation strengthens human oversight, security, and sustainability.
            </p>
            <p className="about-description">
              I have expertise in translating complex technical security requirements into scalable operational frameworks while accelerating mission-critical AI research and development. I also have a proven track record building stakeholder alignment, designing outcome-focused metrics, and agile delivery support.
            </p>
            <p className="about-description">
              I thrive in roles that demand both strategic structure and ethical nuance — building bridges between technical teams, policymakers, and mission-driven leaders to create AI systems that are not only performant but principled.
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
                <span className="stat-number">4</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="about-image-container">
              <img 
                src={`${process.env.PUBLIC_URL}/ali_pic_v2.jpg`} 
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
