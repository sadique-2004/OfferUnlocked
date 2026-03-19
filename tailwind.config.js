/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ou: {
          bg:     '#07070f',
          bg1:    '#0b0b16',
          bg2:    '#10101e',
          bg3:    '#181828',
          bg4:    '#1e1e30',
          p:      '#8b5cf6',
          p2:     '#7c3aed',
          b:      '#3b82f6',
          b2:     '#2563eb',
          text:   '#ede9ff',
          text2:  '#8b85a8',
          text3:  '#4a4465',
          text4:  '#2e2b42',
          green:  '#22c55e',
          amber:  '#f59e0b',
          red:    '#ef4444',
          cyan:   '#06b6d4',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grad-p': 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
        'grad-gold': 'linear-gradient(135deg, #f59e0b, #fbbf24, #f59e0b)',
      },
      keyframes: {
        checkPop: {
          '0%':   { transform: 'scale(0.5)' },
          '100%': { transform: 'scale(1)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 6px rgba(34,197,94,.4)' },
          '50%':       { boxShadow: '0 0 12px rgba(34,197,94,.8)' },
        },
      },
      animation: {
        'check-pop':  'checkPop 0.25s cubic-bezier(0.34,1.56,0.64,1) both',
        'fade-up':    'fadeUp 0.4s ease both',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      boxShadow: {
        'glow-p':    '0 0 0 1px rgba(139,92,246,.2), 0 0 20px rgba(139,92,246,.1)',
        'glow-g':    '0 0 0 1px rgba(34,197,94,.18), 0 0 16px rgba(34,197,94,.07)',
        'glow-gold': '0 0 0 1px rgba(245,158,11,.3), 0 0 24px rgba(245,158,11,.15)',
        'logo':      '0 0 16px rgba(139,92,246,.5)',
      },
      borderRadius: {
        ou: '12px',
        'ou-sm': '8px',
        'ou-lg': '16px',
      },
    },
  },
  plugins: [],
};
