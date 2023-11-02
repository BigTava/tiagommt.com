/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx,jsx}'],
  theme: {
    extend: {
      backgroundColor: {
        bg: '#1f1f38',
        'bg-variant': '#2c2c6c',
      },
      textColor: {
        primary: '#4db5ff',
        'primary-variant': 'rgba(77, 181, 255, 0.4)',
        white: '#fff',
        light: 'rgba(255, 255, 255, 0.6)',
      },
      borderColor: {
        primary: '#4db5ff',
        white: '#fff',
      },
      fontSize: {
        h1: '2.5rem',
      },
      transitionDuration: {
        400: '400ms',
      },
      transitionTimingFunction: {
        ease: 'ease',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '90%',
          md: '86%',
          lg: '75%',
          xl: '75%',
          '2xl': '75%',
        },
      },
      spacing: {
        '8rem': '8rem',
        '6rem': '6rem',
        '3rem': '3rem',
        '2rem': '2rem',
      },
      backgroundImage: {
        'asphalt-light': 'assets/images/asfalt-light.png',
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}
