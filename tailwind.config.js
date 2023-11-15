/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        maroon: "#620000",
        gold: "#ffdd07",
        black: "#000",
        gray: {
          "100": "rgba(0, 0, 0, 0.5)",
          "200": "rgba(25, 24, 29, 0.5)",
        },
        burlywood: "#e9cc8a",
      },
      spacing: {},
      fontFamily: {
        inika: "Inika",
        hanuman: "Hanuman",
        inherit: "inherit",
      },
      borderRadius: {
        "3xs": "10px",
        xl: "20px",
        "21xl": "40px",
      },
    },
    fontSize: {
      mid: "17px",
      lg: "18px",
      smi: "13px",
      "6xl": "25px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
