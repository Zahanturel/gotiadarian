import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: { absolute: "Message Sent - Goti Adarian" },
  robots: { index: false },
};

export default function ContactThanksPage() {
  return (
    <PageHeader
      title="Thank You"
      before={
        <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-background shadow-[inset_0_0_0_1px_hsl(36,29%,82%)]">
          <Image
            src="/assets/faravahar.png"
            alt="Faravahar symbol, emblem of Zoroastrianism"
            width={32}
            height={32}
            className="h-auto w-8"
          />
        </span>
      }
      after={
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-primary btn-lg">
            Back to Home
          </Link>
          <Link href="/community" className="btn btn-outline btn-lg">
            Community Events
          </Link>
        </div>
      }
    >
      Your message has been sent. We will get back to you as soon as we can. For anything urgent, please call us on{" "}
      <a
        href="tel:+917573013336"
        className="font-semibold text-secondary underline-offset-4 transition-colors hover:text-gold-ink hover:underline"
      >
        +91 7573013336
      </a>
      .
    </PageHeader>
  );
}
