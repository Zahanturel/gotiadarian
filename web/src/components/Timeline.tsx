"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type Entry = { date: string; title: string; text: string };

const EASE = [0.22, 1, 0.36, 1] as const;

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const cols = "grid-cols-[0_40px_minmax(0,1fr)] sm:grid-cols-[11rem_56px_minmax(0,1fr)]";

/** Vertical timeline: date | line with markers | title and text. Entries rise in one after another. */
export function Timeline({ entries }: { entries: readonly Entry[] }) {
  const reduce = useReducedMotion();

  return (
    <div className="max-w-[50rem]">
      <div aria-hidden className={`grid ${cols}`}>
        <span />
        <span className="flex flex-col items-center">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(36,33%,90%)] shadow-[inset_0_0_0_1px_hsl(36,29%,82%)] sm:h-14 sm:w-14">
            <Image src="/assets/faravahar.png" alt="" width={38} height={38} className="h-auto w-[27px] sm:w-[38px]" />
          </span>
          <span className="h-7 w-px bg-primary/70" />
        </span>
        <span />
      </div>
      <motion.ol
        className="m-0 list-none p-0"
        variants={list}
        initial={reduce ? false : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.12, margin: "0px 0px -40px 0px" }}
      >
        {entries.map((e, i) => {
          const last = i === entries.length - 1;
          return (
            <motion.li key={e.date} variants={item} className={`grid ${cols}`}>
              <p className="col-start-3 row-start-1 text-[13px] font-semibold uppercase leading-[1.4] tracking-[0.14em] text-gold-ink sm:col-start-1 sm:pt-1 sm:text-right">
                {e.date}
              </p>
              <span aria-hidden className="relative col-start-2 row-span-2 row-start-1">
                <span
                  className={`absolute left-1/2 top-0 -ml-px w-px bg-primary/70 ${
                    last ? "h-1 sm:h-[9px]" : "h-full"
                  }`}
                />
                <span className="absolute left-1/2 top-1 -ml-[5.5px] h-[11px] w-[11px] rounded-full border-[1.5px] border-primary bg-background sm:top-[9px]" />
              </span>
              <div
                className={`col-start-3 row-start-2 pt-1.5 sm:row-start-1 sm:pt-0 ${
                  last ? "pb-0" : "pb-10 sm:pb-12"
                }`}
              >
                <h3 className="text-[1.375rem] font-medium leading-[1.3] text-secondary">{e.title}</h3>
                <p className="mt-2 max-w-[34rem] text-[1.0625rem] leading-[1.7] text-muted-foreground [text-wrap:pretty]">
                  {e.text}
                </p>
              </div>
            </motion.li>
          );
        })}
      </motion.ol>
    </div>
  );
}
