"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/ui/glass/Button";
import { Section } from "@/ui/primitives/Section";
import { ScrollReveal } from "@/ui/primitives/ScrollReveal";
import { OpsReglamentsArticleBody } from "./_components/OpsReglamentsArticleBody";
import {
  fadeUp,
  fadeUpItem,
  fadeUpStaggerContainer,
} from "@/lib/animations/homeVariants";
import { VisionArticleBody } from "./_components/VisionArticleBody";
import { VsBotArticleBody } from "./_components/VsBotArticleBody";
import { ProcessPrepArticleBody } from "./_components/ProcessPrepArticleBody";


/**
 * Карточки материалов блога.
 * Сейчас делаем 9 штук: 1 опубликованная, 2 анонса и 6 шаблонов "без темы".
 */
/**
 * Карточки материалов блога.
 * Сейчас делаем 10 штук: 4 опубликованные статьи и 6 анонсов/шаблонов.
 */
const MATERIALS = [
  {
    id: "vision",
    status: "published" as const,
    cardBadge: "Статья · Видение",
    cardTitle: "Зачем бизнесу цифровые сотрудники, а не «очередной бот»",
    cardDescription:
      "Разбираем базовую идею Endora AI: почему мы делаем именно цифровых сотрудников, с чего начинаем и что хотим изменить в повседневной работе команд.",
    date: "Ноябрь 2025",
    readTime: "~7 минут чтения",
  },
  {
    id: "vs-bot",
    status: "published" as const,
    cardBadge: "Статья · Разбор",
    cardTitle:
      "Цифровой сотрудник vs бот: в чём реальная разница, кроме красивого названия",
    cardDescription:
      "Показываем, чем цифровой сотрудник отличается от «очередного бота»: позиция в оргструктуре, глубина интеграции, метрики, управление и экономика роли.",
    date: "Декабрь 2025",
    readTime: "~8 минут чтения",
  },
  {
    id: "ops-reglaments",
    status: "published" as const,
    cardBadge: "Операционка · Статья",
    cardTitle: "Как встроить цифровых сотрудников в ежедневные регламенты",
    cardDescription:
      "Про то, как выглядят регламенты, чек-листы и контроль качества, когда часть работы выполняют цифровые сотрудники.",
    date: "Декабрь 2025",
    readTime: "~8 минут чтения",
  },
  {
    id: "process-prep",
    status: "published" as const,
    cardBadge: "Практика · Статья",
    cardTitle: "Как подготовить процессы к цифровому сотруднику",
    cardDescription:
      "Пошаговый разбор: от аудита процессов и данных до настройки голоса, маршрутизации и метрик, чтобы цифровой сотрудник не превратился в дорогую игрушку.",
    date: "Декабрь 2025",
    readTime: "~8 минут чтения",
  },
  {
    id: "cases",
    status: "soon" as const,
    cardBadge: "Кейсы · Скоро",
    cardTitle: "Реальные внедрения: клиники, сервис, B2B-продажи",
    cardDescription:
      "Подборка кейсов: как Мария и Пётр закрывают звонки, записи, письма и follow-up, какие метрики меняются и какие выводы мы делаем вместе с клиентами.",
    footerNote: "Материал в подготовке.",
  },
  {
    id: "salesplaybook",
    status: "soon" as const,
    cardBadge: "Продажи · Шаблон",
    cardTitle: "Плейбук звонков для Марии и Петра",
    cardDescription:
      "Пример структуры скриптов: как мы думаем про приветствия, ветки диалога, отработку возражений и завершение разговора.",
    footerNote: "Материал в подготовке.",
  },
  {
    id: "faq",
    status: "soon" as const,
    cardBadge: "FAQ · Скоро",
    cardTitle: "Частые вопросы про цифровых сотрудников",
    cardDescription:
      "Соберём вопросы, которые нам задают на созвонах: от юридических нюансов до интеграций и влияния на отдел.",
    footerNote: "Материал в подготовке.",
  },
  {
    id: "stack",
    status: "soon" as const,
    cardBadge: "Стек · Скоро",
    cardTitle: "Как устроен стек Endora AI под капотом",
    cardDescription:
      "Высокоуровневый разбор того, как мы собираем голос, текст, интеграции и оркестрацию процессов.",
    footerNote: "Материал в подготовке.",
  },
  {
    id: "notes1",
    status: "soon" as const,
    cardBadge: "Заметки · Без темы",
    cardTitle: "Рабочие заметки без названия №1",
    cardDescription:
      "Здесь появится первая серия быстрых заметок без красивого названия, но с пользой для тех, кто внедряет цифровых сотрудников.",
    footerNote: "Черновик, скоро появится контент.",
  },
  {
    id: "notes2",
    status: "soon" as const,
    cardBadge: "Заметки · Без темы",
    cardTitle: "Рабочие заметки без названия №2",
    cardDescription:
      "Продолжение рабочих наблюдений: маленькие выводы, которые помогают не наступать на те же грабли.",
    footerNote: "Материал в подготовке.",
  },
];


