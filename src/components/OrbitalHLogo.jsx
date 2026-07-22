import React from 'react';

export default function OrbitalHLogo({ size = 'md' }) {
  const isSmall = size === 'sm';
  
  return (
    <div className={`relative ${isSmall ? 'w-9 h-9' : 'w-11 h-11'} flex items-center justify-center group cursor-pointer`}>
      {/* Outer Ambient Glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-500/20 via-emerald-500/20 to-cyan-500/20 blur-md group-hover:scale-125 transition-transform duration-500" />
      
      {/* Elliptical Orbit Ring 1 (45° Tilt) */}
      <div className="absolute inset-0.5 rounded-full border border-amber-500/40 rotate-[45deg] animate-[spin_6s_linear_infinite] pointer-events-none">
        {/* Spherical Particle 1 */}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_#F59E0B]" />
      </div>

      {/* Elliptical Orbit Ring 2 (-45° Tilt) */}
      <div className="absolute inset-0.5 rounded-full border border-emerald-500/40 -rotate-[45deg] animate-[spin_8s_linear_infinite_reverse] pointer-events-none">
        {/* Spherical Particle 2 */}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10B981]" />
      </div>

      {/* Elliptical Orbit Ring 3 (Horizontal 15° Tilt) */}
      <div className="absolute inset-1.5 rounded-full border border-cyan-400/30 rotate-[15deg] animate-[spin_10s_linear_infinite] pointer-events-none">
        {/* Spherical Particle 3 */}
        <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#06B6D4]" />
      </div>

      {/* Core Letter "H" Badge */}
      <div className={`relative z-10 ${isSmall ? 'w-6 h-6' : 'w-7 h-7'} rounded-full bg-gradient-to-tr from-amber-500 via-emerald-500 to-cyan-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
        <span className="text-slate-950 font-black font-display text-sm tracking-tighter">
          H
        </span>
      </div>
    </div>
  );
}
