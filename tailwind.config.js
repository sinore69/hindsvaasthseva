/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#590000',
        primary2: "#E65E5E",
        secondary: '#F6F6DA',
        bg: '#FFFFFF'
      },

      fontFamily: {
        gilroy: ['GilRoy', 'sans-serif'],
      },
    },
  },
  plugins: [],
}