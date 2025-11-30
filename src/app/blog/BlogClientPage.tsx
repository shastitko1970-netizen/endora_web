"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/ui/glass/Button";
import { Section } from "@/ui/primitives/Section";
import { ScrollReveal } from "@/ui/primitives/ScrollReveal";
import {
  fadeUp,
  fadeUpItem,
  fadeUpStaggerContainer,
} from "@/lib/animations/homeVariants";




/**
 * Карточки материалов блога.
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
    id: "cases",
    status: "soon" as const,
    cardBadge: "Кейсы · Скоро",
    cardTitle: "Реальные внедрения: клиники, сервис, B2B-продажи",
    cardDescription:
      "Подборка кейсов: как Мария и Пётр закрывают звонки, записи, письма и follow-up, какие метрики меняются и какие выводы мы делаем вместе с клиентами.",
    footerNote: "Материал в подготовке.",
  },
  {
    id: "process",
    status: "soon" as const,
    cardBadge: "Практика · Скоро",
    cardTitle: "Как подготовить процессы к цифровому сотруднику",
    cardDescription:
      "Серия материалов о том, как описать воронку, привести в порядок скрипты и не утонуть в настройках, когда появляется новый цифровой сотрудник.",
    footerNote: "Материал в подготовке.",
  },
];

/**
 * Контент статей для модальных окон.
 */
