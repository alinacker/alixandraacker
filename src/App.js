import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Research from './components/Research';
import Writing from './components/Writing';
import WritingPost from './components/WritingPost';
import OffTheClock from './components/OffTheClock';
import SEO, { siteUrl } from './components/SEO';
import './App.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
};

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <SEO
                title="Alixandra Acker - AI Strategy & Safety"
                description="Alixandra Acker researches AI governance, AI safety, technology policy, and global development, with writing and research on responsible frontier AI."
                path="/"
                structuredData={{
                  '@context': 'https://schema.org',
                  '@type': 'Person',
                  name: 'Alixandra Acker',
                  url: siteUrl,
                  jobTitle: 'AI governance and technology policy researcher',
                  knowsAbout: [
                    'AI governance',
                    'AI safety',
                    'Technology policy',
                    'Global development',
                    'Responsible AI',
                  ],
                }}
              />
              <Hero />
              <About />
              <Education />
              <Experience />
              <Contact />
            </>
          } />
          <Route path="/research" element={<Research />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/writing/:slug" element={<WritingPost />} />
          <Route path="/off-the-clock" element={<OffTheClock />} />
        </Routes>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </div>
    </HelmetProvider>
  );
}

export default App;
