
import React from 'react';
import { PROFILE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 bg-white dark:bg-slate-900/20 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-20 text-center">
          <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-2">History</span>
          <h2 className="text-4xl font-black mb-4 tracking-tight">Professional Path</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full mb-6"></div>
        </div>

        <div className="space-y-16 relative">
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800"></div>

          {PROFILE.experiences.map((exp, index) => (
            <div key={exp.id} className="relative group cursor-pointer">
              <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 top-0 w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-blue-600 group-hover:scale-150 transition-all duration-300 z-10 border-4 border-white dark:border-slate-950"></div>
              
              <div className={`ml-8 md:ml-0 md:w-[45%] ${index % 2 === 0 ? 'md:mr-auto md:text-right md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 group-hover:border-blue-500/50 group-hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1">
                  <span className="inline-block px-4 py-1.5 bg-white dark:bg-slate-800 rounded-full text-[10px] font-black tracking-widest text-slate-500 dark:text-slate-400 mb-4 shadow-sm group-hover:text-blue-600 transition-colors">
                    {exp.period}
                  </span>
                  
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-1 tracking-tight">{exp.role}</h3>
                  <div className="text-blue-600 font-bold text-sm mb-6 uppercase tracking-wider">{exp.company}</div>
                  
                  <ul className={`space-y-4 list-none ${index % 2 === 0 ? 'md:flex md:flex-col md:items-end' : ''}`}>
                    {exp.description.map((item, i) => (
                      <li key={i} className={`flex items-start text-slate-600 dark:text-slate-400 text-sm leading-relaxed ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <span className={`text-blue-500 font-bold shrink-0 ${index % 2 === 0 ? 'md:ml-3' : 'md:mr-3'} mt-0.5`}>•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
