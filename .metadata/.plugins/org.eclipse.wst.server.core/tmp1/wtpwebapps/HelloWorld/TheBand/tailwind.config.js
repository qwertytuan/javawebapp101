/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ["./html/*.html"],
  theme: {
    extend: {
      colors:{
        'hover-bg': '#ccc',
        'text-2': '#6f6f6f',
        'border-color': '#ddd',
        'color_overlay': 'rgba(0, 0, 0, 0.4)',
        'transparent': 'rgba(0,0,0,0)',
        'greenish':'#009688'
      },
      grayscale: {
        50: '50%',
      },
      boxShadow: {
        'custom':'0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19)',
      },
      lineHeight: {
        '5.5': '1.406rem',
      },
      width: {
        'fullriel': '100vw',
        'mosthalf': '49.8%',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.3xl') },
        'h2': { fontSize: theme('fontSize.2xl') },
        'h3': { fontSize: theme('fontSize.lg') },
      })
    }),
    plugin(function({ addVariant }) {
      addVariant('scrollbar-corner', ['&::-webkit-scrollbar-corner','&::scrollbar-corner'])
    })
  ]
}

