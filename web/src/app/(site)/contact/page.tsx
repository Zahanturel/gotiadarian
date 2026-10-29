import Link from "next/link";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { PageHeader } from "@/components/PageHeader";
import { ClosingBand } from "@/components/ClosingBand";
import { ContactForm } from "@/components/ContactForm";
import { buildPageMetadata } from "@/lib/seo";
import { MAP_URL } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "Contact - Goti Adarian",
  description:
    "We welcome you to our sacred space. Whether you're seeking spiritual guidance, cultural connection, or simply wish to learn more about our traditions, we're here to help.",
  path: "/contact",
});

const visiting = [
  "Remove shoes before entering prayer areas",
  "Dress modestly and respectfully",
  "Maintain silence during prayers",
  "Follow guidance from priests and volunteers",
];

const faqLeft = [
  {
    q: "Can non-Zoroastrians visit the temple?",
    a: "No, entry into the temple is reserved for members of the Zoroastrian faith only. We kindly ask non-Zoroastrian visitors to respect this tradition. However, we welcome those interested in learning more about our religion and are happy to arrange informational sessions or guided tours of the surrounding premises upon request.",
  },
  {
    q: "How do I schedule a ceremony?",
    a: "Please contact our temple office at least 2-3 weeks in advance to schedule ceremonies. Our priests will guide you through the preparation process.",
  },
  {
    q: "Are there parking facilities available?",
    a: "Yes, we have designated parking areas for visitors. During major festivals, additional parking arrangements are made nearby.",
  },
];

const faqRight = [
  {
    q: "What should I bring for prayers?",
    a: "No special items are required for general prayers. For specific ceremonies, our priests will provide a list of required offerings and materials.",
  },
  {
    q: "How can I learn more about Zoroastrianism?",
    a: "We welcome those interested in learning about our faith. Please contact us to arrange an informational session or to speak with our community members.",
  },
];

const getting = [
  {
    h: "By Public Transport",
    items: [
      "Take local bus to Variali Bazar stop",
      "Auto-rickshaws available from railway station",
      "City bus route 12 stops nearby",
    ],
  },
  {
    h: "By Car",
    items: ["Located in Dhastipura area of Surat", "GPS coordinates: 21.2056, 72.8208", "Parking available on-site"],
  },
  {
    h: "Landmarks",
    items: ["Near Variyavi Bhagol market", "Walking distance from Dhastipura center", "Palia Ground"],
  },
];

