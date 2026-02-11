/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B4F6C",
        secondary: "#20B2AA",
        accent: "#4CAF50",
        bgLight: "#F7F9FB",
        textDark: "#1F2933",
      }
    },
  },
  plugins: [],
}