import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Sparkles, Terminal, Code2, Brain, ChevronDown, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ isDarkMode, onHireMeClick, onResumeClick }) {
  // Custom Typewriter Effect
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = personalInfo.typewriterRoles[currentRoleIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayedText === currentRole) {
      typingSpeed = 2000; // Pause at full word
      const timer = setTimeout(() => setIsDeleting(true), typingSpeed);
      return () => clearTimeout(timer);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % personalInfo.typewriterRoles.length);
      typingSpeed = 400;
    }

    const timer = setTimeout(() => {
      setDisplayedText(
        isDeleting
          ? currentRole.substring(0, displayedText.length - 1)
          : currentRole.substring(0, displayedText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-noise"
    >
      {/* Ambient Gradient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text & Hero Content */}
        <div className="lg:col-span-7 flex flex-col items-start pt-6">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono tracking-wide mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>{personalInfo.statusBadge || "AVAILABLE FOR AI & DATA SCIENCE PROJECTS"}</span>
          </motion.div>

          {/* Main Editorial Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight font-display text-gray-900 dark:text-white leading-[1.08] mb-4"
          >
            {personalInfo.heroTitleLine1 || "Where"} <br />
            <span className="text-gradient-gold">{personalInfo.heroTitleLine2 || "Artificial Intelligence"}</span> <br />
            {personalInfo.heroTitleLine3 && (
              <>
                <span>{personalInfo.heroTitleLine3}</span> <br />
              </>
            )}
            <span className="text-gradient-green">{personalInfo.heroTitleLine4 || "Innovation."}</span>
          </motion.h1>

          {/* Animated Typewriter Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-10 sm:h-12 flex items-center mb-6"
          >
            <span className="text-gray-500 dark:text-gray-400 font-mono text-sm sm:text-lg mr-2">&gt;</span>
            <span className="text-amber-600 dark:text-amber-400 font-mono text-base sm:text-xl font-bold tracking-tight">
              {displayedText}
            </span>
            <span className="w-2 h-5 sm:h-6 ml-1 bg-amber-500 animate-pulse" />
          </motion.div>

          {/* Brief Bio Summary */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl leading-relaxed mb-8"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-emerald-500 text-slate-950 font-bold text-sm tracking-wide shadow-xl shadow-amber-500/20 hover:shadow-amber-500/35 hover:scale-[1.02] active:scale-98 transition-all duration-300"
            >
              <span>Explore Featured Work</span>
              <ArrowDownRight size={18} className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
            </a>

            <button
              onClick={onHireMeClick}
              className="px-7 py-3.5 rounded-full glass-card text-gray-800 dark:text-gray-200 font-semibold text-sm hover:border-amber-500/50 hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300"
            >
              Get In Touch
            </button>

            <button
              onClick={onResumeClick}
              className="px-5 py-3.5 rounded-full glass-card text-gray-600 dark:text-gray-300 font-medium text-xs sm:text-sm hover:text-amber-500 dark:hover:text-amber-400 transition-colors flex items-center gap-2"
            >
              <FileText size={16} />
              <span>Resume</span>
            </button>
          </motion.div>
        </div>

        {/* Right Column: Animated Profile Card Placeholder */}
        <div className="lg:col-span-5 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-md"
          >
            {/* Glowing outer aura frame */}
            <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-amber-500 via-emerald-500 to-amber-400 opacity-30 blur-xl animate-pulse" />

            <div className="relative glass-card rounded-3xl p-6 overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl">
              {/* Profile Image Frame */}
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 group">
                <img
                  src={personalInfo.avatarImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-bold text-lg">{personalInfo.name}</h3>
                    <p className="text-amber-400 font-mono text-xs">{personalInfo.title}</p>
                  </div>
                  <div className="p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-emerald-400">
                    <Brain size={20} />
                  </div>
                </div>
              </div>

              {/* Floating Mini Tech Highlights */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center gap-2.5">
                  <Terminal size={18} className="text-amber-500" />
                  <div>
                    <p className="text-[10px] uppercase font-mono text-gray-500 dark:text-gray-400">Core Engine</p>
                    <p className="text-xs font-bold text-gray-800 dark:text-gray-200">PyTorch & FastAPI</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center gap-2.5">
                  <Code2 size={18} className="text-emerald-500" />
                  <div>
                    <p className="text-[10px] uppercase font-mono text-gray-500 dark:text-gray-400">Frontend</p>
                    <p className="text-xs font-bold text-gray-800 dark:text-gray-200">React 18 & Vite</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono tracking-widest text-gray-400 dark:text-gray-500 uppercase">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="text-amber-500 dark:text-amber-400"
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
