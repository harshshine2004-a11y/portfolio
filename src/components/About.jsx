import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Brain, Cpu, Database, Eye, Award, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { personalInfo, statsData } from '../data/portfolioData';

// Count up counter component
function Counter({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const focusAreas = [
    { title: "Computer Vision", desc: "Object detection, YOLOv8, segmentation & multi-camera tracking.", icon: Eye },
    { title: "Generative AI & RAG", desc: "LangChain, LLM fine-tuning, vector database search & agents.", icon: Brain },
    { title: "Full Stack Web", desc: "React, Vite, Tailwind CSS, FastAPI & WebSocket services.", icon: Cpu },
    { title: "MLOps & Cloud", desc: "Docker, Kubernetes, AWS SageMaker & model quantization.", icon: Database }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-noise">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-mono mb-3">
            <span>01 // BACKGROUND & IDENTITY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-gray-900 dark:text-white">
            Engineering <span className="text-gradient-gold">Intelligent Systems</span> <br className="hidden sm:inline" />
            with Editorial Precision.
          </h2>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Column: Image & Decorative Frame */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden glass-card p-4 border border-black/10 dark:border-white/10"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative group">
                <img
                  src={personalInfo.heroImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-transparent to-transparent opacity-70" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 text-white">
                  <p className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">Location</p>
                  <p className="text-sm font-bold">{personalInfo.location}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Bio & Core Focus Grid */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Hi, I'm <span className="text-amber-500">{personalInfo.name}</span>
              </h3>

              {personalInfo.detailedBio.map((paragraph, idx) => (
                <p key={idx} className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}

              {/* Key Focus Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {focusAreas.map((area, idx) => {
                  const Icon = area.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl glass-card border border-black/5 dark:border-white/10 hover:border-amber-500/30 transition-all"
                    >
                      <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-3">
                        <Icon size={18} />
                      </div>
                      <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1">{area.title}</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{area.desc}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Animated Statistics Counter Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: stat.id * 0.1 }}
              className="p-6 rounded-3xl glass-card text-center border border-black/5 dark:border-white/10 hover:border-amber-500/30 transition-all"
            >
              <div className="text-3xl sm:text-5xl font-extrabold font-display text-gradient-gold mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-xs sm:text-sm font-mono text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
