/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mahakaal-gold': '#d4af37',
        'mahakaal-gold-dark': '#aa8c2c',
        'mahakaal-emerald': '#0b3d2c',
        'mahakaal-black': '#0a0a0a',
        'mahakaal-surface': '#121212',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
