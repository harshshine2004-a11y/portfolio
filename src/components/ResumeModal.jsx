import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

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

        {/* Modal Sheet Window - Styled like an authentic PDF Document */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          data-lenis-prevent="true"
          className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-white text-slate-900 shadow-2xl z-10 my-auto custom-scrollbar p-6 sm:p-12 border border-gray-300 font-sans"
        >
          {/* Top Control Bar (Download & Close) */}
          <div className="sticky top-0 z-20 -mt-6 -mx-6 sm:-mt-12 sm:-mx-12 px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 shadow-md mb-8">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-amber-400">
              📄 Official Resume Document View
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs shadow transition-all"
              >
                <Download size={14} />
                <span>Print / Save PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors"
                title="Close"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Authentic PDF Paper Document Layout */}
          <div className="bg-white text-slate-900 font-serif leading-relaxed max-w-3xl mx-auto py-2">
            
            {/* Header / Contact Info */}
            <div className="text-center mb-6">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif mb-1">
                Harsh Kumar
              </h1>
              <p className="text-xs sm:text-sm font-mono text-slate-700 space-x-2">
                <span>+91 9142697456</span>
                <span>|</span>
                <a href="mailto:harsh.shine2004@gmail.com" className="text-blue-700 hover:underline">
                  harsh.shine2004@gmail.com
                </a>
                <span>|</span>
                <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                  LinkedIn
                </a>
                <span>|</span>
                <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                  GitHub
                </a>
                <span>|</span>
                <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                  LeetCode
                </a>
              </p>
            </div>

            {/* CAREER OBJECTIVE */}
            <div className="mb-5">
              <h2 className="text-sm font-sans font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-1 mb-2">
                Career Objective
              </h2>
              <p className="text-xs sm:text-sm text-slate-800 text-justify leading-normal font-sans">
                Analytical and solution-oriented Computer Applications student with a strong foundation in software development, data science, system design, and Generative AI. Experienced in building practical projects, participating in hackathons, and solving real-world challenges through technology. Seeking an opportunity to apply my technical skills, continuously learn, and contribute to developing innovative and impactful solutions.
              </p>
            </div>

            {/* EDUCATION */}
            <div className="mb-5">
              <h2 className="text-sm font-sans font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-1 mb-2">
                Education
              </h2>
              <div className="font-sans">
                <div className="flex justify-between items-baseline text-xs sm:text-sm font-bold text-slate-900">
                  <span>JECRC University</span>
                  <span>Jaipur</span>
                </div>
                <div className="flex justify-between items-baseline text-xs italic text-slate-700">
                  <span>Bachelor of Technology in Computer Science | CGPA: 8.41</span>
                  <span>Sep. 2024 – Aug. 2028</span>
                </div>
              </div>
            </div>

            {/* PROJECTS */}
            <div className="mb-5">
              <h2 className="text-sm font-sans font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-1 mb-2">
                Projects
              </h2>
              <div className="space-y-3 font-sans text-xs sm:text-sm">
                
                {/* Solar Rangers */}
                <div>
                  <div className="flex justify-between items-baseline font-bold text-slate-900">
                    <span>
                      Solar Rangers <span className="font-normal italic text-xs text-slate-700">| Python, HTML, CSS, JavaScript, React</span>
                    </span>
                    <a
                      href="https://github.com/harshshine2004-a11y/Solar-Rangers"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-blue-700 hover:underline inline-flex items-center gap-1"
                    >
                      <span>GitHub Link</span>
                      <ExternalLink size={11} />
                    </a>
                  </div>
                  <ul className="list-disc list-inside space-y-1 mt-1 text-xs text-slate-800 leading-normal">
                    <li>
                      <strong>AI-Based Solar Flare Prediction & Detection</strong> – Performs real-time nowcasting and future forecasting of solar flare events using ISRO Aditya-L1’s SoLEXS and HEL1OS data.
                    </li>
                    <li>
                      <strong>Intelligent Decision Support System</strong> – Predicts flare probability, flare class (B, C, M, X), and lead time to enable early warnings for satellite communication, GPS, power grids, and radio systems.
                    </li>
                    <li>
                      <strong>Interactive Monitoring Dashboard</strong> – Provides real-time visualizations, automated alerts, mission health monitoring, and an AI assistant for comprehensive solar activity analysis.
                    </li>
                  </ul>
                </div>

                {/* FloatChat */}
                <div>
                  <div className="flex justify-between items-baseline font-bold text-slate-900">
                    <span>
                      FloatChat <span className="font-normal italic text-xs text-slate-700">| Python, Streamlit, LangChain, FAISS, Google Gemini, Plotly</span>
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 mt-1 text-xs text-slate-800 leading-normal">
                    <li>
                      Developed an AI-powered conversational platform to explore and analyze real-world <strong>ARGO oceanographic data</strong> using <strong>RAG (Retrieval-Augmented Generation)</strong> and <strong>FAISS</strong> for semantic search.
                    </li>
                    <li>
                      Built an interactive dashboard with <strong>Streamlit, Plotly, and Folium</strong> to visualize ocean parameters, float locations, and geospatial insights in real time.
                    </li>
                    <li>
                      Integrated <strong>Google Gemini</strong> with <strong>LangChain</strong> to enable natural language querying of ocean datasets, providing accurate, context-aware responses and improving data accessibility.
                    </li>
                  </ul>
                </div>

              </div>
            </div>

            {/* EXPERIENCE */}
            <div className="mb-5">
              <h2 className="text-sm font-sans font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-1 mb-2">
                Experience
              </h2>
              <div className="space-y-3 font-sans text-xs sm:text-sm">
                
                {/* TPO Intern */}
                <div>
                  <div className="flex justify-between items-baseline font-bold text-slate-900">
                    <span>Training & Placement Office (TPO) Intern</span>
                    <span className="font-normal italic text-xs text-slate-700">Mar 2026</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 mt-1 text-xs text-slate-800 leading-normal">
                    <li>
                      Coordinated <strong>Campus Recruitment Training (CRT) Phase 2</strong> activities for <strong>2,252+ students</strong>, ensuring smooth communication and efficient execution across multiple sessions.
                    </li>
                    <li>
                      Managed and maintained student records, attendance, and placement-related data using <strong>Microsoft Excel</strong>, improving data accuracy and organization.
                    </li>
                    <li>
                      Collaborated with the Training & Placement Office to support recruitment drives, event logistics, and coordination between students, faculty, and recruiters.
                    </li>
                  </ul>
                </div>

                {/* Mentor India Academy Intern */}
                <div>
                  <div className="flex justify-between items-baseline font-bold text-slate-900">
                    <span>Mentor India Academy Intern (NITI Aayog)</span>
                    <span className="font-normal italic text-xs text-slate-700">Mar 2026</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 mt-1 text-xs text-slate-800 leading-normal">
                    <li>Contributed to innovation and entrepreneurship initiatives under the Mentor India Academy program.</li>
                    <li>Collaborated with mentors and participants to support learning activities and knowledge sharing.</li>
                    <li>Developed communication, coordination, and teamwork skills while working on innovation-focused programs.</li>
                  </ul>
                </div>

              </div>
            </div>

            {/* SKILLS */}
            <div className="mb-5">
              <h2 className="text-sm font-sans font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-1 mb-2">
                Skills
              </h2>
              <div className="font-sans text-xs sm:text-sm space-y-1 text-slate-800">
                <p><strong>Languages:</strong> Python, JavaScript, HTML, CSS</p>
                <p><strong>Frameworks:</strong> NumPy, ReactJS, NodeJS, ExpressJS, Tailwind CSS</p>
                <p><strong>Fundamentals:</strong> System Design, Operating Systems, DBMS, Computer Networks, SQL, Data Structures and Algorithms</p>
                <p><strong>Developer Tools:</strong> VS Code, Git, GitHub, Postman</p>
              </div>
            </div>

            {/* EXTRA-CURRICULAR ACTIVITIES */}
            <div>
              <h2 className="text-sm font-sans font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-1 mb-2">
                Extra-Curricular Activities
              </h2>
              <div className="font-sans text-xs sm:text-sm text-slate-800">
                <p className="font-bold mb-1">Certifications & Achievements</p>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-800">
                  <li><strong>AWS Networking Basics</strong> – AWS Training & Certification (Jul 2025).</li>
                  <li><strong>Cloud Computing</strong> – NPTEL (Aug 2024).</li>
                  <li>Qualified for the <strong>Smart India Hackathon (SIH)</strong> institutional level.</li>
                  <li><strong>Coordinator at Zarurat</strong>, leading volunteer activities and community outreach initiatives.</li>
                </ul>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
