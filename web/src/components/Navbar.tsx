"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { NAV_ITEMS } from "@/lib/nav";

export function Navbar({ donateTheme = false }: { donateTheme?: boolean }) {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Expose the live header height so full-height sections and the menu can size themselves below it.
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const set = () => document.documentElement.style.setProperty("--header-h", `${el.offsetHeight}px`);
    set();
    const ro = new ResizeObserver(set);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Full-screen menu: lock page scroll, move focus in, trap Tab, close on Esc or when the bar widens.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const raf = requestAnimationFrame(() => menuRef.current?.querySelector("a")?.focus());

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        btnRef.current?.focus();
        return;
      }
      if (e.key !== "Tab") return;
      const nodes = [btnRef.current, ...Array.from(menuRef.current?.querySelectorAll("a") ?? [])].filter(
        Boolean,
      ) as HTMLElement[];
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    const mq = window.matchMedia("(min-width:1024px)");
    const onMq = () => {
      if (mq.matches) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  const linkClass = (active: boolean, highlight?: boolean) => {
    const tone = donateTheme
      ? `${active ? "text-primary underline decoration-2 underline-offset-[6px]" : "text-accent-foreground/90 hover:text-primary"}`
      : `${active ? "text-gold-ink underline decoration-2 underline-offset-[6px]" : "text-secondary hover:text-gold-ink"}`;
    const pill = highlight
      ? `px-3.5 ${donateTheme ? "border-primary/55 hover:bg-white/10" : "border-gold-ink/35 hover:bg-primary/15"}`
      : "border-transparent px-2.5";
    return `block whitespace-nowrap rounded-full border py-1.5 text-sm font-medium leading-5 transition-colors ${pill} ${tone}`;
  };

  const menuLinkClass = (active: boolean) =>
    `flex min-h-[60px] items-center font-serif text-[1.75rem] leading-tight ${
      active
        ? `underline decoration-2 underline-offset-[6px] ${donateTheme ? "text-primary" : "text-gold-ink"}`
        : donateTheme
          ? "text-accent-foreground"
          : "text-secondary"
    }`;

  return (
    <>
      <header
        ref={headerRef}
        className={`sticky top-0 z-50 border-b backdrop-blur-md transition-[background-color,box-shadow] ${
          donateTheme
            ? `on-dark border-white/10 bg-donate-bg/95 ${
                scrolled ? "shadow-[0_1px_3px_rgba(0,0,0,.18),0_6px_24px_rgba(0,0,0,.18)]" : ""
              }`
            : `border-border/60 ${scrolled ? "bg-background/[.92] shadow-soft" : "bg-background/[.96]"}`
        }`}
      >
        <nav
          className="mx-auto box-content flex min-h-[44px] max-w-content items-center justify-between gap-4 px-gutter py-3.5"
          aria-label="Primary"
        >
          <Link
            href="/"
            className={`whitespace-nowrap font-serif text-xl font-semibold tracking-tight transition-colors ${
              donateTheme ? "text-accent-foreground hover:text-primary" : "text-secondary hover:text-gold-ink"
            }`}
          >
            Goti Adarian
          </Link>

          <ul className="hidden list-none items-center gap-0.5 p-0 lg:flex">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={linkClass(active, item.highlight)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            ref={btnRef}
            className={`inline-flex h-11 w-11 items-center justify-center rounded lg:hidden ${
              donateTheme ? "text-accent-foreground" : "text-secondary"
            }`}
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <i className={`fas ${open ? "fa-xmark" : "fa-bars"} text-xl`} aria-hidden />
          </button>
        </nav>
      </header>

      {/* The menu sits outside the header: backdrop-filter on the header would otherwise trap position:fixed. */}
      {open && (
        <motion.div
          id="site-menu"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className={`fixed inset-x-0 bottom-0 z-40 overflow-y-auto px-gutter pb-12 pt-2 lg:hidden ${
            donateTheme ? "on-dark bg-donate-bg" : "bg-background"
          }`}
          style={{ top: "var(--header-h, 73px)" }}
        >
          <ul className="mx-auto max-w-content list-none p-0">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href} className={`border-b ${donateTheme ? "border-white/15" : "border-border"}`}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={menuLinkClass(active)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </motion.div>
      )}
    </>
  );
}
