/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        shadowgreen: {//custom color.
          100: "#186F65",
          200: "#186F80"
        },
      }
    },
  },
  plugins: [],
}