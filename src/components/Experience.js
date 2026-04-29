import React, { useState } from 'react';
import './Experience.css';

const ExperienceCard = ({ exp, logo }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`experience-card ${isOpen ? 'experience-card-open' : ''}`}>
      <button
        className="experience-card-header"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="experience-card-left">
          {logo && (
            <img
              src={logo}
              alt={`${exp.company} logo`}
              className="company-logo"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          )}
          <div className="experience-card-info">
            <h3 className="company-name">{exp.company}</h3>
            <p className="position-title">{exp.position}</p>
          </div>
        </div>
        <div className="experience-card-right">
          <span className="experience-location">{exp.location}</span>
          <span className="experience-duration">{exp.duration}</span>
          <span className={`expand-icon ${isOpen ? 'expand-icon-open' : ''}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6,9 12,15 18,9"/>
            </svg>
          </span>
        </div>
      </button>

      <div className={`experience-card-body ${isOpen ? 'experience-card-body-open' : ''}`}>
        <div className="experience-card-body-inner">
          {exp.projects.map((project, i) => (
            <div key={i} className="project-item">
              <h5 className="project-title">{project.title}</h5>
              <ul className="project-achievements">
                {project.achievements.map((a, j) => (
                  <li key={j} className="achievement-item">{a}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const companyLogoByName = {
    'Accenture Song': `${process.env.PUBLIC_URL}/work-logo/accenture.png`,
    'Intelligence Rising': `${process.env.PUBLIC_URL}/work-logo/intelligencerising.webp`,
    'Center for AI and Digital Policy': `${process.env.PUBLIC_URL}/work-logo/center_4_ai_and_digital_policy.png`,
    'AE Global Summit': `${process.env.PUBLIC_URL}/work-logo/thinking.png`,
    'Accenture': `${process.env.PUBLIC_URL}/work-logo/accenture.png`,
    'Colonnade Capital Partners LLC': `${process.env.PUBLIC_URL}/work-logo/portico.png`,
    Soles4Souls: `${process.env.PUBLIC_URL}/work-logo/soles4souls.jpg`,
    'UNHCR': `${process.env.PUBLIC_URL}/work-logo/unhcr.png`,
    'UVA Batten School of Public Policy and Leadership': `${process.env.PUBLIC_URL}/university-logo/University-of-Virginia-Logo.png`,
    'Unblur (AI Drone Company)': `${process.env.PUBLIC_URL}/work-logo/unblur.jpg`,
  };

  const experiences = [
    {
      company: "Intelligence Rising",
      position: "Program Management & Partnerships",
      location: "London, UK",
      duration: "Dec 2025 - Present",
      projects: [
        {
          title: "AI Governance Workshops & Operations",
          achievements: [
            "Streamlining strategic partnership development and client outreach system for AI governance workshops targeting 100+ government organizations, frontier AI companies, and scientific institutions",
            "Manage operations for AI wargame including Google DeepMind workshop: participant recruitment across 80+ stakeholders, quality assurance systems, asset production coordination, logistics management and communications",
            "Build CRM system and communication templates for external stakeholder engagement across 4 corporate sectors",
            "Design and document project management frameworks and procedures to enable onboarding and program scaling"
          ]
        }
      ]
    },
    {
      company: "Accenture Song",
      position: "AI & Data Consultant",
      location: "London, UK",
      duration: "Jan 2026 - Present",
      projects: [
        {
          title: "Data Strategy & Transformation",
          achievements: [
            "Led data strategy for a £10M transformation sprint, delivering margin-uplift recommendations, defining and tracking new EV-loyalty and CRM data flows, and aligning product, marketing, and engineering teams around a unified data operating model",
            "Developed the CRM and customer-value levers within a £25M omnichannel value case, identifying data-monetization opportunities, lifecycle interventions, and analytics capabilities to drive measurable commercial impact"
          ]
        }
      ]
    },
    {
      company: "Center for AI and Digital Policy",
      position: "Research Group Member",
      location: "London, UK",
      duration: "Jan 2026 - Present",
      projects: [
        {
          title: "AI Governance Research & Policy Analysis",
          achievements: [
            "Contributing to hands-on policy research, regulatory analysis, and submissions to governments and international institutions, advancing evidence-based and rights-focused AI governance",
            "Drafting China country update for CAIDP's Global 2026 AI Governance Index, synthesizing policy developments, regulatory trends, and governance signals"
          ]
        }
      ]
    },
    {
      company: "AE Global Summit",
      position: "Engagement Ambassador, Open Problems for AI",
      location: "London, UK",
      duration: "Oct 2025",
      projects: [
        {
          title: "AI Safety & Governance Summit",
          achievements: [
            "Engaged with 40 leading AI safety and governance experts from DeepMind, NVIDIA, and Oxford on open problems in responsible AI deployment",
            "Facilitated discussions bridging academic and industry perspectives on AI governance"
          ]
        }
      ]
    },
    {
      company: "Accenture",
      position: "Senior Program Management & Technology Governance Analyst",
      location: "New York, NY",
      duration: "Sep 2023 - Sep 2024",
      projects: [
        {
          title: "Security Technology Deployment & Governance",
          achievements: [
            "Designed and executed ServiceNow intelligence deployment across 20+ diplomatic posts ($2M+ budget), taking ownership of a critical coordination gap: interagency teams lacked real-time decision-making visibility",
            "Led 50+ training sessions with 3,000+ security personnel, ensuring knowledge transfer and efficient onboarding",
            "Developed stakeholder alignment strategy across competing priorities, achieved 80% system adoption through evidence-based training refinement, and presented findings to DoS-level executive leadership",
            "Collaborated with engineering and development teams to design new AI-powered threat assessment system, establishing governance protocols and ensuring real-time data coordination across 15 international posts"
          ]
        }
      ]
    },
    {
      company: "Accenture",
      position: "Change Management & Digital Strategy Analyst",
      location: "Washington, D.C.",
      duration: "Aug 2021 - Sep 2023",
      projects: [
        {
          title: "Enterprise Digital Transformation",
          achievements: [
            "Led enterprise-scale digital transformation serving 5,000+ international users across 190+ countries, successfully supporting 6,000+ diplomatic initiatives and grant proposals within budget and timeline constraints",
            "Designed and executed 100+ training programs on Salesforce system, enabling 85% technology adoption in field",
            "Built executive dashboards and KPI frameworks tracking $458M+ in program data, streamlining data-driven resource allocation and decision-making for senior leadership's recompete bids",
            "Conducted iterative user feedback and impact testing initiatives with product teams and global stakeholders, documenting 16+ feature improvements and their measurable outcomes through agile evaluation cycles",
            "Produced strategic gender equity report for African region incorporating responsible AI methodologies for bias detection in program evaluation. Analysis published in FY22 Financial Report to U.S. Congress"
          ]
        }
      ]
    },
    {
      company: "Colonnade Capital Partners LLC",
      position: "Emerging Tech Partner",
      location: "Charlottesville, VA",
      duration: "May 2020 - May 2021",
      projects: [
        {
          title: "Investment Fund Management",
          achievements: [
            "Co-managed $100K student investment fund with data-driven strategies",
            "Focused on emerging technologies in Asia/Africa with emphasis on risk frameworks",
            "Presented quarterly investment theses to board-level reviewers",
            "Incorporated strategic risk assessment methodologies to influence decision-making"
          ]
        }
      ]
    },
    {
      company: "Soles4Souls",
      position: "Analytics and Outreach Analyst",
      location: "Remote",
      duration: "Summer 2020",
      projects: [
        {
          title: "International Expansion Strategy",
          achievements: [
            "Conducted market analysis and impact evaluation for sustainable micro-entrepreneurship model",
            "Insights helped facilitate diversion of 8.8M+ lbs. of textile waste while supporting economic opportunities for 2,000+ individuals"
          ]
        }
      ]
    },
    {
      company: "UNHCR",
      position: "High-Impact Fundraising & Communications Intern",
      location: "Sydney, Australia",
      duration: "Summer 2019",
      projects: [
        {
          title: "Fundraising and Campaign Management",
          achievements: [
            "Planned and executed flagship fundraising event with 550 attendees, raising $191K (110% of target)",
            "Coordinated fundraising campaign across 25 schools, managing program metrics and stakeholder engagement",
            "Researched and proposed blockchain-based NGO fundraising mechanisms to improve donor retention and ethical data governance; insights led to new partnership with Janus Henderson Investors"
          ]
        }
      ]
    },
    {
      company: "Unblur (AI Drone Company)",
      position: "Business Development Intern",
      location: "Barcelona, Spain",
      duration: "Summer 2018",
      projects: [
        {
          title: "AI Platform Development and Partnerships",
          achievements: [
            "Spearheaded proof-of-concept for AI platform marketing campaign, helping to secure contractual partnerships with Microsoft Azure and national emergency services",
            "Conducted technical validation with Zaragoza firefighting teams for emergency response optimization"
          ]
        }
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="experience-header">
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            Strategic program leadership and technology deployment across global enterprise environments
          </p>
        </div>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              exp={exp}
              logo={companyLogoByName[exp.company]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
