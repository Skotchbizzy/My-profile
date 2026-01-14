
import React from 'react';
import { PROFILE } from '../constants';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 bg-slate-50 dark:bg-slate-950 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2">Key Highlights</span>
          <h2 className="text-4xl font-black mb-4 tracking-tight">Core Achievements</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROFILE.achievements.map((item) => (
            <div 
              key={item.id} 
              className="group relative bg-white dark:bg-slate-900 p-10 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 dark:border-slate-800 hover:-translate-y-3 cursor-pointer"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-t-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="text-5xl mb-8 group-hover:scale-125 transition-transform duration-500 inline-block">
                {item.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {item.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-base font-medium">
                {item.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">{item.date}</span>
                <span className="text-blue-600 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500 font-bold">Details →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
