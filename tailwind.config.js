const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    colors: colors,
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
