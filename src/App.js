import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Research from './components/Research';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Experience />
            <Education />
            <Expertise />
            <Projects />
            <Contact />
          </>
        } />
        <Route path="/research" element={<Research />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
