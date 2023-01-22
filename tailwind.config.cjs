/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      moolish: ['Moolish', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        search: ' 0px 1px 6px rgba(0, 0, 0, 0.1);',
      },
    },
  },
  plugins: [],
}
