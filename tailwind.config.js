/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // container: {
      //   center: true,
      //   screens: {
      //     "2xl": "1240px",
      //   },
      // },

      colors: {
        dark: "#242424",
      },
    },
  },
  plugins: [],
}
