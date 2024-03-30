/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        primary: "#dea204",
        secondary: "#f4f4f4",
        grey: "#e8e8e8",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        float: {
          "0%": {
            boxShadow: "0 5px 15px 0px rgba(0,0,0,0.6)",
            transform: "translatey(0px)",
          },
          "50%": {
            boxShadow: "0 25px 15px 0px rgba(0,0,0,0.2)",
            transform: "translatey(-20px)",
          },
          "100%": {
            boxShadow: "0 5px 15px 0px rgba(0,0,0,0.6)",
            transform: "translatey(0px)",
          },
        },
      },
    },
  },
  plugins: [],
};
