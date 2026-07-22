/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#080C0A',
          surface: '#0F1713',
          card: '#141E19',
          border: 'rgba(255, 255, 255, 0.08)',
          text: '#F1F5F9',
          muted: '#94A3B8',
          accent: '#F59E0B',
          green: '#10B981',
          gold: '#FCD34D'
        },
        light: {
          bg: '#FBF9F5',
          surface: '#F5F2EB',
          card: '#FFFFFF',
          border: 'rgba(0, 0, 0, 0.08)',
          text: '#0F172A',
          muted: '#64748B',
          accent: '#D97706',
          green: '#059669',
          gold: '#F59E0B'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Syne', 'Instrument Serif', 'Cabinet Grotesk', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      letterSpacing: {
        tighter: '-.05em',
        tight: '-.025em',
      },
      boxShadow: {
        'glow-gold': '0 0 25px -5px rgba(245, 158, 11, 0.3)',
        'glow-green': '0 0 25px -5px rgba(16, 185, 129, 0.3)',
        'glow-card': '0 10px 40px -10px rgba(0, 0, 0, 0.5)',
        'glass-light': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' }
        }
      }
    },
  },
  plugins: [],
}
