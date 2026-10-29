import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { AboutRail } from "@/components/AboutRail";
import { Timeline } from "@/components/Timeline";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "About - Goti Adarian",
  description:
    "Discover the rich history and enduring legacy of the Goti Adarian temple, a beacon of faith that has guided the Parsi-Zoroastrian community for centuries.",
  path: "/about",
});

const accounts = [
  {
    title: "The Mobed from Khambhat Theory",
    body: `Some scholars suggest that a Mobed from Khambhat (Cambay) named or surnamed "Goti" may have founded the Adarian for performing essential Pavmahal rituals. Much like the ancient Daremeher at Navsari (established around 1142 CE), this could have started as a Dadgah fire, later elevated to the status of an Adarian through consecration ceremonies. This aligns with the historical period when Parsis began establishing communal places of worship instead of keeping only household fires.`,
  },
  {
    title: "The Miraculous Fireball Legend",
    body: `According to a popular legend recorded by Shri Roni Khurshedchaher Khan, a "ball of fire" appeared miraculously in a field during heavy rains. Despite the downpour, the fire remained undoused. Locals, recognizing the Parsis' reverence for fire, informed their leaders, who brought Mobeds to perform the rituals and consecrate the flame. The fire's spherical shape gave rise to the name "Goti," meaning "sphere" or "ball."`,
  },
  {
    title: "The Meteorite Interpretation",
    body: `Shri Rohinbhai Noshirwan Karanjia proposed that the "ball of fire" could have been a small meteorite that fell near the village of Tunki, close to the Tapi River. He interpreted this as an act of divine will—Pak Dadar Ahura Mazda choosing that sacred site for the Adarian. Situated on the banks of the ancient Tapi, the location's sanctity echoes the city's older name, Suryapur, and its association with Khorshed Yazad, the Sun deity.`,
  },
];

const timeline = [
  {
    date: "3rd millennium BCE",
    title: "Origins of Zoroastrianism",
    text: "Origins of Zoroastrianism under the prophet Zarathustra in ancient Persia.",
  },
  {
    date: "8th Century CE",
    title: "Migration to India",
    text: "Following Islamic conquest, Zoroastrians migrate to India, becoming known as Parsis.",
  },
  {
    date: "10th Century CE",
    title: "First Fire Temples",
    text: "Establishment of the first Atash Behrams (highest grade fire temples) in Gujarat.",
  },
  {
    date: "18th Century CE",
    title: "First Recorded Reference of Goti Adarian",
    text: "Founding of the Goti Adarian as a center for community worship and gathering.",
  },
  {
    date: "Present Day",
    title: "Continuing Legacy",
    text: "The Goti Adarian continues to serve as a vital cultural and spiritual landmark for the global Parsi community.",
  },
] as const;

const REVEAL = { y: 16, duration: 0.7 } as const;

const btn =
  "inline-flex min-h-[52px] items-center justify-center whitespace-nowrap rounded-lg px-7 text-base font-semibold no-underline transition-colors duration-[250ms] ease-[cubic-bezier(.22,1,.36,1)]";

const h2 =
  "text-[clamp(1.9375rem,3.5vw,2.8125rem)] font-normal leading-[1.15] tracking-[-0.02em]";

const h3Long =
  "mt-[clamp(56px,7vw,88px)] scroll-mt-[104px] border-t border-[hsl(36,29%,82%)] pt-[clamp(32px,4vw,44px)] text-[clamp(1.5rem,2.4vw,1.875rem)] font-normal leading-[1.2] tracking-[-0.01em] text-secondary";

const prose = "text-[1.125rem] leading-[1.75] text-muted-foreground [text-wrap:pretty]";

const proseStack = `flex flex-col gap-[1.2em] ${prose}`;

