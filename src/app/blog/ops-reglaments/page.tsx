// src/app/blog/ops-reglaments/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/ui/primitives/Section";
import { OpsReglamentsArticleBody } from "../_components/OpsReglamentsArticleBody";

export const metadata: Metadata = {
  title: "Как встроить цифровых сотрудников в ежедневные регламенты",
  description:
    "Как описать процессы, переписать регламенты и организовать контроль качества, когда в команде появляется цифровой сотрудник.",
};

export default function OpsReglamentsPage() {
  return (
    <main className="min-h-screen w-full pt-24 pb-20">
      <Section className="max-w-4xl mx-auto px-4">
        {/* Крошки */}
        <nav className="mb-6 text-xs text-[var(--text-muted)]">
          <Link href="/blog" className="hover:underline">
            Блог Endora AI
          </Link>
          <span className="mx-1.5">/</span>
          <span>Как встроить цифровых сотрудников в ежедневные регламенты</span>
        </nav>

        {/* Хедер статьи */}
        <header className="mb-8 space-y-4">
          <p className="text-[11px] tracking-[0.24em] uppercase text-[var(--text-muted)]">
            Операционка · Статья
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight text-[var(--text-primary)]">
            Как встроить цифровых сотрудников в ежедневные регламенты
          </h1>

          <div className="inline-flex items-center gap-2 rounded-2xl bg-[rgba(129,140,248,0.08)] px-3 py-1.5 text-[11px] text-[var(--text-secondary)]">
            <span className="text-base">📝</span>
            <span>Статья · Декабрь 2025 · автор: Ярослав Бросман, CPO &amp; Co-Founder Endora AI</span>
          </div>
        </header>

        {/* Тело статьи */}
        <article className="prose prose-sm md:prose-base max-w-2xl prose-p:text-[var(--text-secondary)] prose-headings:text-[var(--text-primary)] prose-li:text-[var(--text-secondary)] prose-ul:marker:text-[var(--text-muted)]">
          <OpsReglamentsArticleBody />
        </article>
      </Section>
    </main>
  );
}
