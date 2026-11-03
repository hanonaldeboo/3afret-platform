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
        background: "#08080a",
        foreground: "#f8fafc",
        gold: {
          50: "#fffdf0",
          100: "#fef9c3",
          200: "#fef08a",
          300: "#fde047",
          400: "#eab308",
          500: "#d4af37", // Primary luxury gold
          600: "#b8860b", // Darker gold
          700: "#855800",
          800: "#5c3d00",
          900: "#3d2900",
        },
        obsidian: {
          950: "#050507",
          900: "#09090d",
          850: "#0f0f15",
          800: "#15151e",
          700: "#1f202c",
          600: "#2d2f3f",
        },
      },
      boxShadow: {
        "gold-glow": "0 0 25px -5px rgba(212, 175, 55, 0.4)",
        "gold-glow-lg": "0 0 45px -5px rgba(212, 175, 55, 0.6)",
        "gold-glow-sm": "0 0 15px -3px rgba(212, 175, 55, 0.3)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #FFF099 0%, #D4AF37 50%, #AA7C11 100%)",
        "gold-gradient-hover": "linear-gradient(135deg, #FFF5B8 0%, #E6C34E 50%, #C49117 100%)",
        "dark-radial": "radial-gradient(circle at 50% 20%, rgba(212, 175, 55, 0.08) 0%, rgba(8, 8, 10, 0.95) 75%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
