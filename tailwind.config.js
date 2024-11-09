/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { roboto: ["Roboto"] },
      colors: {
        dark: "#242424",
      },
    },
  },
  plugins: [],
}
