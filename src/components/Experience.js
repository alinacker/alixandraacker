import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: "Accenture",
      position: "Senior Strategy and Consulting Analyst",
      location: "New York, NY",
      duration: "Aug 2021 - Sep 2024",
      projects: [
        {
          title: "Security Technology Deployment & Change Management (2023-2024)",
          achievements: [
            "Spearheaded $2M+ ServiceNow intelligence module deployment, architecting change management frameworks",
            "Orchestrated knowledge transfer across 20+ international diplomatic posts while maintaining security compliance",
            "Designed and delivered 50+ comprehensive training programs to 3,000+ global security personnel",
            "Architected AI-powered threat assessment analytics within classified workflows",
            "Delivered regular briefings to senior federal stakeholders on system readiness and mission alignment"
          ]
        },
        {
          title: "Enterprise Digital Transformation & User Engagement (2021-2023)",
          achievements: [
            "Led enterprise transformation serving 5,000+ international users across 190+ countries",
            "Designed and executed 100+ specialized training programs on Salesforce systems",
            "Built executive dashboards tracking $458M+ in program data for strategic resource allocation",
            "Drove iterative UX/UI testing delivering 16+ feature enhancements through agile sprints",
            "Produced strategic gender equity report incorporating responsible AI methodologies for bias detection"
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
            "Conducted market analysis for sustainable micro-entrepreneurship model",
            "Insights helped facilitate diversion of 8.8M+ lbs. of textile waste",
            "Served vulnerable communities through strategic expansion planning"
          ]
        }
      ]
    },
    {
      company: "UN High Commissioner for Refugees",
      position: "High-Impact Fundraising Intern",
      location: "Sydney, Australia",
      duration: "Summer 2019",
      projects: [
        {
          title: "Fundraising and Campaign Management",
          achievements: [
            "Planned and executed flagship fundraising event with 550 attendees, raising $191K (110% of target)",
            "Secured 5 new corporate sponsors through strategic relationship building",
            "Coordinated national campaign across 20 schools",
            "Researched blockchain-based fundraising mechanisms for improved donor retention"
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
            "Spearheaded proof-of-concept for AI platform marketing campaign",
            "Secured contractual partnership with international emergency services covering 8+ million citizens",
            "Negotiated strategic Microsoft partnership and Azure integration",
            "Conducted technical validation with Zaragosa firefighting teams for emergency response optimization"
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
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header-item">
                <div className="experience-company">
                  <h3 className="company-name">{exp.company}</h3>
                  <h4 className="position-title">{exp.position}</h4>
                </div>
                <div className="experience-meta">
                  <span className="experience-location">{exp.location}</span>
                  <span className="experience-duration">{exp.duration}</span>
                </div>
              </div>
              <div className="experience-projects">
                {exp.projects.map((project, projectIndex) => (
                  <div key={projectIndex} className="project-item">
                    <h5 className="project-title">{project.title}</h5>
                    <ul className="project-achievements">
                      {project.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="achievement-item">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

