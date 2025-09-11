import React from 'react';
import './Expertise.css';

const Expertise = () => {
  const expertiseAreas = [
    {
      title: "AI Governance & Safety",
      description: "EU AI Act compliance, responsible technology deployment, algorithmic auditing, and risk assessment frameworks.",
      icon: "🛡️"
    },
    {
      title: "Strategic Program Leadership",
      description: "Managing large-scale technology deployments with $450M+ program oversight across 190+ countries.",
      icon: "🎯"
    },
    {
      title: "Enterprise Security Enablement",
      description: "Translating complex technical security requirements into scalable operational frameworks.",
      icon: "🔐"
    },
    {
      title: "Change Management & Training",
      description: "Designing and delivering comprehensive training programs to 3,000+ global personnel with 80% adoption rates.",
      icon: "📚"
    },
    {
      title: "Data Analytics & Visualization",
      description: "Building executive dashboards and KPI frameworks tracking program data for strategic resource allocation.",
      icon: "📊"
    },
    {
      title: "Stakeholder Alignment",
      description: "Proven track record building stakeholder alignment and designing outcome-focused metrics for agile delivery.",
      icon: "🤝"
    }
  ];

  return (
    <section id="expertise" className="expertise">
      <div className="container">
        <div className="expertise-header">
          <h2 className="section-title">My Expertise</h2>
          <p className="section-subtitle">
            Specialized knowledge in AI ethics and responsible technology development
          </p>
        </div>
        <div className="expertise-grid">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="expertise-card">
              <div className="expertise-icon">{area.icon}</div>
              <h3 className="expertise-title">{area.title}</h3>
              <p className="expertise-description">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
