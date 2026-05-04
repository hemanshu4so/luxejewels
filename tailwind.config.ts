import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fefdf0',
          100: '#fdf9d3',
          200: '#fbf0a0',
          300: '#f7e063',
          400: '#f2ca2a',
          500: '#e6b800',
          600: '#c49a00',
          700: '#9c7500',
          800: '#7a5c00',
          900: '#5c4500',
        },
        cream: '#FAF7F2',
        charcoal: '#1A1A1A',
        muted: '#6B6B6B',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display:['Playfair Display', 'serif'],
      },
      animation: {
        'ticker': 'ticker 30s linear infinite',
        'fade-up': 'fadeUp 0.8s ease forwards',
        'shimmer': 'shimmer 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          from: { textShadow: '0 0 10px #e6b800, 0 0 20px #e6b800' },
          to: { textShadow: '0 0 20px #f2ca2a, 0 0 40px #f2ca2a, 0 0 60px #e6b800' },
        },
      },
      backdropBlur: { xs: '2px' },
      boxShadow: {
        'gold': '0 0 30px rgba(230, 184, 0, 0.3)',
        'gold-lg': '0 0 60px rgba(230, 184, 0, 0.4)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'luxury': '0 25px 80px rgba(0,0,0,0.15)',
      },
    },
  },
  plugins: [],
}

export default config
