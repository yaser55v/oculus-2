/** @type {import('tailwindcss').Config} */
const defautTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '540px',
      ...defautTheme.screens,
    },
    extend: {
      fontFamily: {
        miedinger: "Miedinger , sans-serif",
        neomBold: "Neometric Extra Bold, sans-serif",
        neomMedium : "Neometric Medium, sans-serif",
        neomRegular: "Neometric Regular, sans-serif",
      },
    },
  },
  plugins: [],
};
