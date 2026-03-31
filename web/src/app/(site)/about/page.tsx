import Link from "next/link";
import Image from "next/image";
import { PageSection } from "@/components/PageSection";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { FaravaharDivider } from "@/components/FaravaharDivider";
import { Bilingual } from "@/contexts/LanguageContext";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "About - Goti Adarian",
  description:
    "Discover the rich history and enduring legacy of the Goti Adarian temple, a beacon of faith that has guided the Parsi-Zoroastrian community for centuries.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageSection variant="muted">
        <Container className="text-center">
          <h1 className="font-serif text-display font-bold text-secondary">
            <Bilingual en={<>Our Heritage</>} gu={<>અમારો વારસો</>} />
          </h1>
          <p className="mx-auto mt-8 max-w-prose text-body-lg text-muted-foreground">
            <Bilingual
              en={
                <>
                  Discover the rich history and enduring legacy of the Goti Adarian temple, a beacon of faith
                  that has guided the Parsi-Zoroastrian community for centuries.
                </>
              }
              gu={
                <>
                  ગોતી અદારિયન મંદિરના સમૃદ્ધ ઇતિહાસ અને ચિરસ્થાયી વારસાની શોધ કરો, જે શ્રદ્ધાનું દીપસ્તંભ છે જેણે
                  સદીઓથી પારસી-ઝોરોસ્ટ્રિયન સમુદાયનું માર્ગદર્શન કર્યું છે.
                </>
              }
            />
          </p>
        </Container>
      </PageSection>

      <PageSection>
        <Container className="max-w-prose space-y-8 lg:max-w-none">
          <h2 className="text-center font-serif text-title-lg font-semibold text-secondary">
            History of Shri Pak Goti Adarian Saheb
          </h2>
          <FadeIn>
            <div className="surface-card p-8 md:p-10">
              <div className="space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  The Shri Pak Goti Adarian Saheb is among the oldest and most venerated Zoroastrian fire
                  temples in Surat, Gujarat. Deeply rooted in the city&apos;s Parsi history, it is regarded as a
                  sacred landmark of great antiquity—believed to be around 600–700 years old. The first
                  recorded reference to the Adarian dates to 1796 CE, though its origins are believed to go
                  much further back, supported by oral traditions and community lore.
                </p>
                <p>
                  When the Parsis settled along Gujarat&apos;s western coast after migrating from Iran, they
                  gradually established fire temples—first Dadgahs, then Adarians and Atash Behrams—to
                  preserve their religious rituals. In Surat, before other temples were established, the Goti
                  Adarian served as the center for Pavmahal Kriyas (major sacred rituals) and purification
                  ceremonies. It has long been considered the spiritual pride of the Parsis of Surat.
                </p>
              </div>
            </div>
          </FadeIn>

          <h3 className="font-serif text-xl font-semibold text-primary">Possible Origins of the Name and Fire</h3>
          <p className="text-muted-foreground">
            While the true origin of the Goti Adarian remains uncertain, three major theories are associated
            with its establishment:
          </p>

          <div className="space-y-6">
            {[
              {
                icon: "fa-user-tie",
                title: "The Mobed from Khambhat Theory",
                body: `Some scholars suggest that a Mobed from Khambhat (Cambay) named or surnamed "Goti" may have founded the Adarian for performing essential Pavmahal rituals. Much like the ancient Daremeher at Navsari (established around 1142 CE), this could have started as a Dadgah fire, later elevated to the status of an Adarian through consecration ceremonies. This aligns with the historical period when Parsis began establishing communal places of worship instead of keeping only household fires.`,
              },
              {
                icon: "fa-fire",
                title: "The Miraculous Fireball Legend",
                body: `According to a popular legend recorded by Shri Roni Khurshedchaher Khan, a "ball of fire" appeared miraculously in a field during heavy rains. Despite the downpour, the fire remained undoused. Locals, recognizing the Parsis' reverence for fire, informed their leaders, who brought Mobeds to perform the rituals and consecrate the flame. The fire's spherical shape gave rise to the name "Goti," meaning "sphere" or "ball."`,
              },
              {
                icon: "fa-meteor",
                title: "The Meteorite Interpretation",
                body: `Shri Rohinbhai Noshirwan Karanjia proposed that the "ball of fire" could have been a small meteorite that fell near the village of Tunki, close to the Tapi River. He interpreted this as an act of divine will—Pak Dadar Ahura Mazda choosing that sacred site for the Adarian. Situated on the banks of the ancient Tapi, the location's sanctity echoes the city's older name, Suryapur, and its association with Khorshed Yazad, the Sun deity.`,
              },
            ].map((c) => (
              <FadeIn key={c.title}>
                <div className="surface-card p-8 md:p-10">
                  <h4 className="mb-4 font-serif text-lg font-semibold text-primary">
                    <i className={`fas ${c.icon} mr-2`} />
                    {c.title}
                  </h4>
                  <p className="leading-relaxed text-muted-foreground">{c.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="surface-card p-8 md:p-10">
              <p className="leading-relaxed text-muted-foreground">
                Over time, the Goti Adarian has always remained near the Tapi River—first at Rafi Buraj and
                later rebuilt slightly inland after floods. Despite being near the riverbed and repeatedly
                affected by floods, the sacred fire has never been extinguished, strengthening the
                community&apos;s faith in its divine protection. Non-Parsi residents in the area have also long
                believed the Adarian safeguards them from natural disasters.
              </p>
            </div>
          </FadeIn>

          <h3 className="font-serif text-xl font-semibold text-primary">Legacy and Stewardship</h3>
          <FadeIn>
            <div className="surface-card p-8 md:p-10">
              <div className="space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  Throughout its history, the Goti Adarian has been repaired and maintained approximately
                  every 20–25 years, reflecting the devotion of Surat&apos;s Parsi community. The temple&apos;s
                  trustees have included respected families such as the Modi, Wadia, Palia, Bhacca, and
                  Dotivala families.
                </p>
                <p>
                  The Turel family (originally known as &quot;Velati&quot;) has served as the Panthakis (priests
                  and caretakers) of the Adarian for seven generations. Their dedication—especially during
                  floods, when they protected and relocated the sacred fire to safety—has been recorded with
                  reverence. The family&apos;s lineage of priests includes Ervad Rustamji, Ervad Jamasji, Ervad
                  Khurshedji, Ervad Dadabhai, Ervad Dorabji, Ervad Nariman, Ervad Jamshedji, and Ervad Parvez,
                  continuing this spiritual service to the present day.
                </p>
              </div>
            </div>
          </FadeIn>

          <h3 className="font-serif text-xl font-semibold text-primary">A Symbol of Faith and Continuity</h3>
          <FadeIn>
            <div className="surface-card p-8 md:p-10">
              <div className="space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  The Shri Pak Goti Adarian Saheb stands as a testament to Surat&apos;s deep Parsi heritage—an
                  enduring symbol of devotion, resilience, and divine protection. Despite the passage of
                  centuries and the trials of nature, the sacred fire continues to burn bright on the banks of
                  the Tapi, uniting generations in faith.
                </p>
                <p className="mt-8 text-center font-serif text-lg italic text-primary">
                  <strong>Atha Jamyaat Yatha Aafrinaami</strong>
                  <br />
                  May it be so, as we pray for!
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </PageSection>

      <PageSection variant="muted">
        <Container>
          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-secondary to-[#1a2d38] p-8 shadow-lift text-white md:p-12">
            <h2 className="mb-10 text-center font-serif text-title-lg font-semibold text-white">
              Varasiaji - Meet Vaspaan
            </h2>
            <div className="mx-auto grid max-w-4xl items-center gap-10 md:grid-cols-2 md:gap-12">
              <div className="flex justify-center">
                <div className="relative h-[280px] w-[280px] shrink-0 overflow-hidden rounded-full border-4 border-primary">
                  <Image
                    src="/images/trustees/vaspaan.png"
                    alt="Vaspaan - Sacred Varasiaji"
                    fill
                    className="object-cover"
                    sizes="280px"
                  />
                </div>
              </div>
              <div>
                <h3 className="mb-4 font-serif text-2xl font-semibold text-primary">
                  <i className="fas fa-star mr-2" />
                  Sacred Guardian of Rituals
                </h3>
                <p className="mb-4 text-[1.05rem] leading-relaxed text-white/95">
                  The Varasiaji, named <strong>Vaspaan</strong>, is a consecrated, pure white bull born under
                  rare divine circumstances. His consecrated Nirang (sacred bull&apos;s urine) is used in
                  Pav-Mahal rituals, making him a sacred co-worker in the spiritual life of Goti Adarian.
                </p>
                <p className="text-[1.05rem] leading-relaxed text-white/95">
                  In Zoroastrian tradition, the Varasiaji represents purity and divine blessing, playing an
                  essential role in the most sacred purification ceremonies. Vaspaan&apos;s presence at the
                  temple is a living symbol of the ancient connection between nature, divinity, and spiritual
                  practice.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </PageSection>

      <PageSection>
        <Container>
          <h2 className="mb-10 text-center font-serif text-title-lg font-semibold text-secondary">
            Historical Timeline
          </h2>
          <div className="relative mx-auto max-w-[600px] space-y-7 border-l-[3px] border-primary pl-12 md:pl-14">
            {[
              {
                date: "3rd millennium BCE",
                title: "Origins of Zoroastrianism",
                text: "Origins of Zoroastrianism under the prophet Zarathustra in ancient Persia.",
              },
              {
                date: "8th Century CE",
                title: "Migration to India",
                text: "Following Islamic conquest, Zoroastrians migrate to India, becoming known as Parsis.",
              },
              {
                date: "10th Century CE",
                title: "First Fire Temples",
                text: "Establishment of the first Atash Behrams (highest grade fire temples) in Gujarat.",
              },
              {
                date: "18th Century CE",
                title: "First Recorded Reference of Goti Adarian",
                text: "Founding of the Goti Adarian as a center for community worship and gathering.",
              },
              {
                date: "Present Day",
                title: "Continuing Legacy",
                text: "The Goti Adarian continues to serve as a vital cultural and spiritual landmark for the global Parsi community.",
              },
            ].map((item) => (
              <FadeIn key={item.date}>
                <div className="relative">
                  <span
                    className="absolute top-1.5 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-background bg-primary shadow-sm ring-2 ring-primary/30 left-[calc(-3rem-1.5px)] md:left-[calc(-3.5rem-1.5px)]"
                    aria-hidden
                  />
                  <div className="text-sm font-semibold uppercase tracking-wide text-primary">{item.date}</div>
                  <h3 className="mt-0.5 font-serif text-xl font-semibold text-secondary">{item.title}</h3>
                  <p className="mt-1 text-muted-foreground">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </PageSection>

      <PageSection variant="secondary">
        <Container className="text-center">
          <FaravaharDivider />
          <h2 className="mb-6 font-serif text-title-lg font-semibold">Be Part of Our Story</h2>
          <p className="mx-auto mb-10 max-w-2xl text-body-lg text-secondary-foreground/95">
            Join us in preserving and celebrating the rich heritage of the Parsi-Zoroastrian community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn btn-primary btn-lg">
              Visit Us
            </Link>
            <Link
              href="/donate"
              className="btn btn-outline btn-lg border-secondary-foreground/40 text-secondary-foreground hover:border-primary hover:text-primary"
            >
              Support Our Mission
            </Link>
          </div>
        </Container>
      </PageSection>
    </>
  );
}
