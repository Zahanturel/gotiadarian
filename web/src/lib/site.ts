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
