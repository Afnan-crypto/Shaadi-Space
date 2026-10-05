/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        plum: {
          50: '#f9f4f8',
          100: '#f2e8f0',
          200: '#e5d1e2',
          300: '#d1adc9',
          400: '#b47fa9',
          500: '#945888',
          600: '#7a3e6e',
          700: '#67305c',
          800: '#5B214F', // Primary Deep Plum
          900: '#4c1d42',
          950: '#320e2a',
        },
        rose: {
          50: '#fcf7f8',
          100: '#faeff1',
          200: '#f4dde2',
          300: '#eac3cb',
          400: '#d99eab',
          500: '#B76E79', // Secondary Rose
          600: '#a35763',
          700: '#87444f',
          800: '#713b43',
          900: '#60353c',
        },
        gold: {
          50: '#fdfbf5',
          100: '#faf5e6',
          200: '#f3e8c3',
          300: '#ebd696',
          400: '#e1be62',
          500: '#C9A227', // Champagne Gold Accent
          600: '#b2861c',
          700: '#8e6417',
          800: '#754f19',
          900: '#644219',
        },
        brand: {
          primary: '#5B214F',
          secondary: '#B76E79',
          accent: '#C9A227',
          bg: '#FCF9F5',
          surface: '#FFFFFF',
          charcoal: '#292526',
          mutedText: '#746B6E',
          border: '#E8E0E3',
          mutedBg: '#F5F1F3',
          success: '#2E7D5B',
          warning: '#D69E2E',
          error: '#C94C4C',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(91, 33, 79, 0.04)',
        'card': '0 4px 20px -2px rgba(91, 33, 79, 0.06), 0 2px 6px -1px rgba(91, 33, 79, 0.03)',
        'card-hover': '0 10px 25px -4px rgba(91, 33, 79, 0.1), 0 4px 8px -2px rgba(91, 33, 79, 0.05)',
      }
    },
  },
  plugins: [],
}
