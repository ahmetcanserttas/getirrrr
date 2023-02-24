/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary-brand-color':'#5d3ebc',
        'secondary-brand-color':'#7849f7',
        'brand-color':'#4c3398',
        'brand-yellow': '#ffb400'
      }
    },
  },
  plugins: [],
};
