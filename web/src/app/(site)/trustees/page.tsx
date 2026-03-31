import Link from "next/link";
import Image from "next/image";
import { PageSection } from "@/components/PageSection";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { FaravaharDivider } from "@/components/FaravaharDivider";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Our Trustees - Goti Adarian",
  description:
    "Meet the dedicated individuals who guide and preserve the sacred traditions of Shri Pak Goti Adarian Saheb, ensuring our heritage continues for future generations.",
  path: "/trustees",
});

const trustees = [
  {
    img: "/images/trustees/tehmuras-modi.png",
    alt: "Tehmuras Modi",
    name: "Tehmuras Modi",
    role: "President",
    body: "A devoted member of the Davar Modi family, committed to upholding the sacred traditions and ensuring the temple's continued spiritual service to the community.",
  },
  {
    img: "/images/trustees/zawareh-wadia.png",
    alt: "Zawareh Wadia",
    name: "Zawareh Wadia",
    role: "Managing Trustee",
    body: "Representing the esteemed Wadia family, dedicated to preserving the rich heritage and maintaining the sacred fire for future generations.",
  },
  {
    img: "/images/trustees/sarosh-bhacca.jpg",
    alt: "Dr. Sarosh Bhacca",
    name: "Dr. Sarosh Bhacca",
    role: "Trustee",
    body: "A distinguished member of the Bhacca family, bringing wisdom and dedication to the stewardship of our sacred temple.",
  },
  {
    img: "/images/trustees/gul-palia.png",
    alt: "Gul Palia",
    name: "Gul Palia",
    role: "Trustee",
    body: "Representing the Palia family's longstanding commitment to the temple's welfare and the preservation of Zoroastrian traditions.",
  },
  {
    img: "/images/trustees/yasmin-dotiwala.jpg",
    alt: "Yasmin Dotiwala",
    name: "Yasmin Dotiwala",
    role: "Trustee",
    body: "A devoted trustee from the Dotiwala family, working to ensure the continuity of our sacred rituals and community programs.",
  },
  {
    img: "/images/trustees/ryan-modi.jpg",
    alt: "Ryan Modi",
    name: "Rayan Modi",
    role: "Trustee",
    body: "A dedicated young member of the Davar Modi family, bringing fresh perspective while honoring the sacred traditions of our temple.",
  },
];

export default function TrusteesPage() {
  return (
    <>
      <PageSection variant="muted">
        <Container className="text-center">
          <h1 className="font-serif text-display font-bold text-secondary">Our Trustees</h1>
          <p className="mx-auto mt-8 max-w-prose text-body-lg text-muted-foreground">
            Meet the dedicated individuals who guide and preserve the sacred traditions of Shri Pak Goti Adarian
            Saheb, ensuring our heritage continues for future generations.
          </p>
        </Container>
      </PageSection>

      <PageSection>
        <Container>
          <h2 className="text-center font-serif text-title-lg font-semibold text-secondary">
            Board of Trustees
          </h2>
          <p className="mx-auto mb-9 mt-5 max-w-prose text-center text-muted-foreground">
            The temple&apos;s trustees have included respected families such as the Modi, Wadia, Palia, Bhacca, and
            Dotiwala families, who have served with dedication and devotion for generations.
          </p>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {trustees.map((t) => (
              <FadeIn key={t.name}>
                <div className="surface-card p-8 text-center md:p-9">
                  <div className="relative mx-auto mb-6 h-[200px] w-[200px] overflow-hidden rounded-full border-4 border-primary">
                    <Image src={t.img} alt={t.alt} fill className="object-cover" sizes="200px" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-primary">{t.name}</h3>
                  <p className="mt-2 font-semibold text-secondary">{t.role}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </PageSection>

      <PageSection variant="muted">
        <Container>
          <h2 className="mb-10 text-center font-serif text-title-lg font-semibold text-secondary">
            Our Panthaky
          </h2>
          <FadeIn>
            <div className="surface-card mx-auto max-w-4xl p-8 md:p-10">
              <div className="grid items-center gap-10 md:grid-cols-2">
                <div className="relative mx-auto h-[250px] w-[250px] shrink-0 overflow-hidden rounded-full border-4 border-primary">
                  <Image
                    src="/images/trustees/panthaky-meherzad-turel.jpg"
                    alt="Er. Meherzad Turel - Panthaky"
                    fill
                    className="object-cover"
                    sizes="250px"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-3xl font-semibold text-primary">Er. CA. Meherzad Turel</h3>
                  <p className="mt-2 text-lg font-semibold text-secondary">Panthaky</p>
                  <p className="mt-6 leading-relaxed text-muted-foreground">
                    The Turel family (originally known as &quot;Velati&quot;) has served as the Panthakis (priests
                    and caretakers) of the Adarian for <strong>eight generations</strong>. Their dedication—especially
                    during floods, when they protected and relocated the sacred fire to safety—has been recorded with
                    reverence.
                  </p>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    The family&apos;s lineage of priests includes Ervad Rustamji, Ervad Jamasji, Ervad Khurshedji,
                    Ervad Dadabhai, Ervad Dorabji, Ervad Nariman, Ervad Jamshedji, and Ervad Parvez. This spiritual
                    service continues to the present day under the guidance of Er. Meherzad Turel, who maintains the
                    ancient traditions with devotion and care.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </PageSection>

      <PageSection variant="secondary">
        <Container className="text-center">
          <FaravaharDivider />
          <h2 className="mb-6 font-serif text-title-lg font-semibold">Support Our Sacred Mission</h2>
          <p className="mx-auto mb-10 max-w-2xl text-body-lg text-secondary-foreground/95">
            Help our trustees preserve the sacred fire and ancient traditions for future generations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/donate" className="btn btn-primary btn-lg">
              Make a Donation
            </Link>
            <Link
              href="/contact"
              className="btn btn-outline btn-lg border-secondary-foreground/40 text-secondary-foreground hover:border-primary hover:text-primary"
            >
              Get in Touch
            </Link>
          </div>
        </Container>
      </PageSection>
    </>
  );
}
