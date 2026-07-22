import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, ChevronLeft, ChevronRight, X, CheckCircle2 } from 'lucide-react';
import { certificatesData } from '../data/portfolioData';

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="certificates" className="py-24 relative overflow-hidden bg-noise">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Slider Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-mono mb-3">
              <span>06 // CREDENTIALS & SPECIALIZATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-gray-900 dark:text-white">
              Verified <span className="text-gradient-gold">Certifications</span>.
            </h2>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="p-3 rounded-full glass-card border border-black/10 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:text-amber-500 hover:border-amber-500 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="p-3 rounded-full glass-card border border-black/10 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:text-amber-500 hover:border-amber-500 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-6 overflow-x-auto pb-6 pt-2 no-scrollbar snap-x snap-mandatory"
        >
          {certificatesData.map((cert) => (
            <motion.div
              key={cert.id}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedCert(cert)}
              className="w-[300px] sm:w-[360px] flex-shrink-0 snap-start cursor-pointer glass-card rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Certificate Image Frame */}
                <div className="aspect-[16/10] overflow-hidden relative group">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-transparent to-transparent opacity-60" />
                  <div className="absolute top-4 right-4 p-2 rounded-xl bg-black/50 backdrop-blur-md text-amber-400">
                    <Award size={18} />
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 line-clamp-1">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 mb-4">
                    {cert.issuer} • {cert.issueDate}
                  </p>

                  {/* Skills Covered Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {cert.skillsCovered.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded-md bg-black/5 dark:bg-white/5 text-[10px] font-mono text-gray-600 dark:text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Click Hint */}
              <div className="px-6 py-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs font-mono text-amber-500">
                <span>Click to Preview Credential</span>
                <ExternalLink size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Preview Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl rounded-3xl glass-card border border-white/20 p-6 sm:p-8 bg-dark-bg/95 dark:bg-dark-bg/95 light:bg-light-bg/95 text-dark-text shadow-2xl z-10 my-auto"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-black/10 dark:bg-white/10 text-gray-400 hover:text-white"
              >
                <X size={20} />
              </button>

              <div className="aspect-video rounded-2xl overflow-hidden mb-6 border border-black/10 dark:border-white/10">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-1">
                {selectedCert.title}
              </h2>
              <p className="text-sm font-mono text-emerald-500 mb-4">
                Issued by {selectedCert.issuer} ({selectedCert.issueDate})
              </p>

              <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 mb-6 font-mono text-xs text-gray-600 dark:text-gray-300">
                <p>Credential ID: {selectedCert.credentialId}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase text-gray-500 dark:text-gray-400 mb-2">
                  Skills & Concepts Validated
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCert.skillsCovered.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-xl bg-amber-500/10 text-amber-500 text-xs font-mono flex items-center gap-1.5"
                    >
                      <CheckCircle2 size={12} />
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={selectedCert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-emerald-500 text-slate-950 font-bold text-xs shadow-lg hover:scale-105 transition-transform"
              >
                <span>Verify Official Credential</span>
                <ExternalLink size={16} />
              </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
