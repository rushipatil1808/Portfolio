import React from 'react';

const Contact = () => {
  return (
    <footer id="contact" style={{ background: '#E87461' }} className="py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-white/70 text-xs uppercase tracking-widest font-bold mb-3">Get In Touch</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">Let's Build Something</h2>
        <p className="text-white/80 mb-10 max-w-md mx-auto">I'm actively looking for ML Engineer and AI Developer roles. Let's connect!</p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a href="mailto:rushipatil1808@gmail.com" id="email-link"
            className="flex items-center gap-2 bg-white text-coral font-semibold px-5 py-3 rounded-full shadow hover:shadow-md transition text-sm">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>
            rushipatil1808@gmail.com
          </a>
          <a href="https://linkedin.com/in/rushipatil1808" target="_blank" rel="noreferrer" id="linkedin-link"
            className="flex items-center gap-2 bg-white/20 text-white font-semibold px-5 py-3 rounded-full hover:bg-white/30 transition text-sm border border-white/30">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>
            LinkedIn
          </a>
          <a href="https://github.com/rushipatil1808" target="_blank" rel="noreferrer" id="github-link"
            className="flex items-center gap-2 bg-white/20 text-white font-semibold px-5 py-3 rounded-full hover:bg-white/30 transition text-sm border border-white/30">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.09.68-.22.68-.49v-1.72c-2.78.62-3.37-1.37-3.37-1.37-.46-1.19-1.12-1.5-1.12-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.36 9.36 0 0 1 12 7.43c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.35 4.81-4.58 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.59.69.49A10.27 10.27 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/></svg>
            GitHub
          </a>
          <a href="https://leetcode.com/u/rushipatil1808/" target="_blank" rel="noreferrer" id="leetcode-link"
            className="flex items-center gap-2 bg-white/20 text-white font-semibold px-5 py-3 rounded-full hover:bg-white/30 transition text-sm border border-white/30">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>
            LeetCode
          </a>
        </div>
        <p className="text-white/50 text-xs">© 2026 Rushikesh Patil · Made with ❤️ · Parul University, Vadodara</p>
      </div>
    </footer>
  );
};

export default Contact;
