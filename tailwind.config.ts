import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      color: {
        text: "#3E2723",
        primary: "#F16961",
        secondary: "#3E5FB4",
        background: "#FFFDFA",
        accent: "#F72487",
      },
      textColor: {
        text: "#3E2723",
        primary: "#F16961",
        secondary: "#3E5FB4",
        background: "#FFFDFA",
        accent: "#F72487",
      },
      backgroundColor: {
        text: "#3E2723",
        primary: "#F16961",
        secondary: "#3E5FB4",
        background: "#FFFDFA",
        accent: "#F72487",
      },
      borderColor: {
        text: "#3E2723",
        primary: "#F16961",
        secondary: "#3E5FB4",
        background: "#FFFDFA",
        accent: "#F72487",
      },
      fontFamily: {
        avenir: ["var(--font-avenir)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
