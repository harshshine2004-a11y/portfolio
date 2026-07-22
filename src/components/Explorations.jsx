import React from 'react';
import { ExternalLink, Award } from 'lucide-react';
import { posts } from '../data/portfolioData';

export default function Explorations() {
  const leftColumnPosts = posts.filter((_, idx) => idx % 2 === 0);
  const rightColumnPosts = posts.filter((_, idx) => idx % 2 !== 0);

  return (
    <section
      id="explorations"
      aria-labelledby="explorations-heading"
      className="relative w-full bg-bg py-24 md:py-32 overflow-hidden select-none border-t border-stroke/30 gsap-section"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24 gap-4">
          <div className="flex items-center gap-3 select-none">
            <span className="w-8 h-px bg-stroke"></span>
            <span className="text-xs text-muted uppercase tracking-[0.3em] font-semibold">Hackathons & Events</span>
            <span className="w-8 h-px bg-stroke"></span>
          </div>
          <h2 id="explorations-heading" className="text-4xl md:text-5xl lg:text-6xl font-light text-text-primary tracking-tight">
            Developer Explorations
          </h2>
          <p className="text-sm md:text-base text-muted max-w-md">
            Certifications, awards, and technical milestones from hackathons, launches, and speaking events.
          </p>
        </div>

        {/* Scattered Polaroid Cards board */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          
          {/* Left Column Feed */}
          <div className="space-y-12 md:space-y-20">
            {leftColumnPosts.map((post) => (
              <a
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`block relative max-w-[380px] mx-auto w-full bg-surface border border-stroke rounded-3xl overflow-hidden cursor-pointer group shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 ease-out ${post.rotation}`}
              >
                {/* Polaroid Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-bg/50 border-b border-stroke/50">
                  <img
                    src={post.image}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-sm text-[9px] text-[#75C5DE] font-mono font-bold tracking-widest px-2.5 py-1 rounded-full border border-white/10 uppercase">
                    {post.tag}
                  </div>
                </div>

                {/* Polaroid content */}
                <div className="p-6 space-y-3 bg-[#F4F1E8]">
                  <div className="flex justify-between items-center select-none text-[10px] text-muted font-mono tracking-wider font-semibold">
                    <span>{post.platform}</span>
                    <span>{post.date}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-text-primary group-hover:text-[#FF4500] transition-colors flex items-center gap-1.5 leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-xs text-muted leading-relaxed">
                    {post.description}
                  </p>

                  <div className="pt-2 border-t border-stroke/40 flex justify-between items-center text-[10px] text-[#75C5DE] font-mono tracking-widest uppercase font-bold">
                    <span>{post.linkText}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Right Column Feed */}
          <div className="space-y-12 md:space-y-20 md:pt-24">
            {rightColumnPosts.map((post) => (
              <a
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`block relative max-w-[380px] mx-auto w-full bg-surface border border-stroke rounded-3xl overflow-hidden cursor-pointer group shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 ease-out ${post.rotation}`}
              >
                {/* Polaroid Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-bg/50 border-b border-stroke/50">
                  <img
                    src={post.image}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-sm text-[9px] text-[#75C5DE] font-mono font-bold tracking-widest px-2.5 py-1 rounded-full border border-white/10 uppercase">
                    {post.tag}
                  </div>
                </div>

                {/* Polaroid content */}
                <div className="p-6 space-y-3 bg-[#F4F1E8]">
                  <div className="flex justify-between items-center select-none text-[10px] text-muted font-mono tracking-wider font-semibold">
                    <span>{post.platform}</span>
                    <span>{post.date}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-text-primary group-hover:text-[#FF4500] transition-colors flex items-center gap-1.5 leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-xs text-muted leading-relaxed">
                    {post.description}
                  </p>

                  <div className="pt-2 border-t border-stroke/40 flex justify-between items-center text-[10px] text-[#75C5DE] font-mono tracking-widest uppercase font-bold">
                    <span>{post.linkText}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>
              </a>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
