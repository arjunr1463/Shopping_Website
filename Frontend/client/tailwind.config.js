/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        mont: ["Montserrat", "sans-serif"],
      },
      screens: {
        xsmall: "0px",
        mob: "310px",
        small: "600px",
      },
    },
  },
  plugins: [],
};