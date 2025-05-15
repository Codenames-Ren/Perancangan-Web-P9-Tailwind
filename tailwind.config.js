/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        tagesschrift: ["Tagesschrift", "sans-serif"],
      },
    },
  },
  plugins: [],
};
