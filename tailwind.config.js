/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./components/**/*.{js,html}",
    "./**/*.{js,html}"
  ],
  theme: {
    extend: {
      colors: {
        momo: {
          DEFAULT: "#a50064"
        }
      }
    }
  },
  plugins: []
};
