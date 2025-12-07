// src/app/blog/process-prep/page.tsx

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
    <Section>
      <ScrollReveal variants={fadeUp}>
        <article className="mx-auto max-w-3xl space-y-6">
          <Link
            href="/blog"
            className="inline-flex text-sm opacity-70 hover:opacity-100"
          >
            ← Блог Endora AI
          </Link>

          <p className="text-sm opacity-70">Практика · Статья</p>

          <h1 className="text-3xl font-semibold leading-tight">
            Как подготовить процессы к цифровому сотруднику
          </h1>

          <p className="text-sm opacity-70">
            Декабрь 2025 · автор: Ярослав Бросман, CPO &amp; Co-Founder Endora AI
          </p>

          <hr className="my-6 opacity-20" />

          <div className="prose max-w-none">
            <ProcessPrepArticleBody />
          </div>
        </article>
      </ScrollReveal>
    </Section>
  );
}
