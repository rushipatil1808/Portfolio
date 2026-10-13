import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-white py-24 px-6 border-b border-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900">About <span className="text-coral">Me</span></h2>
          <div className="w-16 h-1.5 bg-coral/20 mx-auto mt-4 rounded-full"></div>
        </div>
        
        {/* Photo and Summary Row */}
        <div className="flex flex-col md:flex-row gap-16 items-center mb-16">
          {/* Left Side: Profile Image */}
          <div className="md:w-5/12 w-full">
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-gray-200 border border-gray-100 bg-gray-50 aspect-[4/5] relative group">
              <img 
                src="/profile.png" 
                alt="Rushikesh Patil" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-3xl"></div>
            </div>
          </div>

          {/* Right Side: Summary Content */}
          <div className="md:w-7/12 w-full">
            <h3 className="text-2xl font-bold text-coral mb-4">AI/ML Engineer &amp; Python Developer</h3>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed text-justify">
              <p>
                I'm <strong className="text-gray-900">Rushikesh Patil</strong>, a Computer Science and Engineering student specializing in <strong className="text-gray-900">Artificial Intelligence and Machine Learning</strong> at <strong className="text-gray-900">Parul University</strong>. I enjoy building practical AI-powered applications, intelligent agents, and Python-based solutions.
              </p>
              <p>
                My interests include <strong className="text-gray-900">Generative AI, LLMs, LangChain, machine learning, backend development</strong>, and solving real-world problems through software.
              </p>
              <p>
                I'm continuously improving my technical skills and looking for opportunities to contribute to meaningful AI/ML and software development projects.
              </p>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div>
          <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center text-white shadow-lg">
              <i className="fa-solid fa-graduation-cap text-lg"></i>
            </div>
            <h4 className="text-2xl font-bold text-gray-900">Education</h4>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Side: 12th */}
            <div className="bg-gray-50/50 rounded-2xl p-6 border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
              <h5 className="font-bold text-gray-900 mb-4 text-lg">Higher Secondary Education (Science)</h5>
              
              <div className="space-y-3 flex-grow text-sm md:text-base">
                <div className="flex py-2 border-b border-gray-200/50">
                  <span className="text-gray-500 font-medium w-1/3">College</span>
                  <span className="text-gray-800 font-medium w-2/3">Pratap College</span>
                </div>
                <div className="flex py-2 border-b border-gray-200/50">
                  <span className="text-gray-500 font-medium w-1/3">Location</span>
                  <span className="text-gray-800 font-medium w-2/3">Amalner, Maharashtra</span>
                </div>
                <div className="flex py-2 border-b border-gray-200/50">
                  <span className="text-gray-500 font-medium w-1/3">Percentage</span>
                  <span className="text-gray-800 font-medium w-2/3">72%</span>
                </div>
                <div className="flex py-2">
                  <span className="text-gray-500 font-medium w-1/3">Passing Year</span>
                  <span className="text-gray-800 font-medium w-2/3">2023</span>
                </div>
              </div>
            </div>

            {/* Right Side: B.Tech */}
            <div className="bg-gray-50/50 rounded-2xl p-6 border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
              <h5 className="font-bold text-gray-900 mb-4 text-lg">B.Tech - Computer Science & Engineering</h5>
              
              <div className="space-y-3 flex-grow text-sm md:text-base">
                <div className="flex py-2 border-b border-gray-200/50">
                  <span className="text-gray-500 font-medium w-1/3">Specialization</span>
                  <span className="text-gray-800 font-medium w-2/3">AI & ML</span>
                </div>
                <div className="flex py-2 border-b border-gray-200/50">
                  <span className="text-gray-500 font-medium w-1/3">College</span>
                  <span className="text-gray-800 font-medium w-2/3">Parul University</span>
                </div>
                <div className="flex py-2 border-b border-gray-200/50">
                  <span className="text-gray-500 font-medium w-1/3">Location</span>
                  <span className="text-gray-800 font-medium w-2/3">Vadodara, Gujarat</span>
                </div>
                <div className="flex py-2 border-b border-gray-200/50">
                  <span className="text-gray-500 font-medium w-1/3">CGPA</span>
                  <span className="text-gray-800 font-medium w-2/3">7.35 / 10.0</span>
                </div>
                <div className="flex py-2">
                  <span className="text-gray-500 font-medium w-1/3">Timeline</span>
                  <span className="text-gray-800 font-medium w-2/3">2023 - 2027</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


