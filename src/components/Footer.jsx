import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-black/10 dark:border-white/10 bg-dark-bg/50 dark:bg-dark-bg/50 light:bg-light-bg/50 backdrop-blur-md overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          
          {/* Clean Text Branding */}
          <div className="flex items-center gap-3">
            <div>
              <p className="font-extrabold text-base text-gray-900 dark:text-white font-display">
                {personalInfo.name}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {personalInfo.title}
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-gray-600 dark:text-gray-400">
            <a href="#home" className="hover:text-amber-500 transition-colors">Home</a>
            <a href="#about" className="hover:text-amber-500 transition-colors">About</a>
            <a href="#skills" className="hover:text-amber-500 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-amber-500 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-amber-500 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-amber-500 transition-colors">Contact</a>
          </div>

          {/* Social Icons & Back to Top Button */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-xl bg-black/5 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-amber-500 transition-colors"
              >
                <Github size={16} />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-xl bg-black/5 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-amber-500 transition-colors"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={personalInfo.socials.email}
                aria-label="Email"
                className="p-2 rounded-xl bg-black/5 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-amber-500 transition-colors"
              >
                <Mail size={16} />
              </a>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="p-3 rounded-full bg-amber-500 text-slate-950 hover:bg-amber-400 hover:scale-110 active:scale-95 transition-all shadow-lg shadow-amber-500/20"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-6 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 dark:text-gray-400 gap-2">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p className="flex items-center gap-1 font-mono">
            <span>Engineered with React, Vite & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
