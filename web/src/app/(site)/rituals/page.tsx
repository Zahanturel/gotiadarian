import Link from "next/link";
import { PageSection } from "@/components/PageSection";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { FaravaharDivider } from "@/components/FaravaharDivider";
import { Bilingual } from "@/contexts/LanguageContext";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Rituals - Goti Adarian",
  description:
    "Discover the ancient rituals and ceremonies that connect our community to the divine and preserve our sacred traditions.",
  path: "/rituals",
});

const dayRituals = [
  { icon: "fa-fire-flame-curved", title: "Machi", text: "Ritual of placing sandalwood in the sacred fire" },
  { icon: "fa-fire", title: "Afargan", text: "Fire ritual with sacred prayers" },
  { icon: "fa-dove", title: "Farokshi", text: "Prayers for the departed souls" },
  { icon: "fa-hands-praying", title: "Jashan", text: "Thanksgiving ceremony" },
  { icon: "fa-star", title: "Fareshta", text: "Prayers for divine messengers" },
  { icon: "fa-book-open", title: "Yazashne", text: "Higher liturgical ceremony" },
  { icon: "fa-moon", title: "Vandidad", text: "Night-long purification ceremony" },
  { icon: "fa-sun", title: "Boi", text: "Five daily fire tending rituals" },
];

const schedule = [
  { name: "Havan Gah", sub: "Dawn prayers", time: "6:45 AM(Sunrise) - 12:30 PM" },
  { name: "Rapithwin Gah", sub: "Midday prayers", time: "12:45 PM - 3:30 PM" },
  { name: "Uziran Gah", sub: "Afternoon prayers", time: "3:45 PM - 6:45 PM(Sunset)" },
  { name: "Aiwisruthrem Gah", sub: "Evening prayers", time: "7:00 PM - 12:30 AM" },
  { name: "Ushahin Gah", sub: "Night prayers", time: "12:45 AM - 5:30 AM(Sunrise)" },
];

