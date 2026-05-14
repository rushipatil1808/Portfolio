import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="bg-white py-20 px-6 border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="section-label mb-2">Tech Stack</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">Skills &amp; Tools</h2>
        </div>
        <div className="space-y-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">AI / ML</p>
            <div className="flex flex-wrap gap-3">
              <span className="skill-pill"><i className="devicon-python-plain colored text-lg"></i> Python</span>
              <span className="skill-pill">🦜 LangChain</span>
              <span className="skill-pill">🤖 AI Agents &amp; LLMs</span>
              <span className="skill-pill"><i className="devicon-pytorch-original colored text-lg"></i> PyTorch</span>
              <span className="skill-pill"><i className="devicon-scikitlearn-original colored text-lg"></i> Scikit-learn</span>
              <span className="skill-pill"><i className="devicon-opencv-plain colored text-lg"></i> OpenCV</span>
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Web &amp; Backend</p>
            <div className="flex flex-wrap gap-3">
              <span className="skill-pill"><i className="devicon-flask-original colored text-lg text-black"></i> Flask</span>
              <span className="skill-pill"><i className="devicon-fastapi-plain colored text-lg"></i> FastAPI</span>
              <span className="skill-pill"><i className="devicon-react-original colored text-lg"></i> React</span>
              <span className="skill-pill"><i className="devicon-nodejs-plain colored text-lg"></i> Node.js</span>
              <span className="skill-pill"><i className="devicon-nextjs-original text-lg text-black"></i> Next.js</span>
              <span className="skill-pill"><i className="devicon-java-plain colored text-lg"></i> Java</span>
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Data &amp; Cloud</p>
            <div className="flex flex-wrap gap-3">
              <span className="skill-pill"><i className="devicon-mongodb-plain colored text-lg"></i> MongoDB</span>
              <span className="skill-pill"><i className="devicon-mysql-plain colored text-lg"></i> MySQL</span>
              <span className="skill-pill"><i className="devicon-googlecloud-plain colored text-lg"></i> Google Cloud</span>
              <span className="skill-pill"><i className="devicon-amazonwebservices-original colored text-lg"></i> AWS</span>
              <span className="skill-pill"><i className="devicon-numpy-plain colored text-lg"></i> NumPy</span>
              <span className="skill-pill"><i className="devicon-pandas-plain colored text-lg"></i> Pandas</span>
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Tools</p>
            <div className="flex flex-wrap gap-3">
              <span className="skill-pill"><i className="devicon-git-plain colored text-lg"></i> Git</span>
              <span className="skill-pill"><i className="devicon-github-original text-lg text-black"></i> GitHub</span>
              <span className="skill-pill"><i className="devicon-vscode-plain colored text-lg"></i> VS Code</span>
              <span className="skill-pill"><i className="devicon-jupyter-plain colored text-lg"></i> Jupyter</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
