import { Container } from "./Container";

/** Minimal footer for the donate page. */
export function DonateFooter() {
  return (
    <footer className="bg-black/30 py-12 pb-6 pt-12">
      <Container>
        <p className="text-center text-sm text-white/90">© 2026 Goti Adarian. All rights reserved.</p>
      </Container>
    </footer>
  );
}
