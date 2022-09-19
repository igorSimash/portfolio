/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkBlue': '#021b39',
        'coolRed': '#e31b6d',
        'nav': '#1b242f',
        'lightBlue': '#04c2c9',
        'sectionName': '#616161',
        'bar': '#eee'
      },
      fontFamily: {
        'raleway': 'Raleway'
      },
      fontSize: {
        'exSm': ['10px', {
          letterSpacing: '-0.01em',
        }],
      },
      screens: {
        's': {'max': '589px'},
        // => @media (max-width: 499px) { ... }
        'sm': {'min': '590px', 'max': '829px'},
        // => @media (min-width: 500px and max-width: 767px) { ... }
        'md': {'min': '830px', 'max': '1023px'},
        // => @media (min-width: 768px and max-width: 1023px) { ... }
        'lg': {'min': '1024px', 'max': '1279px'},
        // => @media (min-width: 1024px and max-width: 1279px) { ... }
        'xl': {'min': '1280px', 'max': '1535px'},
        // => @media (min-width: 1280px and max-width: 1535px) { ... }
        '2xl': {'min': '1536px'},
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [require("daisyui")],
}