/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
      fill: (theme) => ({
        red: theme("colors.red.primary")
      }),
      extend: {},
      colors:{
        white:"#ffff",
        blue:{
          medium: "#005c9a"
        },
        black:{
          light: "#005c98",
          faded:"#0000059"
        },
        gray:{
          base: "#616161",
          background: "##fafafa",
          primary:"#dbdbdb"
        },
        red:{
          primary: "#ed4956"
        }
      }
    },
    plugins: [],
  }
  