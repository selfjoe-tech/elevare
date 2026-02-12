import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#050505",
          2: "#0B0B0B",
          3: "#121212",
        },
        gold: {
          DEFAULT: "#C8A24A",
          2: "#E1C36A",
          3: "#8E6F2A",
        },
        paper: "#FFFFFF",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gold-sheen":
          "radial-gradient(60% 60% at 50% 0%, rgba(200,162,74,0.22) 0%, rgba(200,162,74,0) 60%)",
      },
      boxShadow: {
        elite:
          "0 0 0 1px rgba(200,162,74,0.18), 0 14px 40px rgba(0,0,0,0.65)",
      },
    },
  },
  plugins: [],
};

export default config;
