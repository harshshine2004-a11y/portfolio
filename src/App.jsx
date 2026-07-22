import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Lenis from 'lenis';
import Splash from './components/Splash';
import CustomCursor from './components/CustomCursor';
import HeroCanvas from './components/HeroCanvas';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import { seoData, personalInfo } from './data/portfolioData';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio_theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return true; // Default to Dark mode
  });

  const [resumeOpen, setResumeOpen] = useState(false);

  // Sync dark class on html element
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('portfolio_theme', 'dark');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      localStorage.setItem('portfolio_theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // JSON-LD Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": personalInfo.name,
    "jobTitle": personalInfo.title,
    "description": personalInfo.bio,
    "url": seoData.siteUrl,
    "sameAs": [
      personalInfo.socials.github,
      personalInfo.socials.linkedin,
      personalInfo.socials.kaggle,
      personalInfo.socials.huggingface,
      personalInfo.socials.twitter
    ],
    "knowsAbout": [
      "Artificial Intelligence",
      "Computer Vision",
      "Deep Learning",
      "PyTorch",
      "React",
      "Vite",
      "FastAPI"
    ]
  };

  return (
    <div className={`min-h-screen relative font-sans transition-colors duration-500 ${isDarkMode ? 'bg-dark-bg text-dark-text' : 'bg-light-bg text-light-text'}`}>
      {/* Helmet SEO Optimization */}
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta name="author" content={seoData.author} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.ogImage} />
        <meta property="og:url" content={seoData.siteUrl} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.ogImage} />
        <meta name="twitter:creator" content={seoData.twitterHandle} />

        {/* Structured Data Schema */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Global Fixed Full-Screen Interactive Neural Network Background Canvas */}
      <HeroCanvas theme={isDarkMode ? 'dark' : 'light'} />

      {/* Page Curtain Splash Reveal */}
      <Splash />

      {/* Custom Trailing Magnetic Cursor */}
      <CustomCursor />

      {/* Sticky Navigation Header */}
      <Header
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        onResumeClick={() => setResumeOpen(true)}
      />

      {/* Hero Section */}
      <Hero
        isDarkMode={isDarkMode}
        onHireMeClick={handleScrollToContact}
        onResumeClick={() => setResumeOpen(true)}
      />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Experience Timeline Section */}
      <Experience />

      {/* Projects Showcase & Modal Section */}
      <Projects />

      {/* Unified Achievements, Honors & Verified Certifications Section */}
      <Achievements />

      {/* Contact Section */}
      <Contact />

      {/* Minimal Footer */}
      <Footer />

      {/* PDF Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
