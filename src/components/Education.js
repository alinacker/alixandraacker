import React, { useState } from 'react';
import './Education.css';

const ExpandableCard = ({ header, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`edu-card ${isOpen ? 'edu-card-open' : ''}`}>
      <button
        className="edu-card-header"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {header}
        <span className={`expand-icon ${isOpen ? 'expand-icon-open' : ''}`}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6,9 12,15 18,9"/>
          </svg>
        </span>
      </button>
      <div className={`edu-card-body ${isOpen ? 'edu-card-body-open' : ''}`}>
        <div className="edu-card-body-inner">
          {children}
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  const universityLogoByName = {
    'University of Cambridge': `${process.env.PUBLIC_URL}/university-logo/cambridge.png`,
    'University of Virginia': `${process.env.PUBLIC_URL}/university-logo/University-of-Virginia-Logo.png`,
  };

  const education = [
    {
      institution: "University of Cambridge",
      location: "Cambridge, UK",
      degree: "MPhil Ethics of AI, Data, and Algorithms",
      dissertation: "AI-CRISPR as Epistemic Arbiter for Sickle Cell Disease",
      duration: "2024-2025",
      honors: [
        "Cambridge Biosecurity Fellowship",
        "Odyssey Fellowship (awarded for innovative interdisciplinary research)",
        "Clare College Symposium 'Most Inspiring Research' Award for AI Agritech Satellite Research"
      ],
      coursework: [
        "Technical Foundations of AI & ML Systems",
        "Critical Design for Human-Centered AI",
        "Evaluating AI Systems",
        "Ethics of Predictive Models",
        "AI Safety, Law, & Governance",
        "AI & Healthcare"
      ],
      research: [
        "Applications of AI in global governance including multi-agent reinforcement learning systems for diplomacy",
        "AI safety in biotechnology applications",
        "Innovation diffusion patterns for responsible AI deployment"
      ],
      activities: [
        "AI Safety And Ethics Club",
        "Leverhulme Centre for the Future of Intelligence member",
        "Clare College MCR Executive Committee",
        "Clare College Bartender Team",
        "Scuba Diving Society",
        "Travel Society",
        "Clare Women's Rowing"
      ]
    },
    {
      institution: "University of Virginia",
      location: "Virginia, USA",
      degree: "B.A. Global Security and Justice with Distinction | Minor in Public Policy and Leadership",
      duration: "2017-2021",
      gpa: "3.94/4.0",
      honors: [
        "Phi Beta Kappa",
        "Echols Scholar",
        "Intermediate Honors (top 20% of class)",
        "Dean's List all semesters"
      ],
      thesis: "Published Capstone Thesis",
      activities: [
        "Phi Beta Kappa",
        "Echols Mentor",
        "Raven Society",
        "National Security Intelligence and Defense Club",
        "Colonnade Capital Partners",
        "Pi Beta Phi Fraternity",
        "Virginia International Crisis Simulation",
        "International Relations Organization",
        "Virginia Model United Nations",
        "Madison House Pet Pals",
        "Madison House Sin Barreras",
        "VISAS language volunteers",
        "Pancakes for Parkinson's",
        "Club Running"
      ]
    }
  ];

  const certifications = [
    {
      name: "Google: Cloud Digital Leader Certification",
      logo: `${process.env.PUBLIC_URL}/university-logo/google.png`
    },
    {
      name: "Accenture: Reinvention with Agentic AI",
      logo: `${process.env.PUBLIC_URL}/work-logo/accenture.png`
    },
    {
      name: "Intelligence Rising: Strategic AI Governance Simulation Facilitator",
      url: "https://credsverse.com/credentials/eaf250ae-b2b7-4c82-81c5-a2bb7bdd7f5d",
      logo: `${process.env.PUBLIC_URL}/work-logo/intelligencerising.webp`
    },
    {
      name: "BlueDot Impact: Biosecurity",
      logo: `${process.env.PUBLIC_URL}/university-logo/bluedotimpact.png`
    },
    {
      name: "Center for AI and Digital Policy: AI Policy Clinic - Distinction",
      logo: `${process.env.PUBLIC_URL}/university-logo/center_4_ai_and_digital_policy.png`
    },
    {
      name: "University of Oxford Saïd Business School: MBA Fundamentals",
      logo: `${process.env.PUBLIC_URL}/university-logo/said.png`
    },
    {
      name: "MIT Sloan School of Management & CSAIL: AI – Implications for Business Strategy",
      logo: `${process.env.PUBLIC_URL}/university-logo/mit.jpeg`
    },
    {
      name: "Google: Project Management Professional Certificate (In Progress)",
      logo: `${process.env.PUBLIC_URL}/university-logo/google.png`
    },
    {
      name: "UVA McIntire School of Commerce: Cybersecurity for Business Leaders",
      logo: `${process.env.PUBLIC_URL}/university-logo/University-of-Virginia-Logo.png`
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <div className="education-header">
          <h2 className="section-title">Education & Credentials</h2>
          <p className="section-subtitle">
            Advanced degrees in AI ethics and global security with specialized research focus on responsible AI deployment.
          </p>
        </div>

        <div className="education-list">
          {education.map((edu, index) => (
            <ExpandableCard
              key={index}
              header={
                <div className="edu-header-content">
                  <div className="edu-header-left">
                    {universityLogoByName[edu.institution] && (
                      <img
                        src={universityLogoByName[edu.institution]}
                        alt={`${edu.institution} logo`}
                        className="institution-logo"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                    )}
                    <div className="edu-header-info">
                      <h3 className="institution-name">{edu.institution}</h3>
                      <p className="degree-title">{edu.degree}</p>
                    </div>
                  </div>
                  <div className="edu-header-right">
                    <span className="education-location">{edu.location}</span>
                    <span className="education-duration">{edu.duration}</span>
                    {edu.gpa && <span className="education-gpa">GPA: {edu.gpa}</span>}
                  </div>
                </div>
              }
            >
              {edu.dissertation && (
                <div className="education-section">
                  <h5 className="section-label">Dissertation</h5>
                  <p className="dissertation-text">{edu.dissertation}</p>
                </div>
              )}

              {edu.honors && (
                <div className="education-section">
                  <h5 className="section-label">Honors & Awards</h5>
                  <ul className="honors-list">
                    {edu.honors.map((honor, i) => (
                      <li key={i} className="honor-item">{honor}</li>
                    ))}
                  </ul>
                </div>
              )}

              {edu.coursework && (
                <div className="education-section">
                  <h5 className="section-label">Strategic Coursework</h5>
                  <div className="coursework-grid">
                    {edu.coursework.map((course, i) => (
                      <span key={i} className="course-item">{course}</span>
                    ))}
                  </div>
                </div>
              )}

              {edu.research && (
                <div className="education-section">
                  <h5 className="section-label">Research Focus</h5>
                  <ul className="research-list">
                    {edu.research.map((r, i) => (
                      <li key={i} className="research-item">{r}</li>
                    ))}
                  </ul>
                </div>
              )}

              {edu.thesis && (
                <div className="education-section">
                  <h5 className="section-label">Thesis</h5>
                  <a
                    href="https://libraetd.lib.virginia.edu/public_view/9019s328x"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="thesis-link"
                  >
                    <span className="thesis-text">{edu.thesis}</span>
                    <svg className="external-link-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15,3 21,3 21,9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </a>
                </div>
              )}

              {edu.activities && (
                <div className="education-section">
                  <h5 className="section-label">Activities & Involvement</h5>
                  <div className="activities-grid">
                    {edu.activities.map((a, i) => (
                      <span key={i} className="activity-item">{a}</span>
                    ))}
                  </div>
                </div>
              )}
            </ExpandableCard>
          ))}
        </div>

        <div className="certifications">
          <h3 className="subsection-title">Key Certifications</h3>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-item">
                <div className="certification-content">
                  {cert.logo && (
                    <img
                      src={cert.logo}
                      alt={`${cert.name.split(':')[0]} logo`}
                      className="certification-logo"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  )}
                  {cert.url ? (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="certification-text certification-link"
                    >
                      {cert.name}
                    </a>
                  ) : (
                    <span className="certification-text">{cert.name}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
