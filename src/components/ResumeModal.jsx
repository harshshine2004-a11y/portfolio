import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  // Updated Resume PDF
  const resumePath = "/Harsh_Copy_%20(1).pdf";

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 lg:p-8 overflow-hidden">

        {/* Dark Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          data-lenis-prevent="true"
          className="relative w-full max-w-5xl h-[92vh] rounded-2xl bg-white text-slate-900 shadow-2xl z-10 overflow-hidden border border-gray-300 font-sans"
        >

          {/* Top Control Bar */}
          <div className="h-16 z-20 px-4 sm:px-6 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 shadow-md">

            {/* Title */}
            <span className="text-xs sm:text-sm font-mono font-bold tracking-wider uppercase text-amber-400">
              📄 Official Resume Document View
            </span>

            {/* Controls */}
            <div className="flex items-center gap-2 sm:gap-3">

              {/* Download */}
              <a
                href={resumePath}
                download="Harsh_Kumar_Resume.pdf"
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs shadow transition-all"
              >
                <Download size={14} />
                <span>Download Resume</span>
              </a>

              {/* Open in New Tab */}
              <a
                href={resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-gray-200 hover:text-white text-xs transition-all"
                title="Open Resume in New Tab"
              >
                <ExternalLink size={14} />
                <span>Open</span>
              </a>

              {/* Close */}
              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors"
                title="Close"
              >
                <X size={18} />
              </button>

            </div>
          </div>

          {/* Updated Resume PDF */}
          <div className="w-full h-[calc(92vh-64px)] bg-gray-200">
            <iframe
              src={resumePath}
              title="Harsh Kumar Updated Resume"
              className="w-full h-full border-0"
            />
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
