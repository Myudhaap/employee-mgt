/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0071DA",
      },
      fontFamily:{
        'monserrat': ["Montserrat", 'sans-serif']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