const h2 = "mb-[clamp(36px,4.5vw,56px)] font-serif text-title-lg font-normal text-secondary";
const infoCard = "surface-card p-[clamp(24px,3vw,28px)]";
const infoTitle = "mb-3 flex items-center gap-2.5 font-serif text-xl font-medium leading-tight text-secondary";
const infoIcon = "w-[18px] text-center text-base text-gold-ink";
const cardLink = "transition-colors hover:text-gold-ink hover:underline";

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Visit Us">
        We welcome you to our sacred space. Whether you&apos;re seeking spiritual guidance, cultural connection, or
        simply wish to learn more about our traditions, we&apos;re here to help.
      </PageHeader>

      <section className="py-section pb-[clamp(72px,9vw,128px)]">
        <Container>
          <div className="grid items-start gap-[clamp(32px,4vw,48px)] lg:grid-cols-2">
            <div className="flex flex-col gap-5">
              <FadeIn>
                <div className={infoCard}>
                  <h3 className={infoTitle}>
                    <i className={`fas fa-map-marker-alt ${infoIcon}`} aria-hidden />
                    Address
                  </h3>
                  <address className="text-small not-italic text-muted-foreground">
                    <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className={cardLink}>
                      Goti Adarian
                      <br />
                      Variyavi Bhagol, Variyadi Bazar
                      <br />
                      Dhastipura, Sayedpura
                      <br />
                      Surat, Gujarat 395003
                    </a>
                  </address>
                </div>
              </FadeIn>
              <FadeIn>
                <div className={infoCard}>
                  <h3 className={infoTitle}>
                    <i className={`fas fa-phone ${infoIcon}`} aria-hidden />
                    Phone
                  </h3>
                  <p className="text-small text-muted-foreground">
                    <a href="tel:+917573013336" className={`font-medium text-secondary ${cardLink}`}>
                      +91 7573013336
                    </a>
                    <br />
                    Alternative: +91 9727760344 / +91 7573013330
                  </p>
                </div>
              </FadeIn>
              <FadeIn>
                <div className={infoCard}>
                  <h3 className={infoTitle}>
                    <i className={`fas fa-clock ${infoIcon}`} aria-hidden />
                    Opening Hours
                  </h3>
                  <p className="text-small text-muted-foreground">
                    <strong className="font-semibold text-secondary">Open 24 hours a day</strong>
                    <br />
                    7 days a week
                    <br />
                    365 days a year
                    <br />
                    <em>Always available for the community</em>
                  </p>
                </div>
              </FadeIn>
              <FadeIn>
                <div className={infoCard}>
                  <h3 className={`${infoTitle} !mb-4`}>
                    <i className={`fas fa-info-circle ${infoIcon}`} aria-hidden />
                    Visiting Guidelines
                  </h3>
                  <ul className="flex list-none flex-col gap-3 p-0 text-[15px] leading-[1.6] text-secondary">
                    {visiting.map((t) => (
                      <li key={t} className="flex items-baseline gap-2.5">
                        <i className="fas fa-check-circle shrink-0 text-sm text-gold-ink" aria-hidden />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.09}>
              <div className="surface-card p-[clamp(24px,4vw,36px)]">
                <h3 className="mb-6 font-serif text-2xl font-medium leading-tight text-secondary">
                  Send us a Message
                </h3>
                <ContactForm />
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section aria-labelledby="faq-h" className="pb-[clamp(72px,9vw,128px)]">
        <Container>
          <FadeIn>
            <h2 id="faq-h" className={h2}>
              Frequently Asked Questions
            </h2>
          </FadeIn>
          <div className="grid gap-x-[clamp(32px,5vw,64px)] gap-y-8 md:grid-cols-2">
            {[faqLeft, faqRight].map((col, c) => (
              <div key={c} className="flex flex-col gap-8">
                {col.map((item) => (
                  <FadeIn key={item.q} className="max-w-short">
                    <h3 className="mb-2.5 font-serif text-title-md font-medium text-gold-ink">{item.q}</h3>
                    <p className="text-small text-muted-foreground [text-wrap:pretty]">{item.a}</p>
                  </FadeIn>
                ))}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="loc-h" className="bg-sand py-section">
        <Container>
          <FadeIn>
            <h2 id="loc-h" className={h2}>
              Location &amp; Directions
            </h2>
          </FadeIn>
          <div className="grid items-start gap-[clamp(32px,5vw,64px)] lg:grid-cols-2">
            <FadeIn>
              <h3 className="mb-6 font-serif text-2xl font-medium leading-tight text-secondary">Getting Here</h3>
              <div className="flex flex-col gap-7">
                {getting.map((g) => (
                  <div key={g.h}>
                    <h4 className="mb-2.5 font-sans text-[15px] font-semibold text-gold-ink">{g.h}</h4>
                    <ul className="flex list-disc flex-col gap-1 pl-[22px] text-[15px] leading-[1.65] text-muted-foreground">
                      {g.items.map((i) => (
                        <li key={i}>{i}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </FadeIn>
            <div className="flex flex-col gap-6">
              <FadeIn>
                <div className="overflow-hidden rounded-panel bg-[hsl(36,29%,86%)] shadow-[0_0_0_1px_hsl(36,29%,82%)]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.634418298468!2d72.818726775772!3d21.206676980487536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e8e972c3b15%3A0x459a21de805924b6!2sGoti%20Adarian!5e0!3m2!1sen!2sin!4v1771908505326!5m2!1sen!2sin"
                    width="100%"
                    height={300}
                    style={{ border: 0, display: "block" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Goti Adarian map"
                  />
                </div>
              </FadeIn>
              <FadeIn delay={0.09}>
                <div className="surface-card-on-sand p-[clamp(24px,3vw,28px)]">
                  <h3 className="mb-2.5 font-serif text-title-md font-medium text-gold-ink">Need Directions?</h3>
                  <p className="mb-5 text-small text-muted-foreground [text-wrap:pretty]">
                    Our volunteers can provide detailed directions and assist with transportation arrangements for
                    special events or ceremonies.
                  </p>
                  <a href="tel:+917573013336" className="btn btn-outline">
                    <i className="fas fa-phone" aria-hidden />
                    Call for Directions
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      <ClosingBand
        id="close-h"
        title="We Look Forward to Welcoming You"
        actions={
          <>
            <a href="tel:+917573013336" className="btn btn-primary btn-lg">
              <i className="fas fa-phone" aria-hidden />
              Call Us Today
            </a>
            <Link href="/community" className="btn btn-outline btn-lg">
              Join Our Community
            </Link>
          </>
        }
      >
        Whether you&apos;re visiting for the first time or returning home, our doors are always open to those
        seeking spiritual connection and community.
      </ClosingBand>
    </>
  );
}