const ARTICLES = {
  vision: {
    badge: "Статья · Видение Endora AI",
    title: "Зачем мы делаем цифровых сотрудников и с чего начинаем",
    meta: "Ноябрь 2025 · автор: Ярослав Бросман, CPO & Co-Founder Endora AI",
    body: (
      <div className="space-y-8">
        {/* Вступительный тезис как цитата */}
        <blockquote>
          У бизнеса должно быть не ещё одно окно с ботом, а реальные цифровые
          сотрудники, которые берут на себя часть работы и отвечают за
          результат.
        </blockquote>

        {/* От бота к цифровому сотруднику */}
        <div className="space-y-3">
          <h3>От бота к цифровому сотруднику</h3>
          <p>
            <strong>Классический бот</strong> - это набор кнопок и скриптов. Он
            живёт отдельно от процессов: не видит, что происходит в других
            каналах, не знает историю клиента и не отвечает за итог.
          </p>
          <p>
            <strong>Цифровой сотрудник</strong> - это роль с понятной зоной
            ответственности. У него есть задачи, метрики и зона влияния.
          </p>
          <ul>
            <li>Мария отвечает за сервис и запись.</li>
            <li>Пётр - за поиск клиентов и follow-up.</li>
            <li>
              У каждого есть свои каналы, задачи и показатели, за которые он
              отвечает.
            </li>
          </ul>
        </div>

        {/* Где мы стартуем */}
        <div className="space-y-4">
          <h3>Где мы стартуем: голос, текст и B2B</h3>
          <p>
            Первое направление Endora AI - голосовые и текстовые цифровые
            сотрудники для сфер с большим объёмом однотипных коммуникаций:
          </p>
          <ul>
            <li>входящие звонки;</li>
            <li>запись и подтверждения;</li>
            <li>письма;</li>
            <li>догоняющие сообщения;</li>
            <li>поддержка.</li>
          </ul>

          {/* Две карточки про Марию и Петра */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex gap-3 rounded-2xl bg-[#FFF4D6] border border-[rgba(15,23,42,0.06)] px-4 py-3">
              <div className="text-xl pt-1">👩‍💼</div>
              <div className="text-sm leading-relaxed">
                <p className="font-semibold text-[var(--text-primary)]">
                  Мария
                </p>
                <p>
                  Берёт на себя сервис: звонки, сообщения, запись, переносы,
                  напоминания. Отвечает за то, чтобы клиенту было удобно
                  взаимодействовать с компанией.
                </p>
              </div>
            </div>
            <div className="flex gap-3 rounded-2xl bg-[#E9F4FF] border border-[rgba(15,23,42,0.06)] px-4 py-3">
              <div className="text-xl pt-1">🧑‍💼</div>
              <div className="text-sm leading-relaxed">
                <p className="font-semibold text-[var(--text-primary)]">
                  Пётр
                </p>
                <p>
                  Работает с исходящими коммуникациями: письма, follow-up,
                  оживление старой базы. Его задача - доводить тёплые контакты
                  до сделки.
                </p>
              </div>
            </div>
          </div>

          <p>
            Вместе они закрывают заметную часть рутины отделов сервиса и
            продаж, оставляя людям больше времени на сложные кейсы и живое
            общение.
          </p>
        </div>

        {/* Почему это не игрушка */}
        <div className="space-y-4">
          <h3>Почему это не игрушка ради эксперимента</h3>
          <p>
            Мы делаем так, чтобы цифровые сотрудники были частью процессов
            компании, а не отдельной «штукой». Важно не только то, что они
            говорят или пишут, но и то, что происходит <strong>после</strong>{" "}
            диалога:
          </p>
          <ul>
            <li>создаётся ли заявка;</li>
            <li>ставится ли задача;</li>
            <li>меняется ли статус сделки.</li>
          </ul>

          {/* Блок "В любом проекте есть три слоя" */}
          <div className="rounded-2xl bg-[rgba(15,23,42,0.03)] border border-[rgba(15,23,42,0.06)] px-4 py-4 text-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)]">
              В любом проекте есть три слоя:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>общение с клиентом;</li>
              <li>логика действий;</li>
              <li>связь с внутренними системами.</li>
            </ul>
            <p className="mt-2 text-xs italic text-[var(--text-secondary)]">
              Клиент видит только первый слой, но ценность дают второй и
              третий.
            </p>
          </div>
        </div>

        {/* Куда всё движется дальше */}
        <div className="space-y-4">
          <h3>Куда всё движется дальше</h3>
          <p>
            Ближайшая цель - чтобы для малого и среднего бизнеса цифровые
            сотрудники стали таким же привычным инструментом, как CRM или
            телефония, без налёта «экспериментальности».
          </p>
          <p>Дальше мы будем добавлять новых цифровых сотрудников под роли:</p>
          <ul>
            <li>внутренняя поддержка команды;</li>
            <li>работа с документами;</li>
            <li>аналитика;</li>
            <li>контроль задач.</li>
          </ul>
          <p>
            Начинаем с самых прикладных процессов, где эффект видно сразу, и по
            мере накопления кейсов расширяем линейку.
          </p>
        </div>

        {/* Зачем следить за блогом */}
        <div className="space-y-5">
          <h3>Зачем следить за этим блогом</h3>
          <p>
            Здесь мы будем показывать путь честно: что работает, что оказалось
            сложнее, какие решения пришлось пересобрать.
          </p>

          {/* Две финальные карточки как в Notion */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-[#FFF7E0] border border-[rgba(15,23,42,0.06)] px-4 py-4 text-sm leading-relaxed">
        
              <p className="font-semibold">
                Если вы только присматриваетесь к цифровым сотрудникам
              </p>
              <p className="mt-1">
                Здесь можно понять, как это выглядит в реальности: какие
                сценарии сработали, где были ошибки и чем заканчиваются живые
                проекты, а не презентации.
              </p>
            </div>
            <div className="rounded-2xl bg-[#FFE9E0] border border-[rgba(15,23,42,0.06)] px-4 py-4 text-sm leading-relaxed">
             
              <p className="font-semibold">
                Если у вас уже есть процессы и понятна точка боли
              </p>
              <p className="mt-1">
                Можно просто прийти с задачей. Мы разберём воронку и предложим,
                какую роль цифровой сотрудник может взять на себя первой и по
                каким метрикам будет видно результат.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
};

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
              мере появления живых кейсов.
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

      {/* МОДАЛЬНОЕ ОКНО С СТАТЬЁЙ */}
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
                <div className="inline-flex items-center gap-2 rounded-2xl bg-[rgba(129,140,248,0.09)] px-3 py-1.5 text-[11px] text-[var(--text-secondary)]">
                  <span className="text-base">📄</span>
                  <span>{activeArticle.meta}</span>
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
