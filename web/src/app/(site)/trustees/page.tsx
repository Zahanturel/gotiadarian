import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Our Trustees - Goti Adarian",
  description:
    "Meet the dedicated individuals who guide and preserve the sacred traditions of Shri Pak Goti Adarian Saheb, ensuring our heritage continues for future generations.",
  path: "/trustees",
});

const trustees = [
  {
    img: "/images/trustees/tehmuras-modi.webp",
    alt: "Tehmuras Modi",
    name: "Tehmuras Modi",
    role: "President",
    body: "A devoted member of the Davar Modi family, committed to upholding the sacred traditions and ensuring the temple's continued spiritual service to the community.",
  },
  {
    img: "/images/trustees/zawareh-wadia.webp",
    alt: "Zawareh Wadia",
    name: "Zawareh Wadia",
    role: "Managing Trustee",
    body: "Representing the esteemed Wadia family, dedicated to preserving the rich heritage and maintaining the sacred fire for future generations.",
  },
  {
    img: "/images/trustees/sarosh-bhacca.webp",
    alt: "Dr. Sarosh Bhacca",
    name: "Dr. Sarosh Bhacca",
    role: "Trustee",
    body: "A distinguished member of the Bhacca family, bringing wisdom and dedication to the stewardship of our sacred temple.",
  },
  {
    img: "/images/trustees/gul-palia.webp",
    alt: "Gul Palia",
    name: "Gul Palia",
    role: "Trustee",
    body: "Representing the Palia family's longstanding commitment to the temple's welfare and the preservation of Zoroastrian traditions.",
  },
  {
    img: "/images/trustees/yasmin-dotiwala.webp",
    alt: "Yasmin Dotiwala",
    name: "Yasmin Dotiwala",
    role: "Trustee",
    body: "A devoted trustee from the Dotiwala family, working to ensure the continuity of our sacred rituals and community programs.",
  },
  {
    img: "/images/trustees/ryan-modi.webp",
    alt: "Ryan Modi",
    name: "Rayan Modi",
    role: "Trustee",
    body: "A dedicated young member of the Davar Modi family, bringing fresh perspective while honoring the sacred traditions of our temple.",
  },
];

const lineage = [
  "Ervad Rustamji",
  "Ervad Jamasji",
  "Ervad Khurshedji",
  "Ervad Dadabhai",
  "Ervad Dorabji",
  "Ervad Nariman",
  "Ervad Jamshedji",
  "Ervad Parvez",
];

const REVEAL = { y: 16, duration: 0.7 } as const;

const btn =
  "inline-flex min-h-[52px] items-center justify-center whitespace-nowrap rounded-lg px-7 text-base font-semibold no-underline transition-colors duration-[250ms] ease-[cubic-bezier(.22,1,.36,1)]";

const h2 =
  "text-[clamp(1.9375rem,3.5vw,2.8125rem)] font-normal leading-[1.15] tracking-[-0.02em]";

