/** Shared meta description (exact site copy). */
export const DEFAULT_SITE_DESCRIPTION =
  "A spiritual sanctuary preserving the ancient wisdom and traditions of the Parsi-Zoroastrian community.";

/** Canonical site origin for metadata, OG URLs, and sitemap. Override in env for staging. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://gotiadarian.com"
).replace(/\/$/, "");

export function absoluteUrl(pathname: string): string {
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${SITE_URL}${path}`;
}

export const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=Goti+Adarian%2C+Variyavi+Bhagol%2C+Variyadi+Bazar%2C+Dhastipura%2C+Sayedpura%2C+Surat%2C+Gujarat+395003";

/** Where the contact form posts. A small Cloudflare Worker (worker/) that emails the message. */
export const CONTACT_ENDPOINT = "https://goti-contact.turelzahan10.workers.dev/";