export default function AboutPage() {
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
              Our Heritage
            </h1>
          </FadeIn>
          <FadeIn {...REVEAL} delay={0.09}>
            <p className="mt-6 max-w-[40rem] text-body-lg text-muted-foreground [text-wrap:pretty]">
              Discover the rich history and enduring legacy of the Goti Adarian temple, a beacon of faith that has
              guided the Parsi-Zoroastrian community for centuries.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section aria-labelledby="history" className="py-[clamp(72px,9vw,128px)]">
        <Container>
          <div className="grid items-start gap-[clamp(48px,6vw,96px)] lg:grid-cols-[14rem_minmax(0,40rem)]">
            <AboutRail />

            <article className="min-w-0 max-w-[40rem]">
              <FadeIn {...REVEAL}>
                <h2 id="history" className={`${h2} scroll-mt-[104px] text-secondary`}>
                  History of Shri Pak Goti Adarian Saheb
                </h2>
              </FadeIn>
              <FadeIn {...REVEAL} delay={0.09}>
                <div className={`mt-[clamp(28px,3.5vw,40px)] ${proseStack}`}>
                  <p>
                    The Shri Pak Goti Adarian Saheb is among the oldest and most venerated Zoroastrian fire
                    temples in Surat, Gujarat. Deeply rooted in the city&apos;s Parsi history, it is regarded as a
                    sacred landmark of great antiquity—believed to be around 600–700 years old. The first recorded
                    reference to the Adarian dates to 1796 CE, though its origins are believed to go much further
                    back, supported by oral traditions and community lore.
                  </p>
                  <p>
                    When the Parsis settled along Gujarat&apos;s western coast after migrating from Iran, they
                    gradually established fire temples—first Dadgahs, then Adarians and Atash Behrams—to preserve
                    their religious rituals. In Surat, before other temples were established, the Goti Adarian
                    served as the center for Pavmahal Kriyas (major sacred rituals) and purification ceremonies. It
                    has long been considered the spiritual pride of the Parsis of Surat.
                  </p>
                </div>
              </FadeIn>

              <FadeIn {...REVEAL}>
                <h3 id="origins" className={h3Long}>
                  Possible Origins of the Name and Fire
                </h3>
              </FadeIn>
              <FadeIn {...REVEAL} delay={0.09}>
                <p className={`mt-5 ${prose}`}>
                  While the true origin of the Goti Adarian remains uncertain, three major theories are associated
                  with its establishment:
                </p>
              </FadeIn>

              <FadeIn {...REVEAL} className="mt-7">
                <div className="rounded-[4px] bg-[hsl(36,33%,90%)] px-[clamp(20px,4vw,32px)] shadow-[inset_0_0_0_1px_hsl(36,29%,82%)]">
                  {accounts.map((c, i) => (
                    <div
                      key={c.title}
                      className={`grid gap-x-8 gap-y-2.5 py-[clamp(24px,3vw,32px)] md:grid-cols-[11rem_minmax(0,1fr)] ${
                        i > 0 ? "border-t border-[hsl(36,29%,82%)]" : ""
                      }`}
                    >
                      <h4 className="font-serif text-[1.1875rem] font-medium leading-[1.35] text-secondary">
                        {c.title}
                      </h4>
                      <p className="text-[1.0625rem] leading-[1.75] text-muted-foreground [text-wrap:pretty]">
                        {c.body}
                      </p>
                    </div>
                  ))}
                </div>
              </FadeIn>

              <FadeIn {...REVEAL}>
                <p className={`mt-10 ${prose}`}>
                  Over time, the Goti Adarian has always remained near the Tapi River—first at Rafi Buraj and later
                  rebuilt slightly inland after floods. Despite being near the riverbed and repeatedly affected by
                  floods, the sacred fire has never been extinguished, strengthening the community&apos;s faith in
                  its divine protection. Non-Parsi residents in the area have also long believed the Adarian
                  safeguards them from natural disasters.
                </p>
              </FadeIn>

              <FadeIn {...REVEAL}>
                <h3 id="legacy" className={h3Long}>
                  Legacy and Stewardship
                </h3>
              </FadeIn>
              <FadeIn {...REVEAL} delay={0.09}>
                <div className={`mt-5 ${proseStack}`}>
                  <p>
                    Throughout its history, the Goti Adarian has been repaired and maintained approximately every
                    20–25 years, reflecting the devotion of Surat&apos;s Parsi community. The temple&apos;s trustees
                    have included respected families such as the Modi, Wadia, Palia, Bhacca, and Dotivala
                    families.
                  </p>
                  <p>
                    The Turel family (originally known as &quot;Velati&quot;) has served as the Panthakis (priests
                    and caretakers) of the Adarian for seven generations. Their dedication—especially during
                    floods, when they protected and relocated the sacred fire to safety—has been recorded with
                    reverence. The family&apos;s lineage of priests includes Ervad Rustamji, Ervad Jamasji, Ervad
                    Khurshedji, Ervad Dadabhai, Ervad Dorabji, Ervad Nariman, Ervad Jamshedji, and Ervad Parvez,
                    continuing this spiritual service to the present day.
                  </p>
                </div>
              </FadeIn>

              <FadeIn {...REVEAL}>
                <h3 id="symbol" className={h3Long}>
                  A Symbol of Faith and Continuity
                </h3>
              </FadeIn>
              <FadeIn {...REVEAL} delay={0.09}>
                <p className={`mt-5 ${prose}`}>
                  The Shri Pak Goti Adarian Saheb stands as a testament to Surat&apos;s deep Parsi heritage—an
                  enduring symbol of devotion, resilience, and divine protection. Despite the passage of centuries
                  and the trials of nature, the sacred fire continues to burn bright on the banks of the Tapi,
                  uniting generations in faith.
                </p>
              </FadeIn>
              <FadeIn {...REVEAL} className="mt-[clamp(40px,5vw,56px)]">
                <div className="flex flex-col items-center gap-5 text-center">
                  <Image
                    src="/assets/faravahar.png"
                    alt=""
                    width={44}
                    height={44}
                    className="h-auto w-11 opacity-90"
                  />
                  <p className="font-serif text-[clamp(1.25rem,2.2vw,1.5rem)] italic leading-[1.5] text-secondary">
                    <strong className="font-medium">Atha Jamyaat Yatha Aafrinaami</strong>
                    <br />
                    <span className="text-gold-ink">May it be so, as we pray for!</span>
                  </p>
                </div>
              </FadeIn>
            </article>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="vaspaan-h"
        className="bg-[linear-gradient(135deg,hsl(214,48%,25%),#1a2d38)] py-[clamp(72px,9vw,128px)] text-secondary-foreground"
      >
        <Container>
          <div className="grid items-center gap-[clamp(40px,6vw,96px)] md:grid-cols-[280px_minmax(0,1fr)] lg:grid-cols-[348px_minmax(0,1fr)]">
            <FadeIn {...REVEAL} className="w-full max-w-[280px] lg:max-w-[348px]">
              <div className="rounded-[4px] bg-[hsl(36,33%,90%)] p-[clamp(10px,4%,16px)] shadow-[inset_0_0_0_1px_hsl(36,29%,82%)]">
                <div className="aspect-square overflow-hidden bg-[hsl(36,29%,86%)] shadow-[0_0_0_1px_hsla(214,48%,25%,.14)]">
                  <Image
                    src="/images/trustees/vaspaan.webp"
                    alt="Vaspaan - Sacred Varasiaji"
                    width={640}
                    height={640}
                    sizes="(min-width:1024px) 320px, 258px"
                    className="block h-full w-full object-cover"
                  />
                </div>
              </div>
            </FadeIn>
            <FadeIn {...REVEAL} delay={0.09} className="max-w-[34rem]">
              <h2 id="vaspaan-h" className={`${h2} text-secondary-foreground`}>
                Varasiaji - Meet Vaspaan
              </h2>
              <h3 className="mt-[clamp(24px,3vw,32px)] text-[clamp(1.375rem,2.2vw,1.625rem)] font-medium leading-[1.25] text-primary">
                Sacred Guardian of Rituals
              </h3>
              <p className="mt-5 text-[1.0625rem] leading-[1.75] text-secondary-foreground/95 [text-wrap:pretty]">
                The Varasiaji, named <strong className="font-semibold text-secondary-foreground">Vaspaan</strong>, is
                a consecrated, pure white bull born under rare divine circumstances. His consecrated Nirang (sacred
                bull&apos;s urine) is used in Pav-Mahal rituals, making him a sacred co-worker in the spiritual
                life of Goti Adarian.
              </p>
              <p className="mt-[1.2em] text-[1.0625rem] leading-[1.75] text-secondary-foreground/95 [text-wrap:pretty]">
                In Zoroastrian tradition, the Varasiaji represents purity and divine blessing, playing an essential
                role in the most sacred purification ceremonies. Vaspaan&apos;s presence at the temple is a living
                symbol of the ancient connection between nature, divinity, and spiritual practice.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section aria-labelledby="timeline-h" className="py-[clamp(72px,9vw,128px)]">
        <Container>
          <FadeIn {...REVEAL}>
            <h2 id="timeline-h" className={`${h2} mb-[clamp(40px,5vw,64px)] text-secondary`}>
              Historical Timeline
            </h2>
          </FadeIn>
          <Timeline entries={timeline} />
        </Container>
      </section>

      <section
        aria-labelledby="story-h"
        className="bg-secondary py-[clamp(72px,9vw,112px)] text-secondary-foreground"
      >
        <Container>
          <FadeIn {...REVEAL}>
            <div className="mb-[clamp(36px,4vw,48px)] flex items-center gap-5" aria-hidden>
              <span className="h-px flex-1 bg-primary/60" />
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-background">
                <Image src="/assets/faravahar.png" alt="" width={38} height={38} className="h-auto w-[38px]" />
              </span>
              <span className="h-px flex-1 bg-primary/60" />
            </div>
            <div className="grid items-start gap-x-[clamp(32px,6vw,96px)] gap-y-7 [grid-template-columns:repeat(auto-fit,minmax(min(100%,22rem),1fr))]">
              <h2 id="story-h" className={`${h2} text-secondary-foreground`}>
                Be Part of Our Story
              </h2>
              <div className="flex flex-col gap-7">
                <p className="max-w-lg text-[1.125rem] leading-[1.62] text-secondary-foreground/95 [text-wrap:pretty]">
                  Join us in preserving and celebrating the rich heritage of the Parsi-Zoroastrian community.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className={`${btn} bg-primary text-secondary hover:bg-[hsl(43,64%,62%)]`}>
                    Visit Us
                  </Link>
                  <Link
                    href="/donate"
                    className={`${btn} border-[1.5px] border-secondary-foreground/40 text-secondary-foreground hover:border-primary hover:text-gold-soft`}
                  >
                    Support Our Mission
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
