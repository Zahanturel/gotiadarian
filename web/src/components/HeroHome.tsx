import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";

export function HeroHome() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-secondary" aria-label="Home hero">
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <Image
          src="/assets/goti.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-photo object-cover"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/45 via-black/25 to-black/60"
        aria-hidden
      />
      <div className="relative z-[2] flex min-h-screen flex-col justify-center px-4 pb-28 pt-28 text-center sm:px-6 sm:pb-32 sm:pt-32 lg:px-10">
        <Container>
          <p className="hero-rise mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Surat · Parsi-Zoroastrian Fire Temple
          </p>
          <h1 className="hero-rise mx-auto mb-4 max-w-[64rem] font-serif text-[clamp(2.25rem,5.5vw,4.5rem)] font-bold leading-[1.08] text-[hsl(36,39%,96%)] [animation-delay:120ms]">
            The Sacred Fire of Goti Adarian
          </h1>
          <p className="hero-rise mx-auto mb-10 max-w-[44rem] text-[1.2rem] leading-relaxed text-[hsl(36,39%,96%)]/95 [animation-delay:240ms]">
            A spiritual sanctuary preserving the ancient wisdom and traditions of the Parsi-Zoroastrian
            community
          </p>
          <div className="hero-rise flex flex-wrap justify-center gap-4 [animation-delay:360ms]">
            <Link href="/rituals" className="btn btn-primary btn-lg">
              Explore Rituals
            </Link>
            <Link href="/about" className="btn btn-secondary btn-lg">
              Our History
            </Link>
            <Link href="/donate" className="btn btn-accent btn-lg">
              Support Us
            </Link>
          </div>
        </Container>
      </div>
    </section>
  );
}
