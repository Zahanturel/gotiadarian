import { Navbar } from "@/components/Navbar";
import { DonateFooter } from "@/components/DonateFooter";

export default function DonateLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-accent text-accent-foreground">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground focus:shadow-card focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-accent"
      >
        Skip to main content
      </a>
      <Navbar donateTheme />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <DonateFooter />
    </div>
  );
}
