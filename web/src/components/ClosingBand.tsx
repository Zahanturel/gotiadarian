import type { ReactNode } from "react";
import Image from "next/image";
import { Container } from "./Container";
import { FadeIn } from "./FadeIn";

/** Navy closing band: Faravahar medallion between two rules, then heading | text and buttons. */
export function ClosingBand({
  id,
  title,
  children,
  actions,
}: {
  id: string;
  title: string;
  children: ReactNode;
  actions: ReactNode;
}) {
  return (
    <section
      aria-labelledby={id}
      className="on-dark bg-secondary py-[clamp(72px,9vw,112px)] text-secondary-foreground"
    >
      <Container>
        <FadeIn>
          <div className="mb-[clamp(36px,4vw,48px)] flex items-center gap-5" aria-hidden>
            <span className="h-px flex-1 bg-primary/60" />
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-background">
              <Image src="/assets/faravahar.png" alt="" width={38} height={38} className="h-auto w-[38px]" />
            </span>
            <span className="h-px flex-1 bg-primary/60" />
          </div>
          <div className="grid items-start gap-x-[clamp(32px,6vw,96px)] gap-y-7 [grid-template-columns:repeat(auto-fit,minmax(min(100%,22rem),1fr))]">
            <h2 id={id} className="font-serif text-title-lg font-normal text-secondary-foreground">
              {title}
            </h2>
            <div className="flex flex-col gap-7">
              <p className="max-w-lg text-body-lg text-secondary-foreground/95 [text-wrap:pretty]">{children}</p>
              <div className="flex flex-wrap gap-3">{actions}</div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
