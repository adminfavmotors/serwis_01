import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
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
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        dark: "var(--color-dark)",
        accent: "var(--color-accent)",
        "accent-2": "var(--color-accent-2)",
        muted: "var(--color-muted)",
        border: "var(--color-border)",
        background: "var(--color-bg)",
        foreground: "var(--color-dark)",
      },
      fontFamily: {
        display: ["var(--font-display)", "cursive"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "display-hero-mobile": [
          "3rem",
          { lineHeight: "0.9", letterSpacing: "-0.02em" },
        ],
        "display-hero": ["5rem", { lineHeight: "0.9", letterSpacing: "-0.02em" }],
        "display-section-mobile": ["2.25rem", { lineHeight: "1" }],
        "display-section": ["3.5rem", { lineHeight: "1" }],
        h3: ["1.5rem", { lineHeight: "1.2", fontWeight: "600" }],
        body: ["1rem", { lineHeight: "1.6" }],
        caption: ["0.8125rem", { lineHeight: "1.4" }],
      },
      spacing: {
        18: "4.5rem",
        28: "7rem",
        32: "8rem",
      },
      borderRadius: {
        card: "0.5rem",
      },
      boxShadow: {
        hard: "4px 4px 0 0 #0A0A0A",
        "hard-hover": "6px 6px 0 0 #0A0A0A",
        card: "6px 6px 0 0 #0A0A0A",
        "card-hover": "8px 8px 0 0 #0A0A0A",
        input: "3px 3px 0 0 #0A0A0A",
      },
      backgroundImage: {
        "hero-grid":
          "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23202020' stroke-width='1'%3E%3Cpath d='M0 80L80 0'/%3E%3Cpath d='M-20 80L60 0'/%3E%3Cpath d='M20 80L100 0'/%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
export default config;
