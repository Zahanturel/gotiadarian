import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { buildPageMetadata } from "@/lib/seo";
import { DEFAULT_SITE_DESCRIPTION } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "Goti Adarian - Sacred Space for the Parsi-Zoroastrian Community",
  description: DEFAULT_SITE_DESCRIPTION,
  path: "/",
});

const INTRO_FEATURES = [
  {
    icon: "fa-fire",
    title: "Sacred Fire",
    text: "The eternal flame that has burned for generations, symbolizing purity and divine presence.",
  },
  {
    icon: "fa-hands-praying",
    title: "Daily Prayers",
    text: "Regular prayer services conducted in the ancient Avestan Pehlavi language, maintaining our spiritual connection.",
  },
  {
    icon: "fa-calendar-days",
    title: "Festival Celebrations",
    text: "Community gatherings for traditional festivals that strengthen our cultural bonds.",
  },
] as const;

const REVEAL = { y: 16, duration: 0.7 } as const;

const btn =
  "inline-flex min-h-[52px] items-center justify-center whitespace-nowrap rounded-lg px-7 text-base font-semibold no-underline transition-colors duration-[250ms] ease-[cubic-bezier(.22,1,.36,1)]";

const cardFocus =
  "focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-gold-ink";

const cardBase =
  "flex h-full min-h-[clamp(300px,34vw,420px)] flex-col justify-between gap-14 rounded-xl no-underline";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section
        aria-labelledby="intro-h"
        className="pb-[clamp(72px,9vw,120px)] pt-[clamp(80px,11vw,152px)]"
      >
        <Container>
          <div className="grid items-start gap-[clamp(28px,5vw,80px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,22rem),1fr))]">
            <FadeIn {...REVEAL}>
              <h2
                id="intro-h"
                className="max-w-[11ch] text-[clamp(2.25rem,4.6vw,3.75rem)] font-normal leading-[1.08] tracking-[-0.02em] text-secondary"
              >
                Preserving Ancient Revelations
              </h2>
            </FadeIn>
            <FadeIn {...REVEAL} delay={0.09}>
              <div className="flex max-w-[34rem] flex-col gap-5">
                <p className="font-serif text-[clamp(1.25rem,1.9vw,1.5rem)] leading-[1.5] text-secondary [text-wrap:pretty]">
                  For centuries, the Goti Adarian has stood as a sacred sanctuary where the eternal flame burns
                  bright, connecting our community to the profound teachings of Prophet Zarathustra. Here,
                  tradition meets modernity, and ancient wisdom guides contemporary life.
                </p>
                <p className="text-[1.0625rem] leading-[1.75] text-muted-foreground [text-wrap:pretty]">
                  Our fire temple serves not just as a place of worship, but as a cultural cornerstone that
                  preserves the rich heritage of the Parsi-Zoroastrian community. Through prayer, ceremony, and
                  community gathering, we maintain the sacred traditions passed down through generations.
                </p>
              </div>
            </FadeIn>
          </div>

          <ul className="mt-[clamp(64px,8vw,104px)] grid list-none gap-x-[clamp(24px,4vw,56px)] border-t border-border p-0 md:grid-cols-3">
            {INTRO_FEATURES.map((f, i) => (
              <li key={f.title} className="border-b border-border">
                <FadeIn {...REVEAL} delay={i * 0.09} className="flex flex-col gap-2.5 py-7">
                  <i className={`fas ${f.icon} text-lg text-gold-ink`} aria-hidden />
                  <h3 className="mt-1.5 text-[1.375rem] font-medium leading-[1.3] text-secondary">{f.title}</h3>
                  <p className="max-w-[22rem] text-[15px] leading-[1.65] text-muted-foreground">{f.text}</p>
                </FadeIn>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="explore-h" className="bg-sand py-[clamp(72px,9vw,120px)]">
        <Container>
          <FadeIn {...REVEAL}>
            <h2
              id="explore-h"
              className="mb-[clamp(36px,4.5vw,56px)] text-[clamp(1.9375rem,3.5vw,2.8125rem)] font-normal leading-[1.15] tracking-[-0.02em] text-secondary"
            >
              Explore Our Heritage
            </h2>
          </FadeIn>
          <div className="grid gap-[clamp(16px,2vw,24px)] sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr]">
            <FadeIn {...REVEAL} className="sm:col-span-2 lg:col-span-1">
              <Link
                href="/rituals"
                className={`${cardBase} ${cardFocus} bg-secondary p-[clamp(28px,3.5vw,48px)] text-secondary-foreground transition-colors duration-[400ms] ease-[cubic-bezier(.22,1,.36,1)] hover:bg-[hsl(214,48%,21%)]`}
              >
                <i className="fas fa-fire text-[28px] text-primary" aria-hidden />
                <span className="flex flex-col gap-4">
                  <h3 className="text-[clamp(2rem,3.4vw,2.75rem)] font-normal leading-[1.1] tracking-[-0.015em] text-secondary-foreground">
                    Sacred Traditions
                  </h3>
                  <span className="max-w-[26rem] text-base leading-[1.65] text-secondary-foreground/90">
                    Discover the ancient rituals and ceremonies that have been preserved through generations.
                  </span>
                  <span className="mt-3 inline-flex items-center gap-2.5 text-[15px] font-semibold text-gold-soft">
                    Learn About Rituals <i className="fas fa-arrow-right text-xs" aria-hidden />
                  </span>
                </span>
              </Link>
            </FadeIn>

            <FadeIn {...REVEAL} delay={0.09}>
              <Link
                href="/zoroastrianism"
                className={`${cardBase} ${cardFocus} relative overflow-hidden bg-background p-[clamp(28px,3vw,40px)] text-secondary shadow-card transition-shadow duration-[400ms] ease-[cubic-bezier(.22,1,.36,1)] hover:shadow-lift`}
              >
                <Image
                  src="/assets/faravahar.png"
                  alt=""
                  aria-hidden
                  width={360}
                  height={360}
                  className="pointer-events-none absolute -bottom-[6%] -right-[12%] h-auto w-[88%] max-w-[360px] opacity-[0.07]"
                />
                <i className="fas fa-hands-praying relative text-2xl text-gold-ink" aria-hidden />
                <span className="relative flex flex-col gap-3.5">
                  <h3 className="text-[clamp(1.5rem,2.2vw,1.875rem)] font-medium leading-[1.2] text-secondary">
                    Spiritual Teachings
                  </h3>
                  <span className="text-[15px] leading-[1.65] text-muted-foreground">
                    Explore the philosophy and ethical principles of one of the world&apos;s oldest religions.
                  </span>
                  <span className="mt-2.5 inline-flex items-center gap-2.5 text-[15px] font-semibold text-secondary">
                    Explore Beliefs <i className="fas fa-arrow-right text-xs" aria-hidden />
                  </span>
                </span>
              </Link>
            </FadeIn>

            <FadeIn {...REVEAL} delay={0.18}>
              <Link
                href="/community"
                className={`${cardBase} ${cardFocus} border border-[hsl(214,30%,62%)] p-[clamp(28px,3vw,40px)] text-secondary transition-[border-color,background-color] duration-[400ms] ease-[cubic-bezier(.22,1,.36,1)] hover:border-secondary hover:bg-background/50`}
              >
                <i className="fas fa-calendar-days text-2xl text-secondary" aria-hidden />
                <span className="flex flex-col gap-3.5">
                  <h3 className="text-[clamp(1.5rem,2.2vw,1.875rem)] font-medium leading-[1.2] text-secondary">
                    Community Events
                  </h3>
                  <span className="text-[15px] leading-[1.65] text-muted-foreground">
                    Join our vibrant community gatherings and festivals.
                  </span>
                  <span className="mt-2.5 inline-flex items-center gap-2.5 text-[15px] font-semibold text-secondary">
                    View Calendar <i className="fas fa-arrow-right text-xs" aria-hidden />
                  </span>
                </span>
              </Link>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="preserve-h"
        className="bg-secondary py-[clamp(72px,9vw,112px)] text-secondary-foreground"
      >
        <Container>
          <FadeIn {...REVEAL}>
            <div className="grid items-start gap-x-[clamp(32px,6vw,96px)] gap-y-7 border-t border-primary/60 pt-[clamp(36px,4vw,48px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,22rem),1fr))]">
              <h2
                id="preserve-h"
                className="text-[clamp(1.9375rem,3.5vw,2.8125rem)] font-normal leading-[1.15] tracking-[-0.02em] text-secondary-foreground"
              >
                Preserve Our Heritage
              </h2>
              <div className="flex flex-col gap-7">
                <p className="max-w-lg text-[1.125rem] leading-[1.62] text-secondary-foreground/90 [text-wrap:pretty]">
                  Help us maintain the sacred fires and traditions of the Parsi-Zoroastrian community for future
                  generations.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/donate" className={`${btn} bg-primary text-secondary hover:bg-[hsl(43,64%,62%)]`}>
                    Support Our Mission
                  </Link>
                  <Link
                    href="/contact"
                    className={`${btn} border-[1.5px] border-secondary-foreground/40 text-secondary-foreground hover:border-primary hover:text-gold-soft`}
                  >
                    Get Involved
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section aria-label="Yasna 28.4" className="py-[clamp(96px,12vw,168px)] text-center">
        <Container>
          <FadeIn {...REVEAL}>
            <figure className="mx-auto flex max-w-[46rem] flex-col items-center gap-[clamp(32px,4vw,44px)]">
              <div className="flex w-full max-w-[22rem] items-center gap-5" aria-hidden>
                <span className="h-px flex-1 bg-rule" />
                <Image src="/assets/faravahar.png" alt="" width={64} height={64} className="h-auto w-16" />
                <span className="h-px flex-1 bg-rule" />
              </div>
              <blockquote className="font-serif text-[clamp(1.375rem,2.6vw,2rem)] font-normal italic leading-[1.5] text-secondary [text-wrap:balance]">
                “As long as I have the will and wield the power,
                <br />
                so long will I teach mankind to strive for Truth.” —Asha
              </blockquote>
              <figcaption className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-ink">
                — Yasna 28.4
              </figcaption>
            </figure>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
