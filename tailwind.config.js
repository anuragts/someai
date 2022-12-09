/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        fd: "300px",
        sm: "450px",
        md: "768px",
        lg: "1350px",
      },
    },
  },
  plugins: [],
}