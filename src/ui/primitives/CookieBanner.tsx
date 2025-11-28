"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const COOKIE_STORAGE_KEY = "endora_cookie_consent_v1";

type Consent = "all" | "necessary";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem(COOKIE_STORAGE_KEY);
    if (!saved) {
      setVisible(true);
    }
  }, []);

  const handleChoice = (value: Consent) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(COOKIE_STORAGE_KEY, value);
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 px-4 pb-4">
      <div className="max-w-4xl mx-auto rounded-3xl bg-[var(--glass-bg)]/95 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] shadow-[0_18px_60px_rgba(15,23,42,0.32)] p-4 md:p-5 flex flex-col md:flex-row md:items-center gap-4">
        <div className="text-xs md:text-sm text-[var(--text-secondary)]">
          <p className="font-medium text-[var(--text-primary)] mb-1">
            Мы используем файлы cookie
          </p>
          <p>
            Cookie помогают сайту работать стабильнее и показывать более
            релевантный контент. Вы можете принять только необходимые файлы
            или все cookie. Подробнее — в{" "}
            <Link
              href="/cookies"
              className="underline underline-offset-2 hover:text-[var(--gold-strong)]"
            >
              Политике использования файлов cookie
            </Link>
            .
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 shrink-0 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => handleChoice("necessary")}
            className="px-4 py-2 rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)]/90 text-xs md:text-sm hover:border-[var(--gold-strong)] hover:text-[var(--gold-strong)] transition"
          >
            Только необходимые
          </button>
          <button
            type="button"
            onClick={() => handleChoice("all")}
            className="px-4 py-2 rounded-2xl bg-[var(--gold-soft)] text-xs md:text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--gold-strong)] transition"
          >
            Принять все cookie
          </button>
        </div>
      </div>
    </div>
  );
}
