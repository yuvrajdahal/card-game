/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#36454f",
      },
      keyframes: {
        "change-scale": {
          "0%": { scale: "0.96" },
          "100%": { scale: "1" },
        },
      },
      animation: {
        "change-scale": "change-scale .5s ease-in-out ",
      },
    },
  },
  plugins: [],
};
