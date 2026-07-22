import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, Trophy, Users, GitFork, Calendar, MapPin, Building2 } from 'lucide-react';
import { experienceCategories, experienceData } from '../data/portfolioData';

// Map category to icon
const categoryIcons = {
  Internships: Briefcase,
  Education: GraduationCap,
  Hackathons: Trophy,
  Leadership: Users,
  'Open Source': GitFork,
};

export default function Experience() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredExperience =
    selectedCategory === 'All'
      ? experienceData
      : experienceData.filter((item) => item.category === selectedCategory);

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-noise">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-mono mb-3">
            <span>03 // CHRONOLOGY & MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-gray-900 dark:text-white mb-4">
            Career <span className="text-gradient-gold">Timeline</span>.
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base">
            Alternating chronological journey showcasing internships, education, hackathons, and engineering leadership.
          </p>
        </div>

        {/* Timeline Category Filters */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-16 no-scrollbar">
          {experienceCategories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-500 to-cyan-500 text-slate-950 shadow-md scale-105'
                    : 'bg-black/5 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-black/10 dark:hover:bg-white/10 hover:text-black dark:hover:text-white'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Alternating Centered Vertical Timeline */}
        <div className="relative">
          
          {/* Central Vertical Line (Visible on md and above in middle, left-aligned on mobile) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-cyan-400 via-amber-500 to-emerald-500 opacity-60" />

          <div className="space-y-12 md:space-y-16">
            <AnimatePresence mode="popLayout">
              {filteredExperience.map((item, index) => {
                const CategoryIcon = categoryIcons[item.category] || Briefcase;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={`${item.id}-${index}`}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                  >
                    {/* Centered Node Dot on Timeline */}
                    <div className="absolute left-4 md:left-1/2 top-8 -translate-x-1/2 w-6 h-6 rounded-full border-2 border-cyan-400 dark:border-amber-400 bg-white dark:bg-slate-950 shadow-lg shadow-cyan-500/30 flex items-center justify-center z-10 transition-transform duration-300 hover:scale-125">
                      <div className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-amber-400 animate-ping" />
                    </div>

                    {/* Card Content - Alternating Left / Right */}
                    <div
                      className={`pl-12 md:pl-0 ${
                        isEven
                          ? 'md:col-start-1 md:col-end-2 md:pr-12 md:text-left'
                          : 'md:col-start-2 md:col-end-3 md:pl-12 md:text-left'
                      }`}
                    >
                      <div className="group glass-card p-6 sm:p-8 rounded-[2rem] border border-black/10 dark:border-white/10 hover:border-cyan-400/50 dark:hover:border-amber-400/50 shadow-xl transition-all duration-500 hover:-translate-y-1">
                        
                        {/* Top Company & Icon Header */}
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div>
                            <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                              {item.organization}
                            </h3>
                            <p className="text-base font-bold text-cyan-600 dark:text-cyan-400 mt-0.5">
                              {item.role}
                            </p>
                          </div>

                          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <CategoryIcon size={22} />
                          </div>
                        </div>

                        {/* Date & Location Line */}
                        <div className="flex items-center gap-4 text-xs font-mono text-gray-500 dark:text-gray-400 mb-4">
                          <span className="flex items-center gap-1">
                            <Calendar size={13} className="text-cyan-500" />
                            {item.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={13} className="text-amber-500" />
                            {item.location}
                          </span>
                        </div>

                        {/* Description Summary */}
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                          {item.description}
                        </p>

                        {/* Key Bullets */}
                        <ul className="space-y-2 mb-6">
                          {item.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Tech Stack Badges */}
                        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-black/5 dark:border-white/5">
                          {item.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 rounded-xl bg-black/5 dark:bg-white/5 text-xs font-mono text-gray-700 dark:text-gray-300 border border-black/5 dark:border-white/5"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Empty placeholder column for layout balance */}
                    <div className="hidden md:block" />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
