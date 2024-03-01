/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["var(--nunito-font)"],
        merriweather: ["var(--merriweather-font)"],
        mavenpro: ["var(--mavenpro-font)"],
      },
      colors: {
        blue: {
          50: "#edf2ff",
          100: "#dee8ff",
          200: "#c3d3ff",
          300: "#9fb5ff",
          400: "#798cff",
          500: "#5965fb",
          600: "#3c3bf0",
          700: "#2f2bd1",
          800: "#2928ab",
          900: "#282987",
          950: "#18184e",
        },
        purple: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#ead5ff",
          300: "#d9b4fe",
          400: "#c084fc",
          500: "#a655f7",
          600: "#8e33ea",
          700: "#7822ce",
          800: "#6421a8",
          900: "#511c87",
          950: "#350764",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
