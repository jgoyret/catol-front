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
        tangerineBold: ["TangerineBold", "sans-serif"],
      },
      colors: {
        catolPink: "#FF00FF",
      },
    },
  },
  plugins: [],
};
