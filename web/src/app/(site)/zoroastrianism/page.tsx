import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { FaravaharDivider } from "@/components/FaravaharDivider";
import { PageHeader } from "@/components/PageHeader";
import { ClosingBand } from "@/components/ClosingBand";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Zoroastrianism - Goti Adarian",
  description:
    "Explore the fundamental principles and sacred teachings that form the foundation of one of the world's oldest monotheistic religions.",
  path: "/zoroastrianism",
});

const beliefs = [
  { icon: "fa-sun", title: "Ahura Mazda", text: "The supreme creator deity representing wisdom and divine light." },
  { icon: "fa-balance-scale", title: "Asha", text: "Truth and righteousness as the guiding principle of life." },
  { icon: "fa-fire", title: "Fire", text: "The sacred element representing purity and the divine presence." },
  {
    icon: "fa-heart",
    title: "Good Thoughts, Good Words, Good Deeds",
    text: "The ethical triad at the core of Zoroastrian moral teaching.",
  },
  {
    icon: "fa-dove",
    title: "Fravashis",
    text: "Guardian spirits of the departed that guide and protect their descendants.",
  },
];

const h2 = "mb-[clamp(36px,4.5vw,56px)] font-serif text-title-lg font-normal text-secondary";
const cardPad = "p-[clamp(24px,3.5vw,36px)]";

