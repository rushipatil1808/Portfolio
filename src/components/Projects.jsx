import React from 'react';

const projects = [
  {
    title: 'Zoo Guide AI Agent',
    description: 'An intelligent multi-agent system built with Google ADK and LangChain acting as a smart zoo guide — answers visitor questions, researches animal data, and assists with real-time navigation.',
    icon: '🦁',
    topBarClass: 'bg-coral',
    iconBgClass: 'bg-coral/10',
    linkClass: 'text-coral',
    badgeClass: 'bg-coral/10 text-coral',
    github: 'https://github.com/rushipatil1808/zoo_guide_agent',
    tags: [
      { name: 'Python', icon: 'devicon-python-plain' },
      { name: 'LangChain' },
      { name: 'AI Agents' }
    ]
  },
  {
    title: 'AI Video & Meeting Assistant',
    description: 'An AI assistant that transcribes YouTube videos and audio using Whisper, extracting key decisions, structured summaries, and interactive RAG Q&A via LangChain and ChromaDB.',
    icon: '🎙️',
    topBarClass: 'bg-blue-500',
    iconBgClass: 'bg-blue-500/10',
    linkClass: 'text-blue-600',
    badgeClass: 'bg-blue-500/10 text-blue-600',
    github: 'https://github.com/rushipatil1808/AI-Video-Assistant',
    tags: [
      { name: 'Python', icon: 'devicon-python-plain' },
      { name: 'LangChain' },
      { name: 'Whisper' },
      { name: 'RAG' }
    ]
  },
  {
    title: 'Traveloop',
    description: 'An AI-powered travel planner that generates personalised itineraries, budget estimates and chatbot assistance. Built with a Next.js frontend and FastAPI backend.',
    icon: '✈️',
    topBarClass: 'bg-teal',
    iconBgClass: 'bg-teal/10',
    linkClass: 'text-teal',
    badgeClass: 'bg-teal/10 text-teal',
    github: 'https://github.com/rushipatil1808/Traveloop',
    tags: [
      { name: 'React', icon: 'devicon-react-original' },
      { name: 'Next.js', icon: 'devicon-nextjs-original text-black' },
      { name: 'FastAPI', icon: 'devicon-fastapi-plain' }
    ]
  },
  {
    title: 'DB Backup & Anomaly Detection',
    description: 'A Flask-based system for automated MySQL backups with AES-256 encryption, combined with an Isolation Forest model to detect unusual database access patterns.',
    icon: '🛡️',
    topBarStyle: { background: '#9B7FD4' },
    iconBgStyle: { background: 'rgba(155,127,212,0.1)' },
    linkStyle: { color: '#9B7FD4' },
    badgeStyle: { background: 'rgba(155,127,212,0.1)', color: '#9B7FD4' },
    github: 'https://github.com/rushipatil1808/Automated-DB-Backups',
    tags: [
      { name: 'Flask', icon: 'devicon-flask-original' },
      { name: 'MySQL', icon: 'devicon-mysql-plain' },
      { name: 'Scikit-learn', icon: 'devicon-scikitlearn-original' }
    ]
  },
  {
    title: 'Movie Recommendation System',
    description: 'A hybrid content-based recommendation engine combining TF-IDF similarity, genre matching, and IMDB metadata, wrapped in an interactive Streamlit web application.',
    icon: '🍿',
    topBarClass: 'bg-amber-500',
    iconBgClass: 'bg-amber-500/10',
    linkClass: 'text-amber-600',
    badgeClass: 'bg-amber-500/10 text-amber-600',
    github: 'https://github.com/rushipatil1808/Movie-Recommendation-System',
    tags: [
      { name: 'Python', icon: 'devicon-python-plain' },
      { name: 'Scikit-learn', icon: 'devicon-scikitlearn-original' },
      { name: 'Pandas', icon: 'devicon-pandas-plain' },
      { name: 'Streamlit' }
    ]
  },
  {
    title: 'Virtual Cloth Try-On',
    description: 'An AI-powered virtual styling application that allows users to virtually try on different clothing items using computer vision and interactive UI elements in real time.',
    icon: '👕',
    topBarClass: 'bg-yellow-400',
    iconBgClass: 'bg-yellow-400/10',
    linkClass: 'text-yellow-600',
    badgeClass: 'bg-yellow-400/10 text-yellow-600',
    github: 'https://github.com/rushipatil1808/clothsTryOn-master',
    tags: [
      { name: 'JavaScript', icon: 'devicon-javascript-plain' },
      { name: 'OpenCV.js' },
      { name: 'Webcam API' }
    ]
  },
  {
    title: 'Expense Tracker System',
    description: 'A personal finance monitoring application with structured development roadmaps, helping users manage budgets and track financial activities effectively.',
    icon: '💰',
    topBarClass: 'bg-red-500',
    iconBgClass: 'bg-red-500/10',
    linkClass: 'text-red-600',
    badgeClass: 'bg-red-500/10 text-red-600',
    github: 'https://github.com/rushipatil1808/expense-traker-py',
    tags: [
      { name: 'Python', icon: 'devicon-python-plain' },
      { name: 'HTML', icon: 'devicon-html5-plain' },
      { name: 'Finance' }
    ]
  },
  {
    title: 'Mini ERP + CRM Portal',
    description: 'A full-stack Wholesale & Distribution operations portal featuring product catalog, order workflows, customer management, and PostgreSQL database integration.',
    icon: '🏢',
    topBarClass: 'bg-indigo-500',
    iconBgClass: 'bg-indigo-500/10',
    linkClass: 'text-indigo-600',
    badgeClass: 'bg-indigo-500/10 text-indigo-600',
    github: 'https://github.com/rushipatil1808/erp-crm-portal',
    tags: [
      { name: 'React', icon: 'devicon-react-original' },
      { name: 'Node.js', icon: 'devicon-nodejs-plain' },
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' }
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-label mb-2">What I've Built</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">Featured Projects</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="card flex flex-col">
              <div 
                className={`h-2 ${project.topBarClass || ''}`} 
                style={project.topBarStyle || {}}
              ></div>
              <div className="p-7 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl ${project.iconBgClass || ''}`}
                    style={project.iconBgStyle || {}}
                  >
                    {project.icon}
                  </div>
                  <h3 className="font-bold text-gray-800 text-lg leading-tight">{project.title}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{project.description}</p>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag.name} 
                        className={`text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1 ${project.badgeClass || ''}`}
                        style={project.badgeStyle || {}}
                      >
                        {tag.icon && <i className={tag.icon}></i>} {tag.name}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className={`font-semibold text-sm hover:underline ${project.linkClass || ''}`}
                    style={project.linkStyle || {}}
                  >
                    View on GitHub →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
