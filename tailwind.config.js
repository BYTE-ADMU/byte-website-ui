const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      red: {
        primary: '#F84A5E',
        secondary: '#FFB1BC'
      },
      yellow: {
        primary: '#FFB700',
        secondary: '#FFE898'
      },
      blue: {
        primary: '#57CEFE',
        secondary: '#AEE7FF'
      },
      green: {
        primary: '#33D69F',
        secondary: '#8AF4CF'
      },
      purple: {
        primary: '#7A2FF2',
        secondary: '#C6A5FB'
      },
      orange: {
        primary: '#E75300',
        secondary: '#F58647'
      },
      gray: {
        darkest: '#1F2228',
        dark: '#616161',
        light: '#C7C7C7',
        lighter: '#E0E0E0',
        lightest: '#FAFAFA',
      }
    },
    dropShadow: {
      'normal': '0px 0px 20px rgba(20, 20, 20, 0.1)',
      'hover': '0px 5px 20px rgba(20, 20, 20, 0.15)',
      'nav': '0px 4px 8px rgba(20, 20, 20, 0.1)',
      'footer': '0px -12px 20px rgba(20, 20, 20, 0.1)'
    }
  },
  variants: {
    extend: {},
  },
  plugins: ['gatsby-plugin-postcss'],
}
