"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type Lang = "en" | "gu";

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
} | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = localStorage.getItem("language") as Lang | null;
    if (stored === "en" || stored === "gu") setLangState(stored);
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem("language", l);
  }, []);

  const value = useMemo(() => ({ lang, setLang }), [lang, setLang]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

/** Renders exactly one of two branches — same text pairs as the original data-lang blocks. */
export function Bilingual({ en, gu }: { en: ReactNode; gu: ReactNode }) {
  const { lang } = useLanguage();
  return <>{lang === "en" ? en : gu}</>;
}
