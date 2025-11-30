// src/app/petr/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/ui/glass/Button";
import { Section } from "@/ui/primitives/Section";
import { ScrollReveal } from "@/ui/primitives/ScrollReveal";
import {
  fadeUp,
  fadeUpItem,
  fadeUpStaggerContainer,
} from "@/lib/animations/homeVariants";

export const metadata: Metadata = {
  title: "Петр - цифровой менеджер по продажам",
  description:
    "Петр - цифровой менеджер по продажам, который звонит клиентам, делает фоллоу-апы и доводит сделки до оплаты.",
};

export default function PetrPage() {
  return (
    <main className="min-h-screen w-full pt-28 pb-20">
      {/* HERO: Пётр + видео-заглушка */}
      <Section className="pb-16">
        <ScrollReveal
          variants={fadeUp}
          className="max-w-5xl mx-auto px-4"
        >
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-center">
            {/* Текстовая часть */}
            <div className="space-y-5">
              <p className="text-[11px] tracking-[0.24em] uppercase text-[var(--text-muted)]">
                Цифровой продавец
              </p>

              <h1 className="text-3xl md:text-4xl lg:text-[40px] font-semibold text-[var(--text-primary)] leading-tight">
                Пётр — цифровой продавец, который системно доводит лидов до
                ответа и встречи
              </h1>

              <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-xl">
                Он ищет клиентов, пишет письма и сообщения, делает follow-up,
                поднимает старую базу и наводит порядок в CRM. Это цифровой
                SDR, который не выгорает, не забывает задачи и всегда работает
                по согласованной воронке.
              </p>

              <ul className="text-sm text-[var(--text-secondary)] space-y-1.5">
                <li>· Отправляет холодные и тёплые письма по вашим сегментам.</li>
                <li>· Догоняет лидов серией follow-up до понятного статуса.</li>
                <li>· Обновляет карточки в CRM и ставит задачи живым менеджерам.</li>
              </ul>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link href="/start">
                  <Button className="px-7 py-3 text-sm">
                    Обсудить запуск Петра
                  </Button>
                </Link>
                <span className="text-[11px] text-[var(--text-muted)]">
                  Подойдёт для B2B-продаж, агентств, SaaS и команд, где постоянно
                  «не доходят руки» до аутрича и follow-up.
                </span>
              </div>
            </div>

                         {/* Превью Петра — видео без чёрной рамки */}
            <div className="relative">
              <div
                className="
                  relative w-full aspect-[3/4]
                  rounded-[32px]
                  overflow-hidden
                  border border-[var(--glass-border)]
                  bg-[var(--sand-soft)]/50
                  shadow-[0_26px_70px_rgba(15,23,42,0.16)]
                "
              >
                <video
                    className="h-full w-full object-cover scale-[1]"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="/menegers/peter.mp4" type="video/mp4" />
                  </video>


                {/* Чип статуса */}
                <div className="absolute left-4 bottom-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] bg-[rgba(255,255,255,0.96)] border border-[rgba(15,23,42,0.06)] text-[var(--text-secondary)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Пётр · активная кампания
                </div>
              </div>
            </div>


          </div>
        </ScrollReveal>
      </Section>

      {/* Блок: что именно Пётр забирает на себя */}
      <Section className="pb-16 border-t border-[rgba(15,23,42,0.04)]">
        <ScrollReveal
          variants={fadeUp}
          className="max-w-5xl mx-auto px-4 space-y-4 text-center md:text-left"
        >
          <p className="text-[11px] tracking-[0.24em] uppercase text-[var(--text-muted)]">
            Роль Петра
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--text-primary)]">
            Пётр превращает хаотичный аутрич и забытые лиды в управляемую систему
          </h2>
          <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-3xl">
            Вместо разрозненных писем, просроченных задач и потерянных контактов,
            появляется прозрачный процесс: база сегментирована, письма отправлены,
            статусы обновлены, а менеджеры видят, с кем нужно созвониться прямо
            сейчас.
          </p>
        </ScrollReveal>

        <ScrollReveal
          variants={fadeUpStaggerContainer}
          className="mt-8 max-w-5xl mx-auto px-4 grid gap-6 md:grid-cols-3 text-sm text-[var(--text-secondary)]"
        >
          <ScrollReveal
            variants={fadeUpItem}
            className="rounded-3xl bg-[var(--glass-bg)]/80 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.1)] flex flex-col gap-3"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
              Поиск и аутрич
            </p>
            <h3 className="text-base font-semibold text-[var(--text-primary)]">
              Запускает кампании по вашим сегментам
            </h3>
            <ul className="space-y-1.5">
              <li>· Рассылает холодные и тёплые письма по подготовленным спискам.</li>
              <li>· Использует разные сообщения для разных сегментов и ролей.</li>
              <li>· Поддерживает аккуратный деловой тон без спама и агрессии.</li>
            </ul>
          </ScrollReveal>

          <ScrollReveal
            variants={fadeUpItem}
            className="rounded-3xl bg-[var(--glass-bg)]/80 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.1)] flex flex-col gap-3"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
              Follow-up и дожим
            </p>
            <h3 className="text-base font-semibold text-[var(--text-primary)]">
              Не отпускает лид до понятного исхода
            </h3>
            <ul className="space-y-1.5">
              <li>· Догоняет «прочитали, но не ответили» мягкими напоминаниями.</li>
              <li>· Строит цепочку сообщений с привязкой к действиям клиента.</li>
              <li>· Отмечает лид как «закрыт», только когда исход точно понятен.</li>
            </ul>
          </ScrollReveal>

          <ScrollReveal
            variants={fadeUpItem}
            className="rounded-3xl bg-[var(--glass-bg)]/80 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] p-6 shadow-[0_18px_50px_rgба(15,23,42,0.1)] flex flex-col gap-3"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
              Порядок в CRM
            </p>
            <h3 className="text-base font-semibold text-[var(--text-primary)]">
              Обновляет статусы и готовит сделки для менеджеров
            </h3>
            <ul className="space-y-1.5">
              <li>· Фиксирует результаты касаний прямо в CRM или таблице.</li>
              <li>· Ставит задачи продажникам с контекстом переписки.</li>
              <li>· Помогает руководителю видеть реальную картину по воронке.</li>
            </ul>
          </ScrollReveal>
        </ScrollReveal>
      </Section>

      {/* Для кого Пётр — сегменты бизнеса */}
      <Section className="pb-16 border-t border-[rgba(15,23,42,0.04)]">
        <ScrollReveal
          variants={fadeUp}
          className="max-w-5xl mx-auto px-4 space-y-4 text-center"
        >
          <p className="text-[11px] tracking-[0.24em] uppercase text-[var(--text-muted)]">
            Для кого
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--text-primary)]">
            Пётр создан для B2B-продаж, где важна системность
          </h2>
          <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-3xl mx-auto">
            Особенно полезен там, где есть CRM, регулярный поток лидов и сложные
            сделки, но не хватает рук, чтобы стабильно вести каждый контакт до
            встречи и решения.
          </p>
        </ScrollReveal>

        <ScrollReveal
          variants={fadeUpStaggerContainer}
          className="mt-8 max-w-5xl mx-auto px-4 grid gap-6 md:grid-cols-3 text-sm text-[var(--text-secondary)]"
        >
          <ScrollReveal
            variants={fadeUpItem}
            className="rounded-3xl bg-[var(--glass-bg)]/80 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] p-5 shadow-[0_16px_45px_rgba(15,23,42,0.08)] flex flex-col gap-2"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
              IT и SaaS
            </p>
            <ul className="space-y-1.5">
              <li>· Продажа подписок и лицензий.</li>
              <li>· Демки, созвоны, пилоты с компаниями.</li>
              <li>· Регулярный outbound по ICP и спискам аккаунтов.</li>
            </ul>
          </ScrollReveal>

          <ScrollReveal
            variants={fadeUpItem}
            className="rounded-3xl bg-[var(--glass-bg)]/80 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] p-5 shadow-[0_16px_45px_rgba(15,23,42,0.08)] flex flex-col gap-2"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
              Услуги и консалтинг
            </p>
            <ul className="space-y-1.5">
              <li>· Аутсорс, внедрение, консалтинговые проекты.</li>
              <li>· Продажи по лид-формам, мероприятиям, рекомендациям.</li>
              <li>· Необходимость долго греть и договариваться.</li>
            </ul>
          </ScrollReveal>

          <ScrollReveal
            variants={fadeUpItem}
            className="rounded-3xl bg-[var(--glass-bg)]/80 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] p-5 shadow-[0_16px_45px_rgba(15,23,42,0.08)] flex flex-col gap-2"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
              Агентства и партнёрские сети
            </p>
            <ul className="space-y-1.5">
              <li>· Маркетинговые, продуктовые и рекрутинговые агентства.</li>
              <li>· Партнёрские программы и ресейл.</li>
              <li>· Много касаний, длинные циклы, тонкая работа с базой.</li>
            </ul>
          </ScrollReveal>
        </ScrollReveal>
      </Section>

      {/* Как запускается Пётр — процесс */}
      <Section className="pb-16 border-t border-[rgba(15,23,42,0.04)]">
        <ScrollReveal
          variants={fadeUp}
          className="max-w-5xl mx-auto px-4 text-center space-y-3"
        >
          <p className="text-[11px] tracking-[0.24em] uppercase text-[var(--text-muted)]">
            Как проходит запуск
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--text-primary)]">
            Пётр встраивается в существующую воронку, а не ломает её
          </h2>
          <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-3xl mx-auto">
            Вместе с командой продаж мы разбираем текущую воронку, находим точки
            провалов и строим сценарии Петра так, чтобы усиливать действующую
            стратегию, а не заменять её с нуля.
          </p>
        </ScrollReveal>

        <ScrollReveal
          variants={fadeUpStaggerContainer}
          className="mt-8 max-w-5xl mx-auto px-4 grid gap-6 md:grid-cols-4 text-sm text-[var(--text-secondary)]"
        >
          {[
            {
              step: "Шаг 1",
              title: "Разбор воронки",
              text: "Смотрим, где сейчас теряются лиды: нет ответов, нет follow-up, нет задач в CRM.",
            },
            {
              step: "Шаг 2",
              title: "Сегменты и сообщения",
              text: "Фиксируем сегменты, подбираем tone of voice и готовим сценарии кампаний.",
            },
            {
              step: "Шаг 3",
              title: "Пилотная кампания",
              text: "Запускаем Петра на части базы, сравниваем отклики и качество с ручной работой.",
            },
            {
              step: "Шаг 4",
              title: "Масштабирование",
              text: "Расширяем охват, добавляем новые сегменты и интеграции, донастраиваем триггеры.",
            },
          ].map((item) => (
            <ScrollReveal
              key={item.step}
              variants={fadeUpItem}
              className="rounded-3xl bg-[var(--glass-bg)]/80 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] p-5 shadow-[0_16px_45px_rgba(15,23,42,0.08)] flex flex-col gap-2"
            >
              <div className="flex items-center justify-between text-[11px] font-semibold text-[var(--text-muted)]">
                <span>{item.step}</span>
              </div>
              <p className="font-medium text-[var(--text-primary)]">
                {item.title}
              </p>
              <p className="leading-snug">{item.text}</p>
            </ScrollReveal>
          ))}
        </ScrollReveal>
      </Section>

      {/* FAQ про Петра */}
      <Section className="pb-16 border-t border-[rgba(15,23,42,0.04)]">
        <ScrollReveal
          variants={fadeUp}
          className="max-w-5xl mx-auto px-4 space-y-4"
        >
          <p className="text-[11px] tracking-[0.24em] uppercase text-[var(--text-muted)]">
            Частые вопросы
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--text-primary)]">
            Что обычно спрашивают про Петра
          </h2>
        </ScrollReveal>

        <ScrollReveal
          variants={fadeUpStaggerContainer}
          className="mt-6 max-w-5xl mx-auto px-4 space-y-4 text-sm text-[var(--text-secondary)]"
        >
          <ScrollReveal
            variants={fadeUpItem}
            className="rounded-3xl bg-[var(--glass-bg)]/80 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] p-5 shadow-[0_14px_40px_rgба(15,23,42,0.08)]"
          >
            <p className="font-medium mb-1 text-[var(--text-primary)]">
              Пётр сам подбирает базы или работает по нашим спискам?
            </p>
            <p>
              На старте он работает по вашим базам, сегментам и ICP. Подбор и
              обогащение базы можно добавить как отдельный процесс: Пётр будет
              работать поверх данных, которые подготовят люди или внешние сервисы.
            </p>
          </ScrollReveal>

          <ScrollReveal
            variants={fadeUpItem}
            className="rounded-3xl bg-[var(--glass-bg)]/80 border border-[var(--glass-border)] backdrop-blур-[var(--glass-blur)] p-5 shadow-[0_14px_40px_rgба(15,23,42,0.08)]"
          >
            <p className="font-medium mb-1 text-[var(--text-primary)]">
              Пётр заменяет SDR или помогает им?
            </p>
            <p>
              Пётр не забирает у команды ключевые переговоры и закрытие сделок.
              Он автоматизирует повторяющиеся касания: первичные письма, follow-up,
              напоминания и обновление статусов. SDR-ы получают более тёплых,
              подготовленных лидов и меньше тратят времени на рутину.
            </p>
          </ScrollReveal>

          <ScrollReveal
            variants={fadeUpItem}
            className="rounded-3xl bg-[var(--glass-bg)]/80 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] p-5 shadow-[0_14px_40px_rgба(15,23,42,0.08)]"
          >
            <p className="font-medium mb-1 text-[var(--text-primary)]">
              В каких каналах может работать Пётр?
            </p>
            <p>
              Базово — email и мессенджеры. Можно подключить несколько каналов
              одновременно, настроить разные сценарии под LinkedIn-аналоги,
              Telegram, корпоративную почту и другие инструменты, которые уже
              используются в отделе продаж.
            </p>
          </ScrollReveal>
        </ScrollReveal>
      </Section>

      {/* Финальный CTA */}
      <Section className="pt-4">
        <ScrollReveal
          variants={fadeUp}
          className="max-w-4xl mx-auto px-4 text-center space-y-4"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--text-primary)]">
            Хочешь посмотреть, как Пётр заполнит пробелы в твоей воронке?
          </h2>
          <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-2xl mx-auto">
            Расскажи, как сейчас устроены продажи: откуда приходят лиды, кто с
            ними работает и где чаще всего всё «зависает». Мы предложим роль
            Петра в этой схеме и покажем, какие задачи он может забрать на себя
            уже в ближайшие месяцы.
          </p>
          <div className="flex justify-center">
            <Link href="/start">
              <Button className="px-8 py-3 text-sm">
                Разобрать ваши продажи с Петром
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </Section>
    </main>
  );
}
