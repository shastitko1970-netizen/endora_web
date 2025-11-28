"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/ui/glass/Button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        fixed z-50 left-1/2 -translate-x-1/2
        top-6 w-[92%] max-w-6xl
        flex items-center justify-between
        px-8 py-4 rounded-3xl
        transition-all duration-300
        ${
          scrolled
            ? "bg-[var(--glass-bg)] border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] shadow-lg"
            : "bg-transparent border-transparent backdrop-blur-0 shadow-none"
        }
      `}
    >
      {/* Логотип с подложкой */}
      <Link
        href="/"
        className="flex items-center gap-3 text-sm md:text-base font-semibold text-[var(--text-primary)]"
      >
        <div
          className="
            h-9 w-9 md:h-10 md:w-10
            rounded-[18px]
               bg-[rgba(32,32,36,0.9)]        // ← стал тёмно-серый фон
               border border-white/20 
            shadow-[0_8px_26px_rgba(15,23,42,0.25)]
            flex items-center justify-center
            backdrop-blur-[var(--glass-blur)]
          "
        >
          <Image
            src="/logo-endora-mark.svg"
            alt="Endora AI"
            width={24}
            height={24}
            className="opacity-95"
          />
        </div>

        <span className="tracking-[0.16em] uppercase">
          Endora AI
        </span>
      </Link>

      {/* Навигация */}
      <nav className="hidden md:flex items-center gap-8 text-sm text-[var(--text-primary)]">
        <Link href="/maria" className="hover:opacity-70 transition">
          Мария
        </Link>
        <Link href="/petr" className="hover:opacity-70 transition">
          Пётр
        </Link>
        <Link href="/products" className="hover:opacity-70 transition">
          Продукты
        </Link>
        <Link href="/company" className="hover:opacity-70 transition">
          Компания
        </Link>
        <Link href="/blog" className="hover:opacity-70 transition">
          Блог
        </Link>
      </nav>

      {/* Кнопка справа */}
      <Link href="/start">
        <Button variant="primary" className="px-6 py-2.5 text-xs">
          Начать
        </Button>
      </Link>
    </header>
  );
}
