import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/ui/primitives/Section";
import { ScrollReveal } from "@/ui/primitives/ScrollReveal";
import { fadeUp } from "@/lib/animations/homeVariants";
import { ProcessPrepArticleBody } from "../_components/ProcessPrepArticleBody";

export const metadata: Metadata = {
  title: "Как подготовить процессы к цифровому сотруднику - Блог Endora AI",
  description:
    "Пошаговый разбор подготовки процессов, данных и команды к внедрению цифрового сотрудника: от аудита воронки до метрик, маршрутизации и чек-листа готовности.",
};

export default function ProcessPrepArticlePage() {
  return (
    <main className="min-h-screen w-full pt-28 pb-20">
      <Section className="pb-10">
        <ScrollReveal
          variants={fadeUp}
          className="max-w-4xl mx-auto px-4 space-y-5"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]"
          >
            <span>← Блог Endora AI</span>
          </Link>

          <div className="rounded-3xl bg-[#FFF7EE] border border-[rgba(15,23,42,0.06)] shadow-[0_24px_80px_rgba(15,23,42,0.55)] px-5 pt-5 pb-6 md:px-8 md:pt-6 md:pb-8">
            <div className="space-y-3 border-b border-[rgba(15,23,42,0.06)] pb-4 md:pb-5">
              <p className="text-[11px] tracking-[0.24em] uppercase text-[var(--text-muted)]">
                Статья · Практика
              </p>
              <h1 className="text-2xl md:text-3xl font-semibold text-[var(--text-primary)] leading-snug">
                Как подготовить процессы к цифровому сотруднику
              </h1>
              <div className="inline-flex items-center gap-2 rounded-2xl bg-[rgba(129,140,248,0.09)] px-3 py-1.5 text-[11px] text-[var(--text-secondary)]">
                <span className="text-base">📈</span>
                <span>
                  Декабрь 2025 · автор: Ярослав Бросман, CPO &amp; Co-Founder
                  Endora AI
                </span>
              </div>
            </div>

            <div className="pt-5 md:pt-6 prose prose-sm md:prose-base max-w-none mx-auto prose-p:text-[var(--text-secondary)] prose-headings:text-[var(--text-primary)] prose-li:text-[var(--text-secondary)] prose-ul:marker:text-[var(--text-muted)]">
              <ProcessPrepArticleBody />
            </div>
          </div>
        </ScrollReveal>
      </Section>
    </main>
  );
}