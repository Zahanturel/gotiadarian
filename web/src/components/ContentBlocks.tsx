"use client";

import Link from "next/link";
import { Bilingual } from "@/contexts/LanguageContext";
import { FadeIn } from "./FadeIn";

export function IntroFeatureCard({
  icon,
  titleEn,
  titleGu,
  textEn,
  textGu,
  delay = 0,
}: {
  icon: string;
  titleEn: string;
  titleGu: string;
  textEn: string;
  textGu: string;
  delay?: number;
}) {
  return (
    <FadeIn delay={delay}>
      <div className="surface-card h-full p-7 md:p-8">
        <i className={`fas ${icon} mb-4 text-3xl text-primary`} aria-hidden />
        <h3 className="mb-2 font-serif text-xl font-semibold text-secondary">
          <Bilingual en={<>{titleEn}</>} gu={<>{titleGu}</>} />
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          <Bilingual en={<>{textEn}</>} gu={<>{textGu}</>} />
        </p>
      </div>
    </FadeIn>
  );
}

export function HeritagePreviewCard({
  icon,
  titleEn,
  titleGu,
  bodyEn,
  bodyGu,
  href,
  ctaEn,
  ctaGu,
}: {
  icon: string;
  titleEn: string;
  titleGu: string;
  bodyEn: string;
  bodyGu: string;
  href: string;
  ctaEn: string;
  ctaGu: string;
}) {
  return (
    <FadeIn>
      <div className="surface-card flex h-full flex-col p-7 text-center md:p-8">
        <i className={`fas ${icon} mb-4 text-3xl text-primary`} aria-hidden />
        <h3 className="mb-4 font-serif text-xl font-semibold text-secondary">
          <Bilingual en={<>{titleEn}</>} gu={<>{titleGu}</>} />
        </h3>
        <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
          <Bilingual en={<>{bodyEn}</>} gu={<>{bodyGu}</>} />
        </p>
        <Link href={href} className="btn btn-outline mt-auto">
          <Bilingual en={<>{ctaEn}</>} gu={<>{ctaGu}</>} />
        </Link>
      </div>
    </FadeIn>
  );
}
