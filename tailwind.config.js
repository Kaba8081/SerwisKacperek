/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", 
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': "#131417",
        'primary': "#2AE0E9",
        'secondary': "#2C303A",
        'accent': "#E4D944",
        'dimWhite': "rgba(255, 255, 255, 0.7)",
        'text': '#040F20',
        'text-light': '#F2F9FD',
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

