/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          50: '#E0FFFF',
          200: '#90EE90',
          300: '#7FFFD4',
        },
        yellow: {
          50: '#FFFACD',
          200: '#FFE4B5',
          300: '#FFE4B5',
        },
        red: {
          50: '#FFE4E1',
          200: '#FFB6C1',
          300: '#FFA07A',
        },
        pink: {
          50: '#FFF0F5',
        }
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          lg: '2rem',
        },
      },
    },
  },
  plugins: [],
}