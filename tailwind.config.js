/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        main: 'calc(100vh - 7rem)',
      },
    },
  },
  plugins: [],
};
