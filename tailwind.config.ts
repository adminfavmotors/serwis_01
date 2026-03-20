import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        bg: "#0E0F11",
        surface: "#16181C",
        surface2: "#1E2026",
        accent: "#2B7FFF",
        "accent-dim": "#1A5FCC",
        "accent-glow": "rgba(43,127,255,0.15)",
        steel: "#3A4150",
        text: "#EAEDF2",
        muted: "#6B7280",
        border: "#252830",
        danger: "#FF3B3B",
        success: "#00C48C",
      },
      fontSize: {
        "display-xl": [
          "clamp(64px, 9vw, 108px)",
          { lineHeight: "0.90", letterSpacing: "-0.01em" },
        ],
        "display-lg": [
          "clamp(40px, 6vw, 72px)",
          { lineHeight: "0.92", letterSpacing: "-0.01em" },
        ],
        "display-md": [
          "clamp(28px, 3.5vw, 44px)",
          { lineHeight: "1.0" },
        ],
        "body-lg": ["18px", { lineHeight: "1.7" }],
        "body-md": ["16px", { lineHeight: "1.7" }],
        "body-sm": ["14px", { lineHeight: "1.6" }],
        "mono-lg": ["18px", { lineHeight: "1.2" }],
        "mono-md": ["13px", { lineHeight: "1.3" }],
        "mono-sm": ["11px", { lineHeight: "1.3" }],
      },
    },
  },
  plugins: [],
};

export default config;
