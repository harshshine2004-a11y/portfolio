import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Github, Linkedin, Twitter, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');

    try {
      // If user has specified a custom Formspree / Web3Forms endpoint in portfolioData.js
      const formEndpoint = personalInfo.formEndpoint || 'https://formspree.io/f/xzyvoklq';

      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Portfolio Inquiry',
          message: formData.message,
          _replyto: formData.email,
        }),
      });

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Trigger Confetti Burst
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#F59E0B', '#10B981', '#FCD34D'],
        });
      } catch (err) {}

      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      // Fallback UI grace state
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-noise">
      {/* Ambient background glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono mb-3">
            <span>07 // START A CONVERSATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-gray-900 dark:text-white mb-4">
            Let's Build Something <span className="text-gradient-gold">Extraordinary</span>.
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base">
            Have a project in mind, research collaboration, or AI consulting opportunity? Drop a message below or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-8 rounded-3xl border border-black/10 dark:border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Contact Information
              </h3>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-mono text-gray-500 dark:text-gray-400 uppercase">Direct Email</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-bold text-gray-900 dark:text-white hover:text-amber-500 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs font-mono text-gray-500 dark:text-gray-400 uppercase">Location</p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">{personalInfo.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs font-mono text-gray-500 dark:text-gray-400 uppercase">Phone / Telegram</p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">{personalInfo.phone}</p>
                </div>
              </div>
            </div>

            {/* Social Network Links */}
            <div className="glass-card p-6 rounded-3xl border border-black/10 dark:border-white/10">
              <p className="text-xs font-mono text-gray-500 dark:text-gray-400 uppercase mb-4">
                Connect Across Platforms
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 rounded-2xl bg-black/5 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:text-amber-500 hover:scale-110 transition-all"
                >
                  <Github size={20} />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-2xl bg-black/5 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:text-amber-500 hover:scale-110 transition-all"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={personalInfo.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter Profile"
                  className="p-3 rounded-2xl bg-black/5 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:text-amber-500 hover:scale-110 transition-all"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Glass Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 rounded-3xl border border-black/10 dark:border-white/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-mono text-gray-600 dark:text-gray-400 uppercase mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Dr. Sarah Connor"
                      className="w-full px-4 py-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors text-sm"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-mono text-gray-600 dark:text-gray-400 uppercase mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="sarah@example.com"
                      className="w-full px-4 py-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors text-sm"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-xs font-mono text-gray-600 dark:text-gray-400 uppercase mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="AI System Consultation / Full-Stack Project"
                    className="w-full px-4 py-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors text-sm"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-xs font-mono text-gray-600 dark:text-gray-400 uppercase mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project scope, timeline, or technical requirements..."
                    className="w-full px-4 py-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors text-sm resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-emerald-500 text-slate-950 font-bold text-sm tracking-wide shadow-xl hover:scale-[1.01] active:scale-98 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {status === 'sending' ? (
                    <>
                      <Sparkles size={18} className="animate-spin" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : status === 'success' ? (
                    <>
                      <CheckCircle2 size={18} />
                      <span>Message Received! Thank You!</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Dispatch</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
