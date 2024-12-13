/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Nunnito: ["Nunito", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
      },
      backgroundColor: {
        "ExtraLight-bg": "rgba(0, 0, 0, 0.04)",
      }
    },
  },
  plugins: [],
};
