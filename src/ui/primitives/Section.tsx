"use client";

import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

/**
 * Базовый контейнер секции:
 * - центрирует контент
 * - даёт max-width
 * - отвечает за вертикальные отступы
 */
export function Section({ id, className = "", children }: SectionProps) {
  return (
    <section
      id={id}
      className={`w-full max-w-6xl mx-auto px-4 py-24 ${className}`}
    >
      {children}
    </section>
  );
}
