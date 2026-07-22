import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device supports touch/coarse pointer
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('interactive');

      setIsPointer(!!isInteractive);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Small main dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-amber-500 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 50, mass: 0.1 }}
      />

      {/* Larger trailing ring */}
      <motion.div
        className={`fixed top-0 left-0 w-10 h-10 border border-amber-500/50 rounded-full pointer-events-none z-[9998] hidden md:block transition-colors duration-200 ${
          isPointer ? 'bg-amber-500/10 border-amber-400 scale-125' : ''
        }`}
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isPointer ? 1.4 : 1,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      />
    </>
  );
}
