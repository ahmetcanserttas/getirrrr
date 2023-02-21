/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: theme =>({
        'brand-color':'#5d3ebc'
      })
    },
  },
  plugins: [],
}
