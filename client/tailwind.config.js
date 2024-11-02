/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./public/index.html",
],
  theme: {
    screens: {
      xs: '300px',
      // => @media (min-width: 300px) { ... }
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
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
      'azFlag': "url('../public/images/az-flag.png')",
      'ruFlag': "url('../public/images/ru-flag.png')",
    },
    colors: {
        primary: {
            blue: '#2c4ff8',
            white: '#fff',
            whiteSecond: '#f8f8f8',
            whiteTransparent: '#ffffffcc',
            lightPurple: '#8a93c0',
            purpleLighter: '#b9bed1',
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

