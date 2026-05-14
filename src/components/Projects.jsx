import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-label mb-2">What I've Built</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">Featured Projects</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card flex flex-col">
            <div className="h-2 bg-coral"></div>
            <div className="p-7 flex flex-col flex-grow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center text-xl">🦁</div>
                <h3 className="font-bold text-gray-800 text-lg leading-tight">Zoo Guide AI Agent</h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">An intelligent AI agent acting as a smart zoo guide — answers visitor questions and helps navigate to animals and sections in real time.</p>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="text-xs font-semibold bg-coral/10 text-coral px-3 py-1 rounded-full flex items-center gap-1"><i className="devicon-python-plain"></i> Python</span>
                  <span className="text-xs font-semibold bg-coral/10 text-coral px-3 py-1 rounded-full">LangChain</span>
                  <span className="text-xs font-semibold bg-coral/10 text-coral px-3 py-1 rounded-full">AI Agents</span>
                </div>
                <a href="https://github.com/rushi1808/zoo_guide_agent" target="_blank" rel="noreferrer" className="text-coral font-semibold text-sm hover:underline">View on GitHub →</a>
              </div>
            </div>
          </div>

          <div className="card flex flex-col">
            <div className="h-2 bg-teal"></div>
            <div className="p-7 flex flex-col flex-grow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center text-xl">✈️</div>
                <h3 className="font-bold text-gray-800 text-lg leading-tight">Traveloop</h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">An AI-powered travel planner that generates personalised itineraries, budget estimates and chatbot assistance. Built with a Next.js frontend and FastAPI backend.</p>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="text-xs font-semibold bg-teal/10 text-teal px-3 py-1 rounded-full flex items-center gap-1"><i className="devicon-react-original"></i> React</span>
                  <span className="text-xs font-semibold bg-teal/10 text-teal px-3 py-1 rounded-full flex items-center gap-1"><i className="devicon-nextjs-original text-black"></i> Next.js</span>
                  <span className="text-xs font-semibold bg-teal/10 text-teal px-3 py-1 rounded-full flex items-center gap-1"><i className="devicon-fastapi-plain"></i> FastAPI</span>
                </div>
                <a href="https://github.com/rushi1808/Traveloop" target="_blank" rel="noreferrer" className="text-teal font-semibold text-sm hover:underline">View on GitHub →</a>
              </div>
            </div>
          </div>

          <div className="card flex flex-col">
            <div className="h-2" style={{ background: '#9B7FD4' }}></div>
            <div className="p-7 flex flex-col flex-grow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: 'rgba(155,127,212,0.1)' }}>🛡️</div>
                <h3 className="font-bold text-gray-800 text-lg leading-tight">DB Backup &amp; Anomaly Detection</h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">A Flask-based system for automated MySQL backups with AES-256 encryption, combined with an Isolation Forest model to detect unusual database access patterns.</p>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1" style={{ background: 'rgba(155,127,212,0.1)', color: '#9B7FD4' }}><i className="devicon-flask-original"></i> Flask</span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1" style={{ background: 'rgba(155,127,212,0.1)', color: '#9B7FD4' }}><i className="devicon-mysql-plain"></i> MySQL</span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1" style={{ background: 'rgba(155,127,212,0.1)', color: '#9B7FD4' }}><i className="devicon-scikitlearn-original"></i> Scikit-learn</span>
                </div>
                <a href="https://github.com/rushi1808/Automated-DB-Backups" target="_blank" rel="noreferrer" className="font-semibold text-sm hover:underline" style={{ color: '#9B7FD4' }}>View on GitHub →</a>
              </div>
            </div>
          </div>

          {/* New Project 1: Virtual Cloth Try-On */}
          <div className="card flex flex-col">
            <div className="h-2 bg-yellow-400"></div>
            <div className="p-7 flex flex-col flex-grow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-yellow-400/10 flex items-center justify-center text-xl">👕</div>
                <h3 className="font-bold text-gray-800 text-lg leading-tight">Virtual Cloth Try-On</h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">A JavaScript-based application that allows users to virtually try on different clothing items using computer vision and interactive UI elements.</p>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="text-xs font-semibold bg-yellow-400/10 text-yellow-600 px-3 py-1 rounded-full flex items-center gap-1"><i className="devicon-javascript-plain"></i> JavaScript</span>
                  <span className="text-xs font-semibold bg-yellow-400/10 text-yellow-600 px-3 py-1 rounded-full">OpenCV.js</span>
                  <span className="text-xs font-semibold bg-yellow-400/10 text-yellow-600 px-3 py-1 rounded-full">Webcam API</span>
                </div>
                <a href="https://github.com/rushi1808/clothsTryOn-master" target="_blank" rel="noreferrer" className="text-yellow-600 font-semibold text-sm hover:underline">View on GitHub →</a>
              </div>
            </div>
          </div>

          {/* New Project 2: Expense Tracker System */}
          <div className="card flex flex-col">
            <div className="h-2 bg-red-500"></div>
            <div className="p-7 flex flex-col flex-grow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-xl">💰</div>
                <h3 className="font-bold text-gray-800 text-lg leading-tight">Expense Tracker System</h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">A full-featured expense monitoring application with detailed roadmaps for development, helping users manage finances effectively with Python and HTML.</p>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="text-xs font-semibold bg-red-500/10 text-red-600 px-3 py-1 rounded-full flex items-center gap-1"><i className="devicon-python-plain"></i> Python</span>
                  <span className="text-xs font-semibold bg-red-500/10 text-red-600 px-3 py-1 rounded-full flex items-center gap-1"><i className="devicon-html5-plain"></i> HTML</span>
                  <span className="text-xs font-semibold bg-red-500/10 text-red-600 px-3 py-1 rounded-full">Finance</span>
                </div>
                <a href="https://github.com/rushi1808/expense-traker-py" target="_blank" rel="noreferrer" className="text-red-600 font-semibold text-sm hover:underline">View on GitHub →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
