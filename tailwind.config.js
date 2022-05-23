module.exports = {
  mode: 'jit',
  purge: ['./public/index.html', './src/**/*.svelte'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backdropFilter: {
      'none': 'none',
      'blur': 'blur(10px)',
    },
    extend: {
      animation:{
        blob: "blob 7s infinite"
      },
      keyframes:{
        blob:{
          "0%":{
            transform: "translate(0px, 0px) scale(1)"
          },
          "33%":{
            transform: "translate(20px, -40px) scale(1.08)"
          },
          "66%": {
            transform: "translate(-10px, 10px) scale(0.92)"
          },
          "100%":{
            transform: "translate(0px, 0px) scale(1)"
          }
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
}
