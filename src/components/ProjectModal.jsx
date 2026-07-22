import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Layers, CheckCircle2, AlertTriangle, Lightbulb, Code2 } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-hidden">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 dark:bg-black/85 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window Container - High Contrast in both Light & Dark Mode */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          data-lenis-prevent="true"
          className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-3xl p-6 sm:p-8 bg-white dark:bg-slate-950 text-gray-900 dark:text-white shadow-2xl z-10 my-auto custom-scrollbar border border-black/10 dark:border-white/20"
        >
          {/* Close Button Header */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-black/5 dark:bg-white/10 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-amber-500/20 hover:scale-110 transition-all border border-black/10 dark:border-white/10"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {/* Modal Header */}
          <div className="pr-12 mb-6">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              {project.category && project.category.map((cat) => (
                <span
                  key={cat}
                  className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 text-xs font-mono font-semibold border border-amber-500/20"
                >
                  {cat}
                </span>
              ))}
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-gray-900 dark:text-white mb-2 tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm font-mono text-emerald-700 dark:text-emerald-400 font-bold">{project.subtitle || project.description}</p>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {project.gallery && project.gallery.length > 0 ? (
              project.gallery.map((imgUrl, i) => (
                <div key={i} className="aspect-video rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-md bg-gray-100 dark:bg-black/40">
                  <img src={imgUrl} alt={`${project.title} screenshot ${i}`} className="w-full h-full object-cover" />
                </div>
              ))
            ) : (
              <div className="col-span-2 aspect-video rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-md bg-gray-100 dark:bg-black/40">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
            )}
          </div>

          {/* Detailed Content Sections */}
          <div className="space-y-8">
            
            {/* Overview Section */}
            {project.overview && (
              <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl border border-black/10 dark:border-white/10">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <Layers size={18} className="text-amber-600 dark:text-amber-400" />
                  <span>Project Overview</span>
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-sans font-medium">
                  {project.overview}
                </p>
              </div>
            )}

            {/* Problem vs Solution Grid */}
            {(project.problem || project.solution) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.problem && (
                  <div className="p-5 rounded-2xl bg-red-500/10 dark:bg-red-500/10 border border-red-500/20">
                    <h4 className="text-sm font-bold text-red-700 dark:text-red-400 mb-2 flex items-center gap-2">
                      <AlertTriangle size={16} />
                      <span>The Challenge & Problem</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-800 dark:text-gray-300 leading-relaxed font-medium">
                      {project.problem}
                    </p>
                  </div>
                )}

                {project.solution && (
                  <div className="p-5 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/10 border border-emerald-500/20">
                    <h4 className="text-sm font-bold text-emerald-700 dark:text-emerald-400 mb-2 flex items-center gap-2">
                      <Lightbulb size={16} />
                      <span>Engineering Solution</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-800 dark:text-gray-300 leading-relaxed font-medium">
                      {project.solution}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Technical Obstacles / Key Highlights */}
            {project.challenges && project.challenges.length > 0 && (
              <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl border border-black/10 dark:border-white/10">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-emerald-600 dark:text-cyan-400" />
                  <span>Key Technical Implementation Highlights</span>
                </h3>
                <ul className="space-y-2.5">
                  {project.challenges.map((c, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-800 dark:text-gray-300 font-medium">
                      <span className="w-2 h-2 rounded-full bg-amber-500 dark:bg-cyan-400 mt-1.5 flex-shrink-0" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack List */}
            {project.techStack && (
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-3 flex items-center gap-2 font-bold">
                  <Code2 size={14} className="text-amber-600 dark:text-amber-400" />
                  <span>Technologies & Frameworks Used</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3.5 py-1.5 rounded-xl bg-black/5 dark:bg-white/10 text-xs font-mono font-semibold text-gray-900 dark:text-gray-200 border border-black/10 dark:border-white/10 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Footer External Link Action Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-black/10 dark:border-white/10">
              <div className="flex flex-wrap items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-black/10 dark:bg-white/10 hover:bg-amber-500 dark:hover:bg-amber-500 text-gray-900 dark:text-white hover:text-slate-950 dark:hover:text-slate-950 text-xs font-bold transition-all border border-black/10 dark:border-white/10"
                  >
                    <Github size={16} />
                    <span>View Repository on GitHub</span>
                  </a>
                )}

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-emerald-500 text-slate-950 text-xs font-bold shadow-lg hover:scale-105 transition-all"
                  >
                    <ExternalLink size={16} />
                    <span>Open Live Demo</span>
                  </a>
                )}
              </div>

              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-2xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white text-xs font-mono transition-all border border-black/5 dark:border-white/5"
              >
                Close Window
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
