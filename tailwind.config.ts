import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./messages/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        abyss: "#060816",
        panel: "rgba(16, 19, 40, 0.7)",
        neon: "#35d7ff",
        iris: "#7c3aed",
        pulse: "#16a3ff",
        text: "#edf3ff",
        mute: "#98a4c6"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(53, 215, 255, 0.18), 0 20px 80px rgba(124, 58, 237, 0.28)",
        card: "0 18px 60px rgba(2, 6, 23, 0.45)"
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(rgba(53, 215, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(53, 215, 255, 0.1) 1px, transparent 1px)"
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        pulseLine: "pulseLine 2s linear infinite",
        aurora: "aurora 14s ease-in-out infinite",
        shimmer: "shimmer 2.4s linear infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        pulseLine: {
          "0%": { transform: "translateY(-140%)", opacity: "0" },
          "20%": { opacity: "0.5" },
          "80%": { opacity: "0.8" },
          "100%": { transform: "translateY(140%)", opacity: "0" }
        },
        aurora: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "33%": { transform: "translate3d(4%, -3%, 0) scale(1.05)" },
          "66%": { transform: "translate3d(-3%, 5%, 0) scale(0.96)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        }
      }
    }
  },
  plugins: []
};

export default config;
