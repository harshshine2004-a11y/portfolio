import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain,
  Eye,
  MessageSquareCode,
  Cpu,
  FileCode,
  Code2,
  Terminal,
  Database,
  Layout,
  Sparkles,
  Box,
  Server,
  Globe,
  Search,
  Layers,
  Container,
  Cloud,
  LineChart,
  GitBranch,
  Layers3
} from 'lucide-react';
import { skillCategories, skillsData } from '../data/portfolioData';

// Map string icon names to Lucide components
const iconMap = {
  Brain,
  Eye,
  MessageSquareCode,
  Cpu,
  FileCode,
  Code2,
  Terminal,
  Database,
  Layout,
  Sparkles,
  Box,
  Server,
  Globe,
  Search,
  Layers,
  Container,
  Cloud,
  LineChart,
  GitBranch,
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSkills =
    selectedCategory === 'All'
      ? skillsData
      : skillsData.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-noise">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono mb-3">
            <span>02 // TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-gray-900 dark:text-white mb-4">
            Interactive <span className="text-gradient-green">Skill Ecosystem</span>.
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-base">
            No static progress bars. Explore my technology stack across deep learning, computer vision, web engineering, and MLOps below.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {skillCategories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-500 to-emerald-500 text-slate-950 shadow-md scale-105'
                    : 'bg-black/5 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-black/10 dark:hover:bg-white/10 hover:text-black dark:hover:text-white'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const IconComponent = iconMap[skill.icon] || Layers3;
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative glass-card p-6 rounded-3xl border border-black/5 dark:border-white/10 hover:border-amber-500/40 hover:-translate-y-1.5 transition-all duration-300"
                >
                  {/* Glowing hover aura */}
                  <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-amber-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 blur transition-opacity duration-500 -z-10" />

                  {/* Top Bar: Icon & Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500/15 to-emerald-500/15 border border-amber-500/20 text-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent size={24} />
                    </div>

                    <span className="px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400 border border-black/5 dark:border-white/10">
                      {skill.level}% Proficiency
                    </span>
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors">
                    {skill.name}
                  </h3>

                  {/* Skill Description */}
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 leading-relaxed">
                    {skill.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-black/5 dark:border-white/5">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md bg-amber-500/5 dark:bg-white/5 text-[11px] font-mono text-gray-600 dark:text-gray-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
