
import React, { useEffect, useState } from 'react';
import { PROFILE } from '../constants';

const Skills: React.FC = () => {
  const categories = Array.from(new Set(PROFILE.skills.map(s => s.category)));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });

    const el = document.getElementById('skills');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 bg-white dark:bg-slate-900/40 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center mb-20 text-center">
          <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-2">Expertise</span>
          <h2 className="text-4xl font-black mb-4 tracking-tight">Technical Arsenal</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {categories.map((cat) => (
            <div 
              key={cat} 
              className="group bg-slate-50 dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 transition-all duration-500 hover:shadow-xl hover:bg-white dark:hover:bg-slate-800 hover:-translate-y-2 cursor-pointer"
            >
              <h3 className="text-sm font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.25em] mb-10 pb-4 border-b border-slate-200 dark:border-slate-800 group-hover:border-blue-500/30 transition-colors">
                {cat}
              </h3>
              
              <div className="space-y-8">
                {PROFILE.skills.filter(s => s.category === cat).map((skill) => (
                  <div key={skill.name} className="group/skill">
                    <div className="flex justify-between items-center text-sm mb-3">
                      <span className="font-bold text-slate-800 dark:text-slate-200 group-hover/skill:text-blue-600 transition-colors">{skill.name}</span>
                      <span className="text-[10px] font-black text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full transition-all duration-[1.5s] ease-out group-hover:shadow-[0_0_10px_rgba(37,99,235,0.5)]"
                        style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
