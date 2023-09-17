/** @type {import('tailwindcss').Config} */

const {nextui} = require("@nextui-org/react");


module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'header-bg': '#F5ECE1',
      'gray-color': '#808080',
      'bg-page' : '#000',
      'side-button-color' : 'bdfbf7',

    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
