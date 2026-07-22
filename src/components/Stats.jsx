import React from 'react';
import { stats } from '../data/portfolioData';

export default function Stats() {
  return (
    <section className="bg-bg py-20 md:py-32 border-t border-stroke/30 relative overflow-hidden gsap-section">
      {/* Central lighting ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-[#75C5DE]/10 blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 md:divide-x md:divide-stroke/40">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center px-4 md:first:pl-0 md:last:pr-0 gsap-reveal-item"
              style={{ opacity: 1 }}
            >
              {/* Metric Value Container */}
              <div className="text-6xl sm:text-7xl md:text-8xl font-sans font-bold text-text-primary tracking-tight tabular-nums relative group select-none pr-4 md:pr-0 cursor-default">
                {/* Glowing underlay on hover */}
                <span className="absolute inset-0 text-[#FF4500] opacity-0 group-hover:opacity-45 transition-opacity duration-500 blur-xl pointer-events-none">
                  {stat.value}
                </span>
                {/* Primary text */}
                <span className="relative z-10 text-text-primary transition-colors duration-500 group-hover:text-[#FF4500]">
                  {stat.value}
                </span>
              </div>

              {/* Metric Label */}
              <div className="mt-3 flex items-center gap-2 select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#75C5DE] to-[#5AA8C5] animate-pulse"></span>
                <span className="text-xs sm:text-sm text-muted uppercase tracking-[0.25em] font-semibold">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
