/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background:      '#000000',
        surface:         '#5d737e',
        'surface-dark':  '#1a2a30',
        'surface-dim':   '#0d1a1f',
        text:            '#f0f7ee',
        'text-muted':    '#a8c5bc',
        accent:          '#bf4342',
        'accent-dark':   '#8c1c13',
      },
      fontFamily: {
        heading: ['"Geo"', 'sans-serif'],
        body:    ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