export default function RitualsPage() {
  return (
    <>
      <PageSection variant="muted">
        <Container className="text-center">
          <h1 className="font-serif text-display font-bold text-secondary">
            <Bilingual en={<>Sacred Ceremonies</>} gu={<>પવિત્ર વિધિઓ</>} />
          </h1>
          <p className="mx-auto mt-8 max-w-prose text-body-lg text-muted-foreground">
            <Bilingual
              en={
                <>
                  Discover the ancient rituals and ceremonies that connect our community to the divine and preserve
                  our sacred traditions.
                </>
              }
              gu={
                <>
                  પ્રાચીન વિધિઓ અને વિધાનોની શોધ કરો જે અમારા સમુદાયને દિવ્યતા સાથે જોડે છે અને અમારી પવિત્ર પરંપરાઓને
                  સાચવે છે.
                </>
              }
            />
          </p>
        </Container>
      </PageSection>

      <PageSection>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            {[
              {
                label: "Navjote",
                desc: "The initiation ceremony where young Parsis formally join the Zoroastrian faith, typically performed between ages 7-12.",
                items: ["Ritual bath (nahn)", "Investiture with sacred thread (kusti) and shirt (sudreh)", "Recitation of prayers", "Community celebration"],
              },
              {
                label: "Jashan",
                desc: "A thanksgiving ceremony performed to mark auspicious occasions, anniversaries, or to invoke divine blessings.",
                items: ["Arrangement of ritual items", "Recitation of Prayers", "Offerings of sandalwood and incense", "Communal sharing of consecrated fruits and food"],
              },
            ].map((cer) => (
              <FadeIn key={cer.label}>
                <div className="surface-card overflow-hidden">
                  <div className="flex min-h-[200px] items-center justify-center bg-muted/80">
                    <div className="text-center">
                      <div className="mx-auto mb-2 h-16 w-16 rounded-full border-2 border-dashed border-primary/40" />
                      <p className="font-serif font-semibold text-secondary">{cer.label}</p>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="font-serif text-xl font-semibold text-secondary">{cer.label}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{cer.desc}</p>
                    <h4 className="mt-6 font-semibold text-secondary">Key Elements:</h4>
                    <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
                      {cer.items.map((i) => (
                        <li key={i}>{i}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </PageSection>

      <PageSection>
        <Container>
          <h2 className="mb-4 text-center font-serif text-title-lg font-semibold text-secondary">
            Day-to-Day Rituals
          </h2>
          <p className="mx-auto mb-10 max-w-prose text-center text-muted-foreground">
            These are the regular ceremonies and prayers performed at the temple to maintain spiritual connection and
            sacred traditions.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {dayRituals.map((d) => (
              <FadeIn key={d.title}>
                <div className="surface-card p-6 text-center md:p-7">
                  <i className={`fas ${d.icon} mb-3 text-2xl text-primary`} aria-hidden />
                  <h3 className="font-serif text-title-md font-semibold text-primary">{d.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{d.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </PageSection>

      <PageSection variant="muted">
        <Container>
          <h2 className="mb-10 text-center font-serif text-title-lg font-semibold text-secondary">
            Other Sacred Rituals
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <FadeIn>
              <div className="surface-card h-full p-8 md:p-9">
                <i className="fas fa-fire mb-4 text-3xl text-primary" />
                <h3 className="mb-4 font-serif text-xl font-semibold text-secondary">Fire Ceremonies</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  Daily and special ceremonies performed around the sacred fire, including the tending of the eternal
                  flame and offerings of sandalwood and incense.
                </p>
                <ul className="list-disc pl-5 text-sm text-muted-foreground">
                  <li>Boi ceremonies five times a day</li>
                  <li>Daily fire tending rituals</li>
                  <li>Special occasion prayers</li>
                  <li>Purification ceremonies</li>
                  <li>Blessing rituals, Machi</li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="surface-card h-full p-8 md:p-9">
                <i className="fas fa-heart mb-4 text-3xl text-primary" />
                <h3 className="mb-4 font-serif text-xl font-semibold text-secondary">Wedding Ceremonies</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  Traditional Zoroastrian wedding rituals that unite couples in the presence of the community,
                  emphasizing spiritual union.
                </p>
                <ul className="list-disc pl-5 text-sm text-muted-foreground">
                  <li>Nahan (purification bath)</li>
                  <li>Ashirvad (blessing ceremony)</li>
                  <li>Sacred fire witness</li>
                  <li>Exchange of vows</li>
                  <li>Community celebration</li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="surface-card h-full p-8 md:p-9">
                <i className="fas fa-dove mb-4 text-3xl text-primary" />
                <h3 className="mb-4 font-serif text-xl font-semibold text-secondary">Memorial Services</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  Ceremonies to honor and remember departed souls, including the traditional sky burial practices and
                  memorial prayers.
                </p>
                <ul className="list-disc pl-5 text-sm text-muted-foreground">
                  <li>Geh Sarna</li>
                  <li>Sarosh nu Patru (kardo)</li>
                  <li>Uthamnu</li>
                  <li>Chaharum (fourth day ceremony)</li>
                  <li>Dasmu (10th day ceremony)</li>
                  <li>Mahinu (1 month ceremony)</li>
                  <li>Chhahmu (6 month ceremony)</li>
                  <li>Varsi (yearly memorial)</li>
                  <li>Muktad observances</li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </Container>
      </PageSection>

      <PageSection>
        <Container>
          <h2 className="mb-10 text-center font-serif text-title-lg font-semibold text-secondary">
            Daily Prayer Services
          </h2>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="mb-6 font-serif text-xl font-semibold text-secondary">Prayer Schedule</h3>
              <div className="grid gap-3">
                {schedule.map((s) => (
                  <div
                    key={s.name}
                    className="flex flex-col justify-between gap-2 rounded-lg bg-muted/80 p-4 sm:flex-row sm:items-center"
                  >
                    <div>
                      <strong>{s.name}</strong>
                      <p className="m-0 text-sm text-muted-foreground">{s.sub}</p>
                    </div>
                    <span className="shrink-0 font-semibold text-primary">{s.time}</span>
                  </div>
                ))}
              </div>
            </div>
            <FadeIn>
              <div className="surface-card p-8 md:p-9">
                <h3 className="mb-4 font-serif text-xl font-semibold text-secondary">Essential Prayers</h3>
                <div className="grid gap-6">
                  {[
                    { t: "Kushti Prayers", d: "Daily untying and retying of the sacred cord with prayers" },
                    { t: "Ashem Vohu", d: "The most fundamental prayer emphasizing righteousness" },
                    { t: "Yenghe Hatam", d: "The holiest prayer encapsulating Zoroastrian theology" },
                    { t: "Yatha Ahu Vairyo", d: "Ancient prayer recognizing divine sovereignty" },
                  ].map((p) => (
                    <div key={p.t}>
                      <h4 className="mb-1 font-semibold text-primary">{p.t}</h4>
                      <p className="text-sm text-muted-foreground">{p.d}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 border-t border-border pt-6">
                  <h4 className="mb-3 font-semibold text-primary">Prayer Guidance</h4>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Our priests are available to guide newcomers and those seeking to deepen their prayer practice.
                  </p>
                  <Link href="/contact" className="btn btn-outline">
                    Request Guidance
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </PageSection>

      <PageSection variant="muted">
        <Container>
          <h2 className="mb-10 text-center font-serif text-title-lg font-semibold text-secondary">
            Ritual Calendar
          </h2>
          <div className="mx-auto max-w-3xl">
            <div className="surface-card p-8 md:p-9">
              <h3 className="mb-6 font-serif text-xl font-semibold text-secondary">Special Ceremonies</h3>
              <div className="grid gap-4">
                {[
                  { t: "Navjote Ceremonies", d: "By appointment " },
                  { t: "Wedding Ceremonies", d: "Advance booking required" },
                  { t: "Memorial Services", d: "As needed - contact for arrangements" },
                  { t: "Private Prayers", d: "Available upon request" },
                ].map((x) => (
                  <div key={x.t} className="border-l-4 border-accent bg-background p-4">
                    <h4 className="mb-1 font-semibold text-secondary">{x.t}</h4>
                    <p className="m-0 text-sm text-muted-foreground">{x.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </PageSection>

      <PageSection variant="secondary">
        <Container className="text-center">
          <FaravaharDivider />
          <h2 className="mb-6 font-serif text-title-lg font-semibold">Participate in Our Sacred Traditions</h2>
          <p className="mx-auto mb-10 max-w-2xl text-body-lg text-secondary-foreground/95">
            Join us for daily prayers, special ceremonies, and sacred rituals that connect us to the divine.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn btn-primary btn-lg">
              Schedule a Ceremony
            </Link>
            <Link
              href="/zoroastrianism"
              className="btn btn-outline btn-lg border-secondary-foreground/40 text-secondary-foreground hover:border-primary hover:text-primary"
            >
              Learn More
            </Link>
          </div>
        </Container>
      </PageSection>
    </>
  );
}
