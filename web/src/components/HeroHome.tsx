"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Bilingual } from "@/contexts/LanguageContext";
import { Container } from "./Container";

const SLIDE_IMAGES = [
  "https://images.unsplash.com/photo-1612619695468-83053c3ab53e?w=1080",
  "https://images.unsplash.com/photo-1617131313439-6c9197dcd84c?w=1080",
  "https://images.unsplash.com/photo-1618675367337-d105341beb90?w=1080",
] as const;

export function HeroHome() {
  const [i, setI] = useState(0);
  const [gotiLoaded, setGotiLoaded] = useState(false);
  const [slidesLoaded, setSlidesLoaded] = useState<boolean[]>(() => SLIDE_IMAGES.map(() => false));

  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % SLIDE_IMAGES.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-black"
      aria-label="Home hero"
    >
      {/* Decorative backgrounds — empty alt; sit behind overlay + content */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="relative h-full w-full">
          <Image
            src="/assets/goti.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className={`object-cover transition-[opacity,visibility] duration-500 ease-out ${
              gotiLoaded ? "visible opacity-100" : "invisible opacity-0"
            }`}
            style={{ visibility: gotiLoaded ? "visible" : "hidden" }}
            aria-hidden
            onLoadingComplete={() => setGotiLoaded(true)}
          />
        </div>
      </div>
      {SLIDE_IMAGES.map((src, idx) => (
        <div
          key={src}
          className={`pointer-events-none absolute inset-0 z-[1] transition-opacity duration-500 ease-out ${
            idx === i ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden
        >
          <div className="relative h-full w-full">
            <Image
              src={src}
              alt=""
              fill
              priority
              sizes="100vw"
              className={`object-cover transition-[opacity,visibility] duration-500 ease-out ${
                slidesLoaded[idx] ? "visible opacity-100" : "invisible opacity-0"
              }`}
              style={{ visibility: slidesLoaded[idx] ? "visible" : "hidden" }}
              onLoadingComplete={() =>
                setSlidesLoaded((prev) => {
                  const next = [...prev];
                  next[idx] = true;
                  return next;
                })
              }
            />
          </div>
        </div>
      ))}
      <div
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
        aria-hidden
      />
      <div className="hero-home-content relative z-[3] flex min-h-screen flex-col justify-center px-4 pb-28 pt-28 text-center sm:px-6 sm:pb-32 sm:pt-32 lg:px-10">
        <Container>
          <h1 className="mx-auto mb-3 max-w-[64rem] font-serif text-[clamp(2rem,5vw,4rem)] font-bold text-[hsl(36,39%,96%)]">
            <Bilingual
              en={<>The Sacred Fire of Goti Adarian</>}
              gu={<>ગોતી અદારિયનની પવિત્ર આગ</>}
            />
          </h1>
          <p className="mx-auto mb-8 max-w-[64rem] text-[1.25rem] text-[hsl(36,39%,96%)]">
            <Bilingual
              en={
                <>
                  A spiritual sanctuary preserving the ancient wisdom and traditions of the
                  Parsi-Zoroastrian community
                </>
              }
              gu={
                <>
                  પારસી-ઝોરોસ્ટ્રિયન સમુદાયની પ્રાચીન શાણપણ અને પરંપરાઓને સાચવતું આધ્યાત્મિક પવિત્રસ્થાન
                </>
              }
            />
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/rituals" className="btn btn-primary btn-lg">
              <Bilingual en={<>Explore Rituals</>} gu={<>વિધિઓનું અન્વેષણ કરો</>} />
            </Link>
            <Link href="/about" className="btn btn-secondary btn-lg">
              <Bilingual en={<>Our History</>} gu={<>અમારો ઇતિહાસ</>} />
            </Link>
            <Link href="/donate" className="btn btn-accent btn-lg">
              <Bilingual en={<>Support Us</>} gu={<>અમને સહાય કરો</>} />
            </Link>
          </div>
        </Container>
      </div>
    </section>
  );
}
