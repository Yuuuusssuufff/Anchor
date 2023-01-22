/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css}"],
  theme: {
    extend: {
      backgroundImage: {
        bgFirst: "url('/public/assets/bg-hero.svg')",
        bgSecond: "url('/public/assets/bg-create.svg')",
      },
      gridTemplateColumns:{
sect: '2fr 3fr'
      }
    },
  },
  plugins: [],
};
