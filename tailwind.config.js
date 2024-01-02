/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        ["infinite-slider"]: "infiniteSlider 20s linear infinite",
      },
      keyframes: {
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-250px * 5))",
          },
        },
      },
      backgroundColor: {
        'mauve': 'rgba(242, 239, 243, 1)', // Define your custom color with opacity
        'mauve-light': 'rgb(227, 223, 230,0.5)', // Define your custom color with opacity
      },
    },
  },
  plugins: [],
};
