/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
      },
      colors: {
        primary: "#3F51B5",
        primarySoft: "#EEF4FF",
        secondary: "#AAAAAA",
        secondarySoft: "#FF7F4D",
        black: "#000000",
        white: "#FFFFFF",
        darkPurple: "#11142D",
        text: "#242424",
        grey: "#E1E1E1",
        inputBg: "#F8F8F8",
        grey2: "#F0F0F0",
        stroke: "#EDEDED",
        modalBgClr: "#292121",
      },
      backgroundImage: {
        subscribeBgImg: "url('/assets/imgs/subscribe-img.png')",
        HeroBgImg: "url('/assets/imgs/hero-bg-img-girl.png')",
      },
      backgroundPosition: {
        "left-bottom": "left bottom",
      },
    },
  },
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  plugins: [require("daisyui")],
};
