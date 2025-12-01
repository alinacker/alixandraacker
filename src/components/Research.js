import React, { useState } from 'react';
import './Research.css';

const Research = () => {
  const [selectedPaper, setSelectedPaper] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const researchPapers = [
    {
      id: 1,
      title: "AI-CRISPR as Epistemic Arbiter: Sickle Cell Gene Editing, Sovereignty, and Health Equity in Sub-Saharan Africa",
      authors: "Alixandra Acker",
      abstract: "This paper explores the intersection of AI, CRISPR gene editing technology, and health equity in the context of sickle cell disease treatment in Sub-Saharan Africa, examining issues of sovereignty and epistemic justice.",
      venue: "University of Cambridge",
      year: "June 2025",
      thumbnail: `${process.env.PUBLIC_URL}/research_papers/thumbnails/ai-cripsr.png`,
      logo: `${process.env.PUBLIC_URL}/university-logo/cambridge.png`,
      pdf: `${process.env.PUBLIC_URL}/research_papers/4781_DISS_AI-CRISPR as Epistemic Arbiter- Sickle Cell Gene Editing, Sovereignty, and Health Equity in Sub-Saharan Africa.pdf`
    },
    {
        id: 3,
        title: "Negotiating the Nile: Game Theory, AI, and Data Sovereignty in Transboundary Water Diplomacy",
        authors: "Alixandra Acker",
        abstract: "This paper analyzes the application of game theory and artificial intelligence in transboundary water resource management, focusing on the Nile River basin and examining issues of data sovereignty in diplomatic negotiations.",
        venue: "University of Cambridge",
        year: "April, 2025",
        thumbnail: `${process.env.PUBLIC_URL}/research_papers/thumbnails/nile.jpg`,
        logo: `${process.env.PUBLIC_URL}/university-logo/cambridge.png`,
        pdf: `${process.env.PUBLIC_URL}/research_papers/4781_RE2_Negotiating the Nile..Game Theory, AI, and Data Sovereignty in Transboundary Water Diplomacy.pdf`
    },
    {
      id: 2,
      title: "Grounding Kenya's Agritech Success: An Innovative Systems Approach to Scaling AI Satellite Technology in Sub-Saharan African Under The African Space Agency",
      authors: "Alixandra Acker",
      abstract: "This research examines innovative systems approaches for scaling AI-powered satellite technology in agricultural applications across Sub-Saharan Africa, with a focus on Kenya's agritech sector under the African Space Agency framework.",
      venue: "University of Cambridge",
      year: "February 2025",
      thumbnail: `${process.env.PUBLIC_URL}/research_papers/thumbnails/kenya.jpg`,
      logo: `${process.env.PUBLIC_URL}/university-logo/cambridge.png`,
      pdf: `${process.env.PUBLIC_URL}/research_papers/4781_RE1_ GROUNDING KENYA'S AGRITECH SUCCESS - AN INNOVATIVE SYSTEMS APPROACH TO SCALING AI SATELLITE TECHNOLOGY IN SUB-SAHARAN AFRICAN UNDER THE AFRICAN SPACE AGENCY.pdf`
    },
    {
      id: 4,
      title: "Investigating Indoctrination to Incitement: What is the Relationship between Hate Media and Genocide?",
      authors: "Alixandra Acker",
      abstract: "This thesis examines the role of hate media in inciting genocidal violence across six historical cases—Rwanda, the Islamic State, Myanmar, Guatemala, Yugoslavia, and Germany. Analyzing the enduring debate from Nuremberg to Rwanda's Media Case, this research questions whether hate media directly incites genocide or serves as a secondary driver of violence.",
      venue: "University of Virginia",
      year: "2021",
      thumbnail: `${process.env.PUBLIC_URL}/research_papers/thumbnails/genocide.jpg`,
      logo: `${process.env.PUBLIC_URL}/university-logo/University-of-Virginia-Logo.png`,
      pdf: `${process.env.PUBLIC_URL}/research_papers/1_Acker_Alixandra_2021_BA.pdf`
    }

  ];

  const handlePaperClick = (paper) => {
    setSelectedPaper(paper);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedPaper(null), 300);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="research-page">
      <section className="research">
        <div className="container">
          <div className="research-header">
            <h1 className="page-title">Research Papers</h1>
            <p className="page-subtitle">
              Academic research exploring AI ethics, governance, and applications in global development and diplomacy
            </p>
          </div>
          
          <div className="research-grid">
            {researchPapers.map((paper) => (
              <div 
                key={paper.id} 
                className="research-card"
                onClick={() => handlePaperClick(paper)}
              >
                <div className="research-thumbnail">
                  <img 
                    src={paper.thumbnail} 
                    alt={paper.title}
                    onError={(e) => {
                      e.target.src = `${process.env.PUBLIC_URL}/ali_pic_v2.jpg`;
                    }}
                  />
                  <div className="thumbnail-overlay">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14,2 14,8 20,8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                      <polyline points="10,9 9,9 8,9"/>
                    </svg>
                  </div>
                </div>
                
                <div className="research-content">
                  <div className="research-meta">
                    <span className="research-year">{paper.year}</span>
                    <div className="research-venue-container">
                      <img src={paper.logo} alt={paper.venue} className="university-logo" />
                      <span className="research-venue">{paper.venue}</span>
                    </div>
                  </div>
                  
                  <h3 className="research-title">{paper.title}</h3>
                  
                  <p className="research-authors">{paper.authors}</p>
                  
                  <p className="research-abstract">{paper.abstract}</p>
                  
                  <div className="research-footer">
                    <div className="read-more">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14,2 14,8 20,8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/>
                        <line x1="16" y1="17" x2="8" y2="17"/>
                      </svg>
                      <span>Read Full Paper</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal with blurred background */}
      {isModalOpen && selectedPaper && (
        <div 
          className={`modal-overlay ${isModalOpen ? 'active' : ''}`}
          onClick={handleOverlayClick}
        >
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title-section">
                <h3 className="modal-title">{selectedPaper.title}</h3>
                <p className="modal-authors">{selectedPaper.authors} • {selectedPaper.year}</p>
              </div>
              <button className="modal-close" onClick={closeModal} aria-label="Close modal">
                ×
              </button>
            </div>
            <div className="modal-body">
              <iframe
                src={selectedPaper.pdf}
                className="pdf-viewer"
                title={`${selectedPaper.title} - Research Paper`}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Research;

