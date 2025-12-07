// src/app/blog/vs-bot/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/ui/primitives/Section";
import { ScrollReveal } from "@/ui/primitives/ScrollReveal";
import { fadeUp } from "@/lib/animations/homeVariants";
import { VsBotArticleBody } from "../_components/VsBotArticleBody";

export const metadata: Metadata = {
  title:
    "Цифровой сотрудник vs бот: в чём реальная разница, кроме красивого названия - Блог Endora AI",
  description:
    "Разбираем, чем цифровой сотрудник принципиально отличается от «очередного бота»: роль в оргструктуре, глубина интеграции, метрики, управление и экономический эффект.",
};

export default function VsBotArticlePage() {
  return (
    <Section>
      <ScrollReveal variants={fadeUp}>
        <article className="mx-auto max-w-3xl space-y-6">
          <Link
            href="/blog"
            className="inline-flex text-sm opacity-70 hover:opacity-100"
          >
            ← Блог Endora AI
          </Link>

          <p className="text-sm opacity-70">Статья · Разбор</p>

          <h1 className="text-3xl font-semibold leading-tight">
            Цифровой сотрудник vs бот: в чём реальная разница, кроме красивого
            названия
          </h1>

          <p className="text-sm opacity-70">
            Декабрь 2025 · автор: Ярослав Бросман, CPO &amp; Co-Founder Endora AI
          </p>

          <hr className="my-6 opacity-20" />

          <div className="prose max-w-none">
            <VsBotArticleBody />
          </div>
        </article>
      </ScrollReveal>
    </Section>
  );
}
