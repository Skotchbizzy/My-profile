
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ['about', 'achievements', 'experience', 'education', 'skills', 'contact'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setIsDarkMode(!isDarkMode);
  };

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Achievements', id: 'achievements' },
    { name: 'Experience', id: 'experience' },
    { name: 'Education', id: 'education' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'py-4 glass-morphism shadow-xl border-b border-slate-200/50 dark:border-slate-800/50' 
        : 'py-8 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <button 
          onClick={(e) => scrollToSection(e, 'about')}
          className="text-2xl font-black tracking-tighter text-blue-600 dark:text-blue-400 group cursor-pointer"
        >
          CHIMA<span className="text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">.O</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-2">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={(e) => scrollToSection(e, link.id)}
              className={`relative px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 group cursor-pointer ${
                activeSection === link.id 
                ? 'text-blue-600' 
                : 'text-slate-500 dark:text-slate-400 hover:text-blue-600'
              }`}
            >
              <span className="relative z-10">{link.name}</span>
              <span className={`absolute bottom-0 left-4 h-[3px] bg-blue-600 transition-all duration-500 rounded-full ${
                activeSection === link.id ? 'w-[calc(100%-32px)] opacity-100' : 'w-0 opacity-0 group-hover:w-[calc(100%-32px)] group-hover:opacity-50'
              }`}></span>
            </button>
          ))}
          
          <div className="w-px h-6 bg-slate-200 dark:bg-slate-800 mx-4"></div>
          
          <button
            onClick={toggleDarkMode}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 hover:text-white transition-all active:scale-90 shadow-sm"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? '🌞' : '🌙'}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center space-x-3">
          <button onClick={toggleDarkMode} className="p-2 text-xl bg-slate-100 dark:bg-slate-800 rounded-lg">
            {isDarkMode ? '🌞' : '🌙'}
          </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-3 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-500/30 active:scale-95 transition-transform"
          >
            <div className="w-5 h-5 flex flex-col justify-around">
              <span className={`h-0.5 w-full bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`h-0.5 w-full bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`h-0.5 w-full bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-all duration-500 ease-in-out overflow-hidden ${
        isMenuOpen ? 'max-h-screen py-8 opacity-100 shadow-2xl' : 'max-h-0 py-0 opacity-0'
      }`}>
        <div className="flex flex-col items-center space-y-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={(e) => scrollToSection(e, link.id)}
              className={`text-sm font-black uppercase tracking-[0.3em] transition-all py-2 border-b-2 cursor-pointer ${
                activeSection === link.id ? 'text-blue-600 border-blue-600' : 'text-slate-500 border-transparent'
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
