import Link from "next/link";
import { PageSection } from "@/components/PageSection";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { FaravaharDivider } from "@/components/FaravaharDivider";
import { ContactForm } from "@/components/ContactForm";
import { buildPageMetadata } from "@/lib/seo";

const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=Goti+Adarian%2C+Variyavi+Bhagol%2C+Variyadi+Bazar%2C+Dhastipura%2C+Sayedpura%2C+Surat%2C+Gujarat+395003";

export const metadata = buildPageMetadata({
  title: "Contact - Goti Adarian",
  description:
    "We welcome you to our sacred space. Whether you're seeking spiritual guidance, cultural connection, or simply wish to learn more about our traditions, we're here to help.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageSection variant="muted">
        <Container className="text-center">
          <h1 className="font-serif text-display font-bold text-secondary">Visit Us</h1>
          <p className="mx-auto mt-8 max-w-prose text-body-lg text-muted-foreground">
            We welcome you to our sacred space. Whether you&apos;re seeking spiritual guidance, cultural connection,
            or simply wish to learn more about our traditions, we&apos;re here to help.
          </p>
        </Container>
      </PageSection>

      <PageSection>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              {[
                {
                  icon: "fa-map-marker-alt",
                  title: "Address",
                  content: (
                    <address className="not-italic text-muted-foreground">
                      <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                        Goti Adarian
                        <br />
                        Variyavi Bhagol, Variyadi Bazar
                        <br />
                        Dhastipura, Sayedpura
                        <br />
                        Surat, Gujarat 395003
                      </a>
                    </address>
                  ),
                },
                {
                  icon: "fa-phone",
                  title: "Phone",
                  content: (
                    <p>
                      <a href="tel:+917573013336" className="text-foreground hover:text-primary">
                        +91 7573013336
                      </a>
                      <br />
                      Alternative: +91 9727760344 / +91 7573013330
                    </p>
                  ),
                },
                {
                  icon: "fa-clock",
                  title: "Opening Hours",
                  content: (
                    <p>
                      <strong>Open 24 hours a day</strong>
                      <br />
                      7 days a week
                      <br />
                      365 days a year
                      <br />
                      <em>Always available for the community</em>
                    </p>
                  ),
                },
              ].map((c) => (
                <FadeIn key={c.title}>
                  <div className="surface-card p-6 md:p-7">
                    <h3 className="mb-3 font-serif text-lg font-semibold text-secondary">
                      <i className={`fas ${c.icon} mr-2 text-primary`} />
                      {c.title}
                    </h3>
                    <div className="text-sm leading-relaxed text-muted-foreground">{c.content}</div>
                  </div>
                </FadeIn>
              ))}
              <FadeIn>
                <div className="surface-card p-6 md:p-7">
                  <h3 className="mb-4 font-serif text-lg font-semibold text-secondary">
                    <i className="fas fa-info-circle mr-2 text-primary" />
                    Visiting Guidelines
                  </h3>
                  <ul className="list-none space-y-3 p-0">
                    {[
                      "Remove shoes before entering prayer areas",
                      "Dress modestly and respectfully",
                      "Maintain silence during prayers",
                      "Follow guidance from priests and volunteers",
                    ].map((t) => (
                      <li key={t} className="flex items-center gap-2">
                        <i className="fas fa-check-circle text-primary" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
            <FadeIn>
              <div className="surface-card p-8 md:p-9">
                <h3 className="mb-6 font-serif text-xl font-semibold text-secondary">Send us a Message</h3>
                <ContactForm />
              </div>
            </FadeIn>
          </div>
        </Container>
      </PageSection>

      <PageSection>
        <Container>
          <h2 className="mb-10 text-center font-serif text-title-lg font-semibold text-secondary">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h3 className="mb-3 font-serif text-title-md font-semibold text-primary">Can non-Zoroastrians visit the temple?</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  No, entry into the temple is reserved for members of the Zoroastrian faith only. We kindly ask
                  non-Zoroastrian visitors to respect this tradition. However, we welcome those interested in
                  learning more about our religion and are happy to arrange informational sessions or guided tours of
                  the surrounding premises upon request.
                </p>
              </div>
              <div>
                <h3 className="mb-3 font-serif text-title-md font-semibold text-primary">How do I schedule a ceremony?</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Please contact our temple office at least 2-3 weeks in advance to schedule ceremonies. Our priests
                  will guide you through the preparation process.
                </p>
              </div>
              <div>
                <h3 className="mb-3 font-serif text-title-md font-semibold text-primary">Are there parking facilities available?</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Yes, we have designated parking areas for visitors. During major festivals, additional parking
                  arrangements are made nearby.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="mb-3 font-serif text-title-md font-semibold text-primary">What should I bring for prayers?</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  No special items are required for general prayers. For specific ceremonies, our priests will
                  provide a list of required offerings and materials.
                </p>
              </div>
              <div>
                <h3 className="mb-3 font-serif text-title-md font-semibold text-primary">How can I learn more about Zoroastrianism?</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  We welcome those interested in learning about our faith. Please contact us to arrange an
                  informational session or to speak with our community members.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </PageSection>

      <PageSection variant="muted">
        <Container>
          <h2 className="mb-10 text-center font-serif text-title-lg font-semibold text-secondary">
            Location & Directions
          </h2>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="mb-6 font-serif text-xl font-semibold text-secondary">Getting Here</h3>
              <div className="mb-8">
                <h4 className="mb-3 font-semibold text-primary">By Public Transport</h4>
                <ul className="list-disc pl-6 text-sm text-muted-foreground">
                  <li>Take local bus to Variali Bazar stop</li>
                  <li>Auto-rickshaws available from railway station</li>
                  <li>City bus route 12 stops nearby</li>
                </ul>
              </div>
              <div className="mb-8">
                <h4 className="mb-3 font-semibold text-primary">By Car</h4>
                <ul className="list-disc pl-6 text-sm text-muted-foreground">
                  <li>Located in Dhastipura area of Surat</li>
                  <li>GPS coordinates: 21.2056, 72.8208</li>
                  <li>Parking available on-site</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3 font-semibold text-primary">Landmarks</h4>
                <ul className="list-disc pl-6 text-sm text-muted-foreground">
                  <li>Near Variyavi Bhagol market</li>
                  <li>Walking distance from Dhastipura center</li>
                  <li>Palia Ground</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="mb-8 overflow-hidden rounded-lg border-2 border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.634418298468!2d72.818726775772!3d21.206676980487536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e8e972c3b15%3A0x459a21de805924b6!2sGoti%20Adarian!5e0!3m2!1sen!2sin!4v1771908505326!5m2!1sen!2sin"
                  width="100%"
                  height={300}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Goti Adarian map"
                />
              </div>
              <div className="surface-card p-6 md:p-7">
                <h3 className="mb-3 font-serif text-title-md font-semibold text-primary">Need Directions?</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Our volunteers can provide detailed directions and assist with transportation arrangements for
                  special events or ceremonies.
                </p>
                <a href="tel:+917573013336" className="btn btn-outline">
                  <i className="fas fa-phone" />
                  Call for Directions
                </a>
              </div>
            </div>
          </div>
        </Container>
      </PageSection>

      <PageSection variant="secondary">
        <Container className="text-center">
          <FaravaharDivider />
          <h2 className="mb-6 font-serif text-title-lg font-semibold">We Look Forward to Welcoming You</h2>
          <p className="mx-auto mb-10 max-w-2xl text-body-lg text-secondary-foreground/95">
            Whether you&apos;re visiting for the first time or returning home, our doors are always open to those
            seeking spiritual connection and community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+917573013336" className="btn btn-primary btn-lg">
              <i className="fas fa-phone" />
              Call Us Today
            </a>
            <Link
              href="/community"
              className="btn btn-outline btn-lg border-secondary-foreground/40 text-secondary-foreground hover:border-primary hover:text-primary"
            >
              Join Our Community
            </Link>
          </div>
        </Container>
      </PageSection>
    </>
  );
}
