import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container-wide">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-name">Alixandra Acker</Link>
            <p className="footer-tagline">AI Safety & Governance</p>
          </div>

          <div className="footer-columns">
            <div className="footer-col">
              <h4 className="footer-col-title">Navigate</h4>
              <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="footer-link">About</a>
              <a href="#experience" onClick={(e) => handleNavClick(e, 'experience')} className="footer-link">Experience</a>
              <a href="#education" onClick={(e) => handleNavClick(e, 'education')} className="footer-link">Education</a>
              <a href="#expertise" onClick={(e) => handleNavClick(e, 'expertise')} className="footer-link">Expertise</a>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">More</h4>
              <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="footer-link">Projects</a>
              <Link to="/research" className="footer-link">Research</Link>
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="footer-link">Contact</a>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">Connect</h4>
              <a href="mailto:alinacker@live.com" className="footer-link">Email</a>
              <a href="https://www.linkedin.com/in/alixandraacker/" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copyright">&copy; {new Date().getFullYear()} Alixandra Acker. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
