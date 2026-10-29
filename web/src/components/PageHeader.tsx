import type { ReactNode } from "react";
import { Container } from "./Container";
import { FadeIn } from "./FadeIn";

/** Shared inner-page header: left-aligned h1 and a short paragraph, on sand (or maroon for Donate). */
export function PageHeader({
  title,
  children,
  theme = "sand",
  id = "page-h",
  before,
  after,
}: {
  title: string;
  children: ReactNode;
  theme?: "sand" | "donate";
  id?: string;
  before?: ReactNode;
  after?: ReactNode;
}) {
  const dark = theme === "donate";
  return (
    <section
      aria-labelledby={id}
      className={`pb-[clamp(48px,6vw,80px)] pt-[clamp(56px,8vw,112px)] ${
        dark ? "on-dark border-b border-white/10" : "bg-sand"
      }`}
    >
      <Container>
        {before}
        <FadeIn>
          <h1
            id={id}
            className={`font-serif text-page font-normal ${dark ? "text-accent-foreground" : "text-secondary"}`}
          >
            {title}
          </h1>
        </FadeIn>
        <FadeIn delay={0.09}>
          <p
            className={`mt-6 max-w-narrow text-body-lg [text-wrap:pretty] ${
              dark ? "text-accent-foreground/95" : "text-muted-foreground"
            }`}
          >
            {children}
          </p>
        </FadeIn>
        {after}
      </Container>
    </section>
  );
}
