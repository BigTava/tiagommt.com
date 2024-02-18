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
        light: 'rgba(255, 255, 255, 0.6)',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
}
