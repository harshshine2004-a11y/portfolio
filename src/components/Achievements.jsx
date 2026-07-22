import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Award, Linkedin, ExternalLink, CheckCircle2, Star, Sparkles, X } from 'lucide-react';
import { achievementCategories, achievementsAndCertificatesData } from '../data/portfolioData';

export default function Achievements() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedModalCert, setSelectedModalCert] = useState(null);

  const filteredItems =
    selectedCategory === 'All'
      ? achievementsAndCertificatesData
      : achievementsAndCertificatesData.filter((item) => item.type === selectedCategory);

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-noise">
      {/* Anchor for Certificates section link compatibility */}
      <div id="certificates" className="absolute top-0 left-0" />

      {/* Background ambient glow */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-bold mb-3 border border-emerald-500/20">
            <Sparkles size={13} />
            <span>05 // HONORS, RECOGNITIONS & CERTIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-gray-900 dark:text-white mb-4">
            Achievements, Honors & <span className="text-gradient-gold">Certifications</span>.
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base">
            Verified credentials, hackathon honors, leadership roles, and social recognition posts directly linked from LinkedIn.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {achievementCategories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-500 to-emerald-500 text-slate-950 shadow-md scale-105 font-bold'
                    : 'bg-black/5 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-black/10 dark:hover:bg-white/10 hover:text-black dark:hover:text-white border border-black/5 dark:border-white/10'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Combined Achievements & Certifications Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative glass-card p-6 sm:p-7 rounded-3xl border border-black/10 dark:border-white/10 hover:border-amber-500/50 hover:-translate-y-2 transition-all duration-500 bg-white dark:bg-slate-950/80 text-gray-900 dark:text-white shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Image Banner if available */}
                  {item.image && (
                    <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-5 border border-black/10 dark:border-white/10 relative group/img">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60" />
                      
                      {/* Top Type Badge */}
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-amber-400 font-mono text-[10px] font-bold border border-amber-400/20">
                        {item.type}
                      </span>
                    </div>
                  )}

                  {/* Top Bar: Title & Badge */}
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors leading-snug">
                      {item.title}
                    </h3>
                    {item.badge && (
                      <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-[11px] font-mono font-extrabold flex-shrink-0 border border-emerald-500/20">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Organization & Date */}
                  <p className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-semibold mb-3">
                    {item.organization} • {item.date}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4 font-medium">
                    {item.description}
                  </p>

                  {/* Skills / Key Highlights Badges */}
                  {item.skills && (
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-md bg-black/5 dark:bg-white/5 text-[11px] font-mono font-medium text-gray-800 dark:text-gray-300 border border-black/5 dark:border-white/10"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer Link Actions */}
                <div className="pt-4 border-t border-black/10 dark:border-white/10 flex items-center justify-between gap-3">
                  {/* LinkedIn Post Button */}
                  <a
                    href={item.linkedinUrl || "https://www.linkedin.com/in/harsh-kumar-ax/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600/10 hover:bg-blue-600 text-blue-700 dark:text-blue-400 hover:text-white text-xs font-bold font-mono transition-all border border-blue-500/20 shadow-sm"
                  >
                    <Linkedin size={14} />
                    <span>View LinkedIn Post</span>
                  </a>

                  {item.image && (
                    <button
                      onClick={() => setSelectedModalCert(item)}
                      className="p-2 rounded-xl bg-black/5 dark:bg-white/10 text-gray-600 dark:text-gray-300 hover:text-amber-500 transition-colors"
                      title="Preview Credential"
                    >
                      <ExternalLink size={15} />
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Certificate / Honor Preview Modal */}
      <AnimatePresence>
        {selectedModalCert && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedModalCert(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              data-lenis-prevent="true"
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl p-6 sm:p-8 bg-white dark:bg-slate-950 text-gray-900 dark:text-white shadow-2xl z-10 my-auto custom-scrollbar border border-black/10 dark:border-white/20"
            >
              <button
                onClick={() => setSelectedModalCert(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-black/10 dark:bg-white/10 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
              >
                <X size={20} />
              </button>

              <div className="aspect-video rounded-2xl overflow-hidden mb-6 border border-black/10 dark:border-white/10 bg-gray-100 dark:bg-black/40">
                <img
                  src={selectedModalCert.image}
                  alt={selectedModalCert.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-1">
                {selectedModalCert.title}
              </h2>
              <p className="text-sm font-mono text-emerald-700 dark:text-emerald-400 font-bold mb-4">
                {selectedModalCert.organization} ({selectedModalCert.date})
              </p>

              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-6 font-medium">
                {selectedModalCert.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-black/10 dark:border-white/10">
                <a
                  href={selectedModalCert.linkedinUrl || "https://www.linkedin.com/in/harsh-kumar-ax/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-blue-600 text-white font-bold text-xs shadow-lg hover:scale-105 transition-all"
                >
                  <Linkedin size={16} />
                  <span>Open LinkedIn Post / Credential</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
