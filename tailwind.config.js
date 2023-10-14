/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

// HANDLE DARK MODE 
  darkMode: 'class',

  theme: {
    extend: {
      colors: {

        bgDark: "#363062",
        bgLight: "#4D4C7D",
        orange: "#F99417",
        milky: "#F5F5F5",

        error: "#C30000",
        "error-light": "#ED2E2E",
        "error-extralight": "#FFF2F2",

        success: "#00966D",
        "success-light": "#00BA88",
        "success-extralight": "#F3FDFA",

        gray: {
          1: "#F9F9F9",
          2: "#E1E1E1",
          3: "#EDEDED",
          4: "#CBCBCB",
          5: "#ADADAD",
          6: "#757575",
          7: "#717171",
          8: "#353535",
        }

      },
      fontSize: {
        h1: "44px",
        h2: "40px",
        h3: "32px",
        h4: "24px",
        h5: "20px",
        h6: "16px",
        h7: "20px",
      },
      borderRadius: {
        4: "4px",
        8: "8px",
        16: "16px",
        24: "24px",
        32: "32px",
        64: "64px",
      }
    },
  },
  plugins: []
}

