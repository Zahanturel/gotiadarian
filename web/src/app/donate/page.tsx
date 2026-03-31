import { Container } from "@/components/Container";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Donate - Goti Adarian",
  description:
    "Help us preserve the sacred fire and ancient traditions of the Parsi-Zoroastrian community for future generations.",
  path: "/donate",
});

export default function DonatePage() {
  return (
    <>
      <section
        className="border-b border-white/10 py-[clamp(3rem,8vw,6rem)]"
        aria-labelledby="donate-hero-heading"
      >
        <Container className="text-center">
          <h1 id="donate-hero-heading" className="font-serif text-display font-bold">
            Support Our Mission
          </h1>
          <p className="mx-auto mt-8 max-w-prose text-body-lg text-accent-foreground/95">
            Help us preserve the sacred fire and ancient traditions of the Parsi-Zoroastrian community for
            future generations.
          </p>
        </Container>
      </section>

      <section
        className="border-b border-white/10 bg-white/10 py-section backdrop-blur-sm"
        aria-labelledby="bank-details-heading"
      >
        <Container>
          <h2
            id="bank-details-heading"
            className="mb-10 text-center font-serif text-title-lg font-semibold text-accent-foreground"
          >
            Bank Transfer Details
          </h2>
          <div className="mx-auto max-w-xl rounded-xl border border-white/15 bg-white/10 p-8 shadow-lift md:p-10">
            <p className="mb-6 text-center">Please use the following details for donations via bank transfer</p>
            <div className="grid gap-4 text-sm sm:text-base">
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                <strong>Account Name:</strong>
                <span>GOTI ADARIAN TRUST FUND</span>
              </div>
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                <strong>Bank Name:</strong>
                <span>The Surat People&apos;s Co-Op. Bank Ltd.</span>
              </div>
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                <strong>Branch:</strong>
                <span>Timaliyawad, Surat</span>
              </div>
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                <strong>Account Number:</strong>
                <span>104041143975</span>
              </div>
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                <strong>IFSC Code:</strong>
                <span>SPCB0251019</span>
              </div>
            </div>
            <p className="mt-8 text-center">
              🙏 Kindly mention <strong>Your Name & Purpose</strong> in the transaction remarks
            </p>
            <p className="mt-4 text-center text-sm">
              📞 Assistance:
              <br />
              <a href="tel:+917573013336" className="text-primary hover:underline">
                +91 7573013336
              </a>
              <br />
              ✉️ Email:{" "}
              <a href="mailto:contact@gotiadarian.com" className="text-primary hover:underline">
                contact@gotiadarian.com
              </a>
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 py-section" aria-labelledby="heritage-heading">
        <Container>
          <div className="mx-auto max-w-prose">
            <h2 id="heritage-heading" className="font-serif text-title-lg font-semibold text-accent-foreground">
              Help Preserve Our Heritage
            </h2>
            <p className="mt-4 leading-relaxed text-accent-foreground/95">
              Your generous contributions help us maintain the sacred fire, preserve our cultural traditions,
              and support community programs that keep our heritage alive.
            </p>
            <div className="mt-8">
              <h3 className="font-serif text-title-md font-semibold text-accent-foreground">How Your Donation Helps:</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <i className="fas fa-fire mr-2 text-primary" aria-hidden /> Maintaining the sacred fire and its premises
                </li>
                <li>
                  <i className="fas fa-book mr-2 text-primary" aria-hidden /> Providing sandalwood and kathi for
                  uninterrupted rituals
                </li>
                <li>
                  <i className="fas fa-users mr-2 text-primary" aria-hidden /> Supporting priests’ welfare and religious
                  duties
                </li>
              </ul>
            </div>
            <div className="mt-8 rounded-xl border border-white/15 bg-white/10 p-6 shadow-soft">
              <h3 className="font-serif text-title-md font-semibold text-accent-foreground">Ways to Give</h3>
              <ul className="mt-4 list-none space-y-3 p-0">
                <li>
                  <i className="fas fa-university mr-2 text-primary" aria-hidden /> Bank transfer
                </li>
                <li>
                  <i className="fas fa-handshake mr-2 text-primary" aria-hidden /> In-person donation at the temple
                </li>
                <li>
                  <i className="fas fa-money-check mr-2 text-primary" aria-hidden /> Cheque payable to{" "}
                  <strong>“Goti Adarian Trust Fund”</strong> can be couriered to our address
                </li>
              </ul>
            </div>
            <br />
            <br />
            <address className="not-italic text-accent-foreground/95" style={{ marginLeft: 24 }}>
              <strong>Goti Adarian</strong>
              <br />
              Variyavi Bhagol, Variyadi Bazar
              <br />
              Dhastipura, Sayedpura
              <br />
              Surat, Gujarat 395003
            </address>
          </div>
        </Container>
      </section>

      <section className="py-section" aria-labelledby="transparency-heading">
        <Container>
          <h2 id="transparency-heading" className="font-serif text-title-lg font-semibold text-accent-foreground">
            Transparency & Accountability
          </h2>
          <p className="mt-4 max-w-prose leading-relaxed text-accent-foreground/95">
            We believe in complete transparency. Every rupee is carefully allocated to preserve our heritage and
            serve the community.
          </p>
          <ul className="mt-8 list-none space-y-3 p-0">
            <li>
              <i className="fas fa-chart-pie mr-2 text-primary" aria-hidden /> Annual financial reporting
            </li>
            <li>
              <i className="fas fa-shield-alt mr-2 text-primary" aria-hidden /> Donations eligible under 80G
            </li>
            <li>
              <i className="fas fa-users mr-2 text-primary" aria-hidden /> Community governance
            </li>
          </ul>
        </Container>
      </section>
    </>
  );
}
