import Link from "next/link";
import { PageSection } from "@/components/PageSection";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { FaravaharDivider } from "@/components/FaravaharDivider";
import { Bilingual } from "@/contexts/LanguageContext";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Community - Goti Adarian",
  description:
    "Join our vibrant community in celebrating our heritage through festivals, gatherings, and educational programs that bring us together.",
  path: "/community",
});

const festivals: (
  | { title: string; date: string; desc: string; activities: string[] }
  | { title: string; dates: string[]; desc: string; activities: string[] }
)[] = [
  {
    title: "Navroz",
    date: "March 21, 2026",
    desc: "Parsi New Year celebrating spring",
    activities: ["Spring celebration ceremonies"],
  },
  {
    title: "Zarthost-no-Diso",
    date: "May 22, 2026",
    desc: "Death anniversary of Prophet Zarathustra",
    activities: ["Commemorative prayers"],
  },
  {
    title: "Muktad",
    date: "August 5-14, 2026",
    desc: "Ten holy days commemorating departed souls",
    activities: ["Special prayers for departed souls"],
  },
  {
    title: "Parsi New Year",
    date: "August 15, 2026",
    desc: "Celebration of renewal and prosperity",
    activities: ["Special Jashan ceremonies"],
  },
  {
    title: "Goti Adarian Salgerah(New Building)",
    dates: ["Roj: Sarosh Yazad, Mah: Teshter Tir Yazad, YZ.: 1290", "November 29, 2026"],
    desc: "Anniversary of Goti Adarian",
    activities: ["Hama Anjuman Machi in Haven Geh", "Community Jashan ceremony"],
  },
  {
    title: "Establishment Day of Goti Adarian",
    dates: ["Roj: Dadar Hormazd, Mah: Meher Yazad, YZ.: 1165", "February 11, 2027"],
    desc: "Foundation day of Goti Adarian at current place",
    activities: ["Hama Anjuman Machi", "Special Jashan ceremony"],
  },
];

export default function CommunityPage() {
  return (
    <>
      <PageSection variant="muted">
        <Container className="text-center">
          <h1 className="font-serif text-display font-bold text-secondary">
            <Bilingual en={<>Community Events</>} gu={<>સમુદાયિક કાર્યક્રમો</>} />
          </h1>
          <p className="mx-auto mt-8 max-w-prose text-body-lg text-muted-foreground">
            <Bilingual
              en={
                <>
                  Join our vibrant community in celebrating our heritage through festivals, gatherings, and
                  educational programs that bring us together.
                </>
              }
              gu={
                <>
                  ઉત્સવો, મેળાવડા અને શિક્ષણ કાર્યક્રમો દ્વારા અમારા વારસાની ઉજવણી કરવા અમારા જીવંત સમુદાયમાં જોડાઓ જે
                  અમને એકસાથે લાવે છે.
                </>
              }
            />
          </p>
        </Container>
      </PageSection>

      <PageSection>
        <Container>
          <h2 className="mb-10 text-center font-serif text-title-lg font-semibold text-secondary">
            Upcoming Festivals
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {festivals.map((f) => (
              <FadeIn key={f.title}>
                <div className="surface-card h-full p-8 md:p-9">
                  <h3 className="font-serif text-xl font-semibold text-secondary">{f.title}</h3>
                  {"date" in f ? (
                    <div className="mt-2 font-semibold text-primary">{f.date}</div>
                  ) : (
                    f.dates.map((d) => (
                      <div key={d} className="mt-2 font-semibold text-primary">
                        {d}
                      </div>
                    ))
                  )}
                  <p className="mt-3 text-muted-foreground">{f.desc}</p>
                  <div className="mt-6 border-t border-border pt-6">
                    <h4 className="mb-2 font-semibold text-primary">Activities:</h4>
                    <ul className="text-sm text-foreground">
                      {f.activities.map((a) => (
                        <li key={a}>{a}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </PageSection>

      <PageSection variant="muted">
        <Container>
          <h2 className="mb-10 text-center font-serif text-title-lg font-semibold text-secondary">
            Community Guidelines
          </h2>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-6 font-serif text-xl font-semibold text-secondary">Visiting the Temple</h3>
              <ul className="list-none space-y-4 p-0">
                {[
                  "Dress modestly and respectfully when visiting",
                  "Remove shoes before entering prayer areas",
                  "Maintain silence during prayer services",
                  "Follow guidance from temple priests and volunteers",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <i className="fas fa-check-circle mt-1 shrink-0 text-primary" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-6 font-serif text-xl font-semibold text-secondary">Community Participation</h3>
              <ul className="list-none space-y-4 p-0">
                {[
                  { icon: "fa-heart", text: "All community members are welcome to participate" },
                  { icon: "fa-hands-helping", text: "Volunteer opportunities are available for all ages" },
                  { icon: "fa-calendar", text: "Registration required for some special events" },
                  { icon: "fa-phone", text: "Contact us for questions or special accommodations" },
                ].map((t) => (
                  <li key={t.text} className="flex gap-3">
                    <i className={`fas ${t.icon} mt-1 shrink-0 text-primary`} />
                    <span>{t.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </PageSection>

      <PageSection variant="secondary">
        <Container className="text-center">
          <FaravaharDivider />
          <h2 className="mb-6 font-serif text-title-lg font-semibold">Join Our Community</h2>
          <p className="mx-auto mb-10 max-w-2xl text-body-lg text-secondary-foreground/95">
            Whether you&apos;re a lifelong member or new to our community, there&apos;s a place for you at Goti
            Adarian.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn btn-primary btn-lg">
              Get Involved
            </Link>
            <Link
              href="/contact"
              className="btn btn-outline btn-lg border-secondary-foreground/40 text-secondary-foreground hover:border-primary hover:text-primary"
            >
              Contact Us
            </Link>
          </div>
        </Container>
      </PageSection>
    </>
  );
}
