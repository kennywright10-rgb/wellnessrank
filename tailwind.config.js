/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        iv: {
          teal: '#0d9488',
          'teal-dark': '#0f766e',
          'teal-light': '#ccfbf1',
          navy: '#0f172a',
          slate: '#334155',
          gray: '#64748b',
          light: '#f8fafc',
          amber: '#f59e0b',
          green: '#10b981',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
