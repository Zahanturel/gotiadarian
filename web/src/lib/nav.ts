export type NavItem = {
  href: string;
  label: string;
  highlight?: boolean;
};

export const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/community", label: "Community" },
  { href: "/zoroastrianism", label: "Zoroastrianism" },
  { href: "/rituals", label: "Rituals" },
  { href: "/trustees", label: "Our Trustees" },
  { href: "/donate", label: "Donate", highlight: true },
  { href: "/contact", label: "Contact" },
];
