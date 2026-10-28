import Image from "next/image";
import Link from "next/link";
import { MAP_URL } from "@/lib/site";
import { Container } from "./Container";

const btn =
  "inline-flex min-h-[52px] items-center justify-center whitespace-nowrap rounded-lg px-7 text-base font-semibold no-underline transition-colors duration-[250ms] ease-[cubic-bezier(.22,1,.36,1)]";

const stripLabel = "mb-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-soft";
const stripLink =
  "text-secondary-foreground underline decoration-secondary-foreground/35 underline-offset-4 transition-colors duration-[250ms] hover:text-white hover:decoration-primary";

export function HeroHome() {
  return (
    <section
      className="relative flex min-h-[max(600px,calc(100svh-var(--header-h,77px)))] flex-col justify-end overflow-hidden bg-secondary text-secondary-foreground"
      aria-label="Home hero"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src="/assets/goti.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-photo object-cover [object-position:center_40%]"
        />
      </div>
      <div className="hero-overlay pointer-events-none absolute inset-0" aria-hidden />

      <Container className="relative pb-[clamp(28px,5vh,48px)] pt-16 sm:pt-[120px]">
        <h1
          className="hero-rise max-w-[13ch] font-serif text-[clamp(2.5rem,6.4vw,5.25rem)] font-medium leading-[1.04] tracking-[-0.02em] text-secondary-foreground"
          style={{ animationDelay: "120ms" }}
        >
          The Sacred Fire of Goti Adarian
        </h1>
        <p
          className="hero-rise mt-6 max-w-xl text-[clamp(1.0625rem,1.5vw,1.2rem)] leading-[1.62] text-secondary-foreground/95 [text-wrap:pretty]"
          style={{ animationDelay: "210ms" }}
        >
          A spiritual sanctuary preserving the ancient wisdom and traditions of the Parsi-Zoroastrian community
        </p>
        <div className="hero-rise mt-9 flex flex-wrap gap-3" style={{ animationDelay: "300ms" }}>
          <Link
            href="/rituals"
            className={`${btn} bg-primary text-secondary hover:bg-[hsl(43,64%,62%)]`}
          >
            Explore Rituals
          </Link>
          <Link
            href="/about"
            className={`${btn} border-[1.5px] border-secondary-foreground/70 text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary`}
          >
            Our History
          </Link>
          <Link
            href="/donate"
            className={`${btn} bg-accent text-accent-foreground hover:bg-[hsl(353,90%,31%)]`}
          >
            Support Us
          </Link>
        </div>

        <div
          className="hero-rise mt-[clamp(48px,9vh,88px)] flex items-end gap-6 border-t border-secondary-foreground/30 pt-5"
          style={{ animationDelay: "390ms" }}
        >
          <dl className="grid flex-1 gap-x-10 gap-y-4 text-sm leading-[1.55] min-[560px]:grid-cols-2 min-[900px]:grid-cols-[2fr_1fr_1fr]">
            <div className="min-w-0 min-[560px]:col-span-2 min-[900px]:col-span-1">
              <dt className={stripLabel}>Address</dt>
              <dd>
                <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className={stripLink}>
                  Goti Adarian, Variyavi Bhagol, Variyadi Bazar, Dhastipura, Sayedpura, Surat, Gujarat 395003
                </a>
              </dd>
            </div>
            <div>
              <dt className={stripLabel}>Opening Hours</dt>
              <dd>Open 24 hours a day</dd>
            </div>
            <div>
              <dt className={stripLabel}>Phone</dt>
              <dd>
                <a href="tel:+917573013336" className={stripLink}>
                  +91 7573013336
                </a>
              </dd>
            </div>
          </dl>
          <span
            className="relative hidden h-11 w-px flex-none overflow-hidden bg-secondary-foreground/20 md:block"
            aria-hidden
          >
            <span className="hero-cue absolute inset-0 bg-gold-soft" />
          </span>
        </div>
      </Container>
    </section>
  );
}
