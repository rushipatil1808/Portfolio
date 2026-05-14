import React from 'react';

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="section-label mb-2">Credentials</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">Certifications</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="cert-card flex-col text-center">
            <div className="text-4xl mb-3">🪟</div>
            <p className="font-bold text-gray-800">Generative AI for All</p>
            <p className="text-coral font-semibold text-sm mt-1">Microsoft · 2026</p>
            <p className="text-gray-400 text-xs mt-2">LLMs &amp; Prompt Engineering</p>
          </div>
          <div className="cert-card flex-col text-center">
            <div className="text-4xl mb-3">🔵</div>
            <p className="font-bold text-gray-800">AI Fundamentals</p>
            <p className="text-teal font-semibold text-sm mt-1">IBM · 2025</p>
            <p className="text-gray-400 text-xs mt-2">ML Concepts &amp; Data Processing</p>
          </div>
          <div className="cert-card flex-col text-center">
            <div className="text-4xl mb-3">☁️</div>
            <p className="font-bold text-gray-800">AWS Academy Graduate</p>
            <p className="font-semibold text-sm mt-1" style={{ color: '#9B7FD4' }}>AWS · 2025</p>
            <p className="text-gray-400 text-xs mt-2">Cloud Foundations</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
