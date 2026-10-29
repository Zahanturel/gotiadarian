import Link from "next/link";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { PageHeader } from "@/components/PageHeader";
import { ClosingBand } from "@/components/ClosingBand";
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

const visiting = [
  "Dress modestly and respectfully when visiting",
  "Remove shoes before entering prayer areas",
  "Maintain silence during prayer services",
  "Follow guidance from temple priests and volunteers",
];

const participation = [
  { icon: "fa-heart", text: "All community members are welcome to participate" },
  { icon: "fa-hands-helping", text: "Volunteer opportunities are available for all ages" },
  { icon: "fa-calendar", text: "Registration required for some special events" },
  { icon: "fa-phone", text: "Contact us for questions or special accommodations" },
];

const h2 = "mb-[clamp(36px,4.5vw,56px)] font-serif text-title-lg font-normal text-secondary";
const listItem = "flex items-baseline gap-3";

export default function CommunityPage() {
  return (
    <>
      <PageHeader title="Community Events">
        Join our vibrant community in celebrating our heritage through festivals, gatherings, and educational
        programs that bring us together.
      </PageHeader>

      <section aria-labelledby="fest-h" className="py-section">
        <Container>
          <FadeIn>
            <h2 id="fest-h" className={h2}>
              Upcoming Festivals
            </h2>
          </FadeIn>
          <div className="grid gap-[clamp(20px,2.5vw,32px)] md:grid-cols-2">
            {festivals.map((f, i) => (
              <FadeIn key={f.title} delay={(i % 2) * 0.09} className="h-full">
                <div className="surface-card flex h-full flex-col p-[clamp(24px,3.5vw,36px)]">
                  <h3 className="font-serif text-title-md font-medium text-secondary">{f.title}</h3>
                  {"date" in f ? (
                    <div className="mt-2 text-small font-semibold text-gold-ink">{f.date}</div>
                  ) : (
                    f.dates.map((d) => (
                      <div key={d} className="mt-2 text-small font-semibold text-gold-ink">
                        {d}
                      </div>
                    ))
                  )}
                  <p className="mt-3 text-small text-muted-foreground">{f.desc}</p>
                  <div className="mt-6 border-t border-panel-line pt-5">
                    <h4 className="mb-2 font-sans text-sm font-semibold text-gold-ink">Activities:</h4>
                    <ul className="flex list-none flex-col gap-1 p-0 text-sm leading-[1.6] text-secondary">
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
      </section>

      <section aria-labelledby="guide-h" className="bg-sand py-section">
        <Container>
          <FadeIn>
            <h2 id="guide-h" className={h2}>
              Community Guidelines
            </h2>
          </FadeIn>
          <div className="grid gap-x-[clamp(32px,5vw,64px)] gap-y-10 md:grid-cols-2">
            <FadeIn>
              <h3 className="mb-5 font-serif text-2xl font-medium leading-tight text-secondary">
                Visiting the Temple
              </h3>
              <ul className="flex list-none flex-col gap-3.5 p-0 text-body text-secondary">
                {visiting.map((t) => (
                  <li key={t} className={listItem}>
                    <i className="fas fa-check-circle w-[18px] shrink-0 text-center text-[15px] text-gold-ink" aria-hidden />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.09}>
              <h3 className="mb-5 font-serif text-2xl font-medium leading-tight text-secondary">
                Community Participation
              </h3>
              <ul className="flex list-none flex-col gap-3.5 p-0 text-body text-secondary">
                {participation.map((t) => (
                  <li key={t.text} className={listItem}>
                    <i className={`fas ${t.icon} w-[18px] shrink-0 text-center text-[15px] text-gold-ink`} aria-hidden />
                    <span>{t.text}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </Container>
      </section>

      <ClosingBand
        id="close-h"
        title="Join Our Community"
        actions={
          <>
            <Link href="/contact" className="btn btn-primary btn-lg">
              Get Involved
            </Link>
            <Link href="/contact" className="btn btn-outline btn-lg">
              Contact Us
            </Link>
          </>
        }
      >
        Whether you&apos;re a lifelong member or new to our community, there&apos;s a place for you at Goti
        Adarian.
      </ClosingBand>
    </>
  );
}
