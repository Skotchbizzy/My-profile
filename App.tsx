
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import AIAssistant from './components/AIAssistant';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        <Achievements />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>

      <footer className="py-12 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© 2024 Chima Obingonye. Built with React & Gemini AI.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button 
              onClick={scrollToTop}
              className="hover:text-blue-600 transition-colors cursor-pointer text-xs font-bold uppercase tracking-widest"
            >
              Back to Top
            </button>
            <a 
              href="https://www.linkedin.com/in/chima-obingonye-3b7a3bb8" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-600 transition-colors text-xs font-bold uppercase tracking-widest"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>

      <ScrollToTop />
      <AIAssistant />
    </div>
  );
};

export default App;