export default function ZoroastrianismPage() {
  return (
    <>
      <PageHeader title="Core Beliefs">
        Explore the fundamental principles and sacred teachings that form the foundation of one of the
        world&apos;s oldest monotheistic religions.
      </PageHeader>

      <section className="py-section">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {beliefs.map((b, i) => (
              <FadeIn key={b.title} delay={(i % 3) * 0.09} className="h-full">
                <div className={`surface-card h-full text-center ${cardPad}`}>
                  <i className={`fas ${b.icon} mb-4 text-4xl text-gold-ink`} aria-hidden />
                  <h3 className="font-serif text-title-md font-medium text-secondary">{b.title}</h3>
                  <p className="mt-3 text-small text-muted-foreground">{b.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="symbols-h" className="bg-sand py-section">
        <Container>
          <FadeIn>
            <h2 id="symbols-h" className={h2}>
              Sacred Symbols
            </h2>
          </FadeIn>
          <div className="grid gap-8 md:grid-cols-2">
            <FadeIn className="h-full">
              <div className={`surface-card-on-sand h-full ${cardPad}`}>
                <div className="mx-auto mb-6 flex h-[100px] w-[100px] items-center justify-center">
                  <div className="relative h-20 w-20">
                    <Image
                      src="/assets/faravahar.png"
                      alt="Faravahar winged symbol of Zoroastrianism"
                      fill
                      className="object-contain"
                      sizes="80px"
                    />
                  </div>
                </div>
                <h3 className="mb-4 text-center font-serif text-title-md font-medium text-secondary">Faravahar</h3>
                <p className="mb-4 text-center text-small text-muted-foreground">
                  The most recognizable symbol of Zoroastrianism, representing the human soul&apos;s journey and the
                  choice between good and evil.
                </p>
                <div className="text-left">
                  <h4 className="mb-2 font-sans font-semibold text-gold-ink">Symbolism:</h4>
                  <ul className="text-small text-muted-foreground">
                    <li>Wings represent the divine spirit</li>
                    <li>Circle symbolizes the eternal soul</li>
                    <li>Figure represents humanity&apos;s choice</li>
                    <li>Tail represents the consequences of actions</li>
                  </ul>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.09} className="h-full">
              <div className={`surface-card-on-sand h-full ${cardPad}`}>
                <div className="mb-6 flex justify-center">
                  <i className="fas fa-fire text-7xl text-gold-ink" aria-hidden />
                </div>
                <h3 className="mb-4 text-center font-serif text-title-md font-medium text-secondary">Sacred Fire</h3>
                <p className="mb-4 text-center text-small text-muted-foreground">
                  Fire is the most sacred element in Zoroastrianism, representing the light of Ahura Mazda and
                  divine purity.
                </p>
                <div className="text-left">
                  <h4 className="mb-2 font-sans font-semibold text-gold-ink">Significance:</h4>
                  <ul className="text-small text-muted-foreground">
                    <li>Symbol of divine light and truth</li>
                    <li>Purifies and protects from evil</li>
                    <li>Central to all religious ceremonies</li>
                    <li>Represents the presence of Ahura Mazda</li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section aria-labelledby="teach-h" className="py-section">
        <Container>
          <FadeIn>
            <h2 id="teach-h" className={h2}>
              Teachings of Zarathustra
            </h2>
          </FadeIn>
          <div className="grid gap-10 md:grid-cols-2">
            <FadeIn>
              <div className="space-y-4 text-body text-muted-foreground">
                <h3 className="font-serif text-2xl font-medium leading-tight text-secondary">
                  The Prophet&apos;s Message
                </h3>
                <p>
                  Zarathustra (also known as Zoroaster) was the prophet who founded Zoroastrianism in ancient
                  Persia around the 6th century BCE. His revolutionary teachings emphasized monotheism, free will,
                  and moral choice.
                </p>
                <p>
                  The prophet taught that humans have the freedom and responsibility to choose between good and
                  evil, and that these choices determine their fate in the afterlife. This concept of moral dualism
                  became central to Zoroastrian ethics.
                </p>
                <p>
                  Zarathustra&apos;s revelations, recorded in the Gathas (sacred hymns), form the oldest part of the
                  Avesta, the holy book of Zoroastrianism.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.09}>
              <div className={`surface-card ${cardPad}`}>
                <h3 className="mb-6 font-serif text-title-md font-medium text-secondary">Core Principles</h3>
                <div className="grid gap-6">
                  {[
                    { t: "Monotheism", d: "Belief in one supreme God, Ahura Mazda (Supreme Lord)" },
                    { t: "Free Will", d: "Every person has the freedom to choose between good and evil" },
                    { t: "Judgment", d: "Divine judgment based on one's thoughts, words, and deeds" },
                    { t: "Resurrection", d: "Belief in the resurrection of the dead and final renovation" },
                  ].map((x) => (
                    <div key={x.t}>
                      <h4 className="mb-1 font-sans font-semibold text-gold-ink">{x.t}</h4>
                      <p className="text-small text-muted-foreground">{x.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section aria-labelledby="ethics-h" className="bg-sand py-section">
        <Container>
          <FadeIn>
            <h2 id="ethics-h" className="mb-6 font-serif text-title-lg font-normal text-secondary">
              Zoroastrian Ethics
            </h2>
          </FadeIn>
          <FaravaharDivider />
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: "fa-brain",
                title: "Humata",
                sub: "Good Thoughts",
                text: "The foundation of righteous living begins with pure intentions, positive thinking, and mental clarity directed toward truth and goodness.",
              },
              {
                icon: "fa-comments",
                title: "Hukhta",
                sub: "Good Words",
                text: "Speaking truthfully, kindly, and constructively. Words have power to heal or harm, and Zoroastrians strive to use speech for good.",
              },
              {
                icon: "fa-hands-helping",
                title: "Hvarshta",
                sub: "Good Deeds",
                text: "Righteous actions that help others, protect the environment, and contribute to the betterment of society and creation.",
              },
            ].map((e, i) => (
              <FadeIn key={e.title} delay={i * 0.09} className="h-full">
                <div className={`surface-card-on-sand h-full text-center ${cardPad}`}>
                  <i className={`fas ${e.icon} mb-4 text-3xl text-gold-ink`} aria-hidden />
                  <h3 className="font-serif text-title-md font-medium text-secondary">{e.title}</h3>
                  <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-gold-ink">{e.sub}</p>
                  <p className="text-small text-muted-foreground">{e.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="today-h" className="py-section">
        <Container>
          <FadeIn>
            <h2 id="today-h" className={h2}>
              Zoroastrianism Today
            </h2>
          </FadeIn>
          <div className="grid gap-10 md:grid-cols-2">
            <FadeIn>
              <h3 className="mb-4 font-serif text-title-md font-medium text-secondary">Global Community</h3>
              <p className="mb-4 text-body text-muted-foreground">
                Today, Zoroastrians number approximately 200,000 worldwide, with significant communities in India
                (Parsis), Iran, and diaspora communities in North America, Europe, and Australia.
              </p>
              <p className="text-body text-muted-foreground">
                Despite their small numbers, Zoroastrians have made remarkable contributions to business, science,
                arts, and philanthropy, particularly in India where the Parsi community has played a vital role in
                the country&apos;s development.
              </p>
            </FadeIn>
            <FadeIn delay={0.09}>
              <h3 className="mb-4 font-serif text-title-md font-medium text-secondary">Contemporary Challenges</h3>
              <p className="mb-4 text-body text-muted-foreground">
                The community faces unique challenges including declining population due to low birth rates,
                intermarriage, and migration. However, efforts are being made to preserve traditions while adapting
                to modern realities.
              </p>
              <p className="text-body text-muted-foreground">
                Educational initiatives, cultural programs, and interfaith dialogue help maintain Zoroastrian
                identity and share its ancient wisdom with the broader world.
              </p>
            </FadeIn>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: "fa-globe",
                title: "Environmental Stewardship",
                text: "Zoroastrian emphasis on protecting the elements (earth, water, fire, air) aligns with modern environmental consciousness.",
              },
              {
                icon: "fa-handshake",
                title: "Interfaith Dialogue",
                text: "Zoroastrian principles of tolerance and respect for other religions foster meaningful interfaith relationships.",
              },
              {
                icon: "fa-graduation-cap",
                title: "Education & Culture",
                text: "Continued emphasis on education, charity, and cultural preservation maintains Zoroastrian values in the modern world.",
              },
            ].map((c, i) => (
              <FadeIn key={c.title} delay={i * 0.09} className="h-full">
                <div className={`surface-card h-full text-center ${cardPad}`}>
                  <i className={`fas ${c.icon} mb-4 text-3xl text-gold-ink`} aria-hidden />
                  <h3 className="mb-4 font-serif text-title-md font-medium text-secondary">{c.title}</h3>
                  <p className="text-small text-muted-foreground">{c.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <ClosingBand
        id="close-h"
        title="Learn More About Our Faith"
        actions={
          <>
            <Link href="/rituals" className="btn btn-primary btn-lg">
              Sacred Rituals
            </Link>
            <Link href="/community" className="btn btn-outline btn-lg">
              Community Events
            </Link>
          </>
        }
      >
        Discover the rich traditions and timeless wisdom of Zoroastrianism through our community programs.
      </ClosingBand>
    </>
  );
}
