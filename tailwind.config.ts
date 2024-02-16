import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        para: "#808080",
        nav: "#C5C5C5",
        card: "#383737",
        cardborder: "#383737",
        footer_text: "#8080807f",
        light: {
          para: "",
          nav: "#181818",
          card: "#F6F6F6",
          cardborder: "#EBEBEB",
        },
      },
    },
  },
  plugins: [],
};
export default config;
