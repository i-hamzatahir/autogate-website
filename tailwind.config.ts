import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#111111",
        foreground: "#ffffff",
        primary: {
          DEFAULT: "#111111",
          foreground: "#ffffff"
        },
        secondary: {
          DEFAULT: "#1f1f1f",
          foreground: "#ffffff"
        },
        accent: {
          DEFAULT: "#ff3c00",
          foreground: "#ffffff"
        },
        muted: {
          DEFAULT: "#1f1f1f",
          foreground: "#a3a3a3"
        },
        border: "#272727"
      },
      fontFamily: {
        heading: ["system-ui", "sans-serif"],
        body: ["system-ui", "sans-serif"]
      },
      boxShadow: {
        "glow-orange": "0 0 40px rgba(255, 60, 0, 0.45)"
      }
    }
  },
  plugins: []
};

export default config;

