import Image from "next/image";
import { MAP_URL } from "@/lib/site";

const label = "text-[12px] font-semibold uppercase leading-[1.4] tracking-[0.16em] text-gold-soft";
const hoverLink = "transition-colors hover:text-gold-soft hover:underline";

/** Footer for the Donate page: address, phone and copyright on a darker maroon bar. */
export function DonateFooter() {
  return (
    <footer className="on-dark border-t border-primary/35 bg-black/30">
      <div className="mx-auto box-content max-w-content px-gutter pb-6 pt-10">
        <div className="grid gap-x-12 gap-y-7 pb-7 text-sm leading-[1.65] [grid-template-columns:repeat(auto-fit,minmax(min(100%,15rem),1fr))]">
          <div className="flex flex-col gap-1.5">
            <p className={label}>Address:</p>
            <address className="not-italic text-accent-foreground/90">
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
          </div>
          <div className="flex flex-col gap-1.5">
            <p className={label}>Phone:</p>
            <p className="text-accent-foreground/90">
              <a href="tel:+917573013336" className={`font-medium text-accent-foreground ${hoverLink}`}>
                +91 7573013336
              </a>
              <br />
              Alternative: +91 9727760344 / +91 7573013330
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3.5 border-t border-secondary-foreground/[.14] pt-5">
          <Image
            src="/assets/faravahar.png"
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 object-contain opacity-85"
          />
          <p className="text-sm text-white/90">&copy; 2026 Goti Adarian. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
