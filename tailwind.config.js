/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './client/src/components/*jsx',
      './client/src/pages/*jsx'
    ],
    theme: {
      extend: {
        fontFamily: {
          custom: ["Teko"],
        },
      },
    },
    plugins: [require('daisyui')],
    daisyui: {
      themes: ['night'],
    },
  }