/**
 * Контент статей для модальных окон.
 */
/**
 * Контент статей для модальных окон.
 */
const ARTICLES = {
  vision: {
    badge: "Статья · Видение Endora AI",
    title: "Зачем мы делаем цифровых сотрудников и с чего начинаем",
    meta: "Ноябрь 2025 · автор: Ярослав Бросман, CPO & Co-Founder Endora AI",
    route: "/blog/vision",
    body: <VisionArticleBody />,
  },
  "vs-bot": {
    badge: "Статья · Разбор",
    title: "Цифровой сотрудник vs бот: в чём реальная разница, кроме красивого названия",
    meta: "Декабрь 2025 · автор: Ярослав Бросман, CPO & Co-Founder Endora AI",
    route: "/blog/vs-bot",
    body: <VsBotArticleBody />,
  },
  "ops-reglaments": {
    badge: "Операционка · Статья",
    title: "Как встроить цифровых сотрудников в ежедневные регламенты",
    meta: "Декабрь 2025 · автор: Ярослав Бросман, CPO & Co-Founder Endora AI",
    route: "/blog/ops-reglaments",
    body: <OpsReglamentsArticleBody />,
  },
  "process-prep": {
    badge: "Практика · Статья",
    title: "Как подготовить процессы к цифровому сотруднику",
    meta: "Декабрь 2025 · автор: Ярослав Бросман, CPO & Co-Founder Endora AI",
    route: "/blog/process-prep",
    body: <ProcessPrepArticleBody />,
  },
} as const;



