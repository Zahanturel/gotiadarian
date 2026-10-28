import type { Metadata } from "next";
import Link from "next/link";
import { PageSection } from "@/components/PageSection";
import { Container } from "@/components/Container";
import { FaravaharDivider } from "@/components/FaravaharDivider";

export const metadata: Metadata = {
  title: { absolute: "Message Sent - Goti Adarian" },
  robots: { index: false },
};

export default function ContactThanksPage() {
  return (
    <PageSection variant="muted">
      <Container className="text-center">
        <FaravaharDivider />
        <h1 className="font-serif text-display font-bold text-secondary">Thank You</h1>
        <p className="mx-auto mt-8 max-w-prose text-body-lg text-muted-foreground">
          Your message has been sent. We will get back to you as soon as we can. For anything urgent, please call
          us on{" "}
          <a href="tel:+917573013336" className="font-semibold text-secondary hover:text-primary">
            +91 7573013336
          </a>
          .
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn btn-primary btn-lg">
            Back to Home
          </Link>
          <Link href="/community" className="btn btn-outline btn-lg">
            Community Events
          </Link>
        </div>
      </Container>
    </PageSection>
  );
}
