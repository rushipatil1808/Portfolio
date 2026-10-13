import React from 'react';

const certifications = [
  {
    title: 'Generative AI for All',
    issuer: 'Microsoft',
    year: '2026',
    subtitle: 'LLMs & Prompt Engineering',
    icon: '🪟',
    colorClass: 'text-coral',
    credentialUrl: ''
  },
  {
    title: 'AI Fundamentals',
    issuer: 'IBM',
    year: '2025',
    subtitle: 'ML Concepts & Data Processing',
    icon: '🔵',
    colorClass: 'text-teal',
    credentialUrl: ''
  },
  {
    title: 'AWS Academy Graduate',
    issuer: 'AWS',
    year: '2025',
    subtitle: 'Cloud Foundations',
    icon: '☁️',
    colorStyle: { color: '#9B7FD4' },
    credentialUrl: ''
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="section-label mb-2">Credentials</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">Certifications</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div key={cert.title} className="cert-card flex-col text-center">
              <div className="text-4xl mb-3">{cert.icon}</div>
              <p className="font-bold text-gray-800">{cert.title}</p>
              <p 
                className={`font-semibold text-sm mt-1 ${cert.colorClass || ''}`}
                style={cert.colorStyle || {}}
              >
                {cert.issuer} · {cert.year}
              </p>
              <p className="text-gray-400 text-xs mt-2">{cert.subtitle}</p>
              {cert.credentialUrl && (
                <a 
                  href={cert.credentialUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className={`text-xs font-semibold mt-3 hover:underline inline-block ${cert.colorClass || ''}`}
                  style={cert.colorStyle || {}}
                >
                  Verify Credential →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
