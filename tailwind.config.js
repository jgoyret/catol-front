/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jungaBook: ["JungaBook", "sans-serif"],
        jungaMedium: ["JungaMedium", "sans-serif"],
        mattoneBold: ["MattoneBold", "sans-serif"],
        mattoneRegular: ["MattoneRegular", "sans-serif"],
        chuchi: ["chuchi", "sans-serif"],
      },
      colors: {
        catolHover: "#5555FF",
      },
      screens: {
        "3xl": "2000px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".image-pixelated": {
          imageRendering: "pixelated",
        },
        ".image-crisp": {
          imageRendering: "crisp-edges",
        },
      });
    },
  ],
};
