
import React, { useState } from 'react';
import { PROFILE } from '../constants';

const Contact: React.FC = () => {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => setIsSent(false), 5000);
  };

  return (
    <section id="contact" className="py-28 px-4 bg-slate-50 dark:bg-slate-950 overflow-hidden relative scroll-mt-20">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight leading-none text-slate-900 dark:text-white">
              Let's build <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">extraordinary</span>.
            </h2>
            <p className="text-xl text-slate-500 dark:text-slate-400 mb-12 leading-relaxed max-w-lg font-medium">
              Ready to elevate your network infrastructure with AI-driven intelligence? Let's connect.
            </p>
            
            <div className="space-y-6">
              {[
                { label: 'Direct Email', value: PROFILE.email, href: `mailto:${PROFILE.email}`, icon: '📧' },
                { label: 'LinkedIn Network', value: 'Connect Professionally', href: PROFILE.linkedin, icon: '🔗' }
              ].map((item) => (
                <a 
                  key={item.label}
                  href={item.href}
                  target={item.label.includes('LinkedIn') ? '_blank' : undefined}
                  className="flex items-center space-x-6 p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-blue-500 hover:shadow-2xl transition-all group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-xl flex items-center justify-center text-xl group-hover:scale-110 group-hover:rotate-6 transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mb-1">{item.label}</p>
                    <p className="text-lg font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-10 md:p-12 rounded-[3rem] shadow-2xl border border-slate-100 dark:border-slate-800 relative group">
            {isSent ? (
              <div className="h-[350px] flex flex-col items-center justify-center text-center space-y-6 animate-[fade-in_0.5s_ease-out]">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center text-4xl animate-bounce">✅</div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white">Message Received</h3>
                  <p className="text-slate-500 dark:text-slate-400 font-medium">Chima will get back to you shortly!</p>
                </div>
                <button 
                  onClick={() => setIsSent(false)}
                  className="text-blue-600 font-black uppercase tracking-widest text-xs hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input required type="text" className="w-full bg-slate-50 dark:bg-slate-800 border-2 border-transparent rounded-2xl p-4 focus:ring-0 focus:border-blue-500 outline-none font-medium transition-all" placeholder="Name" />
                  <input required type="email" className="w-full bg-slate-50 dark:bg-slate-800 border-2 border-transparent rounded-2xl p-4 focus:ring-0 focus:border-blue-500 outline-none font-medium transition-all" placeholder="Email" />
                </div>
                <textarea required rows={4} className="w-full bg-slate-50 dark:bg-slate-800 border-2 border-transparent rounded-2xl p-4 focus:ring-0 focus:border-blue-500 outline-none font-medium transition-all resize-none" placeholder="Message"></textarea>
                <button type="submit" className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-[0.2em] hover:bg-blue-700 hover:scale-[1.02] transition-all active:scale-95 text-sm shadow-xl shadow-blue-500/20">
                  Send Now
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
