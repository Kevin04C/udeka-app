/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#232946',
        heading: '#fffffe',
        paragraph: '#b8c1ec',
        button: '#eebbc3',
        'button-text': '#232946',
        stroke: '#121629',
        main: '#b8c1ec',
        highlight: '#eebbc3',
        secondary: '#fffffe',
        tertiary: '#eebbc3',
      },
    },
  },
  plugins: [],
};
