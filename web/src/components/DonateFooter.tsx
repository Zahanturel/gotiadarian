import { Container } from "./Container";

/** Matches pages/donate.html minimal footer only. */
export function DonateFooter() {
  return (
    <footer className="bg-black/30 py-12 pb-6 pt-12">
      <Container>
        <p className="text-center text-sm text-white/90">© 2025 Goti Adarian. All rights reserved.</p>
      </Container>
    </footer>
  );
}
