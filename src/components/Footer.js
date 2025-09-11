import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Alixandra Acker</h3>
            <p>Strategic Program Leader & AI Governance Expert</p>
          </div>
          <div className="footer-links">
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#expertise">Expertise</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Connect</h4>
              <ul>
                <li><a href="mailto:alixandra.acker@example.com">Email</a></li>
                <li><a href="https://www.linkedin.com/in/alixandraacker/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://twitter.com/alixandra_acker" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Alixandra Acker. All rights reserved.</p>
          <p>Strategic AI governance for enterprise excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
