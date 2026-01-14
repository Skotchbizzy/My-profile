
import React from 'react';
import { PROFILE } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-4 bg-slate-50 dark:bg-slate-950 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-20 text-center">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2">Education</span>
          <h2 className="text-4xl font-black mb-4 tracking-tight">Academic Foundations</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full mb-6"></div>
        </div>

        <div className="space-y-8">
          {PROFILE.education.map((edu) => (
            <div 
              key={edu.id} 
              className="group relative bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 transition-all duration-500 hover:shadow-2xl hover:border-blue-500/30 overflow-hidden cursor-pointer"
            >
              <div className="absolute top-0 right-0 p-8 text-6xl text-slate-100 dark:text-slate-800 font-black group-hover:text-blue-500/10 transition-colors duration-500 select-none">
                {edu.period.includes('Ongoing') ? 'NOW' : 'EDU'}
              </div>
              
              <div className="relative z-10">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-blue-600 font-extrabold text-xl group-hover:translate-x-2 transition-transform duration-300">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="px-5 py-2 bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-2xl text-xs font-black uppercase tracking-[0.2em] shadow-lg group-hover:scale-110 transition-transform">
                    {edu.period}
                  </div>
                </div>
                
                {edu.description && (
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-lg font-medium italic border-l-4 border-blue-600/30 pl-6 py-2 group-hover:border-blue-600 transition-all duration-500">
                    {edu.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
