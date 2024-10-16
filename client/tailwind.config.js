/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./public/index.html",
],
  theme: {
    extend: {
      fontFamily: {
        interBold: ['InterBold', 'sans-serif'],
        interLight: ['InterLight', 'sans-serif'],
        interMedium: ['interMedium', 'sans-serif'],
        interRegular: ['InterRegular', 'sans-serif'],
    },
    colors: {
        primary: {
            DEFAULT: '#2F53FE',
            dark: '#1B3CDE',
        },
    },
    },
  },
  plugins: [],
}

