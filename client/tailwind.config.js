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
    backgroundImage: {
      'footer': "url('../public/images/footer-main-bg.jpg')",
      'contactBg': "url('../public/images/contactform-bg.webp')",
    },
    colors: {
        primary: {
            blue: '#2c4ff8',
            white: '#fff',
            whiteSecond: '#f8f8f8',
            whiteTransparent: '#ffffffcc',
            lightPurple: '#8a93c0',
            black: '#222222',
            blackSecond: '#2c2c2c'
        },
    },
    boxShadow: {
      'custom': '0px 4px 13px 0px rgba(0, 0, 0, 0.23)',
    },
    },
  },
  plugins: [],
}

