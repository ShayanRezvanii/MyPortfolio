/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ["./src/**/"],

  theme: {
    extend: {
      keyframes: {
        moveHorizontal: {
          "0%, 100%": { transform: "translateX(0)" }, // Starting and ending at the original position
          "50%": { transform: "translateX(50px)" }, // Move 50px to the right at the midpoint
        },
      },
      animation: {
        moveHorizontal: "moveHorizontal 4s ease-in-out infinite", // 4-second duration, smooth ease, looping
      },
    },
  },
  plugins: [],
};
