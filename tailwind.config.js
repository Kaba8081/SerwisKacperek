/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#131417",
        text: "#FFFFFF",
        primary: "#2AE0E9",
        secondary: "#2C303A",
        accent: "#E4D944",
      },
      fontFamily: ["Poppins, sans-serif"],
    },
  },
  screens: {
    xs: "480px",
    ss: "620px",
    sm: "768px",
    md: "1060px",
    lg: "1200px",
    xl: "1700px",
  },
  plugins: [],
}

