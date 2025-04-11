/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#ededed",
        primary: "#14532d", // Deep forest green - now the official primary
        secondary: "#8aa79c", // Muted, stone gray
        accent: "#d4af37", // Elegant gold
        gold: "#d4af37",
        green: {
          900: "#14532d", // Deep forest green
          800: "#166534",
        },
      },
      fontFamily: {
        sans: ['Inter', 'Montserrat', 'sans-serif'],
      },
      animation: {
        'bg-flow': 'bg-flow 15s ease-in-out infinite',
      },
      keyframes: {
        'bg-flow': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};
