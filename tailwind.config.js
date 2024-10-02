/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./Components/index.html','./Components/index.js','./tailwind/input.css'],
  theme: {
    screens: {
      'sm': '310px',
      'md': '420px',
      'lg': '700px',
      'xl': '1280px',
      '2xl': '1536px',
    },
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

