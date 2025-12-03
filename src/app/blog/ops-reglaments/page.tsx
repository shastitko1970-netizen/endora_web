// src/app/blog/ops-reglaments/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { OpsReglamentsArticleBody } from "../_components/OpsReglamentsArticleBody";

export const metadata: Metadata = {
  title: "Как встроить цифровых сотрудников в ежедневные регламенты",
  description:
    "Как описать процессы, переписать регламенты и организовать контроль качества, когда в команде появляется цифровой сотрудник.",
};

export default function OpsReglamentsPage() {
  return (
    <main className="min-h-screen w-full pt-28 pb-20">
      <div className="mx-auto max-w-5xl px-4">
        {/* Линк назад, как на странице vision */}
        <div className="mb-4">
          <Link
            href="/blog"
            className="text-[11px] font-medium uppercase tracking-[0.24em] text-[var(--text-muted)] hover:underline"
          >
            ← Блог Endora AI
          </Link>
        </div>

        {/* Основная карточка статьи */}
        <article className="rounded-[32px] border border-[rgba(15,23,42,0.06)] bg-[#FFF7EE] px-5 py-6 shadow-[0_24px_80px_rgba(15,23,42,0.55)] md:px-10 md:py-8">
          {/* Хедер статьи */}
          <header className="mb-6 space-y-4 md:mb-8">
            <p className="text-[11px] tracking-[0.24em] uppercase text-[var(--text-muted)]">
              Операционка · Статья
            </p>

            <h1 className="text-2xl font-semibold leading-tight text-[var(--text-primary)] md:text-3xl lg:text-[32px]">
              Как встроить цифровых сотрудников в ежедневные регламенты
            </h1>

            <div className="inline-flex items-center gap-2 rounded-2xl bg-[rgba(129,140,248,0.12)] px-3 py-1.5 text-[11px] text-[var(--text-secondary)]">
              <span className="text-base">📝</span>
              <span>
                Статья · Декабрь 2025 · автор: Ярослав Бросман, CPO &amp;
                Co-Founder Endora AI
              </span>
            </div>
          </header>

          {/* Разделительная линия как у первой статьи */}
          <hr className="mb-6 border-t border-[rgba(15,23,42,0.06)] md:mb-8" />

          {/* Тело статьи в стиле Notion / как у vision */}
          <div className="prose prose-sm max-w-none prose-p:text-[var(--text-secondary)] prose-headings:text-[var(--text-primary)] prose-li:text-[var(--text-secondary)] prose-ul:marker:text-[var(--text-muted)] md:prose-base">
            <OpsReglamentsArticleBody />
          </div>
        </article>
      </div>
    </main>
  );
}
