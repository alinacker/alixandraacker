import React from 'react';
import './Education.css';

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
      ]
    },
    {
      institution: "University of Virginia",
      location: "Virginia, USA",
      degree: "B.A. Global Security and Justice | Minor in Public Policy and Leadership",
      duration: "2017-2021",
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
      description: "Selected to join Invisible AI's specialist network supporting the development of advanced language models. Role focuses on training AI systems in nuanced English usage, communication clarity, and transparent feedback.",
      url: "https://www.invisible.ai/",
      logo: `${process.env.PUBLIC_URL}/work-logo/invisibleai.png`
    },
    {
      title: "English Communication Tutor",
      organization: "Ringle",
      duration: "Sep 2024 – Present",
      description: "Tutors Korean professionals (lawyers, engineers, C-suite executives) on AI landscape, geopolitics, and strategic communication, designing custom learning materials with sector-specific applications",
      url: "https://www.ringletutor.com/en/tutor/landing/home",
      logo: `${process.env.PUBLIC_URL}/work-logo/ringle.png`
    },
    {
      title: "Space Force Analyst",
      organization: "DoD & Batten School of Leadership: National Security Center",
      duration: "Spring 2020",
      description: "Executed strategic organizational analysis on institutional culture; co-authored policy recommendations for Department of Defense to optimize effectiveness of new technological security frameworks",
      url: "https://nspcbatten.org/",
      logo: `${process.env.PUBLIC_URL}/work-logo/nationalsecuritycenter.svg`
    },
    {
      title: "Data Research Analyst",
      organization: "Batten School of Leadership: Global Policy Center",
      duration: "Fall 2019",
      description: "Translated and analyzed 20+ Spanish-language reports to build comprehensive geospatial Excel model mapping Venezuelan migration patterns; delivered policy briefs with 5-person team that guided strategic response planning for Save the Children NGO",
      logo: `${process.env.PUBLIC_URL}/work-logo/nationalsecuritycenter.svg`
    },
    {
      title: "NY Metro Lead",
      organization: "Accenture Refugee Employee Group",
      duration: "Dec 2022 – Sep 2024",
      description: "Coordinated resettlement initiatives across 7 NGOs serving 500+ refugees, managing resource allocation and service delivery programs with focus on child welfare and family integration. Served as Spanish legal translator supporting vulnerable families in partnership with Tent NGO",
      logo: `${process.env.PUBLIC_URL}/work-logo/accenture.png`
    },
    {
      title: "AI Archive Volunteer",
      organization: "Every Name Counts",
      duration: "Oct 2022 – Aug 2024",
      description: "Transcribed historical victim data for digital memorial preservation using AI and optical character recognition",
      logo: `${process.env.PUBLIC_URL}/work-logo/everynamecounts.jpeg`
    },
    {
      title: "Communications Designer",
      organization: "One Journey Refugee Festival",
      duration: "Aug 2022 – Sep 2024",
      description: "Collaborated with marketing team to create festival's visual assets; achieved 160,000 impressions across platforms",
      logo: `${process.env.PUBLIC_URL}/work-logo/onejourney.png`
    }
  ];

  const certifications = [
    {
      name: "University of Oxford Saïd Business School: MBA Fundamentals",
      logo: `${process.env.PUBLIC_URL}/university-logo/said.png`
    },
    {
      name: "MIT Sloan School of Management & CSAIL: AI – Implications for Business Strategy (In Progress)",
      logo: `${process.env.PUBLIC_URL}/university-logo/mit.jpeg`
    },
    {
      name: "Google: Project Management Professional Certificate; Cloud Data Analytics, Gen AI Leader (In Progress)",
      logo: `${process.env.PUBLIC_URL}/university-logo/google.png`
    },
    {
      name: "UVA McIntire School of Commerce: Cybersecurity for Business Leaders",
      logo: `${process.env.PUBLIC_URL}/university-logo/University-of-Virginia-Logo.png`
    },
    {
      name: "Washington International Diplomatic Academy: Economic Tradecraft, Negotiation, Technological Management",
      logo: `${process.env.PUBLIC_URL}/work-logo/wida.jpeg`
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
        
        <div className="education-content">
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-header-item">
                <div className="education-main">
                  <div className="education-title-with-logo">
                    <h3 className="institution-name">{edu.institution}</h3>
                  </div>
                  <h4 className="degree-title">{edu.degree}</h4>
                  <p className="education-location">{edu.location}</p>
                </div>
                <div className="education-meta">
                  <span className="education-duration">{edu.duration}</span>
                  {edu.gpa && <span className="education-gpa">GPA: {edu.gpa}</span>}
                  {universityLogoByName[edu.institution] && (
                    <div className="institution-logo-row">
                      <img
                        src={universityLogoByName[edu.institution]}
                        alt={`${edu.institution} logo`}
                        className="institution-logo"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                    </div>
                  )}
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
          <h3 className="subsection-title">Additional Experience and Volunteer Work</h3>
          <div className="additional-grid">
            {additionalExperience.map((exp, index) => (
              <div key={index} className="additional-item">
                <h4 className="additional-title">{exp.title}</h4>
                <div className="additional-org-with-logo">
                  {exp.logo && (
                    <img 
                      src={exp.logo}
                      alt={`${exp.organization} logo`}
                      className="additional-logo"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  )}
                  {exp.url ? (
                    <a 
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="additional-organization"
                    >
                      {exp.organization}
                    </a>
                  ) : (
                    <span className="additional-organization">{exp.organization}</span>
                  )}
                </div>
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
                <div className="certification-content">
                  <img 
                    src={cert.logo}
                    alt={`${cert.name.split(':')[0]} logo`}
                    className="certification-logo"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  <span className="certification-text">{cert.name}</span>
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
