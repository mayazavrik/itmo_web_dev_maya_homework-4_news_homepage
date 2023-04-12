/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'main': 'hsl(36, 100%, 99%)',
        'hover': 'hsl(35, 77%, 62%)',
      }
    },
  },
  plugins: [],
};
