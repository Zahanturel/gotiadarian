import Link from "next/link";
import { PageSection } from "@/components/PageSection";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { FaravaharDivider } from "@/components/FaravaharDivider";
import { Bilingual } from "@/contexts/LanguageContext";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Education - Goti Adarian",
  description:
    "Explore our comprehensive collection of educational materials, programs, and resources dedicated to preserving and sharing Zoroastrian knowledge.",
  path: "/education",
});

const resourceLinks = {
  texts: [
    { icon: "fa-download", label: "Avesta - Complete Text" },
    { icon: "fa-download", label: "Yasna Prayers" },
    { icon: "fa-download", label: "Vendidad - Laws of Purity" },
  ],
  videos: [
    { icon: "fa-play", label: "Introduction to Zoroastrianism (15 min)" },
    { icon: "fa-play", label: "Fire Temple Ceremonies (20 min)" },
    { icon: "fa-play", label: "Parsi Heritage in India (25 min)" },
  ],
  centers: [
    { label: "Zoroastrian Studies Institute" },
    { label: "Parsi Heritage Foundation" },
    { label: "FEZANA Educational Materials" },
  ],
};

export default function EducationPage() {
  return (
    <>
      <PageSection variant="muted">
        <Container className="text-center">
          <h1 className="font-serif text-display font-bold text-secondary">
            <Bilingual en={<>Educational Resources</>} gu={<>શિક્ષણ સંસાધનો</>} />
          </h1>
          <p className="mx-auto mt-8 max-w-prose text-body-lg text-muted-foreground">
            <Bilingual
              en={
                <>
                  Explore our comprehensive collection of educational materials, programs, and resources dedicated to
                  preserving and sharing Zoroastrian knowledge.
                </>
              }
              gu={
                <>
                  અમારા શિક્ષણ સામગ્રી, કાર્યક્રમો અને સંસાધનોના વ્યાપક સંગ્રહનું અન્વેષણ કરો જે ઝોરોસ્ટ્રિયન જ્ઞાનને
                  સાચવવા અને વહેંચવા માટે સમર્પિત છે.
                </>
              }
            />
          </p>
        </Container>
      </PageSection>

      <PageSection>
        <Container>
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <h2 className="mb-6 flex items-center gap-2 font-serif text-xl font-semibold text-secondary">
                <i className="fas fa-book text-primary" aria-hidden />
                Sacred Texts
              </h2>
              <ul className="list-none space-y-3 p-0">
                {resourceLinks.texts.map((l) => (
                  <li key={l.label}>
                    <a
                      href="#"
                      className="flex items-center gap-2 rounded-md px-3 py-3 text-foreground no-underline transition-colors duration-200 hover:bg-muted/80"
                    >
                      <i className={`fas ${l.icon} text-primary`} />
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 flex items-center gap-2 font-serif text-xl font-semibold text-secondary">
                <i className="fas fa-film text-primary" aria-hidden />
                Educational Videos
              </h2>
              <ul className="list-none space-y-3 p-0">
                {resourceLinks.videos.map((l) => (
                  <li key={l.label}>
                    <a
                      href="#"
                      className="flex items-center gap-2 rounded-md px-3 py-3 text-foreground no-underline transition-colors duration-200 hover:bg-muted/80"
                    >
                      <i className={`fas ${l.icon} text-primary`} />
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 flex items-center gap-2 font-serif text-xl font-semibold text-secondary">
                <i className="fas fa-university text-primary" aria-hidden />
                Learning Centers
              </h2>
              <ul className="list-none space-y-3 p-0">
                {resourceLinks.centers.map((l) => (
                  <li key={l.label}>
                    <a
                      href="#"
                      className="flex items-center gap-2 rounded-md px-3 py-3 text-foreground no-underline transition-colors duration-200 hover:bg-muted/80"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </PageSection>

      <PageSection variant="muted">
        <Container>
          <h2 className="mb-10 text-center font-serif text-title-lg font-semibold text-secondary">
            Educational Programs
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <FadeIn>
              <div className="surface-card h-full p-8 md:p-9">
                <i className="fas fa-child mb-4 text-3xl text-primary" />
                <h3 className="mb-4 font-serif text-xl font-semibold text-secondary">Children&apos;s Programs</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  Comprehensive educational programs designed to introduce young Parsis to their rich cultural heritage
                  and religious traditions.
                </p>
                <ul className="mb-6 list-disc pl-6 text-sm text-muted-foreground">
                  <li>Sunday school religious education</li>
                  <li>Gujarati language classes</li>
                  <li>Cultural arts and crafts</li>
                  <li>Traditional storytelling sessions</li>
                  <li>Youth choir and music programs</li>
                </ul>
                <div className="rounded-md bg-muted/80 p-4 text-sm">
                  <strong>Schedule:</strong> Sundays 10:00 AM - 12:00 PM
                  <br />
                  <strong>Ages:</strong> 5-16 years
                  <br />
                  <strong>Registration:</strong> Required
                </div>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="surface-card h-full p-8 md:p-9">
                <i className="fas fa-graduation-cap mb-4 text-3xl text-primary" />
                <h3 className="mb-4 font-serif text-xl font-semibold text-secondary">Adult Education</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  Learning opportunities for adults seeking to deepen their understanding of Zoroastrian philosophy,
                  history, and practices.
                </p>
                <ul className="mb-6 list-disc pl-6 text-sm text-muted-foreground">
                  <li>Avestan language study groups</li>
                  <li>Religious philosophy discussions</li>
                  <li>Historical research workshops</li>
                  <li>Interfaith dialogue sessions</li>
                  <li>Comparative religion studies</li>
                </ul>
                <div className="rounded-md bg-muted/80 p-4 text-sm">
                  <strong>Schedule:</strong> Thursdays 7:00 PM - 9:00 PM
                  <br />
                  <strong>Format:</strong> Discussion-based learning
                  <br />
                  <strong>Prerequisites:</strong> None
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </PageSection>

      <PageSection>
        <Container>
          <h2 className="mb-10 text-center font-serif text-title-lg font-semibold text-secondary">
            Research & Scholarship
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: "fa-microscope",
                title: "Academic Research",
                text: "Supporting scholarly research into Zoroastrian history, theology, and cultural contributions.",
                items: [
                  "Historical manuscript preservation",
                  "Archaeological documentation",
                  "Theological research projects",
                  "Cultural anthropology studies",
                ],
              },
              {
                icon: "fa-award",
                title: "Scholarship Programs",
                text: "Financial support for students pursuing education in Zoroastrian studies and related fields.",
                items: [
                  "Undergraduate scholarships",
                  "Graduate research funding",
                  "Conference presentation support",
                  "Publication assistance",
                ],
              },
              {
                icon: "fa-globe",
                title: "Global Outreach",
                text: "Connecting with Zoroastrian communities and scholars worldwide to share knowledge.",
                items: [
                  "International conferences",
                  "Cultural exchange programs",
                  "Digital archives project",
                  "Online learning platforms",
                ],
              },
            ].map((b) => (
              <FadeIn key={b.title}>
                <div className="surface-card h-full p-8 md:p-9">
                  <i className={`fas ${b.icon} mb-4 text-3xl text-primary`} />
                  <h3 className="mb-4 font-serif text-lg font-semibold text-secondary">{b.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground">
                    {b.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </PageSection>

      <PageSection variant="muted">
        <Container>
          <h2 className="mb-10 text-center font-serif text-title-lg font-semibold text-secondary">
            Library & Archives
          </h2>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="mb-8 font-serif text-xl font-semibold text-secondary">Collection Highlights</h3>
              <div className="grid gap-6">
                {[
                  {
                    title: "Rare Manuscripts",
                    text: "Ancient Avestan texts, handwritten prayer books, and historical documents dating back several centuries.",
                    access: "By appointment for scholars and researchers",
                  },
                  {
                    title: "Modern Publications",
                    text: "Contemporary books on Zoroastrian theology, history, and cultural studies from leading scholars worldwide.",
                    access: "Open to community members with library card",
                  },
                  {
                    title: "Digital Archives",
                    text: "Digitized photographs, audio recordings of prayers, and video documentation of ceremonies and festivals.",
                    access: "Online portal available to registered users",
                  },
                ].map((h) => (
                  <div key={h.title} className="rounded-md border-l-4 border-primary bg-background p-6">
                    <h4 className="mb-3 font-semibold text-secondary">{h.title}</h4>
                    <p className="mb-2 text-sm text-muted-foreground">{h.text}</p>
                    <p className="text-xs text-muted-foreground">
                      <strong>Access:</strong> {h.access}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <FadeIn>
              <div className="surface-card p-8 md:p-9">
                <h3 className="mb-6 font-serif text-xl font-semibold text-secondary">Library Services</h3>
                <div className="grid gap-3">
                  {[
                    ["Reading Room", "9:00 AM - 6:00 PM"],
                    ["Research Assistance", "By Appointment"],
                    ["Digitization Services", "Available"],
                    ["Interlibrary Loans", "2-3 weeks"],
                  ].map(([a, b]) => (
                    <div
                      key={a}
                      className="flex flex-col justify-between gap-1 rounded-md bg-muted/80 px-4 py-3 sm:flex-row sm:items-center"
                    >
                      <span>
                        <strong>{a}</strong>
                      </span>
                      <span className="font-semibold text-primary">{b}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 border-t border-border pt-6">
                  <h4 className="mb-4 font-semibold text-primary">How to Access</h4>
                  <ol className="list-decimal pl-6 text-sm text-muted-foreground">
                    <li className="mb-2">Register for a library card at the temple office</li>
                    <li className="mb-2">Present valid identification</li>
                    <li className="mb-2">Agree to library terms and conditions</li>
                    <li>Begin exploring our collection</li>
                  </ol>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </PageSection>

      <PageSection variant="secondary">
        <Container className="text-center">
          <FaravaharDivider />
          <h2 className="mb-6 font-serif text-title-lg font-semibold">Start Your Learning Journey</h2>
          <p className="mx-auto mb-10 max-w-2xl text-body-lg text-secondary-foreground/95">
            Whether you&apos;re seeking to deepen your faith or learn about our ancient traditions, we&apos;re here to
            guide your educational journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn btn-primary btn-lg">
              Enroll in Programs
            </Link>
            <Link
              href="#"
              className="btn btn-outline btn-lg border-secondary-foreground/40 text-secondary-foreground hover:border-primary hover:text-primary"
            >
              Visit Library
            </Link>
          </div>
        </Container>
      </PageSection>
    </>
  );
}
