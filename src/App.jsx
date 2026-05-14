import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    // Global Scroll Reveal Animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    // Apply animation to all sections (except hero), project cards, and cert cards
    document.querySelectorAll('section:not(#home), .card, .cert-card').forEach((el) => {
      el.style.opacity = '0';
      observer.observe(el);
    });
  }, []);

  return (
    <div className="bg-offwhite text-gray-800 font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certifications />
      </main>
      <Contact />
    </div>
  );
}

export default App;
