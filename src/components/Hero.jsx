import React from 'react';

const Hero = () => {
  return (
    <section className="hero-bg min-h-screen flex items-center justify-center text-center px-6 pt-20 relative overflow-hidden" id="home">
      <div className="max-w-3xl relative z-10">
        <p className="text-white/80 font-bold tracking-widest text-sm uppercase mb-4 opacity-0 animate-fade-in-up delay-100">HELLO, I'M</p>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4 drop-shadow-lg opacity-0 animate-fade-in-up delay-100">Rushikesh Patil</h1>
        <p className="text-white/80 text-sm mb-6 flex items-center justify-center gap-2 opacity-0 animate-fade-in-up delay-200">
          <span className="text-coral">📍</span> Vadodara, Gujarat, India
        </p>
        <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10 drop-shadow opacity-0 animate-fade-in-up delay-300">
          I build AI-powered solutions and Python web apps. I am passionate about impactful products and open to Machine Learning, Data Science, Artificial Intelligence & Software Development Engineering roles.
        </p>
        <div className="flex flex-wrap gap-4 justify-center opacity-0 animate-fade-in-up delay-300">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 rounded-lg border-2 border-white text-white font-semibold hover:bg-white hover:text-gray-900 transition flex items-center gap-2 shadow-lg">My Resume <i className="fa-solid fa-chevron-right text-xs"></i></a>
          <a href="#contact" className="px-6 py-2.5 rounded-lg bg-coral text-white font-semibold hover:bg-[#d4604e] transition flex items-center gap-2 shadow-lg">Contact Info <i className="fa-solid fa-chevron-right text-xs"></i></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
