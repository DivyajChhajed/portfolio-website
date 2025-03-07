import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#16ABFF", // Primary color
        "primary-dark": "#0885FF", // Dark mode primary color
        dark: "#1A1A1A", // Dark theme background
        light: "#F5F5F5", // Light theme background
      },
      fontFamily: {
        mono: [
          "ui-monospace",
          "Menlo",
          "Monaco",
          "Cascadia Mono",
          "Segoe UI Mono",
          "Roboto Mono",
          "Oxygen Mono",
          "Ubuntu Monospace",
          "Source Code Pro",
          "Fira Mono",
          "Droid Sans Mono",
          "Courier New",
          "monospace",
        ],
      },
      animation: {
        "spin-slow": "spin 10s linear infinite", // Slower spin animation
      },
    },
  },
  plugins: [],
};

export default config;
