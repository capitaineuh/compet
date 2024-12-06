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
          DEFAULT: '#96EBE9',
          70: 'rgba(150, 235, 233, 0.7)',
          50: 'rgba(150, 235, 233, 0.5)',
          20: 'rgba(150, 235, 233, 0.2)',
        },
        red: {
          DEFAULT: '#F38D8F',
          70: 'rgba(243, 141, 143, 0.7)',
          50: 'rgba(243, 141, 143, 0.5)',
          20: 'rgba(243, 141, 143, 0.2)',
        },
        yellow: {
          DEFAULT: '#F4F271',
          70: 'rgba(244, 242, 113, 0.7)',
          50: 'rgba(244, 242, 113, 0.5)',
          20: 'rgba(244, 242, 113, 0.2)',
        },

      },
      borderWidth: {
        '16': '16px',
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