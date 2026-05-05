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

const AdditionalExperienceCard = ({ exp }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`experience-card ${isOpen ? 'experience-card-open' : ''}`}>
      <button
        className="experience-card-header"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="experience-card-left">
          {exp.logo && (
            <img
              src={exp.logo}
              alt={`${exp.organization} logo`}
              className="company-logo"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          )}
          <div className="experience-card-info">
            <h3 className="company-name">{exp.organization}</h3>
            <p className="position-title">{exp.title}</p>
          </div>
        </div>
        <div className="experience-card-right">
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
          <p className="additional-description">{exp.description}</p>
          {exp.url && (
            <a href={exp.url} target="_blank" rel="noopener noreferrer" className="additional-link">
              Visit website &rarr;
            </a>
          )}
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
    'Thinking About Thinking - AE Global Summit': `${process.env.PUBLIC_URL}/work-logo/thinking.png`,
    'Accenture': `${process.env.PUBLIC_URL}/work-logo/accenture.png`,
    'Colonnade Capital Partners LLC': `${process.env.PUBLIC_URL}/work-logo/portico.png`,
    Soles4Souls: `${process.env.PUBLIC_URL}/work-logo/soles4souls.jpg`,
    'UNHCR': `${process.env.PUBLIC_URL}/work-logo/unhcr.png`,
    'UVA Batten School of Public Policy and Leadership': `${process.env.PUBLIC_URL}/university-logo/University-of-Virginia-Logo.png`,
    'Unblur (AI Drone Company)': `${process.env.PUBLIC_URL}/work-logo/unblur.jpg`,
  };

  const experiences = [
    {
      company: "Accenture Song",
      position: "AI & Data Consultant",
      location: "London, UK",
      duration: "Jan 2026 - Present",
      projects: [
        {
          title: "CRM Analysis, Measurement & Responsible AI",
          achievements: [
            "Leading functional data requirements for CRM analysis and measurement with executive stakeholders",
            "Directed data strategy for a digital transformation sprint, defining AI-integrated CRM and loyalty data flows and aligning product and engineering teams around a unified operating model",
            "Spearheads Accenture-wide Responsible AI governance initiatives: chair monthly cross-functional working sessions on AI bias mitigation, algorithmic transparency, model risk, and governance best practices for senior stakeholders"
          ]
        }
      ]
    },
    {
      company: "Center for AI and Digital Policy",
      position: "AI Governance Fellow",
      location: "London, UK",
      duration: "Jan 2026 - April 2026",
      projects: [
        {
          title: "AI Governance Index & Regulatory Analysis",
          achievements: [
            "Co-authored the China chapter of CAIDP's AI Governance Index 2027, a published benchmark covering 90 countries, synthesising regulatory developments, governance signals, and policy trends",
            "Conducted hands-on regulatory analysis and submissions to 10+ governments and international institutions on rights-focused AI governance; graduated the fellowship with distinction",
            "Tracked implementation of major regulatory regimes including the EU AI Act, GPAI Code of Practice, and comparable frameworks to assess compliance trajectories of frontier AI developers"
          ]
        }
      ]
    },
    {
      company: "Intelligence Rising",
      position: "Program Management & Partnerships; Facilitator",
      location: "London, UK",
      duration: "Sep 2025 - Present",
      projects: [
        {
          title: "AI Governance Simulations & Partnerships",
          achievements: [
            "Help lead operational delivery and facilitation of AI governance wargames, including a workshop in partnership with Google DeepMind, engaging 100+ stakeholders across frontier AI companies, government agencies, and scientific institutions",
            "Collaborated with ARIA on empirical research into the future of AI and science (synthetic biology, ecosystem engineering, computational materials science) to develop \"Science 2030\" simulation exercise with DeepMind",
            "Design participant recruitment systems, quality assurance frameworks, new CRM infrastructure, and program documentation to enable scaling of AI governance simulation programmes across 110+ new client organisations",
            "Trained to lead strategic simulations on AI futures using roleplay-based decision-making to explore governance, safety, and geopolitics. Participants explore competing incentives and build capacity to navigate AI risk"
          ]
        }
      ]
    },
    {
      company: "Thinking About Thinking - AE Global Summit",
      position: "Engagement Ambassador & Academic Fellow",
      location: "London, UK",
      duration: "Oct 2025 - Present",
      projects: [
        {
          title: "AI Safety & Governance Convening",
          achievements: [
            "Attends regular seminars with leading researchers and entrepreneurs working across AI, neuroscience, cognitive science",
            "Facilitates panel discussions at biannual 'Thinking About Thinking' summit with 80+ AI safety and governance experts from DeepMind, NVIDIA, and Oxford on open problems in frontier AI deployment and risk management"
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

  const additionalExperience = [
    {
      title: "AI Trainer - English Language Specialist",
      organization: "Invisible AI",
      duration: "Aug 2025 - Present",
      description: "Selected to join Invisible AI's specialist network supporting the development of advanced language models. Role focuses on training AI systems in nuanced English usage, communication clarity, and transparent feedback.",
      url: "https://www.invisible.ai/",
      logo: `${process.env.PUBLIC_URL}/work-logo/invisibleai.png`
    },
    {
      title: "Executive Tutor",
      organization: "Ringle",
      duration: "Sep 2024 - Sep 2025",
      description: "Delivered one-to-one instruction for Korean C-suite and senior leaders, strengthening AI literacy and executive-level global business communication for high-stakes decision-making. Designed and taught tailored curricula for 60+ executive and senior-professional learners, adapting AI concepts and communication coaching to individual industry contexts and leadership needs.",
      url: "https://www.ringletutor.com/en/tutor/landing/home",
      logo: `${process.env.PUBLIC_URL}/work-logo/ringle.png`
    },
    {
      title: "Punt Admiral",
      organization: "Cambridge Clare College",
      duration: "Oct 2024 - July 2025",
      description: "Appointed Clare College Punt Admiral, coordinating boat access and safety for students and guests while fostering community through riverside traditions and seasonal events on the River Cam. Oversaw scheduling, insurance coordination, and maintenance for Clare College's punt fleet, managing access for over 500 students, professors, and alumni, ensuring safe, efficient operations throughout peak seasons.",
      logo: `${process.env.PUBLIC_URL}/university-logo/cc.png`
    },
    {
      title: "Communications Designer",
      organization: "One Journey Refugee Festival",
      duration: "Aug 2022 - Sep 2024",
      description: "Collaborated with marketing team to create festival's visual assets; achieved 160,000 impressions across platforms",
      logo: `${process.env.PUBLIC_URL}/work-logo/onejourney.png`
    },
    {
      title: "NY Metro Lead",
      organization: "Accenture Refugee Employee Group",
      duration: "Dec 2022 - Sep 2024",
      description: "Coordinated resettlement initiatives across 7 NGOs serving 500+ refugees, managing resource allocation and service delivery programs with focus on child welfare and family integration. Served as Spanish legal translator supporting vulnerable families in partnership with Tent NGO",
      logo: `${process.env.PUBLIC_URL}/work-logo/accenture.png`
    },
    {
      title: "AI Archive Volunteer",
      organization: "Every Name Counts",
      duration: "Oct 2022 - Aug 2024",
      description: "Transcribed and validated 300+ historical victim data using AI and optical character recognition to support large-scale digitization program for digital memorial preservation and archival accessibility.",
      logo: `${process.env.PUBLIC_URL}/work-logo/everynamecounts.jpeg`
    },
    {
      title: "Communications & Outreach Coordinator",
      organization: "Accenture DCAAT",
      duration: "March 2022 - September 2023",
      description: "Led communications and outreach for Accenture's DCAAT Executive Team, designing and delivering programming for 150+ Senior Analysts and Analysts while aligning messaging with executive priorities and leveraging digital platforms to drive engagement, visibility, and cross-team collaboration.",
      logo: `${process.env.PUBLIC_URL}/work-logo/accenture.png`
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

        <div className="additional-experience">
          <h3 className="subsection-title">Additional Experience & Volunteer Work</h3>
          <div className="experience-list">
            {additionalExperience.map((exp, index) => (
              <AdditionalExperienceCard key={index} exp={exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
