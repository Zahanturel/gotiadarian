import type { Config } from "tailwindcss";

const config: Config = {
  // Every hover: utility only applies under @media (hover: hover), so taps never leave a stuck hover look.
  future: { hoverOnlyWhenSupported: true },
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(36, 39%, 96%)",
        foreground: "hsl(214, 48%, 25%)",
        card: "hsl(0, 0%, 100%)",
        muted: "hsl(36, 29%, 84%)",
        "muted-foreground": "hsl(214, 40%, 35%)",
        primary: "hsl(43, 59%, 52%)",
        "primary-foreground": "hsl(214, 48%, 25%)",
        secondary: "hsl(214, 48%, 25%)",
        "secondary-foreground": "hsl(36, 39%, 96%)",
        accent: "hsl(353, 100%, 25%)",
        "accent-foreground": "hsl(36, 39%, 96%)",
        border: "hsl(36, 29%, 84%)",
        // Gold that passes AA for small text and icons on cream/sand (~5.7:1 on cream)
        "gold-ink": "hsl(40, 62%, 30%)",
        // Light gold for labels and links on navy or over the hero photo
        "gold-soft": "hsl(43, 72%, 70%)",
        sand: "hsl(36, 31%, 89%)",
        rule: "hsl(36, 29%, 80%)",
        // Card on cream, and the fine line around cards and mounts
        panel: "hsl(36, 33%, 90%)",
        "panel-line": "hsl(36, 29%, 82%)",
        // Input border (about 3:1 on white)
        "field-border": "hsl(36, 18%, 52%)",
        "primary-hover": "hsl(43, 64%, 62%)",
        "primary-press": "hsl(43, 59%, 46%)",
        "gold-ink-press": "hsl(40, 62%, 25%)",
        donate: {
          bg: "#6b0f0f",
          surface: "rgba(255,255,255,0.08)",
        },
      },
      fontFamily: {
        sans: ["var(--font-open-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      maxWidth: {
        content: "72rem",
        prose: "50rem",
        narrow: "40rem",
        short: "34rem",
      },
      spacing: {
        section: "clamp(4.5rem, 9vw, 8rem)",
        "section-tight": "clamp(2.25rem, 4.5vw, 3.5rem)",
        gutter: "clamp(1rem, 4vw, 2.5rem)",
      },
      fontSize: {
        page: ["clamp(2.5rem, 5.6vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        display: ["clamp(2.35rem, 4.75vw, 3.35rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "title-lg": ["clamp(1.9375rem, 3.5vw, 2.8125rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "title-sm": ["clamp(1.5rem, 2.4vw, 1.875rem)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "title-md": ["1.375rem", { lineHeight: "1.3", letterSpacing: "0" }],
        "body-lg": ["1.125rem", { lineHeight: "1.62" }],
        body: ["1.0625rem", { lineHeight: "1.75" }],
        small: ["15px", { lineHeight: "1.7" }],
        label: ["12px", { lineHeight: "1.4", letterSpacing: "0.16em" }],
      },
      boxShadow: {
        soft: "0 1px 3px rgba(30, 58, 95, 0.06), 0 6px 24px rgba(30, 58, 95, 0.055)",
        card: "0 1px 2px rgba(30, 58, 95, 0.05), 0 10px 36px rgba(30, 58, 95, 0.075)",
        lift: "0 3px 10px rgba(30, 58, 95, 0.07), 0 14px 44px rgba(30, 58, 95, 0.085)",
      },
      transitionDuration: {
        DEFAULT: "250ms",
        reveal: "700ms",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(.22,1,.36,1)",
        calm: "cubic-bezier(.22,1,.36,1)",
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        xl: "0.75rem",
        panel: "4px",
        field: "6px",
      },
    },
  },
  plugins: [],
};

export default config;
