import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const projects = [
    {
      id: 1,
      title: "AI Governance Framework",
      description: "Developed comprehensive AI governance framework for enterprise deployment across 190+ countries, ensuring ethical AI implementation and regulatory compliance.",
      technologies: ["AI Ethics", "Governance", "Policy Design", "Risk Assessment"],
      status: "Completed",
      impact: "450M+ Program Oversight",
      pdf: `${process.env.PUBLIC_URL}/aiaun.pdf`
    },
    {
      id: 2,
      title: "Multi-Agent Reinforcement Learning for Diplomacy",
      description: "Research project exploring applications of AI in global governance through multi-agent reinforcement learning systems for diplomatic negotiations.",
      technologies: ["Machine Learning", "Reinforcement Learning", "Diplomacy", "Global Governance"],
      status: "Research",
      impact: "Cambridge Fellowship",
      pdf: `${process.env.PUBLIC_URL}/aiaun.pdf`
    },
    {
      id: 3,
      title: "AI Safety in Biotechnology",
      description: "Conducted research on AI safety applications in biotechnology, focusing on responsible AI deployment in critical healthcare and biotech sectors.",
      technologies: ["AI Safety", "Biotechnology", "Healthcare AI", "Risk Management"],
      status: "Research",
      impact: "Clare College Award",
      pdf: `${process.env.PUBLIC_URL}/aiaun.pdf`
    },
    {
      id: 4,
      title: "Strategic Security Enablement Program",
      description: "Led large-scale technology deployment program focusing on security enablement across enterprise environments with cross-functional coordination.",
      technologies: ["Security", "Enterprise Architecture", "Program Management", "Stakeholder Alignment"],
      status: "Ongoing",
      impact: "3+ Years Leadership",
      pdf: `${process.env.PUBLIC_URL}/aiaun.pdf`
    },
    {
      id: 5,
      title: "Responsible AI Innovation Diffusion",
      description: "Research on innovation diffusion patterns for responsible AI deployment, analyzing how ethical AI practices spread across organizations and industries.",
      technologies: ["Innovation Theory", "AI Ethics", "Organizational Change", "Data Analysis"],
      status: "Research",
      impact: "Academic Publication",
      pdf: `${process.env.PUBLIC_URL}/aiaun.pdf`
    },
    {
      id: 6,
      title: "AI Training & Communication Excellence",
      description: "Specialized AI training programs for language models and professional communication, focusing on transparent feedback and nuanced English usage.",
      technologies: ["AI Training", "Natural Language Processing", "Communication", "Education"],
      status: "Active",
      impact: "Invisible AI Network",
      pdf: `${process.env.PUBLIC_URL}/aiaun.pdf`
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

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
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
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => handleProjectClick(project)}
            >
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
                <div className="click-hint">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                    <polyline points="10,17 15,12 10,7"/>
                    <line x1="15" y1="12" x2="3" y2="12"/>
                  </svg>
                  <span>View Article</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div 
          className={`modal-overlay ${isModalOpen ? 'active' : ''}`}
          onClick={handleOverlayClick}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">{selectedProject.title}</h3>
              <button className="modal-close" onClick={closeModal}>
                ×
              </button>
            </div>
            <div className="modal-body">
              <iframe
                src={selectedProject.pdf}
                className="pdf-viewer"
                title={`${selectedProject.title} - Article`}
                onLoad={() => console.log('PDF loaded')}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
