/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      colors: {
        obsidian: '#0A0A0B',
        void: '#050506',
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E8C96D',
          dark: '#9E7A2A',
          pale: '#F5E6B8',
        },
        platinum: {
          DEFAULT: '#E5E4E2',
          dark: '#A8A9AD',
          light: '#F8F8F8',
        },
        ember: '#FF6B35',
        aurora: '#7B61FF',
        mint: '#00D9A6',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A84C 0%, #F5E6B8 50%, #C9A84C 100%)',
        'dark-gradient': 'linear-gradient(135deg, #0A0A0B 0%, #111114 50%, #0A0A0B 100%)',
        'card-gradient': 'linear-gradient(145deg, rgba(201,168,76,0.15) 0%, rgba(123,97,255,0.08) 100%)',
        'glass': 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-gold': 'pulseGold 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-20px) rotate(1deg)' },
          '66%': { transform: 'translateY(-10px) rotate(-1deg)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(201,168,76,0.3)' },
          '50%': { boxShadow: '0 0 60px rgba(201,168,76,0.8), 0 0 100px rgba(201,168,76,0.4)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'gold': '0 0 30px rgba(201,168,76,0.4), 0 0 60px rgba(201,168,76,0.2)',
        'gold-sm': '0 0 15px rgba(201,168,76,0.3)',
        'card': '0 25px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(201,168,76,0.1)',
        'neo': '8px 8px 0px rgba(201,168,76,0.6)',
        'neo-dark': '6px 6px 0px rgba(0,0,0,0.8)',
        'inset-gold': 'inset 0 0 30px rgba(201,168,76,0.1)',
      },
    },
  },
  plugins: [],
}
