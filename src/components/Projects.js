import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI Governance Framework",
      description: "Developed comprehensive AI governance framework for enterprise deployment across 190+ countries, ensuring ethical AI implementation and regulatory compliance.",
      technologies: ["AI Ethics", "Governance", "Policy Design", "Risk Assessment"],
      status: "Completed",
      impact: "450M+ Program Oversight"
    },
    {
      id: 2,
      title: "Multi-Agent Reinforcement Learning for Diplomacy",
      description: "Research project exploring applications of AI in global governance through multi-agent reinforcement learning systems for diplomatic negotiations.",
      technologies: ["Machine Learning", "Reinforcement Learning", "Diplomacy", "Global Governance"],
      status: "Research",
      impact: "Cambridge Fellowship"
    },
    {
      id: 3,
      title: "AI Safety in Biotechnology",
      description: "Conducted research on AI safety applications in biotechnology, focusing on responsible AI deployment in critical healthcare and biotech sectors.",
      technologies: ["AI Safety", "Biotechnology", "Healthcare AI", "Risk Management"],
      status: "Research",
      impact: "Clare College Award"
    },
    {
      id: 4,
      title: "Strategic Security Enablement Program",
      description: "Led large-scale technology deployment program focusing on security enablement across enterprise environments with cross-functional coordination.",
      technologies: ["Security", "Enterprise Architecture", "Program Management", "Stakeholder Alignment"],
      status: "Ongoing",
      impact: "3+ Years Leadership"
    },
    {
      id: 5,
      title: "Responsible AI Innovation Diffusion",
      description: "Research on innovation diffusion patterns for responsible AI deployment, analyzing how ethical AI practices spread across organizations and industries.",
      technologies: ["Innovation Theory", "AI Ethics", "Organizational Change", "Data Analysis"],
      status: "Research",
      impact: "Academic Publication"
    },
    {
      id: 6,
      title: "AI Training & Communication Excellence",
      description: "Specialized AI training programs for language models and professional communication, focusing on transparent feedback and nuanced English usage.",
      technologies: ["AI Training", "Natural Language Processing", "Communication", "Education"],
      status: "Active",
      impact: "Invisible AI Network"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return '#10b981';
      case 'Ongoing':
        return '#f59e0b';
      case 'Active':
        return '#3b82f6';
      case 'Research':
        return '#8b5cf6';
      default:
        return '#6b7280';
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Strategic AI governance initiatives and research projects driving responsible technology implementation
          </p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span 
                  className="project-status"
                  style={{ backgroundColor: getStatusColor(project.status) }}
                >
                  {project.status}
                </span>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="project-footer">
                <div className="project-impact">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                  </svg>
                  <span className="impact-text">{project.impact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
