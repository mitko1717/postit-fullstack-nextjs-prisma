/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: {
          white: "#ffffff",
          black: "#000000",
          grey: "#9AA0A6",
          blackish: "#202124",
        },
        secondary: "#878D9D",
      },
      boxShadow: {
        "dp-1": "0px 8px 24px rgba(0, 0, 0, 0.05);",
      },
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
