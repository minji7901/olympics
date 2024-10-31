export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    maxWidth: {
      "custom": "1200px",
    },
    minWidth: {
      "custom": "800px",
    },
    fontFamily: {
      "custom": "BMJUA",
    },
    boxShadow: {
      "custom-medal": "inset 5px 5px 5px 2px rgba(0, 0, 0, 0.2)",
      "custom-btn":
        "inset 2px 2px 3px rgb(0, 0, 0, 0.1),3px 3px 5px rgba(0, 0, 0, 0.5)",
    },
    colors: {
      primary: {
        100: "rgba(161,234,254,0.7)",
        200: "#99E8FE",
        300: "#66D4FF",
      },
      secondly: {
        100: "#66D4FF",
        200: "#54B4D1",
      },
      softly: {
        100: "#E0E0E0",
        200: "#C0C0C0",
        300: "#A0A0A0",
      },
      default: "#333",
    },
  },
};
export const plugins = [];
