/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        app: 'minmax(8rem, 12.5rem) 1fr',
      },

      maxWidth: {
        app: '51rem'
      },
      lineHeight: '140%'

    },
    colors: {
      product: {
        'blue': '#4EA8DE',
        'blue-dark': '#1E6F9F',
        'purple': '#8284FA',
        'purple-dark': '#5E60CE'
      },
      base: {
        'gray-700': '#0D0D0D',
        'gray-600': '#1A1A1A',
        'gray-500': '#262626',
        'gray-400': '#333333',
        'gray-300': '#808080',
        'gray-200': '#D9D9D9',
        'gray-100': '#F2F2F2',
      },
      feedBack: {
        'danger': '#E25858'
      }
    },
  },
  plugins: [],
}

