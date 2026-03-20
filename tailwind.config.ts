import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "1280px",
      },
      padding: {
        DEFAULT: "1.5rem",
        md: "2rem",
        xl: "5rem",
      },
    },
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        accent: "var(--accent)",
        "accent-dark": "var(--accent-dark)",
        border: "var(--border)",
        foreground: "var(--text)",
        muted: "var(--text-muted)",
        white: "var(--white)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "display-hero-mobile": [
          "3rem",
          { lineHeight: "0.9", letterSpacing: "-0.02em" },
        ],
        "display-hero": ["5rem", { lineHeight: "0.88", letterSpacing: "-0.01em" }],
        "display-section-mobile": ["2.25rem", { lineHeight: "1" }],
        "display-section": ["3.5rem", { lineHeight: "1" }],
        h3: ["1.5rem", { lineHeight: "1.2", fontWeight: "600" }],
        body: ["1rem", { lineHeight: "1.6" }],
        caption: ["0.8125rem", { lineHeight: "1.4" }],
      },
      borderRadius: {
        card: "4px",
      },
      boxShadow: {
        hard: "0 0 0 1px #2A2A2A",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
