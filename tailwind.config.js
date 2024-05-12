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
        app: '700px'
      }

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
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    fontSize: {
      xs:['14px', { lineHeight: '24px', letterSpacing: '-0.03em'}],
      sm:['16px', { lineHeight: '28px', letterSpacing: '-0.03em'}],
      lg:['18px', { lineHeight: '28px', letterSpacing: '-0.03em'}],
      xl:['24px', { lineHeight: '36px', letterSpacing: '-0.03em'}],
      '2xl':['36px', { lineHeight: '48px', letterSpacing: '-0.032em'}],
      '3xl':['48px', { lineHeight: '56px', letterSpacing: '-0.032em'}],
      '4xl':['56px', { lineHeight: '64px', letterSpacing: '-0.032em'}],
      '5xl':['80px', { lineHeight: '80px', letterSpacing: '-0.032em'}],
    }
  },
  plugins: [],
}

