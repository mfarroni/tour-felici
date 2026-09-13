import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dolomia: "#E8E3DC",
        abete: "#2D4A3E",
        "abete-light": "#3D6354",
        ocra: "#C89B5C",
        "ocra-light": "#D4AD72",
        ardesia: "#4A4A4A",
        roccia: "#6B6358",
        neve: "#F5F3EF",
        "neve-dark": "#EBE7E0",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "hero": ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1.1" }],
        "section": ["clamp(1.8rem, 3vw, 3rem)", { lineHeight: "1.2" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
export default config;