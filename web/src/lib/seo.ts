import type { Metadata } from "next";
import { absoluteUrl, SITE_URL } from "./site";

const defaultOgImage = absoluteUrl("/assets/faravahar.png");

export type PageSeoInput = {
  title: string;
  description: string;
  path: string;
};

/**
 * Per-route metadata: title, description, canonical, Open Graph, Twitter.
 * OG image uses Faravahar asset when deployed; crawlers ignore missing images gracefully.
 */
export function buildPageMetadata({ title, description, path }: PageSeoInput): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = title.includes("Goti Adarian") ? title : `${title} - Goti Adarian`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: "Goti Adarian",
      locale: "en_IN",
      type: "website",
      images: [{ url: defaultOgImage, width: 1200, height: 630, alt: "Faravahar symbol — Goti Adarian" }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [defaultOgImage],
    },
  };
}

export function rootMetadataBase() {
  return new URL(SITE_URL);
}
