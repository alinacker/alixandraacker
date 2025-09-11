import React from 'react';
import './Education.css';

const Education = () => {
  const education = [
    {
      institution: "University of Cambridge",
      location: "Cambridge, UK",
      degree: "MPhil Ethics of AI, Data, and Algorithms",
      duration: "2020-2022",
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
      ]
    },
    {
      institution: "University of Virginia",
      location: "Virginia, USA",
      degree: "B.A. Global Security and Justice | Minor in Public Policy and Leadership",
      duration: "2016-2020",
      gpa: "3.94/4.0",
      honors: [
        "Phi Beta Kappa",
        "Echols Scholar",
        "Intermediate Honors (top 20% of class)",
        "Dean's List all semesters"
      ],
      thesis: "Published Capstone Thesis"
    }
  ];

  const additionalExperience = [
    {
      title: "AI Trainer - English Language Specialist",
      organization: "Invisible AI",
      duration: "Aug 2025 – Present",
      description: "Selected to join Invisible AI's specialist network supporting the development of advanced language models. Role focuses on training AI systems in nuanced English usage, communication clarity, and transparent feedback."
    },
    {
      title: "English Communication Tutor",
      organization: "Ringle",
      duration: "Sep 2024 – Present",
      description: "Tutors Korean professionals (lawyers, engineers, C-suite executives) on AI landscape, geopolitics, and strategic communication, designing custom learning materials with sector-specific applications"
    },
    {
      title: "Space Force Analyst",
      organization: "DoD & Batten School of Leadership: National Security Center",
      duration: "Spring 2020",
      description: "Executed strategic organizational analysis on institutional culture; co-authored policy recommendations for Department of Defense to optimize effectiveness of new technological security frameworks"
    }
  ];

  const certifications = [
    "University of Oxford Saïd Business School: MBA Fundamentals",
    "MIT Sloan School of Management & CSAIL: AI – Implications for Business Strategy (In Progress)",
    "Google: Project Management Professional Certificate; Cloud Data Analytics, Gen AI Leader (In Progress)"
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <div className="education-header">
          <h2 className="section-title">Education & Credentials</h2>
          <p className="section-subtitle">
            Advanced degrees in AI ethics and global security with specialized research focus
          </p>
        </div>
        
        <div className="education-content">
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-header-item">
                <div className="education-main">
                  <h3 className="institution-name">{edu.institution}</h3>
                  <h4 className="degree-title">{edu.degree}</h4>
                  <p className="education-location">{edu.location}</p>
                </div>
                <div className="education-meta">
                  <span className="education-duration">{edu.duration}</span>
                  {edu.gpa && <span className="education-gpa">GPA: {edu.gpa}</span>}
                </div>
              </div>
              
              {edu.honors && (
                <div className="education-section">
                  <h5 className="section-label">Honors & Awards</h5>
                  <ul className="honors-list">
                    {edu.honors.map((honor, honorIndex) => (
                      <li key={honorIndex} className="honor-item">{honor}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {edu.coursework && (
                <div className="education-section">
                  <h5 className="section-label">Strategic Coursework</h5>
                  <div className="coursework-grid">
                    {edu.coursework.map((course, courseIndex) => (
                      <span key={courseIndex} className="course-item">{course}</span>
                    ))}
                  </div>
                </div>
              )}
              
              {edu.research && (
                <div className="education-section">
                  <h5 className="section-label">Research Focus</h5>
                  <ul className="research-list">
                    {edu.research.map((research, researchIndex) => (
                      <li key={researchIndex} className="research-item">{research}</li>
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
            </div>
          ))}
        </div>

        <div className="additional-experience">
          <h3 className="subsection-title">Additional AI Experience</h3>
          <div className="additional-grid">
            {additionalExperience.map((exp, index) => (
              <div key={index} className="additional-item">
                <h4 className="additional-title">{exp.title}</h4>
                <p className="additional-organization">{exp.organization}</p>
                <p className="additional-duration">{exp.duration}</p>
                <p className="additional-description">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="certifications">
          <h3 className="subsection-title">Key Certifications</h3>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-item">
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
