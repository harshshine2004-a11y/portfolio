import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Info, ArrowUpRight } from 'lucide-react';
import { projectCategories, projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects =
    selectedCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category.includes(selectedCategory));

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-noise">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-mono mb-3">
            <span>04 // FEATURED ARCHITECTURES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-gray-900 dark:text-white mb-4">
            AI & Web Engineering <span className="text-gradient-gold">Showcase</span>.
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-base">
            Select a category to filter through computer vision models, generative AI engines, and full-stack web applications.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {projectCategories.map((category) => {
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

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group glass-card rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 hover:border-amber-500/50 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  {/* Card Image Container */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-dark-bg/20 to-transparent opacity-80" />

                    {/* Featured Badge */}
                    {project.featured && (
                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-[10px] font-mono font-extrabold uppercase tracking-wider shadow-md">
                        ★ Featured
                      </span>
                    )}

                    {/* Category Tags */}
                    <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-1.5">
                      {project.category.slice(0, 3).map((cat) => (
                        <span
                          key={cat}
                          className="px-2.5 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-white font-mono text-[10px]"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Info Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-1 group-hover:text-amber-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 mb-3">
                      {project.subtitle}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3 mb-4">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md bg-black/5 dark:bg-white/5 text-[11px] font-mono text-gray-600 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons Bar */}
                <div className="px-6 pb-6 pt-0 flex items-center justify-between border-t border-black/5 dark:border-white/5 mt-auto">
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Repository"
                        className="p-2 rounded-xl bg-black/5 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:text-amber-500 hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live Demo"
                        className="p-2 rounded-xl bg-black/5 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:text-amber-500 hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-amber-500/10 text-amber-500 hover:bg-amber-500 hover:text-slate-950 text-xs font-bold transition-all duration-300"
                  >
                    <span>View Details</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
