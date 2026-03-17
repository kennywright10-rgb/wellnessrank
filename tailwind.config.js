/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        iv: {
          // Warm wellness palette — forest greens + gold
          navy:          '#1A3829',   // deep forest (replaces cold navy)
          teal:          '#2A7A52',   // forest sage (replaces generic teal)
          'teal-dark':   '#1A3829',   // deep forest
          'teal-light':  '#D6EDE3',   // sage pale
          slate:         '#44403C',   // warm charcoal
          gray:          '#78716C',   // warm gray
          light:         '#FAF8F5',   // warm cream background
          dark:          '#1C1917',   // warm near-black
          border:        '#E7E3DC',   // warm border
          // Gold accent for CTAs and highlights
          gold:          '#B45309',
          'gold-bright': '#D97706',
          'gold-light':  '#FEF3C7',
          // Legacy compat
          amber:         '#D97706',
          green:         '#2A7A52',
        },
      },
      fontFamily: {
        sans:  ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['DM Serif Display', 'Georgia', 'serif'],
        mono:  ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
