const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  plugins: [],
  theme: {
    rotate: {
      "-180": "-180deg",
      "-90": "-90deg",
      "-45": "-45deg",
      0: "0",
      45: "45deg",
      90: "90deg",
      135: "135deg",
      180: "180deg",
      270: "270deg",
    },
    extend: {
      fontFamily: {
        Header: ["Lato", "sans-serif"],
        Text2: ["Lato", "sans-serif"],
        About: ["Playfair Display", "serif"],
        Arimo: ["Arimo", "sans-serif"],
      },
      colors: {
        AAprimary: "#0b192f",
        AAsecondary: "#64ffda",
        AAError: "#ff6489",
        AAtertiary: "#112340",
        ResumeButtonHover: "#153040",
        MobileNavBarColor: "#112340",
        StartupBackground: "#020c1b",
        primary: colors.blue,
        secondary: colors.blue,
      },
    },
  },
  // plugins: [require("tailwind-scrollbar"),require('tailwind-scrollbar-hide')],
  variants: {
    scrollbar: ["rounded"],
  },
};
