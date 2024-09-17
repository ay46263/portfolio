/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./Components/index.html','./Components/index.js','./tailwind/input.css'],
  theme: {
    extend: {
      fontFamily: {
       'protest': ['Protest Guerrilla', 'sans-serif'],
      },
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        tertiary: 'var(--tertiary)'
      }
    },
  },
  plugins: [],
}

