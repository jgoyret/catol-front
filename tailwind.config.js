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
        catolHover: "#0000ff",
      },
      screens: {
        "3xl": "2000px",
      },
      keyframes: {
        moveAcross: {
          "0%": { transform: "translateX(-100%)" },
          // "50%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(200%)" },
        },
      },
      animation: {
        moveAcross: "moveAcross 3s  infinite", // Cambia 3s por la duración que prefieras
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
