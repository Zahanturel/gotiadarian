import type { Config } from "tailwindcss";

const config: Config = {
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
      },
      spacing: {
        section: "clamp(3.75rem, 7vw, 5.75rem)",
        "section-tight": "clamp(2.25rem, 4.5vw, 3.5rem)",
      },
      fontSize: {
        display: ["clamp(2.35rem, 4.75vw, 3.35rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "title-lg": ["clamp(1.9375rem, 3.5vw, 2.8125rem)", { lineHeight: "1.22", letterSpacing: "-0.02em" }],
        "title-md": ["1.375rem", { lineHeight: "1.35", letterSpacing: "-0.01em" }],
        "body-lg": ["1.125rem", { lineHeight: "1.62" }],
      },
      boxShadow: {
        soft: "0 1px 3px rgba(30, 58, 95, 0.06), 0 6px 24px rgba(30, 58, 95, 0.055)",
        card: "0 1px 2px rgba(30, 58, 95, 0.05), 0 10px 36px rgba(30, 58, 95, 0.075)",
        lift: "0 3px 10px rgba(30, 58, 95, 0.07), 0 14px 44px rgba(30, 58, 95, 0.085)",
      },
      transitionDuration: {
        DEFAULT: "250ms",
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        xl: "0.75rem",
      },
    },
  },
  plugins: [],
};

export default config;
