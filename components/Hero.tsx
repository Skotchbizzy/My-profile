
import React from 'react';
import { PROFILE } from '../constants';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="pt-40 pb-24 px-4 min-h-screen flex items-center justify-center relative overflow-hidden scroll-mt-0">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
        
        <div className="mb-12 opacity-0 animate-[fade-in_1s_ease-out_forwards]">
          <span className="bg-blue-600/10 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 px-8 py-3 rounded-2xl text-[10px] font-black tracking-[0.3em] uppercase border border-blue-600/20 flex items-center gap-4 shadow-xl shadow-blue-500/5">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
            </span>
            CEO & STRATEGIST
          </span>
        </div>

        <div className="space-y-10">
          <h1 className="text-6xl md:text-9xl font-black mb-6 tracking-tighter leading-[0.9] opacity-0 animate-[fade-in-up_1s_ease-out_0.2s_forwards]">
            <span className="text-slate-900 dark:text-white">I'm </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 bg-[length:200%_auto] animate-gradient block mt-2">
              {PROFILE.name}
            </span>
          </h1>
          
          <div className="space-y-6 opacity-0 animate-[fade-in-up_1s_ease-out_0.4s_forwards]">
            <p className="text-2xl md:text-4xl font-bold text-slate-800 dark:text-slate-200 max-w-4xl mx-auto tracking-tight">
              {PROFILE.title}
            </p>
            <div className="w-32 h-2 bg-blue-600 mx-auto rounded-full shadow-lg shadow-blue-500/50"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium opacity-0 animate-[fade-in-up_1s_ease-out_0.6s_forwards]">
            {PROFILE.bio}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mt-20 opacity-0 animate-[fade-in-up_1s_ease-out_0.8s_forwards]">
          <button
            onClick={() => scrollToSection('contact')}
            className="group relative px-14 py-6 bg-blue-600 text-white rounded-[2rem] font-black uppercase tracking-widest overflow-hidden shadow-2xl hover:shadow-blue-500/40 transition-all active:scale-95 cursor-pointer"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            <span className="relative">Start Consulting</span>
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="px-14 py-6 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 text-slate-900 dark:text-white rounded-[2rem] font-black uppercase tracking-widest hover:border-blue-600 dark:hover:border-blue-500 transition-all active:scale-95 shadow-xl cursor-pointer"
          >
            Experience
          </button>
        </div>
        
        <div className="mt-32 flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-0 animate-[fade-in_1.5s_ease-out_1s_forwards]">
          {[
            { name: 'GitHub', url: PROFILE.github },
            { name: 'LinkedIn', url: PROFILE.linkedin },
            { name: 'Email', url: `mailto:${PROFILE.email}` }
          ].map((link, i) => (
            <React.Fragment key={link.name}>
              <a 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group text-[10px] font-black tracking-[0.3em] uppercase text-slate-400 hover:text-blue-600 transition-all flex items-center gap-2"
              >
                 <span className="w-1.5 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full group-hover:bg-blue-600 transition-colors"></span>
                 {link.name}
              </a>
              {i < 2 && <div className="hidden md:block w-1.5 h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vh] pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[160px] animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};

export default Hero;
