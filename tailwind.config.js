/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Verydarkdesaturatedblue: "hsl(238, 29%, 16%)",
        Softred: "hsl(14, 88%, 65%)",
        Softviolet: "hsl(273, 75%, 66%)",
        Softblue: "hsl(240, 73%, 65%)",
        Verydarkgrayishblue: "hsl(237, 12%, 33%)",
        Darkgrayishblue: "hsl(240, 6%, 50%)",
        Lightgrayishblue: "hsl(240, 5%, 91%)"
      },
      fontFamily: {
        kumbhsans : ['Kumbh Sans']
      }
    },
  },
  plugins: [],
}
