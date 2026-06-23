import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./config/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#ECFEFF",
          100: "#CCFBF1",
          500: "#14B8A6",
          600: "#0D9488",
          700: "#0F766E"
        },
        navy: "#0F172A",
        accent: "#06B6D4",
        paper: "#F8FAFC",
        coral: "#F9735B",
        gold: "#F59E0B"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(15, 23, 42, 0.12)",
        glow: "0 20px 70px rgba(20, 184, 166, 0.28)",
        premium: "0 28px 120px rgba(15, 23, 42, 0.18)",
        "premium-dark": "0 28px 120px rgba(0, 0, 0, 0.38)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        "grid-soft":
          "linear-gradient(rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.06) 1px, transparent 1px)",
        "mesh-light":
          "radial-gradient(circle at 12% 18%, rgba(20,184,166,0.28), transparent 28rem), radial-gradient(circle at 82% 12%, rgba(6,182,212,0.22), transparent 26rem), radial-gradient(circle at 68% 82%, rgba(249,115,91,0.18), transparent 28rem)",
        "mesh-dark":
          "radial-gradient(circle at 10% 18%, rgba(20,184,166,0.2), transparent 28rem), radial-gradient(circle at 88% 8%, rgba(6,182,212,0.18), transparent 28rem), radial-gradient(circle at 70% 82%, rgba(249,115,91,0.16), transparent 28rem)"
      },
      keyframes: {
        "mesh-drift": {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(2%, -2%, 0) scale(1.04)" }
        },
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -12px, 0)" }
        },
        "border-spin": {
          to: { transform: "rotate(360deg)" }
        }
      },
      animation: {
        "mesh-drift": "mesh-drift 16s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "border-spin": "border-spin 8s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
