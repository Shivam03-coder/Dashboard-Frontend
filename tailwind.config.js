/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        50: "#B9BCDF",
        100: "#9DA1D3",
        200: "#737BBF",
        300: "#5662B3",
        400: "#46529A",
        500: "#39447E",
        600: "#2C3662",
        700: "#202746",
        800: "#13182A",
        900: "#0E1220",
        950: "#070910",
      },
      secondary: {
        50: "#FFFFFF",
        100: "#FFFFFF",
        200: "#FFFFFF",
        300: "#FADFEC",
        400: "#F4BCD7",
        500: "#EE99C2",
        600: "#E669A5",
        700: "#DE3988",
        800: "#BF206D",
        900: "#8F1851",
        950: "#771444",
      },
      customeOrange: "#fc6736",
      customeSky: "#78909c",
      customeDanger: "#d71313",
      customePink: "#ea1179",
      customeYellow: "#faa300",
    },

    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
      Varela: ["Varela Round", "sans-serif"],
      Inter: ["Inter", "sans-serif"],
      Rubik: ["Rubik", "sans-serif"],
    },

    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".Showdesktoponly": {
          display: "none",
        },
        "@screen md": {
          ".Showdesktoponly": {
            display: "block",
          },
        },
        ".ShowdonMobileonly": {
          display: "block",
        },
        "@screen md": {
          ".ShowdonMobileonly": {
            display: "none",
          },
        },
      };

      addUtilities(newUtilities, ["responsive"]);
    },
    function ({ addComponents }) {
      addComponents({
        ".Doublecol": {
          "@apply grid lg:grid-cols-2 place-items-center": {},
        },
        ".Row-center": {
          "@apply flex justify-center items-center": {},
        },
        ".Col-center": {
          "@apply flex flex-col justify-center items-center": {},
        },
        ".Overlay-center": {
          "@apply absolute w-full top-0 left-0 Row-center": {},
        },
        ".Navlink": {
          "@apply flex items-center text-secondary-prime": {},
        },
        ".Primarybtn": {
          "@apply bg-secondary-prime font-Poppins font-medium text-base": {},
        },
      });
    },
  ],
});
