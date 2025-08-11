/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        // Kynesys.xyz inspired color palette
        primary: {
          50: '#f0fdff',
          100: '#ccfbfe',
          200: '#99f6fe',
          300: '#54e9fc',
          400: '#209dfd',
          500: '#0691e2',
          600: '#0073bf',
          700: '#005c9a',
          800: '#064f7f',
          900: '#0a426a',
          950: '#062b46',
        },
        accent: {
          pink: 'rgb(255, 199, 246)',
          blue: 'rgb(209, 253, 255)',
          green: 'rgb(199, 255, 204)',
        },
        gray: {
          900: '#0a0a0a', // Near black background
          800: '#1a1a1a',
          700: '#2a2a2a',
          600: '#3a3a3a',
          500: '#6a6a6a',
          400: '#9a9a9a',
          300: '#cacaca',
          200: '#e5e5e5',
          100: '#f5f5f5',
          50: '#fafafa',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}