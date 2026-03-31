import Link from "next/link";
import { PageSection } from "@/components/PageSection";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { FaravaharDivider } from "@/components/FaravaharDivider";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "News - Goti Adarian",
  description:
    "Subscribe to our newsletter to receive the latest news, event updates, and community announcements directly in your inbox.",
  path: "/news",
});

export default function NewsPage() {
  return (
    <>
      <PageSection variant="muted">
        <Container>
          <h1 className="mb-9 text-center font-serif text-display font-bold text-secondary">
            Upcoming Events
          </h1>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: "fa-calendar-alt",
                title: "Muktad Observance",
                date: "Aug 12-16",
                text: "Ten holy days of remembrance for departed souls with special prayers and community gatherings.",
                href: "/community",
                cta: "Learn More",
              },
              {
                icon: "fa-star",
                title: "Parsi New Year",
                date: "Aug 17",
                text: "Celebration of renewal and prosperity with traditional ceremonies and community feast.",
                href: "/community",
                cta: "Join Celebration",
              },
              {
                icon: "fa-graduation-cap",
                title: "Education Workshop",
                date: "Monthly",
                text: "Regular workshops on Zoroastrian history, traditions, and contemporary relevance.",
                href: "/contact",
                cta: "Contact Us",
              },
            ].map((e) => (
              <FadeIn key={e.title}>
                <div className="surface-card flex h-full flex-col p-8 text-center md:p-9">
                  <i className={`fas ${e.icon} mb-4 text-3xl text-primary`} aria-hidden />
                  <h3 className="mb-4 font-serif text-xl font-semibold text-secondary">{e.title}</h3>
                  <div className="mb-4 text-2xl font-bold text-primary">{e.date}</div>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">{e.text}</p>
                  <Link href={e.href} className="btn btn-outline">
                    {e.cta}
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </PageSection>

      <PageSection variant="secondary">
        <Container className="text-center">
          <FaravaharDivider />
          <h2 className="mb-6 font-serif text-title-lg font-semibold">Stay Connected</h2>
          <p className="mx-auto mb-10 max-w-prose text-body-lg text-secondary-foreground/95">
            Subscribe to our newsletter to receive the latest news, event updates, and community announcements
            directly in your inbox.
          </p>
          <div className="mx-auto max-w-lg">
            <form className="mb-8 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email address"
                required
                className="min-h-[48px] flex-1 rounded-md border-2 border-background bg-background px-4 text-foreground"
              />
              <button type="submit" className="btn btn-primary min-h-[48px] shrink-0">
                Subscribe
              </button>
            </form>
            <p className="text-sm text-secondary-foreground/80">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </Container>
      </PageSection>

      <PageSection>
        <Container>
          <h2 className="mb-10 text-center font-serif text-title-lg font-semibold text-secondary">
            News Archives
          </h2>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-6 font-serif text-title-md font-semibold text-secondary">Browse by Category</h3>
              <div className="grid gap-4">
                {[
                  { icon: "fa-calendar-alt", label: "Events & Celebrations", count: "24 articles" },
                  { icon: "fa-users", label: "Community News", count: "18 articles" },
                  { icon: "fa-book", label: "Education & Culture", count: "15 articles" },
                ].map((c) => (
                  <a
                    key={c.label}
                    href="#"
                    className="flex items-center justify-between rounded-md bg-muted/80 px-4 py-4 text-foreground no-underline transition-colors duration-200 hover:bg-muted"
                  >
                    <span>
                      <i className={`fas ${c.icon} mr-2 text-primary`} />
                      {c.label}
                    </span>
                    <span className="font-semibold text-primary">{c.count}</span>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-6 font-serif text-title-md font-semibold text-secondary">Browse by Year</h3>
              <div className="grid gap-4">
                {[
                  ["2025", "12 articles"],
                  ["2024", "28 articles"],
                  ["2023", "35 articles"],
                ].map(([y, n]) => (
                  <a
                    key={y}
                    href="#"
                    className="flex items-center justify-between rounded-md bg-muted/80 px-4 py-4 text-foreground no-underline transition-colors duration-200 hover:bg-muted"
                  >
                    <span>
                      <strong>{y}</strong>
                    </span>
                    <span className="font-semibold text-primary">{n}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </PageSection>
    </>
  );
}
