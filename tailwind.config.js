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
      customeOrange: {
        DEFAULT: "#FC6735",
        50: "#FFEFEA",
        100: "#FEE0D6",
        200: "#FEC2AE",
        300: "#FDA485",
        400: "#FD855D",
        500: "#FC6735",
        600: "#F54004",
        700: "#BE3203",
        800: "#872302",
        900: "#4F1501",
        950: "#340E01",
      },
      customePink: {
        DEFAULT: "#EA1179",
        50: "#FAB9D8",
        100: "#F9A6CD",
        200: "#F680B8",
        300: "#F35AA3",
        400: "#F0348E",
        500: "#EA1179",
        600: "#B60D5E",
        700: "#810943",
        800: "#4D0628",
        900: "#19020D",
        950: "#000000",
      },
      customeYellow: {
        DEFAULT: "#FAA300",
        50: "#FFE4B3",
        100: "#FFDD9E",
        200: "#FFCF75",
        300: "#FFC14D",
        400: "#FFB324",
        500: "#FAA300",
        600: "#C27E00",
        700: "#8A5A00",
        800: "#523500",
        900: "#1A1100",
        950: "#000000",
      },
    },

    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
      Varela: ["Varela Round", "sans-serif"],
      Inter: ["Inter", "sans-serif"],
      Rubik: ["Rubik", "sans-serif"],
      TitilliumWeb: ["Titillium Web", "sans-serif"],
    },

    extend: {
      utilities: {
        ".scrollbar-hidden": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": {
            width: "0px",
            background: "transparent",
          },
        },
      },
    },
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
        ".scrollbar-hidden": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": {
            width: "0px",
            background:
              "transparent" /* Optional: just to be sure that we have a background */,
          },
        },
      };

      addUtilities(newUtilities, ["responsive"]);
    },
    function ({ addComponents }) {
      addComponents({
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
