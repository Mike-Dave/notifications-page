/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        white: "hsl(0, 0%, 100%)",
        veryLightGrayishBlue: "hsl(210, 60%, 98%)",
        lightGrayishBlueOne: "hsl(211, 68%, 94%)",
        lightGrayishBlueTwo: "hsl(205, 33%, 90%)",
        grayishBlue: "hsl(219, 14%, 63%)",
        darkGrayishBlue: "hsl(219, 12%, 42%)",
        veryDarkBlue: "hsl(224, 21%, 14%)",
      },
    },
  },
  plugins: [],
};
