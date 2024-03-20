/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        gray: "#F4F4F4",
        purple: "#4A00FF",
        lila: "#DEDEFF",
        "light-gray": "#D8D8D8",
        "cool-gray": "#9CA3AF",
      },
    },
  },
  plugins: [],
};
