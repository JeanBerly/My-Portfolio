/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,jsx,ts,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}"
    ],
    darkMode: 'class',
    theme: {
      colors: {
        black: '#0C0E0C',
        purple: '#7900F1',
        white: '#EAEBEA',
      },
      extend: {
        height: {
          '5vh': '5vh',
          '10vh': '10vh',
          '45vh': '45vh',
          '50vh': '50vh',
          '95vh': '95vh',
        },
        width: {
          '40vw': '40vw'
        }
      },
    },
    plugins: [],
  }
  