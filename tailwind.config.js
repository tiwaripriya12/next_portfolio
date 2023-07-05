/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        magenta: '#ee6192',
        lightgray: '#666',
        bordergray: '#ddd',
        backgroundblack: '#2b2a2a',
        textblack: '#777',
        profileimageborder: '#eee',
        titlebackground: 'rgba(30, 37, 48, 0.07)',
        skillsbg: '#cccccc',
        modalbgcolor: 'rgba(0,0,0,0.7)',
      },
      flex: {
        25: '0 0 25%',
        33: '0 0 33.333333%',
        50: '0 0 50%',
        66: '0 0 66.666667%',
        100: '0 0 100%',
      },
    },
  },
  plugins: [],
};
