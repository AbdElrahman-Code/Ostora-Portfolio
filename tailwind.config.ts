import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#080A10",
          900: "#0B0E14",
          800: "#11151F",
          700: "#171C29",
          600: "#232A3B",
          500: "#38415A",
        },
        ink: {
          100: "#F4F6FB",
          300: "#C7CEDE",
          500: "#8A93AC",
        },
        signal: {
          indigo: "#5B7CFA",
          cyan: "#22D3C0",
          amber: "#F5B942",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "radial-fade": "radial-gradient(circle at 50% 0%, rgba(91,124,250,0.18), transparent 60%)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(91,124,250,0.25), 0 8px 30px rgba(91,124,250,0.15)",
        "glow-cyan": "0 0 0 1px rgba(34,211,192,0.25), 0 8px 30px rgba(34,211,192,0.15)",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        marquee: "marquee 28s linear infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
