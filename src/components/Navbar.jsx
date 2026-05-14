import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ background: '#E87461' }} className="sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <span className="text-white font-bold text-lg tracking-tight">Rushikesh Patil<span className="opacity-60">.</span></span>
        <div className="hidden md:flex gap-8">
          <a href="#about" className="text-white/90 hover:text-white font-medium text-sm transition">About</a>
          <a href="#projects" className="text-white/90 hover:text-white font-medium text-sm transition">Projects</a>
          <a href="#skills" className="text-white/90 hover:text-white font-medium text-sm transition">Skills</a>
          <a href="#certifications" className="text-white/90 hover:text-white font-medium text-sm transition">Certifications</a>
          <a href="#contact" className="text-white/90 hover:text-white font-medium text-sm transition">Contact</a>
        </div>
        <a href="mailto:rushipatil1808@gmail.com" className="hidden md:inline-block bg-white text-coral font-semibold text-sm px-4 py-1.5 rounded-full hover:bg-offwhite transition">Hire Me</a>
      </div>
    </nav>
  );
};

export default Navbar;
