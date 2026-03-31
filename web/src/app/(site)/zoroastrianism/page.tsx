import Link from "next/link";
import Image from "next/image";
import { PageSection } from "@/components/PageSection";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { FaravaharDivider } from "@/components/FaravaharDivider";
import { Bilingual } from "@/contexts/LanguageContext";
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

export default function ZoroastrianismPage() {
  return (
    <>
      <PageSection variant="muted">
        <Container className="text-center">
          <h1 className="font-serif text-display font-bold text-secondary">
            <Bilingual en={<>Core Beliefs</>} gu={<>મૂળભૂત માન્યતાઓ</>} />
          </h1>
          <p className="mx-auto mt-8 max-w-prose text-body-lg text-muted-foreground">
            <Bilingual
              en={
                <>
                  Explore the fundamental principles and sacred teachings that form the foundation of one of the
                  world&apos;s oldest monotheistic religions.
                </>
              }
              gu={
                <>
                  મૂળભૂત સિદ્ધાંતો અને પવિત્ર શિક્ષણોનું અન્વેષણ કરો જે વિશ્વના સૌથી પુરાતન એકેશ્વરવાદી ધર્મોમાંના એકનો પાયો
                  બનાવે છે.
                </>
              }
            />
          </p>
        </Container>
      </PageSection>

      <PageSection>
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {beliefs.map((b) => (
              <FadeIn key={b.title}>
                <div className="surface-card h-full p-8 text-center md:p-9">
                  <i className={`fas ${b.icon} mb-4 text-4xl text-primary`} />
                  <h3 className="font-serif text-xl font-semibold text-secondary">{b.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </PageSection>

      <PageSection variant="muted">
        <Container>
          <h2 className="mb-10 text-center font-serif text-title-lg font-semibold text-secondary">
            Sacred Symbols
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <FadeIn>
              <div className="surface-card p-8 md:p-9">
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
                <h3 className="mb-4 text-center font-serif text-xl font-semibold text-secondary">Faravahar</h3>
                <p className="mb-4 text-center text-sm leading-relaxed text-muted-foreground">
                  The most recognizable symbol of Zoroastrianism, representing the human soul&apos;s journey and the
                  choice between good and evil.
                </p>
                <div className="text-left">
                  <h4 className="mb-2 font-semibold text-primary">Symbolism:</h4>
                  <ul className="text-sm text-muted-foreground">
                    <li>Wings represent the divine spirit</li>
                    <li>Circle symbolizes the eternal soul</li>
                    <li>Figure represents humanity&apos;s choice</li>
                    <li>Tail represents the consequences of actions</li>
                  </ul>
                </div>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="surface-card p-8 md:p-9">
                <div className="mb-6 flex justify-center">
                  <i className="fas fa-fire text-7xl text-primary" />
                </div>
                <h3 className="mb-4 text-center font-serif text-xl font-semibold text-secondary">Sacred Fire</h3>
                <p className="mb-4 text-center text-sm leading-relaxed text-muted-foreground">
                  Fire is the most sacred element in Zoroastrianism, representing the light of Ahura Mazda and divine
                  purity.
                </p>
                <div className="text-left">
                  <h4 className="mb-2 font-semibold text-primary">Significance:</h4>
                  <ul className="text-sm text-muted-foreground">
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
      </PageSection>

      <PageSection>
        <Container>
          <h2 className="mb-10 text-center font-serif text-title-lg font-semibold text-secondary">
            Teachings of Zarathustra
          </h2>
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <h3 className="font-serif text-2xl font-semibold text-secondary">The Prophet&apos;s Message</h3>
              <p>
                Zarathustra (also known as Zoroaster) was the prophet who founded Zoroastrianism in ancient Persia
                around the 6th century BCE. His revolutionary teachings emphasized monotheism, free will, and moral
                choice.
              </p>
              <p>
                The prophet taught that humans have the freedom and responsibility to choose between good and evil,
                and that these choices determine their fate in the afterlife. This concept of moral dualism became
                central to Zoroastrian ethics.
              </p>
              <p>
                Zarathustra&apos;s revelations, recorded in the Gathas (sacred hymns), form the oldest part of the
                Avesta, the holy book of Zoroastrianism.
              </p>
            </div>
            <FadeIn>
              <div className="surface-card p-8 md:p-9">
                <h3 className="mb-6 font-serif text-xl font-semibold text-secondary">Core Principles</h3>
                <div className="grid gap-6">
                  {[
                    { t: "Monotheism", d: "Belief in one supreme God, Ahura Mazda (Supreme Lord)" },
                    { t: "Free Will", d: "Every person has the freedom to choose between good and evil" },
                    { t: "Judgment", d: "Divine judgment based on one's thoughts, words, and deeds" },
                    { t: "Resurrection", d: "Belief in the resurrection of the dead and final renovation" },
                  ].map((x) => (
                    <div key={x.t}>
                      <h4 className="mb-1 font-semibold text-primary">{x.t}</h4>
                      <p className="text-sm text-muted-foreground">{x.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </PageSection>

      <PageSection variant="muted">
        <Container>
          <h2 className="mb-6 text-center font-serif text-title-lg font-semibold text-secondary">
            Zoroastrian Ethics
          </h2>
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
            ].map((e) => (
              <FadeIn key={e.title}>
                <div className="surface-card h-full p-8 text-center md:p-9">
                  <i className={`fas ${e.icon} mb-4 text-3xl text-primary`} />
                  <h3 className="font-serif text-xl font-semibold text-secondary">{e.title}</h3>
                  <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary">{e.sub}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{e.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </PageSection>

      <PageSection>
        <Container>
          <h2 className="mb-10 text-center font-serif text-title-lg font-semibold text-secondary">
            Zoroastrianism Today
          </h2>
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="mb-4 font-serif text-xl font-semibold text-secondary">Global Community</h3>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                Today, Zoroastrians number approximately 200,000 worldwide, with significant communities in India
                (Parsis), Iran, and diaspora communities in North America, Europe, and Australia.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Despite their small numbers, Zoroastrians have made remarkable contributions to business, science,
                arts, and philanthropy, particularly in India where the Parsi community has played a vital role in
                the country&apos;s development.
              </p>
            </div>
            <div>
              <h3 className="mb-4 font-serif text-xl font-semibold text-secondary">Contemporary Challenges</h3>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                The community faces unique challenges including declining population due to low birth rates,
                intermarriage, and migration. However, efforts are being made to preserve traditions while adapting to
                modern realities.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Educational initiatives, cultural programs, and interfaith dialogue help maintain Zoroastrian identity
                and share its ancient wisdom with the broader world.
              </p>
            </div>
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
            ].map((c) => (
              <FadeIn key={c.title}>
                <div className="surface-card h-full p-8 text-center md:p-9">
                  <i className={`fas ${c.icon} mb-4 text-3xl text-primary`} />
                  <h3 className="mb-4 font-serif text-lg font-semibold text-secondary">{c.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </PageSection>

      <PageSection variant="secondary">
        <Container className="text-center">
          <FaravaharDivider />
          <h2 className="mb-6 font-serif text-title-lg font-semibold">Learn More About Our Faith</h2>
          <p className="mx-auto mb-10 max-w-2xl text-body-lg text-secondary-foreground/95">
            Discover the rich traditions and timeless wisdom of Zoroastrianism through our community programs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/rituals" className="btn btn-primary btn-lg">
              Sacred Rituals
            </Link>
            <Link
              href="/community"
              className="btn btn-outline btn-lg border-secondary-foreground/40 text-secondary-foreground hover:border-primary hover:text-primary"
            >
              Community Events
            </Link>
          </div>
        </Container>
      </PageSection>
    </>
  );
}
