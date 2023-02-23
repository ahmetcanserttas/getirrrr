/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: theme =>({
        'primary-brand-color':'#5d3ebc',
        'secondary-brand-color':'#7849f7',
        'brand-color':'#4c3398'
      }),
      gradientColorStops: theme =>({
        'primary-brand-color':'#5d3ebc',
        'secondary-brand-color':'#7849f7',
        'brand-color':'#4c3398'
      })
    },
  },
  plugins: [],
};
