import type { ReactNode } from "react";
import { Container } from "./Container";
import { FadeIn } from "./FadeIn";

const variants = {
  default: "bg-background",
  muted: "bg-muted/60",
  secondary: "bg-secondary text-secondary-foreground",
} as const;

export function PageSection({
  children,
  variant = "default",
  className = "",
  contained = true,
  animate = true,
}: {
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  contained?: boolean;
  animate?: boolean;
}) {
  const inner = contained ? <Container>{children}</Container> : children;
  const body = (
    <section
      className={`${variants[variant]} py-section ${className}`}
    >
      {inner}
    </section>
  );
  if (!animate) return body;
  return <FadeIn>{body}</FadeIn>;
}
