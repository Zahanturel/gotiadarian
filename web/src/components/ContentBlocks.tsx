"use client";

import Link from "next/link";
import { FadeIn } from "./FadeIn";

export function IntroFeatureCard({
  icon,
  title,
  text,
  delay = 0,
}: {
  icon: string;
  title: string;
  text: string;
  delay?: number;
}) {
  return (
    <FadeIn delay={delay}>
      <div className="surface-card h-full p-7 md:p-8">
        <i className={`fas ${icon} mb-4 text-3xl text-primary`} aria-hidden />
        <h3 className="mb-2 font-serif text-xl font-semibold text-secondary">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {text}
        </p>
      </div>
    </FadeIn>
  );
}

export function HeritagePreviewCard({
  icon,
  title,
  body,
  href,
  cta,
}: {
  icon: string;
  title: string;
  body: string;
  href: string;
  cta: string;
}) {
  return (
    <FadeIn>
      <div className="surface-card flex h-full flex-col p-7 text-center md:p-8">
        <i className={`fas ${icon} mb-4 text-3xl text-primary`} aria-hidden />
        <h3 className="mb-4 font-serif text-xl font-semibold text-secondary">
          {title}
        </h3>
        <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
          {body}
        </p>
        <Link href={href} className="btn btn-outline mt-auto">
          {cta}
        </Link>
      </div>
    </FadeIn>
  );
}
