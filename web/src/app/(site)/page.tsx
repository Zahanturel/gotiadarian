import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { FaravaharDivider } from "@/components/FaravaharDivider";
import { IntroFeatureCard, HeritagePreviewCard } from "@/components/ContentBlocks";
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
    text:
      "The eternal flame that has burned for generations, symbolizing purity and divine presence.",
  },
  {
    icon: "fa-hands-praying",
    title: "Daily Prayers",
    text:
      "Regular prayer services conducted in the ancient Avestan Pehlavi language, maintaining our spiritual connection.",
  },
  {
    icon: "fa-calendar-days",
    title: "Festival Celebrations",
    text: "Community gatherings for traditional festivals that strengthen our cultural bonds.",
  },
] as const;

const HERITAGE_CARDS = [
  {
    icon: "fa-fire",
    title: "Sacred Traditions",
    body: "Discover the ancient rituals and ceremonies that have been preserved through generations.",
    href: "/rituals",
    cta: "Learn About Rituals",
  },
  {
    icon: "fa-hands-praying",
    title: "Spiritual Teachings",
    body: "Explore the philosophy and ethical principles of one of the world's oldest religions.",
    href: "/zoroastrianism",
    cta: "Explore Beliefs",
  },
  {
    icon: "fa-calendar-days",
    title: "Community Events",
    body: "Join our vibrant community gatherings and festivals.",
    href: "/community",
    cta: "View Calendar",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <FadeIn>
            <article className="space-y-5">
              <h2 className="font-serif text-title-lg font-semibold text-secondary">
                Preserving Ancient Revelations
              </h2>
              <div className="max-w-prose space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  For centuries, the Goti Adarian has stood as a sacred sanctuary where the eternal
                        flame burns bright, connecting our community to the profound teachings of Prophet
                        Zarathustra. Here, tradition meets modernity, and ancient wisdom guides contemporary
                        life.
                </p>
                <p>
                  Our fire temple serves not just as a place of worship, but as a cultural cornerstone
                        that preserves the rich heritage of the Parsi-Zoroastrian community. Through prayer,
                        ceremony, and community gathering, we maintain the sacred traditions passed down
                        through generations.
                </p>
              </div>
            </article>
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-1">
            {INTRO_FEATURES.map((card, idx) => (
              <IntroFeatureCard key={card.title} {...card} delay={idx * 0.06} />
            ))}
          </div>
        </div>
      </Section>

      <Section variant="muted">
        <h2 className="mb-10 text-center font-serif text-title-lg font-semibold text-secondary">
          Explore Our Heritage
        </h2>
        <div className="grid gap-7 md:grid-cols-3 md:gap-9">
          {HERITAGE_CARDS.map((c) => (
            <HeritagePreviewCard key={c.href} {...c} />
          ))}
        </div>
      </Section>

      <Section variant="secondary" className="shadow-inner">
        <Container className="text-center">
          <h2 className="mb-5 font-serif text-title-lg font-semibold">
            Preserve Our Heritage
          </h2>
          <p className="mx-auto mb-8 max-w-narrow text-body-lg text-secondary-foreground/90">
            Help us maintain the sacred fires and traditions of the Parsi-Zoroastrian community for
                  future generations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/donate" className="btn btn-primary btn-lg">
              Support Our Mission
            </Link>
            <Link
              href="/contact"
              className="btn btn-outline btn-lg border-secondary-foreground/40 bg-transparent text-secondary-foreground hover:border-primary hover:text-primary"
            >
              Get Involved
            </Link>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="text-center">
          <FaravaharDivider />
          <figure>
            <blockquote className="mx-auto mb-4 max-w-3xl font-serif text-xl italic leading-relaxed text-secondary md:text-2xl">
              “As long as I have the will and wield the power,
              <br />
              so long will I teach mankind to strive for Truth. —Asha
            </blockquote>
            <figcaption className="font-semibold text-primary">— Yasna 28.4</figcaption>
          </figure>
        </Container>
      </Section>
    </>
  );
}
