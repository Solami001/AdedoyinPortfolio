/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // or 'media' for system preference
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      'sm': {'min': '200px', 'max': '600px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '600px', 'max': '1010px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1010px', 'max': '1400px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
    },
    extend: {
      animation: {
        'pluse-slow': 'pulse 3s linear',
      }
    },
  },
  plugins: [],
}