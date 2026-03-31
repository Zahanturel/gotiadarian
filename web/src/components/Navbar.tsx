"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS } from "@/lib/nav";

export function Navbar({ donateTheme = false }: { donateTheme?: boolean }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkBase = donateTheme
    ? "text-accent-foreground/90 hover:text-primary"
    : "text-secondary/90 hover:text-primary";
  const activeClass = donateTheme ? "text-primary" : "text-primary";
  const highlightClass = donateTheme
    ? "rounded-md bg-white/10 px-3 py-1 text-primary"
    : "rounded-md bg-primary/15 px-3 py-1 text-secondary";

  return (
    <header
      className={`sticky top-0 z-50 border-b shadow-soft backdrop-blur-md ${
        donateTheme
          ? "border-white/10 bg-donate-bg/95"
          : "border-border/50 bg-background/92"
      }`}
    >
      <nav
        className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-10"
        aria-label="Primary"
      >
        <Link
          href="/"
          className={`font-serif text-xl font-semibold tracking-tight transition-colors duration-200 ease-out ${
            donateTheme ? "text-accent-foreground hover:text-primary" : "text-secondary hover:text-primary"
          }`}
        >
          Goti Adarian
        </Link>

        <ul className="order-3 hidden w-full items-center justify-center gap-1 md:order-none md:flex md:w-auto lg:gap-2">
          {NAV_ITEMS.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${linkBase} ${
                    active ? activeClass : ""
                  } ${item.highlight ? highlightClass : ""}`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className={`inline-flex md:hidden ${linkBase}`}
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            <i className={`fas ${open ? "fa-times" : "fa-bars"} text-xl`} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border/40 md:hidden"
          >
            <ul
              className={`flex flex-col gap-1 px-4 py-4 ${
                donateTheme ? "bg-donate-bg" : "bg-background"
              }`}
            >
              {NAV_ITEMS.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-md px-3 py-3 text-sm font-medium transition-colors duration-200 ${linkBase} ${
                        active ? activeClass : ""
                      } ${item.highlight ? highlightClass : ""}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
