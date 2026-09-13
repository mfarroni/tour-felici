import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        abete: {
          DEFAULT: "#1C3329",
          light: "#2D4A3E",
          dark: "#14241D",
          deep: "#0F1A15",
        },
        dolomia: {
          DEFAULT: "#E8E3DC",
          light: "#F4F1EA",
          dark: "#D6CFC4",
          surface: "#FAF8F5",
        },
        ocra: {
          DEFAULT: "#C89B5C",
          light: "#D4AD72",
          dark: "#A67C41",
          gold: "#DFB277",
        },
        ardesia: {
          DEFAULT: "#222625",
          light: "#4A4A4A",
          dark: "#151817",
          muted: "#6B7280",
        },
        roccia: {
          DEFAULT: "#6B6358",
          light: "#8C8377",
          dark: "#4B443B",
        },
        neve: {
          DEFAULT: "#F5F3EF",
          pure: "#FFFFFF",
          soft: "#EDEAE4",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-geist-mono)", "Geist Mono", "monospace"],
      },
      borderRadius: {
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        alpine: "0 10px 30px -10px rgba(28, 51, 41, 0.15)",
        "alpine-lg": "0 20px 40px -15px rgba(28, 51, 41, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
