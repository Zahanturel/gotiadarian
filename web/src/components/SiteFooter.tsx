import Link from "next/link";
import Image from "next/image";
import { MAP_URL } from "@/lib/site";
import { NAV_ITEMS } from "@/lib/nav";

const label = "text-[12px] font-semibold uppercase leading-[1.4] tracking-[0.16em] text-gold-soft";
const hoverLink = "transition-colors hover:text-gold-soft hover:underline";

export function SiteFooter() {
  return (
    <footer className="on-dark border-t border-primary/35 bg-secondary text-secondary-foreground">
      <div className="mx-auto box-content max-w-content px-gutter pb-8 pt-[clamp(56px,7vw,80px)]">
        <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-6 border-b border-secondary-foreground/[.12] pb-[clamp(36px,4vw,48px)]">
          <div className="flex max-w-[26rem] flex-col gap-3">
            <p className="font-serif text-2xl font-medium text-primary">Goti Adarian</p>
            <p className="text-[15px] leading-[1.65] text-secondary-foreground/90 [text-wrap:pretty]">
              Preserving the sacred fire and ancient wisdom of the Parsi-Zoroastrian tradition for future
              generations.
            </p>
          </div>
          <a href="tel:+917573013336" className="btn btn-phone">
            <i className="fas fa-phone" aria-hidden />
            Call +91 7573013336
          </a>
        </div>

        <div className="grid gap-x-[clamp(32px,5vw,64px)] gap-y-10 py-[clamp(36px,4vw,48px)] sm:grid-cols-2 lg:grid-cols-[1.1fr_1fr_.9fr]">
          <div className="flex flex-col gap-1.5 text-sm leading-[1.65]">
            <p className={label}>Address:</p>
            <address className="not-italic text-secondary-foreground/90">
              <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className={hoverLink}>
                Goti Adarian
                <br />
                Variyavi Bhagol, Variyadi Bazar
                <br />
                Dhastipura, Sayedpura
                <br />
                Surat, Gujarat 395003
              </a>
            </address>
            <p className={`${label} mt-[18px]`}>Phone:</p>
            <p className="text-secondary-foreground/90">
              <a href="tel:+917573013336" className={`font-medium text-secondary-foreground ${hoverLink}`}>
                +91 7573013336
              </a>
              <br />
              Alternative: +91 9727760344 / +91 7573013330
            </p>
          </div>

          <nav aria-label="Footer">
            <p className={`${label} mb-3.5`}>Quick Links</p>
            <ul className="grid list-none grid-cols-[repeat(2,minmax(0,max-content))] gap-x-8 gap-y-0.5 p-0 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-[36px] items-center text-secondary-foreground/90 transition-colors hover:text-gold-soft"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="text-sm leading-[1.65] text-secondary-foreground/90">
            <p className={`${label} mb-3.5`}>Opening Hours</p>
            <p className="font-semibold text-secondary-foreground">Open 24 hours a day</p>
            <p>7 days a week</p>
            <p>365 days a year</p>
            <p className="italic text-secondary-foreground/80">Always available for the community</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 border-t border-secondary-foreground/[.12] pt-6">
          <Image
            src="/assets/faravahar.png"
            alt="Faravahar symbol representing Zoroastrian faith"
            width={40}
            height={40}
            className="h-10 w-10 object-contain opacity-90"
          />
          <p className="text-[13px] text-secondary-foreground/80">&copy; 2026 Goti Adarian. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
