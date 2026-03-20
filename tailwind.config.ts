import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body:    ['var(--font-body)', 'sans-serif'],
        mono:    ['var(--font-mono)', 'monospace'],
      },
      colors: {
        bg:           '#0E0F11',
        surface:      '#16181C',
        surface2:     '#1E2026',
        accent:       '#2B7FFF',
        'accent-dim': '#1A5FCC',
        steel:        '#3A4150',
        text:         '#EAEDF2',
        muted:        '#6B7280',
        border:       '#252830',
        danger:       '#FF3B3B',
      },
    },
  },
  plugins: [],
}

export default config
