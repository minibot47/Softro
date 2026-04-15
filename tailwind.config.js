/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          hero: '#e8f5e9',
          dark: '#1a3a2a',
          accent: '#a8d5a2',
          pill: '#b8e0b2',
          lime: '#c8f08a',
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        display: ['var(--font-display)', 'serif'],
      }
    },
  },
  plugins: [],
}
