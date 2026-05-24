/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef8ff',
          100: '#d7efff',
          200: '#b0e1ff',
          300: '#7acaff',
          400: '#46adff',
          500: '#1b8dfd',
          600: '#0070e7',
          700: '#0058b8',
          800: '#004797',
          900: '#003d7c',
          950: '#00254c',
        },
        accent: {
          50: '#fff7ed',
          100: '#ffedd6',
          200: '#ffd3ac',
          300: '#ffad78',
          400: '#ff814e',
          500: '#fe5c2a',
          600: '#f1431e',
          700: '#c72e19',
          800: '#a12319',
          900: '#821f1a',
          950: '#460d0b',
        },
        'gray-light': '#f4f4f5',
        'gray-dark': '#3f3f46',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}