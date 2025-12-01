// src/app/blog/vision/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/ui/primitives/Section";
import { ScrollReveal } from "@/ui/primitives/ScrollReveal";
import { fadeUp } from "@/lib/animations/homeVariants";
import { VisionArticleBody } from "../_components/VisionArticleBody";

export const metadata: Metadata = {
  title:
    "Зачем бизнесу цифровые сотрудники, а не «очередной бот» - Блог Endora AI",
  description:
    "Видение Endora AI: почему мы делаем именно цифровых сотрудников, с каких процессов начинаем и как это меняет повседневную работу команд.",
};

export default function VisionArticlePage() {
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
                Статья · Видение Endora AI
              </p>
              <h1 className="text-2xl md:text-3xl font-semibold text-[var(--text-primary)] leading-snug">
                Зачем мы делаем цифровых сотрудников и с чего начинаем
              </h1>
              <div className="inline-flex items-center gap-2 rounded-2xl bg-[rgba(129,140,248,0.09)] px-3 py-1.5 text-[11px] text-[var(--text-secondary)]">
                <span className="text-base">📄</span>
                <span>
                  Ноябрь 2025 · автор: Ярослав Бросман, CPO &amp; Co-Founder
                  Endora AI
                </span>
              </div>
            </div>

            <div className="pt-5 md:pt-6 prose prose-sm md:prose-base max-w-none mx-auto prose-p:text-[var(--text-secondary)] prose-headings:text-[var(--text-primary)] prose-li:text-[var(--text-secondary)] prose-ul:marker:text-[var(--text-muted)]">
              <VisionArticleBody />
            </div>
          </div>
        </ScrollReveal>
      </Section>
    </main>
  );
}
