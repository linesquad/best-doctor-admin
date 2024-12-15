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
      screens: {
        extraSm: "250px",
        foldSm: "280px",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".mainLoader": {
          width: "50px",
          aspectRatio: "1",
          borderRadius: "50%",
          background:
            "radial-gradient(farthest-side, #f03355 95%, #0000) 50% 1px/12px 12px no-repeat, radial-gradient(farthest-side, #0000 calc(100% - 14px), #ccc 0)",
          animation: "l9 2s infinite linear",
        },
        "@keyframes l9": {
          to: {
            transform: "rotate(1turn)",
          },
        },
      });
    },
  ],
};
