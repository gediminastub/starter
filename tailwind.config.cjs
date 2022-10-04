/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': {
        '50': '#f8f6ff',
        '100': '#f2edff',
        '200': '#ddd1ff',
        '300': '#c9b5ff',
        '400': '#a17eff',
        '500': '#7847ff',
        '600': '#6c40e6',
        '700': '#5a35bf',
        '800': '#482b99',
        '900': '#3b237d',
      },
      'coral': {
        '50': '#fff9f6',
        '100': '#fff2ee',
        '200': '#ffdfd3',
        '300': '#ffccb9',
        '400': '#ffa585',
        '500': '#ff7f50',
        '600': '#e67248',
        '700': '#bf5f3c',
        '800': '#994c30',
        '900': '#7d3e27',
      },
    },
    extend: {
      fontFamily: {
        'sans': ['Outfit', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
