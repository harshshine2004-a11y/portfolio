import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, FileText, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Header({ isDarkMode, toggleTheme, onResumeClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Achievements & Certs', href: '#achievements', id: 'achievements' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = navLinks.map(link => document.getElementById(link.id)).filter(Boolean);
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.offsetTop <= scrollPos) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3 bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl border-b border-black/10 dark:border-white/10 shadow-lg'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Clean Text Branding */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-2 text-lg font-bold tracking-wider font-display"
        >
          <span className="text-gray-900 dark:text-white font-extrabold tracking-tight text-lg sm:text-xl font-display">
            {personalInfo.name}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-black/5 dark:bg-white/5 backdrop-blur-md p-1.5 rounded-full border border-black/10 dark:border-white/10">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-4 py-1.5 text-xs font-semibold tracking-wide rounded-full transition-colors duration-300 ${
                  isActive
                    ? 'text-amber-600 dark:text-amber-400 font-bold'
                    : 'text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-white dark:bg-slate-800/90 rounded-full shadow-sm -z-10 border border-black/5 dark:border-white/10"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Controls: Theme Toggle & Resume Button */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2.5 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors text-amber-600 dark:text-amber-400 border border-black/10 dark:border-white/10"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isDarkMode ? 'dark' : 'light'}
                initial={{ y: -10, opacity: 0, rotate: -45 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={{ y: 10, opacity: 0, rotate: 45 }}
                transition={{ duration: 0.2 }}
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </motion.div>
            </AnimatePresence>
          </button>

          {/* Resume CTA Button */}
          <button
            onClick={onResumeClick}
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-emerald-500 hover:from-amber-600 hover:to-emerald-600 text-slate-950 font-bold text-xs tracking-wide transition-all shadow-md hover:shadow-amber-500/20 active:scale-95"
          >
            <FileText size={14} />
            <span>Resume</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            className="lg:hidden p-2.5 rounded-xl bg-black/5 dark:bg-white/10 text-gray-800 dark:text-gray-200 border border-black/10 dark:border-white/10"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border-b border-black/10 dark:border-white/10 px-6 py-6 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold border border-amber-500/20'
                        : 'text-gray-800 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/5'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <Sparkles size={14} className="text-amber-500 animate-pulse" />}
                  </a>
                );
              })}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onResumeClick();
                }}
                className="mt-4 flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-emerald-500 text-slate-950 font-bold text-sm shadow-lg"
              >
                <FileText size={16} />
                <span>View Full Resume</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
