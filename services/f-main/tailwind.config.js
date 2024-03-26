/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,tsx, jsx}'],

  theme: {
    extend: {
      colors: {
        bg: '#1f1f38',
        'bg-variant': '#2c2c6c',
        primary: '#4db5ff',
        'primary-variant': 'rgba(77, 181, 255, 0.4)',
        white: '#fff',
        grey: '#F2F2F2',
        'dark-grey': 'rgba(80, 80, 80, 1)',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
}
