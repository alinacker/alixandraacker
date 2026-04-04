import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Education', id: 'education' },
  { label: 'Expertise', id: 'expertise' },
  { label: 'Projects', id: 'projects' },
  { label: 'Research', route: '/research' },
  { label: 'Contact', id: 'contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToSection(sectionId), 100);
    } else {
      scrollToSection(sectionId);
    }
  };

  const renderNavLink = (item, className) => {
    if (item.route) {
      return (
        <Link
          key={item.label}
          to={item.route}
          className={className}
          onClick={() => setIsMenuOpen(false)}
        >
          {item.label}
        </Link>
      );
    }
    return (
      <a
        key={item.label}
        href={`#${item.id}`}
        onClick={(e) => handleNavClick(e, item.id)}
        className={className}
      >
        {item.label}
      </a>
    );
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
        <nav className="nav">
          <Link to="/" className="nav-brand" onClick={() => setIsMenuOpen(false)}>
            {'Alixandra Acker'.split('').map((char, i) => (
              <span
                key={i}
                className={`brand-char ${i === 0 || i === 10 ? 'brand-keep' : 'brand-collapse'}`}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </Link>

          <div className="nav-desktop">
            {location.pathname !== '/' && (
              <Link to="/" className="nav-link">Home</Link>
            )}
            {navItems.map((item) => renderNavLink(item, 'nav-link'))}
          </div>

          <div className="nav-right">
            <a
              href="https://www.linkedin.com/in/alixandraacker/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-social"
              aria-label="LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            <button
              className={`nav-toggle ${isMenuOpen ? 'nav-toggle-open' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>
        </nav>
      </header>

      <div className={`nav-overlay ${isMenuOpen ? 'nav-overlay-open' : ''}`}>
        <button
          className="nav-overlay-close"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
        <div className="nav-overlay-content">
          {location.pathname !== '/' && (
            <Link to="/" className="nav-overlay-link" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          )}
          {navItems.map((item) => renderNavLink(item, 'nav-overlay-link'))}
        </div>
      </div>
    </>
  );
};

export default Header;
