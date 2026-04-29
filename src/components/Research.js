import React, { useState } from 'react';
import './Research.css';

const Research = () => {
  const [selectedPaper, setSelectedPaper] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const researchPapers = [
    {
      id: 5,
      title: "AI Governance Index 2027: China Country Analysis",
      authors: "Alixandra Acker, Anamika Chatterjee, Adithya Moorthy, Anatasiya Korsak",
      abstract: "A comprehensive analysis of Chinese AI surveillance systems, human rights governance, and AI law as part of CAIDP's annual AI Governance Index covering 90 countries. Examines how China's regulatory architecture, state surveillance infrastructure, and international AI diplomacy interact with global governance frameworks including the EU AI Act and UNESCO AI Ethics Recommendation.",
      venue: "Centre for AI and Digital Policy",
      year: "Forthcoming 2025",
      thumbnail: `${process.env.PUBLIC_URL}/research_papers/thumbnails/china-pic.jpg`,
      logo: `${process.env.PUBLIC_URL}/university-logo/center_4_ai_and_digital_policy.png`,
      pdf: ""
    },
    {
      id: 1,
      title: "AI-CRISPR as Epistemic Arbiter: Sickle Cell Gene Editing, Sovereignty, and Health Equity in Sub-Saharan Africa",
      authors: "Alixandra Acker",
      abstract: "Examines AI-CRISPR workflows as a sociotechnical risk system across six jurisdictions, analysing how embedded knowledge and power structures in biotech pipelines shape the epistemic sovereignty of sickle cell patients in Sub-Saharan Africa. Produces integrated safety and regulatory framework recommendations across healthcare AI, biosecurity, and global health equity.",
      venue: "University of Cambridge",
      year: "June 2025",
      thumbnail: `${process.env.PUBLIC_URL}/research_papers/thumbnails/cancer.jpg`,
      logo: `${process.env.PUBLIC_URL}/university-logo/cambridge.png`,
      pdf: `${process.env.PUBLIC_URL}/research_papers/4781_DISS_AI-CRISPR as Epistemic Arbiter- Sickle Cell Gene Editing, Sovereignty, and Health Equity in Sub-Saharan Africa.pdf`
    },
    {
        id: 3,
        title: "Negotiating the Nile: Game Theory, AI, and Data Sovereignty in Transboundary Water Diplomacy",
        authors: "Alixandra Acker",
        abstract: "Applies multi-agent reinforcement learning to model negotiation dynamics in the Nile water dispute, examining how AI systems behave under resource scarcity constraints and how data sovereignty shapes the terms of transboundary governance. Sits at the intersection of applied RL, international relations, and AI safety.",
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
      abstract: "Examines the conditions under which AI-powered satellite technology scales successfully in agricultural contexts across Sub-Saharan Africa using Kenya as a primary case study. Applies an innovative systems framework to analyse how technology diffusion, institutional capacity, and data infrastructure interact to determine whether agritech reaches the smallholder farmers who need it most. Sits at the intersection of AI development economics, global food security, and technology governance.",
      venue: "University of Cambridge",
      year: "February 2025",
      thumbnail: `${process.env.PUBLIC_URL}/research_papers/thumbnails/kenya.jpg`,
      logo: `${process.env.PUBLIC_URL}/university-logo/cambridge.png`,
      pdf: `${process.env.PUBLIC_URL}/research_papers/4781_RE1_ GROUNDING KENYA'S AGRITECH SUCCESS - AN INNOVATIVE SYSTEMS APPROACH TO SCALING AI SATELLITE TECHNOLOGY IN SUB-SAHARAN AFRICAN UNDER THE AFRICAN SPACE AGENCY.pdf`
    },
    {
      id: 6,
      title: "Data-Driven Diplomacy: FY22 Agency Financial Report",
      authors: "Alixandra Acker, Accenture Federal Services",
      abstract: "Authored a chapter on data-driven diplomacy examining how technology and data systems are reshaping diplomatic operations in Sub-Saharan Africa, with case studies from Rwanda and Kenya. Published as part of the Congressionally mandated FY2022 Agency Financial Report covering the State Department's global operations across 190+ countries.",
      venue: "US Department of State",
      year: "September 2022",
      thumbnail: `${process.env.PUBLIC_URL}/research_papers/thumbnails/flag.jpg`,
      logo: `${process.env.PUBLIC_URL}/research_papers/thumbnails/us-department-of-state.png`,
      pdf: `${process.env.PUBLIC_URL}/research_papers/FY-2022-Agency-Financial-Report.pdf`
    },
    {
      id: 4,
      title: "Investigating Indoctrination to Incitement: What is the Relationship between Hate Media and Genocide?",
      authors: "Alixandra Acker",
      abstract: "A synthetic, thematic analysis of the role of hate media in inciting genocidal violence across six historical cases: Rwanda, the Islamic State, Myanmar, Guatemala, Yugoslavia, and Germany. Examines whether hate media can be deemed culpable for incitement to genocide — engaging with the Nuremberg media trials, the Rwanda \u201CMedia Case,\u201D and the unsettled media effects debate in international jurisprudence. An early grounding in how information systems shape political violence at scale.",
      venue: "University of Virginia",
      year: "2021",
      thumbnail: `${process.env.PUBLIC_URL}/research_papers/thumbnails/birkenau camp.png`,
      logo: `${process.env.PUBLIC_URL}/university-logo/University-of-Virginia-Logo.png`,
      pdf: `${process.env.PUBLIC_URL}/research_papers/1_Acker_Alixandra_2021_BA.pdf`
    },
    {
      id: 7,
      title: "With You Magazine — Crisis Appeals Edition",
      authors: "Alixandra Acker",
      abstract: "Contributed to the drafting of UNHCR Australia's With You Magazine, a publication supporting humanitarian aid crisis appeals for refugee populations globally. Writing and analysis focus on refugee populations in Mozambique, Cameroon, and Bangladesh to mobilize donor support for UNHCR's emergency response programs.",
      venue: "The UN High Commissioner for Refugees: Australia",
      year: "October 2019",
      thumbnail: `${process.env.PUBLIC_URL}/research_papers/thumbnails/unhcr_thumb.jpg`,
      logo: `${process.env.PUBLIC_URL}/research_papers/thumbnails/unhcr.png`,
      pdf: `${process.env.PUBLIC_URL}/research_papers/unhcr_withyoumagazine_october19_web-final.pdf`
    }

  ];

  const handlePaperClick = (paper) => {
    if (!paper.pdf) return;
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
                className={`research-card ${!paper.pdf ? 'research-card-forthcoming' : ''}`}
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
                      {paper.pdf ? (
                        <>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                            <polyline points="14,2 14,8 20,8"/>
                            <line x1="16" y1="13" x2="8" y2="13"/>
                            <line x1="16" y1="17" x2="8" y2="17"/>
                          </svg>
                          <span>Read Full Paper</span>
                        </>
                      ) : (
                        <span className="forthcoming-label">Forthcoming</span>
                      )}
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

