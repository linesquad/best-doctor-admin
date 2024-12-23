/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        //Blues
        darkBlue: "#004682",
        lightBlue: "#07D",
        lightSkyBlue: "#D8EFFF",
        brightBlue: "#478AEC",
        oceanBlue: "#267CC5",
        pastelBlue: "#CCDCF3",
        crystalBlue: "#EFF6FF",
        softBlue: "#CBDEEF",
        //Greys
        lightTransparent: "rgba(0, 0, 0, 0.04)",
        semiTransparent: "rgba(0, 0, 0, 0.50)",
        veryDark: "#101012",
        //Brown
        lightBrown: "rgba(46, 24, 20, 0.62)",
      },
      backgroundImage: {
        "gradient-text": "linear-gradient(180deg, #07D 0%, #004077 100%)",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        poppinsRegular: 400,
        poppinsMedium: 500,
        poppinsSemiBold: 600,
        poppinsBold: 700,
        poppinsExtraBold: 800,
        screens: {
          extraSm: "250px",
          foldSm: "280px",
        },
      },
    },
    plugins: [],
  },
};
