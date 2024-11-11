/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { roboto: ["Roboto"] },
      colors: {
        primary: {
          100: "#E6F2FF",
          200: "#7DC9FF",
        },
        gray: {
          100: "#EDEEEA",
          200: "#C0C9C0",
          300: "#5E5F5C",
        },
        green: { 100: "#C5FCD6" },
        error: { 100: "#FFDAD6", 200: "#BA1A1A" },
        warning: {},
        yellow: { 100: "#FFF3B5", 200: "#FFE756" },
        secondary: { 100: "#00361D" },
      },
      fontSize: {
        small: "14px",
        medium: "18px",
        xMedium: "20px",
        large: "28px",
      },
    },
  },
  plugins: [],
}
