import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Splash() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 80);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[10000] bg-dark-bg text-white flex flex-col justify-between p-8 sm:p-16 select-none font-sans"
        >
          {/* Top Info */}
          <div className="flex items-center justify-between text-xs font-mono text-gray-400">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
              SYSTEM INITIALIZING
            </span>
            <span>AI & DATA SCIENCE PORTFOLIO</span>
          </div>

          {/* Center Brand Counter */}
          <div className="my-auto">
            <h1 className="text-6xl sm:text-9xl font-extrabold font-display tracking-tight text-white mb-4">
              {progress}%
            </h1>
            <div className="w-full max-w-md h-1.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-amber-500 to-emerald-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Bottom Info */}
          <div className="flex items-center justify-between text-xs font-mono text-gray-500">
            <span>DESIGNED WITH EDITORIAL PRECISISION</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