/** Sand mount: a matte with fine lines around a square photo window. */
function Portrait({
  src,
  alt,
  sizes,
  eager = false,
}: {
  src: string;
  alt: string;
  sizes: string;
  eager?: boolean;
}) {
  return (
    <div className="rounded-[4px] bg-[hsl(36,33%,90%)] p-[clamp(10px,4%,16px)] shadow-[inset_0_0_0_1px_hsl(36,29%,82%)]">
      <div className="aspect-square overflow-hidden bg-[hsl(36,29%,86%)] shadow-[0_0_0_1px_hsla(214,48%,25%,.14)]">
        <Image
          src={src}
          alt={alt}
          width={640}
          height={640}
          sizes={sizes}
          loading={eager ? "eager" : "lazy"}
          className="block h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

export default function TrusteesPage() {
  return (
    <>
      <section
        aria-labelledby="page-h"
        className="bg-sand pb-[clamp(48px,6vw,80px)] pt-[clamp(56px,8vw,112px)]"
      >
        <Container>
          <FadeIn {...REVEAL}>
            <h1
              id="page-h"
              className="text-[clamp(2.5rem,5.6vw,4.5rem)] font-normal leading-[1.05] tracking-[-0.02em] text-secondary"
            >
              Our Trustees
            </h1>
          </FadeIn>
          <FadeIn {...REVEAL} delay={0.09}>
            <p className="mt-6 max-w-[40rem] text-body-lg text-muted-foreground [text-wrap:pretty]">
              Meet the dedicated individuals who guide and preserve the sacred traditions of Shri Pak Goti Adarian
              Saheb, ensuring our heritage continues for future generations.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section aria-labelledby="board-h" className="py-[clamp(72px,9vw,128px)]">
        <Container>
          <div className="mb-[clamp(48px,6vw,80px)] grid items-start gap-x-[clamp(28px,5vw,80px)] gap-y-5 [grid-template-columns:repeat(auto-fit,minmax(min(100%,22rem),1fr))]">
            <FadeIn {...REVEAL}>
              <h2 id="board-h" className={`${h2} text-secondary`}>
                Board of Trustees
              </h2>
            </FadeIn>
            <FadeIn {...REVEAL} delay={0.09}>
              <p className="max-w-[34rem] text-[1.0625rem] leading-[1.75] text-muted-foreground [text-wrap:pretty]">
                The temple&apos;s trustees have included respected families such as the Modi, Wadia, Palia,
                Bhacca, and Dotiwala families, who have served with dedication and devotion for generations.
              </p>
            </FadeIn>
          </div>

          <ul className="grid list-none gap-x-[clamp(24px,3vw,40px)] gap-y-[clamp(48px,5vw,64px)] p-0 sm:grid-cols-2 lg:grid-cols-3">
            {trustees.map((t, i) => (
              <li key={t.name}>
                <FadeIn {...REVEAL} delay={(i % 3) * 0.09}>
                  <article className="flex flex-col gap-5">
                    <Portrait
                      src={t.img}
                      alt={t.alt}
                      sizes="(min-width:1024px) 330px, (min-width:640px) 50vw, 100vw"
                    />
                    <div className="flex flex-col gap-1.5">
                      <h3 className="text-2xl font-medium leading-tight text-secondary">{t.name}</h3>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-ink">{t.role}</p>
                      <p className="mt-2 text-[15px] leading-[1.65] text-muted-foreground [text-wrap:pretty]">
                        {t.body}
                      </p>
                    </div>
                  </article>
                </FadeIn>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="panthaky-h" className="bg-sand py-[clamp(72px,9vw,128px)]">
        <Container>
          <FadeIn {...REVEAL}>
            <h2 id="panthaky-h" className={`${h2} mb-[clamp(36px,4.5vw,56px)] text-secondary`}>
              Our Panthaky
            </h2>
          </FadeIn>
          <div className="grid items-start gap-[clamp(32px,4vw,56px)] sm:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[280px_minmax(0,1fr)_minmax(0,17rem)]">
            <FadeIn {...REVEAL} className="w-full max-w-[240px] sm:max-w-[220px] lg:max-w-[280px]">
              <Portrait
                src="/images/trustees/panthaky-meherzad-turel.webp"
                alt="Er. Meherzad Turel - Panthaky"
                sizes="280px"
                eager
              />
            </FadeIn>
            <FadeIn {...REVEAL} delay={0.09} className="max-w-[30rem]">
              <div className="flex flex-col gap-2">
                <h3 className="text-[clamp(1.75rem,3vw,2.25rem)] font-medium leading-[1.15] text-secondary">
                  Er. CA. Meherzad Turel
                </h3>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-ink">Panthaky</p>
                <p className="mt-5 text-[1.0625rem] leading-[1.75] text-muted-foreground [text-wrap:pretty]">
                  The Turel family (originally known as &quot;Velati&quot;) has served as the Panthakis (priests and
                  caretakers) of the Adarian for <strong className="font-semibold text-secondary">eight generations</strong>.
                  Their dedication—especially during floods, when they protected and relocated the sacred fire to
                  safety—has been recorded with reverence.
                </p>
              </div>
            </FadeIn>
            <div className="flex max-w-[30rem] flex-col gap-5 sm:col-start-2 lg:col-start-auto">
              <FadeIn {...REVEAL} delay={0.18}>
                <p className="text-[1.0625rem] leading-[1.75] text-muted-foreground">
                  The family&apos;s lineage of priests includes
                </p>
              </FadeIn>
              <ol
                aria-label="Lineage of priests of the Turel family"
                className="relative m-0 list-none p-0 pl-7 before:absolute before:bottom-[18px] before:left-1 before:top-[18px] before:w-px before:bg-primary/70 before:content-['']"
              >
                {lineage.map((name, i) => (
                  <li key={name}>
                    <FadeIn {...REVEAL} delay={i * 0.09} className="relative">
                      <span className="block py-2 font-serif text-[1.25rem] leading-[1.4] text-secondary">
                        <span
                          className="absolute -left-7 top-1/2 -mt-[4.5px] h-[9px] w-[9px] rounded-full border-[1.5px] border-primary bg-sand"
                          aria-hidden
                        />
                        {name}
                      </span>
                    </FadeIn>
                  </li>
                ))}
              </ol>
              <FadeIn {...REVEAL} delay={0.18}>
                <p className="text-[1.0625rem] leading-[1.75] text-muted-foreground [text-wrap:pretty]">
                  This spiritual service continues to the present day under the guidance of Er. Meherzad Turel, who
                  maintains the ancient traditions with devotion and care.
                </p>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="support-h"
        className="bg-secondary py-[clamp(72px,9vw,112px)] text-secondary-foreground"
      >
        <Container>
          <FadeIn {...REVEAL}>
            <div
              className="mb-[clamp(36px,4vw,48px)] flex items-center gap-5"
              aria-hidden
            >
              <span className="h-px flex-1 bg-primary/60" />
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-background">
                <Image src="/assets/faravahar.png" alt="" width={38} height={38} className="h-auto w-[38px]" />
              </span>
              <span className="h-px flex-1 bg-primary/60" />
            </div>
            <div className="grid items-start gap-x-[clamp(32px,6vw,96px)] gap-y-7 [grid-template-columns:repeat(auto-fit,minmax(min(100%,22rem),1fr))]">
              <h2 id="support-h" className={`${h2} text-secondary-foreground`}>
                Support Our Sacred Mission
              </h2>
              <div className="flex flex-col gap-7">
                <p className="max-w-lg text-[1.125rem] leading-[1.62] text-secondary-foreground/95 [text-wrap:pretty]">
                  Help our trustees preserve the sacred fire and ancient traditions for future generations.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/donate" className={`${btn} bg-primary text-secondary hover:bg-[hsl(43,64%,62%)]`}>
                    Make a Donation
                  </Link>
                  <Link
                    href="/contact"
                    className={`${btn} border-[1.5px] border-secondary-foreground/40 text-secondary-foreground hover:border-primary hover:text-gold-soft`}
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
