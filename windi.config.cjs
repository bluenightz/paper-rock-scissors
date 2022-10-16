const { defineConfig } = require("windicss/helpers");

module.exports = defineConfig({
  content: ["./src/components/**/*.{ts,tsx,js,jsx}", "./src/*.{ts,tsx,js,jsx}"],
  safelist: ["bg-green-700"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Amatic SC", "cursive"],
      },
    },
  },
  plugins: [],
});
