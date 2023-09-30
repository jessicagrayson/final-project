/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './Input.jsx'],
  theme: {
    extend: {
      colors: {
        mblue: '#4D6CFA',
        mgray: '#D9D9D9',
      },
    },
  },
  plugins: [],
};
