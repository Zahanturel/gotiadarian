import Link from "next/link";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { PageHeader } from "@/components/PageHeader";
import { ClosingBand } from "@/components/ClosingBand";
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

const h2 = "mb-[clamp(36px,4.5vw,56px)] font-serif text-title-lg font-normal text-secondary";
const cardTitle = "mb-4 font-serif text-title-md font-medium text-secondary";
const listBase = "list-disc pl-5 text-small text-muted-foreground";

export default function RitualsPage() {
  return (
    <>
      <PageHeader title="Sacred Ceremonies">
        Discover the ancient rituals and ceremonies that connect our community to the divine and preserve our
        sacred traditions.
      </PageHeader>

      <section className="py-section">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            {[
              {
                label: "Navjote",
                desc: "The initiation ceremony where young Parsis formally join the Zoroastrian faith, typically performed between ages 7-12.",
                items: [
                  "Ritual bath (nahn)",
                  "Investiture with sacred thread (kusti) and shirt (sudreh)",
                  "Recitation of prayers",
                  "Community celebration",
                ],
              },
              {
                label: "Jashan",
                desc: "A thanksgiving ceremony performed to mark auspicious occasions, anniversaries, or to invoke divine blessings.",
                items: [
                  "Arrangement of ritual items",
                  "Recitation of Prayers",
                  "Offerings of sandalwood and incense",
                  "Communal sharing of consecrated fruits and food",
                ],
              },
            ].map((cer, i) => (
              <FadeIn key={cer.label} delay={i * 0.09} className="h-full">
                <div className="surface-card h-full overflow-hidden">
                  <div className="m-4 flex aspect-[16/9] items-center justify-center rounded-md border-2 border-dashed border-primary/40 bg-muted/80">
                    <p className="font-serif font-semibold text-secondary">{cer.label} photo</p>
                  </div>
                  <div className="p-[clamp(24px,3.5vw,36px)]">
                    <h3 className="font-serif text-title-md font-medium text-secondary">{cer.label}</h3>
                    <p className="mt-3 text-small text-muted-foreground">{cer.desc}</p>
                    <h4 className="mt-6 font-sans text-sm font-semibold text-secondary">Key Elements:</h4>
                    <ul className={`mt-2 ${listBase}`}>
                      {cer.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="day-h" className="pb-section">
        <Container>
          <FadeIn>
            <h2 id="day-h" className="mb-4 font-serif text-title-lg font-normal text-secondary">
              Day-to-Day Rituals
            </h2>
            <p className="mb-[clamp(36px,4.5vw,56px)] max-w-narrow text-body text-muted-foreground">
              These are the regular ceremonies and prayers performed at the temple to maintain spiritual connection
              and sacred traditions.
            </p>
          </FadeIn>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {dayRituals.map((d, i) => (
              <FadeIn key={d.title} delay={(i % 4) * 0.09} className="h-full">
                <div className="surface-card h-full p-[clamp(24px,3vw,28px)]">
                  <i className={`fas ${d.icon} mb-3 text-2xl text-gold-ink`} aria-hidden />
                  <h3 className="font-serif text-title-md font-medium text-gold-ink">{d.title}</h3>
                  <p className="mt-2 text-small text-muted-foreground">{d.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="other-h" className="bg-sand py-section">
        <Container>
          <FadeIn>
            <h2 id="other-h" className={h2}>
              Other Sacred Rituals
            </h2>
          </FadeIn>
          <div className="grid gap-8 md:grid-cols-3">
            <FadeIn className="h-full">
              <div className="surface-card-on-sand h-full p-[clamp(24px,3.5vw,36px)]">
                <i className="fas fa-fire mb-4 text-3xl text-gold-ink" aria-hidden />
                <h3 className={cardTitle}>Fire Ceremonies</h3>
                <p className="mb-4 text-small text-muted-foreground">
                  Daily and special ceremonies performed around the sacred fire, including the tending of the
                  eternal flame and offerings of sandalwood and incense.
                </p>
                <ul className={listBase}>
                  <li>Boi ceremonies five times a day</li>
                  <li>Daily fire tending rituals</li>
                  <li>Special occasion prayers</li>
                  <li>Purification ceremonies</li>
                  <li>Blessing rituals, Machi</li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.09} className="h-full">
              <div className="surface-card-on-sand h-full p-[clamp(24px,3.5vw,36px)]">
                <i className="fas fa-heart mb-4 text-3xl text-gold-ink" aria-hidden />
                <h3 className={cardTitle}>Wedding Ceremonies</h3>
                <p className="mb-4 text-small text-muted-foreground">
                  Traditional Zoroastrian wedding rituals that unite couples in the presence of the community,
                  emphasizing spiritual union.
                </p>
                <ul className={listBase}>
                  <li>Nahan (purification bath)</li>
                  <li>Ashirvad (blessing ceremony)</li>
                  <li>Sacred fire witness</li>
                  <li>Exchange of vows</li>
                  <li>Community celebration</li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.18} className="h-full">
              <div className="surface-card-on-sand h-full p-[clamp(24px,3.5vw,36px)]">
                <i className="fas fa-dove mb-4 text-3xl text-gold-ink" aria-hidden />
                <h3 className={cardTitle}>Memorial Services</h3>
                <p className="mb-4 text-small text-muted-foreground">
                  Ceremonies to honor and remember departed souls, including the traditional sky burial practices
                  and memorial prayers.
                </p>
                <ul className={listBase}>
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
      </section>

      <section aria-labelledby="prayer-h" className="py-section">
        <Container>
          <FadeIn>
            <h2 id="prayer-h" className={h2}>
              Daily Prayer Services
            </h2>
          </FadeIn>
          <div className="grid gap-10 lg:grid-cols-2">
            <FadeIn>
              <h3 className="mb-6 font-serif text-2xl font-medium leading-tight text-secondary">Prayer Schedule</h3>
              <div className="grid gap-3">
                {schedule.map((s) => (
                  <div
                    key={s.name}
                    className="surface-card flex flex-col justify-between gap-2 p-4 sm:flex-row sm:items-center"
                  >
                    <div>
                      <strong>{s.name}</strong>
                      <p className="m-0 text-sm text-muted-foreground">{s.sub}</p>
                    </div>
                    <span className="shrink-0 font-semibold text-gold-ink">{s.time}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.09}>
              <div className="surface-card p-[clamp(24px,3.5vw,36px)]">
                <h3 className={cardTitle}>Essential Prayers</h3>
                <div className="grid gap-6">
                  {[
                    { t: "Kushti Prayers", d: "Daily untying and retying of the sacred cord with prayers" },
                    { t: "Ashem Vohu", d: "The most fundamental prayer emphasizing righteousness" },
                    { t: "Yenghe Hatam", d: "The holiest prayer encapsulating Zoroastrian theology" },
                    { t: "Yatha Ahu Vairyo", d: "Ancient prayer recognizing divine sovereignty" },
                  ].map((p) => (
                    <div key={p.t}>
                      <h4 className="mb-1 font-sans font-semibold text-gold-ink">{p.t}</h4>
                      <p className="text-small text-muted-foreground">{p.d}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 border-t border-panel-line pt-6">
                  <h4 className="mb-3 font-sans font-semibold text-gold-ink">Prayer Guidance</h4>
                  <p className="mb-4 text-small text-muted-foreground">
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
      </section>

      <section aria-labelledby="cal-h" className="bg-sand py-section">
        <Container>
          <FadeIn>
            <h2 id="cal-h" className={h2}>
              Ritual Calendar
            </h2>
          </FadeIn>
          <FadeIn className="max-w-3xl">
            <div className="surface-card-on-sand p-[clamp(24px,3.5vw,36px)]">
              <h3 className="mb-6 font-serif text-2xl font-medium leading-tight text-secondary">
                Special Ceremonies
              </h3>
              <div className="grid gap-4">
                {[
                  { t: "Navjote Ceremonies", d: "By appointment " },
                  { t: "Wedding Ceremonies", d: "Advance booking required" },
                  { t: "Memorial Services", d: "As needed - contact for arrangements" },
                  { t: "Private Prayers", d: "Available upon request" },
                ].map((x) => (
                  <div key={x.t} className="border-l-4 border-accent bg-panel p-4">
                    <h4 className="mb-1 font-sans font-semibold text-secondary">{x.t}</h4>
                    <p className="m-0 text-sm text-muted-foreground">{x.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      <ClosingBand
        id="close-h"
        title="Participate in Our Sacred Traditions"
        actions={
          <>
            <Link href="/contact" className="btn btn-primary btn-lg">
              Schedule a Ceremony
            </Link>
            <Link href="/zoroastrianism" className="btn btn-outline btn-lg">
              Learn More
            </Link>
          </>
        }
      >
        Join us for daily prayers, special ceremonies, and sacred rituals that connect us to the divine.
      </ClosingBand>
    </>
  );
}
