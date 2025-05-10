/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // 🌑 Neutrals
        background: "#0a0a0a",
        surface: "#1a1a1a",
        border: "#2a2a2a",
        textPrimary: "#e0e0e0",
        textMuted: "#9e9e9e",

        // 🎯 Brand Core
        primaryDark: "#0f362e",
        primaryLight: "#e0ee28",
        accentAqua: "#dffbcb",
        accentIndigo: "#096554",

        // ⚠️ States
        success: "#00ff88",
        warning: "#ffc107",
        error: "#ff4d4f",
      },
      fontFamily: {
        sans: ["Inter", "Montserrat", "sans-serif"],
      },
      animation: {
        "bg-flow": "bg-flow 15s ease-in-out infinite",
      },
      keyframes: {
        "bg-flow": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};