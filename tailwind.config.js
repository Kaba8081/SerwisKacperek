/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#131417",
        text_color: "#FFFFFF",
        primary: "#2AE0E9",
        secondary: "#2C303A",
        accent: "#E4D944",
        dimWhite: "rgba(255, 255, 255, 0.7)",
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

