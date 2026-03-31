import Link from "next/link";
import Image from "next/image";

const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=Goti+Adarian%2C+Variyavi+Bhagol%2C+Variyadi+Bazar%2C+Dhastipura%2C+Sayedpura%2C+Surat%2C+Gujarat+395003";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-content px-4 py-16 sm:px-6 lg:px-10">
        <div className="grid gap-14 md:grid-cols-3 md:gap-12">
          <div className="space-y-5">
            <p className="font-serif text-lg font-semibold text-primary">Goti Adarian</p>
            <p className="max-w-sm text-sm leading-relaxed text-secondary-foreground/90">
              Preserving the sacred fire and ancient wisdom of the Parsi-Zoroastrian tradition for
              future generations.
            </p>
            <div className="text-sm">
              <p className="font-medium">Address:</p>
              <address className="not-italic text-secondary-foreground/85">
                <a
                  href={MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 hover:text-primary"
                >
                  Goti Adarian
                  <br />
                  Variyavi Bhagol, Variyadi Bazar
                  <br />
                  Dhastipura, Sayedpura
                  <br />
                  Surat, Gujarat 395003
                </a>
              </address>
              <p className="mt-3 font-medium">Phone:</p>
              <p>
                <a href="tel:+917573013336" className="transition-colors duration-200 hover:text-primary">
                  +91 7573013336
                </a>
                <br />
                Alternative: +91 9727760344 / +91 7573013330
              </p>
            </div>
            <div className="relative h-12 w-12 opacity-90">
              <Image
                src="/assets/faravahar.png"
                alt="Faravahar symbol representing Zoroastrian faith"
                fill
                className="object-contain"
                sizes="48px"
              />
            </div>
          </div>

          <nav aria-label="Footer">
            <p className="mb-5 font-serif text-lg font-semibold text-primary">Quick Links</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-secondary-foreground/90 transition-colors duration-200 hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-secondary-foreground/90 transition-colors duration-200 hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-secondary-foreground/90 transition-colors duration-200 hover:text-primary">
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href="/zoroastrianism"
                  className="text-secondary-foreground/90 transition-colors duration-200 hover:text-primary"
                >
                  Zoroastrianism
                </Link>
              </li>
              <li>
                <Link href="/rituals" className="text-secondary-foreground/90 transition-colors duration-200 hover:text-primary">
                  Rituals
                </Link>
              </li>
            </ul>
          </nav>

          <div className="text-sm">
            <p className="mb-3 font-serif text-lg font-semibold text-primary">Opening Hours</p>
            <p className="font-semibold">Open 24 hours a day</p>
            <p>7 days a week</p>
            <p>365 days a year</p>
            <p className="italic text-secondary-foreground/80">Always available for the community</p>
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <div className="relative h-12 w-12 opacity-80">
            <Image
              src="/assets/faravahar.png"
              alt=""
              fill
              className="object-contain"
              sizes="48px"
            />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-8 border-t border-white/10 pt-12 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-sm text-secondary-foreground/80">&copy; 2025 Goti Adarian. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="#" className="transition-colors duration-200 hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors duration-200 hover:text-primary">
              Terms of Service
            </a>
            <a href="#" className="transition-colors duration-200 hover:text-primary">
              Accessibility
            </a>
          </div>
          <a href="tel:+917573013336" className="btn btn-phone text-sm">
            <i className="fas fa-phone" aria-hidden />
            Call +91 7573013336
          </a>
        </div>
      </div>
    </footer>
  );
}
