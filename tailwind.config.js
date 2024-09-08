/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5",
        secondary: "#9333ea"
      }
    },
  },
  plugins: [],
}

