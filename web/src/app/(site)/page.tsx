import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { FaravaharDivider } from "@/components/FaravaharDivider";
import { IntroFeatureCard, HeritagePreviewCard } from "@/components/ContentBlocks";
import { Bilingual } from "@/contexts/LanguageContext";
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
    titleEn: "Sacred Fire",
    titleGu: "પવિત્ર આગ",
    textEn:
      "The eternal flame that has burned for generations, symbolizing purity and divine presence.",
    textGu: "શાશ્વત જ્યોત જે પેઢીઓથી બળે છે, પવિત્રતા અને દિવ્ય હાજરીનું પ્રતીક છે.",
  },
  {
    icon: "fa-hands-praying",
    titleEn: "Daily Prayers",
    titleGu: "દૈનિક પ્રાર્થનાઓ",
    textEn:
      "Regular prayer services conducted in the ancient Avestan Pehlavi language, maintaining our spiritual connection.",
    textGu:
      "પ્રાચીન અવેસ્તાન ભાષામાં કરાતી નિયમિત પ્રાર્થના સેવાઓ, અમારા આધ્યાત્મિક જોડાણને જાળવી રાખે છે.",
  },
  {
    icon: "fa-calendar-days",
    titleEn: "Festival Celebrations",
    titleGu: "ઉત્સવ ઉજવણી",
    textEn: "Community gatherings for traditional festivals that strengthen our cultural bonds.",
    textGu: "પરંપરાગત ઉત્સવો માટે સમુદાયિક મેળાવડા જે અમારા સાંસ્કૃતિક બંધનોને મજબૂત કરે છે.",
  },
] as const;

const HERITAGE_CARDS = [
  {
    icon: "fa-fire",
    titleEn: "Sacred Traditions",
    titleGu: "પવિત્ર પરંપરાઓ",
    bodyEn: "Discover the ancient rituals and ceremonies that have been preserved through generations.",
    bodyGu: "પેઢીઓથી સાચવાયેલી પ્રાચીન વિધિઓ અને વિધાનોની શોધ કરો.",
    href: "/rituals",
    ctaEn: "Learn About Rituals",
    ctaGu: "વિધિઓ વિશે જાણો",
  },
  {
    icon: "fa-hands-praying",
    titleEn: "Spiritual Teachings",
    titleGu: "આધ્યાત્મિક શિક્ષણો",
    bodyEn: "Explore the philosophy and ethical principles of one of the world's oldest religions.",
    bodyGu: "વિશ્વના સૌથી પુરાતન ધર્મોમાંના એકના ફિલસૂફી અને નૈતિક સિદ્ધાંતોનું અન્વેષણ કરો.",
    href: "/zoroastrianism",
    ctaEn: "Explore Beliefs",
    ctaGu: "માન્યતાઓનું અન્વેષણ કરો",
  },
  {
    icon: "fa-calendar-days",
    titleEn: "Community Events",
    titleGu: "સમુદાયિક કાર્યક્રમો",
    bodyEn: "Join our vibrant community gatherings and festivals.",
    bodyGu: "અમારા જીવંત સમુદાયિક મેળાવડા અને ઉત્સવોમાં જોડાઓ.",
    href: "/community",
    ctaEn: "View Calendar",
    ctaGu: "કેલેન્ડર જુઓ",
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
                <Bilingual en={<>Preserving Ancient Revelations</>} gu={<>પ્રાચીન શાણપણનું સંરક્ષણ</>} />
              </h2>
              <div className="max-w-prose space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <Bilingual
                    en={
                      <>
                        For centuries, the Goti Adarian has stood as a sacred sanctuary where the eternal
                        flame burns bright, connecting our community to the profound teachings of Prophet
                        Zarathustra. Here, tradition meets modernity, and ancient wisdom guides contemporary
                        life.
                      </>
                    }
                    gu={
                      <>
                        સદીઓથી, ગોતી અદારિયન એક પવિત્ર પવિત્રસ્થાન તરીકે ઊભું છે જ્યાં શાશ્વત જ્યોત તેજસ્વીતાથી બળે છે,
                        અમારા સમુદાયને પ્રોફેટ ઝરથુસ્ત્રના ગહન શિક્ષણો સાથે જોડે છે. અહીં, પરંપરા આધુનિકતા સાથે મળે છે,
                        અને પ્રાચીન શાણપણ સમકાલીન જીવનનું માર્ગદર્શન કરે છે.
                      </>
                    }
                  />
                </p>
                <p>
                  <Bilingual
                    en={
                      <>
                        Our fire temple serves not just as a place of worship, but as a cultural cornerstone
                        that preserves the rich heritage of the Parsi-Zoroastrian community. Through prayer,
                        ceremony, and community gathering, we maintain the sacred traditions passed down
                        through generations.
                      </>
                    }
                    gu={
                      <>
                        અમારું અગ્નિ મંદિર માત્ર પૂજાના સ્થળ તરીકે જ નહીં, પરંતુ એક સાંસ્કૃતિક આધારશિલા તરીકે સેવા કરે છે
                        જે પારસી-ઝોરોસ્ટ્રિયન સમુદાયના સમૃદ્ધ વારસાને સાચવે છે. પ્રાર્થના, વિધિ અને સમુદાયિક મેળાવડા દ્વારા,
                        અમે પેઢીઓથી પસાર થતી પવિત્ર પરંપરાઓને જાળવીએ છીએ.
                      </>
                    }
                  />
                </p>
              </div>
            </article>
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-1">
            {INTRO_FEATURES.map((card, idx) => (
              <IntroFeatureCard key={card.titleEn} {...card} delay={idx * 0.06} />
            ))}
          </div>
        </div>
      </Section>

      <Section variant="muted">
        <h2 className="mb-10 text-center font-serif text-title-lg font-semibold text-secondary">
          <Bilingual en={<>Explore Our Heritage</>} gu={<>અમારા વારસાનું અન્વેષણ કરો</>} />
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
            <Bilingual en={<>Preserve Our Heritage</>} gu={<>અમારા વારસાને સાચવો</>} />
          </h2>
          <p className="mx-auto mb-8 max-w-narrow text-body-lg text-secondary-foreground/90">
            <Bilingual
              en={
                <>
                  Help us maintain the sacred fires and traditions of the Parsi-Zoroastrian community for
                  future generations.
                </>
              }
              gu={
                <>
                  ભાવી પેઢીઓ માટે પારસી-ઝોરોસ્ટ્રિયન સમુદાયની પવિત્ર આગ અને પરંપરાઓને જાળવવામાં અમારી મદદ કરો.
                </>
              }
            />
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/donate" className="btn btn-primary btn-lg">
              <Bilingual en={<>Support Our Mission</>} gu={<>અમારા મિશનને સહાય કરો</>} />
            </Link>
            <Link
              href="/contact"
              className="btn btn-outline btn-lg border-secondary-foreground/40 bg-transparent text-secondary-foreground hover:border-primary hover:text-primary"
            >
              <Bilingual en={<>Get Involved</>} gu={<>સામેલ થાઓ</>} />
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
