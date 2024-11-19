/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
  theme: {
    screens: {
      xs: "300px",
      // => @media (min-width: 300px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        interBold: ["InterBold", "sans-serif"],
        interLight: ["InterLight", "sans-serif"],
        interMedium: ["interMedium", "sans-serif"],
        interRegular: ["InterRegular", "sans-serif"],
      },
      backdropBlur: {
        "custom-19": "19px",
        "custom-25": "25px",
      },
      backgroundSize: {
        full: "100% 100%",
      },
      backgroundImage: {
        footer: "url('../public/images/footer-main-bg.jpg')",
        contactBg: "url('../public/images/contactform-bg.webp')",
        azFlag: "url('../public/images/az-flag.png')",
        ruFlag: "url('../public/images/ru-flag.png')",
        "linear-gradient-white":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.57) 0%, #FFFFFF 100%)",
        "linear-gradient-gray":
          "linear-gradient(90deg, rgba(102, 102, 102, 0.51) 0%, #4E4E4E 48.5%, rgba(102, 102, 102, 0.51) 100%)" ,
      },
      colors: {
        primary: {
          blue: "#2c4ff8",
          blueHover: "#0C14FF",
          white: "#fff",
          whiteSecond: "#f8f8f8",
          whiteTransparent: "#ffffffcc",
          lightPurple: "#8a93c0",
          purpleLighter: "#b9bed1",
          purpleMoreLight: "#7c8fc7",
          lightGray: "#727272",
          black: "#222222",
          blackSecond: "#2c2c2c",
        },
      },
      boxShadow: {
        custom: "0px 4px 13px 0px rgba(0, 0, 0, 0.23)",
        default: "0px 7px 35px 0px rgba(0, 0, 0, 0.25)",
        button: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",

      },
    },
  },
  plugins: [],
};
