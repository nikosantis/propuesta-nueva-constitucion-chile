const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        nc: '#47127d'
      },
      fontFamily: {
        sans: ['Roboto', ...fontFamily.sans]
      }
    }
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography')]
}