export default function BlogClientPage() {
  const [activeArticleId, setActiveArticleId] = useState<string | null>(null);

  const activeArticle =
    activeArticleId && (ARTICLES as any)[activeArticleId]
      ? (ARTICLES as any)[activeArticleId]
      : null;

  const openArticle = (id: string) => {
    if (!(ARTICLES as any)[id]) return;
    setActiveArticleId(id);
  };

  const closeArticle = () => setActiveArticleId(null);

  // Лочим скролл бэкграунда, пока открыта статья
  useEffect(() => {
    if (!activeArticleId) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [activeArticleId]);

  return (
    <main className="min-h-screen w-full pt-28 pb-20">
      {/* HERO: вводный блок блога */}
      <Section className="pb-12">
        <ScrollReveal
          variants={fadeUp}
          className="max-w-5xl mx-auto px-4 grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1.1fr)] items-start"
        >
          <div className="space-y-4">
            <p className="text-[11px] tracking-[0.24em] uppercase text-[var(--text-muted)]">
              Блог Endora AI
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-[40px] font-semibold text-[var(--text-primary)] leading-tight">
              Место, где мы честно говорим про цифровых сотрудников
            </h1>
            <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-3xl">
              Здесь будут жить живые кейсы, разборы звонков и сценариев, ответы
              на вопросы «а это вообще работает?» и материалы о том, как
              цифровые сотрудники меняют повседневную работу команд.
            </p>
            <p className="text-[11px] text-[var(--text-muted)]">
              Пока это стартовая версия блога. Мы начинаем с видения Endora AI,
              а затем будем добавлять кейсы внедрений и практические разборы.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                className="px-7 py-3 text-sm"
                onClick={() => openArticle("vision")}
              >
                Прочитать видение Endora AI
              </Button>
              <Link href="/products">
                <Button variant="ghost" className="px-7 py-3 text-sm">
                  Перейти к линейке решений
                </Button>
              </Link>
            </div>
          </div>

          {/* Правая колонка — «легенда» блога */}
          <div className="rounded-3xl bg-[var(--glass-bg)]/85 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] p-6 shadow-[0_20px_55px_rgba(15,23,42,0.16)] text-sm text-[var(--text-secondary)] space-y-3">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
              О чём этот блог
            </p>
            <p className="font-medium text-[var(--text-primary)]">
              Не «новости компании», а практичные заметки о том, как жить с
              цифровыми сотрудниками.
            </p>
            <ul className="space-y-1.5">
              <li>· Кейсы внедрений: до/после, метрики, ошибки.</li>
              <li>· Разборы звонков и диалогов с комментариями.</li>
              <li>· Материалы о роли Марии и Петра в бизнес-процессах.</li>
              <li>· Видение Endora AI на ближайшие годы в B2B.</li>
            </ul>
            <p className="text-[11px] text-[var(--text-muted)] pt-1">
              Если коротко - это место, где можно понять, как цифровые
              сотрудники работают в реальности, а не только в презентациях.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* СПИСОК МАТЕРИАЛОВ / ШАБЛОНЫ ПОД СТАТЬИ */}
      <Section className="pb-16 border-t border-[rgba(15,23,42,0.04)]">
        <ScrollReveal
          variants={fadeUp}
          className="max-w-5xl mx-auto px-4 flex items-end justify-between gap-4"
        >
          <div className="space-y-2">
            <p className="text-[11px] tracking-[0.24em] uppercase text-[var(--text-muted)]">
              Материалы
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--text-primary)]">
              Свежие записи и будущие кейсы
            </h2>
            <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-2xl">
              Ниже - структура будущего блога. Первый материал уже доступен, ещё
              несколько разделов помечены как «скоро» и будут заполняться по
              мере появления живых кейсов и заметок.
            </p>
          </div>
          <p className="text-[11px] text-[var(--text-muted)] hidden md:block">
            Формат: короткие разборы + большие статьи-гайды.
          </p>
        </ScrollReveal>

        <ScrollReveal
          variants={fadeUpStaggerContainer}
          className="mt-8 max-w-5xl mx-auto px-4 grid gap-5 md:grid-cols-3 text-sm text-[var(--text-secondary)]"
        >
          {MATERIALS.map((item) => {
            const isPublished = item.status === "published";

            return (
              <ScrollReveal
                key={item.id}
                variants={fadeUpItem}
                className={
                  "rounded-3xl backdrop-blur-[var(--glass-blur)] p-5 flex flex-col justify-between text-[var(--text-secondary)] " +
                  (isPublished
                    ? "bg-[var(--glass-bg)]/90 border border-[var(--glass-border)] shadow-[0_18px_50px_rgba(15,23,42,0.14)]"
                    : "bg-[var(--glass-bg)]/60 border border-dashed border-[var(--glass-border)] opacity-70")
                }
              >
                <div className="space-y-3">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
                    {item.cardBadge}
                  </p>
                  <h3 className="text-base md:text-lg font-semibold text-[var(--text-primary)]">
                    {item.cardTitle}
                  </h3>
                  <p>{item.cardDescription}</p>
                </div>

                <div className="pt-4 flex items-center justify-between text-[11px] text-[var(--text-muted)]">
                  {isPublished ? (
                    <>
                      <span>
                        {item.date} · {item.readTime}
                      </span>
                      <button
                        type="button"
                        onClick={() => openArticle(item.id)}
                        className="underline underline-offset-4 hover:no-underline"
                      >
                        Читать
                      </button>
                    </>
                  ) : (
                    <span>{item.footerNote}</span>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </ScrollReveal>
      </Section>

      {/* МОДАЛЬНОЕ ОКНО С СТАТЬёй */}
      {activeArticle && (
        <div
          className="fixed inset-0 z-[80] flex items-start justify-center bg-[rgba(15,23,42,0.42)] px-4 py-10 md:py-16"
          role="dialog"
          aria-modal="true"
          onClick={closeArticle}
        >
          <div
            className="relative w-full max-w-4xl rounded-3xl bg-[#FFF7EE] border border-[rgba(15,23,42,0.06)] shadow-[0_24px_80px_rgba(15,23,42,0.55)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Шапка статьи */}
            <div className="flex items-start justify-between gap-4 px-5 pt-5 pb-3 md:px-8 md:pt-6 md:pb-4 border-b border-[rgba(15,23,42,0.06)]">
              <div className="space-y-3">
                <p className="text-[11px] tracking-[0.24em] uppercase text-[var(--text-muted)]">
                  {activeArticle.badge}
                </p>
                <h2 className="text-xl md:text-2xl font-semibold text-[var(--text-primary)] leading-snug">
                  {activeArticle.title}
                </h2>
                <div className="flex flex-wrap items-center gap-2">
                  <div className="inline-flex items-center gap-2 rounded-2xl bg-[rgba(129,140,248,0.09)] px-3 py-1.5 text-[11px] text-[var(--text-secondary)]">
                    <span className="text-base">📄</span>
                    <span>{activeArticle.meta}</span>
                  </div>
                 {/* в шапке модалки, внутри блока meta */}
                    {activeArticle.route && (
                      <Link
                        href={activeArticle.route}
                        className="text-[11px] text-[var(--text-primary)] underline underline-offset-4 hover:no-underline"
                      >
                        Открыть на отдельной странице
                      </Link>
                    )}

                </div>
              </div>
              <button
                type="button"
                onClick={closeArticle}
                className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--glass-border)] bg-white/80 text-[13px] text-[var(--text-secondary)] hover:bg-white"
                aria-label="Закрыть статью"
              >
                ×
              </button>
            </div>

            {/* Тело статьи в стиле Notion */}
            <div className="px-5 pt-4 pb-5 md:px-8 md:pt-5 md:pb-7 max-h-[72vh] overflow-y-auto blog-article-scroll">
              <div className="prose prose-sm md:prose-base max-w-2xl mx-auto prose-p:text-[var(--text-secondary)] prose-headings:text-[var(--text-primary)] prose-li:text-[var(--text-secondary)] prose-ul:marker:text-[var(--text-muted)]">
                {activeArticle.body}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}