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
  title: "Павел — цифровой РОП",
  description:
    "Павел — цифровой руководитель отдела продаж, который видит воронку целиком, подсказывает узкие места и помогает РОПу принимать решения на цифрах.",
};

export default function PavelPage() {
  return (
    <main className="min-h-screen w-full pt-28 pb-20">
      {/* HERO: Павел + видео */}
      <Section className="pb-16">
        <ScrollReveal variants={fadeUp} className="max-w-5xl mx-auto px-4">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-center">
            {/* Текстовая часть */}
            <div className="space-y-5">
              <p className="text-[11px] tracking-[0.24em] uppercase text-[var(--text-muted)]">
                Цифровой РОП
              </p>

              <h1 className="text-3xl md:text-4xl lg:text-[40px] font-semibold text-[var(--text-primary)] leading-tight">
                Павел — цифровой руководитель отдела продаж, который видит
                воронку целиком и держит команду в тонусе каждый день
              </h1>

              <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-xl">
                Он подключается к вашим CRM, телефонии и платёжным системам,
                собирает цифры в единую картину и превращает их в управленческие
                подсказки: кому позвонить, кого дожать, где провисают сделки и
                кто из менеджеров буксует.
              </p>

              <ul className="text-sm text-[var(--text-secondary)] space-y-1.5">
                <li>
                  · Видит воронку целиком: по всем менеджерам, каналам и этапам.
                </li>
                <li>
                  · Даёт сигналы, где уходят деньги и какие сделки в зоне риска.
                </li>
                <li>
                  · Помогает собственнику и РОПу принимать решения на цифрах, а
                  не на ощущениях.
                </li>
              </ul>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link href="/start">
                  <Button className="px-7 py-3 text-sm">
                    Обсудить запуск Павла
                  </Button>
                </Link>
                <span className="text-[11px] text-[var(--text-muted)]">
                  Подойдёт компаниям с отделом продаж от 3+ человек, где важно
                  видеть реальную картину воронки и выручки.
                </span>
              </div>
            </div>

            {/* Превью Павла — видео */}
            <div className="relative">
              <div
                className="
                  relative w-full aspect-[3/4]
                  rounded-[32px]
                  overflow-hidden
                  border border-[var(--glass-border)]
                  bg-gradient-to-br from-amber-50/30 via-orange-50/20 to-amber-100/40
                  shadow-[0_26px_70px_rgba(251,146,60,0.22)]
                "
              >
                <video
                  className="h-full w-full object-cover scale-[1]"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/menegers/pavel.mp4" type="video/mp4" />
                </video>

                {/* Чип статуса */}
                <div className="absolute left-4 bottom-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] bg-gradient-to-r from-orange-500 to-amber-500 text-white border border-orange-400/30 shadow-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Павел · следит за воронкой
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* Блок: На чём работает цифровой РОП (Endora Core) */}
      <Section className="pb-16 border-t border-[rgba(15,23,42,0.04)]">
        <ScrollReveal
          variants={fadeUp}
          className="max-w-5xl mx-auto px-4 space-y-4 text-center md:text-left"
        >
          <p className="text-[11px] tracking-[0.24em] uppercase text-[var(--text-muted)]">
            На чём работает цифровой РОП
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--text-primary)]">
            Endora Core подключается к вашим системам и собирает данные в единую
            модель бизнеса
          </h2>
          <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-3xl">
            Павел видит данные по звонкам, сделкам, оплатам и задачам, складывает
            их в единую картину и превращает в управленческие сигналы: где
            просела конверсия, кто не перезванивает, какие сделки застряли.
          </p>
        </ScrollReveal>

        {/* Карточка Endora Core — с акцентным градиентом */}
        <ScrollReveal
          variants={fadeUp}
          className="mt-8 max-w-5xl mx-auto px-4"
        >
          <div className="rounded-3xl bg-gradient-to-br from-amber-50/60 via-orange-50/40 to-yellow-50/50 border border-orange-200/40 p-8 shadow-[0_20px_60px_rgba(251,146,60,0.15)]">
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
              Endora Core — мозг цифровых сотрудников
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mb-4 max-w-3xl">
              Endora Core подключается к вашим CRM, телефонии, платёжным системам
              и другим источникам данных. Собирает всё в единую модель: кто клиент,
              что купил, где сейчас сделка, когда последний звонок. Даёт «мозгу»
              цифровых сотрудников полный контекст для принятия решений.
            </p>
            <ul className="text-sm text-[var(--text-secondary)] space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold text-lg">·</span>
                <span>
                  Подключается к CRM (AmoCRM, Битрикс24, Pipedrive и др.),
                  телефонии, почте, мессенджерам.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold text-lg">·</span>
                <span>
                  Собирает данные в единую модель: клиенты, сделки, задачи,
                  события, оплаты.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold text-lg">·</span>
                <span>
                  Использует LLM для анализа и превращения сырых данных в
                  управленческие сигналы.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold text-lg">·</span>
                <span>
                  Работает с правами доступа: каждый видит только свои данные.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold text-lg">·</span>
                <span>
                  Обновляется автоматически, без ручных выгрузок и дашбордов.
                </span>
              </li>
            </ul>
          </div>
        </ScrollReveal>

        {/* Три колонки: данные, аналитика, управление */}
        <ScrollReveal
          variants={fadeUpStaggerContainer}
          className="mt-8 max-w-5xl mx-auto px-4 grid gap-6 md:grid-cols-3 text-sm text-[var(--text-secondary)]"
        >
          <ScrollReveal
            variants={fadeUpItem}
            className="rounded-3xl bg-[var(--glass-bg)]/80 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.1)] flex flex-col gap-3"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
              Данные
            </p>
            <h3 className="text-base font-semibold text-[var(--text-primary)]">
              Подключается к системам и собирает цифры
            </h3>
            <ul className="space-y-1.5">
              <li>· Видит звонки, сделки, статусы и оплаты.</li>
              <li>· Собирает данные из нескольких систем в единую модель.</li>
              <li>· Обновляет картину каждый день без ручных выгрузок.</li>
            </ul>
          </ScrollReveal>

          <ScrollReveal
            variants={fadeUpItem}
            className="rounded-3xl bg-[var(--glass-bg)]/80 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.1)] flex flex-col gap-3"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
              Аналитика
            </p>
            <h3 className="text-base font-semibold text-[var(--text-primary)]">
              Видит воронку и находит узкие места
            </h3>
            <ul className="space-y-1.5">
              <li>· Показывает конверсию по этапам и менеджерам.</li>
              <li>· Выводит сделки в риске и просроченные задачи.</li>
              <li>· Находит, где именно «утекают» деньги.</li>
            </ul>
          </ScrollReveal>

          <ScrollReveal
            variants={fadeUpItem}
            className="rounded-3xl bg-[var(--glass-bg)]/80 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.1)] flex flex-col gap-3"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
              Управление
            </p>
            <h3 className="text-base font-semibold text-[var(--text-primary)]">
              Превращает цифры в действия
            </h3>
            <ul className="space-y-1.5">
              <li>· Даёт списки контактов, кому нужно дозвониться.</li>
              <li>· Подсвечивает менеджеров, которым нужна помощь.</li>
              <li>· Формирует дайджесты для собственника и РОПа.</li>
            </ul>
          </ScrollReveal>
        </ScrollReveal>
      </Section>

      {/* Блок: 6 модулей Endora для управления продажами */}
      <Section className="pb-16 border-t border-[rgba(15,23,42,0.04)]">
        <ScrollReveal
          variants={fadeUp}
          className="max-w-5xl mx-auto px-4 space-y-4 text-center"
        >
          <p className="text-[11px] tracking-[0.24em] uppercase text-[var(--text-muted)]">
            Модули Endora
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--text-primary)]">
            6 модулей, которые превращают данные в управленческие решения
          </h2>
          <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-3xl mx-auto">
            Каждый модуль Endora решает конкретную задачу РОПа: видеть клиентов,
            ловить провалы, управлять командой, строить прогнозы, следить за
            дисциплиной и готовить итоги.
          </p>
        </ScrollReveal>

        <ScrollReveal
          variants={fadeUpStaggerContainer}
          className="mt-8 max-w-6xl mx-auto px-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-sm text-[var(--text-secondary)]"
        >
          {/* Модуль 1: База клиентов */}
          <ScrollReveal
            variants={fadeUpItem}
            className="rounded-3xl bg-gradient-to-br from-blue-50/50 to-indigo-50/30 border border-blue-200/40 p-6 shadow-[0_16px_45px_rgba(59,130,246,0.12)] flex flex-col gap-3"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-blue-600/80">
              Модуль 1
            </p>
            <h3 className="text-base font-semibold text-[var(--text-primary)]">
              База клиентов
            </h3>
            <p className="text-xs italic text-[var(--text-muted)]">
              Видеть клиента целиком.
            </p>
            <ul className="space-y-1.5 text-xs">
              <li>· История касаний и покупок в одном месте.</li>
              <li>· Сегменты по LTV, активности и интересам.</li>
              <li>· Автоматическое обогащение карточек из открытых источников.</li>
            </ul>
          </ScrollReveal>

          {/* Модуль 2: Сигналы и задачи */}
          <ScrollReveal
            variants={fadeUpItem}
            className="rounded-3xl bg-gradient-to-br from-purple-50/50 to-pink-50/30 border border-purple-200/40 p-6 shadow-[0_16px_45px_rgba(168,85,247,0.12)] flex flex-col gap-3"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-purple-600/80">
              Модуль 2
            </p>
            <h3 className="text-base font-semibold text-[var(--text-primary)]">
              Сигналы и задачи
            </h3>
            <p className="text-xs italic text-[var(--text-muted)]">
              Ловить провалы до того, как сделка утекла.
            </p>
            <ul className="space-y-1.5 text-xs">
              <li>· Сделки без активности больше N дней.</li>
              <li>· Контакты, которые читали, но не ответили.</li>
              <li>· Просроченные задачи и пропущенные звонки.</li>
            </ul>
          </ScrollReveal>

          {/* Модуль 3: Дашборд команды */}
          <ScrollReveal
            variants={fadeUpItem}
            className="rounded-3xl bg-gradient-to-br from-green-50/50 to-emerald-50/30 border border-green-200/40 p-6 shadow-[0_16px_45px_rgba(34,197,94,0.12)] flex flex-col gap-3"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-green-600/80">
              Модуль 3
            </p>
            <h3 className="text-base font-semibold text-[var(--text-primary)]">
              Дашборд команды
            </h3>
            <p className="text-xs italic text-[var(--text-muted)]">
              Управлять отделом на цифрах.
            </p>
            <ul className="space-y-1.5 text-xs">
              <li>· Воронка по менеджерам и каналам.</li>
              <li>· Конверсия и средний чек в реальном времени.</li>
              <li>· Рейтинг продажников и зоны риска по SLA.</li>
            </ul>
          </ScrollReveal>

          {/* Модуль 4: Прогноз выручки */}
          <ScrollReveal
            variants={fadeUpItem}
            className="rounded-3xl bg-gradient-to-br from-orange-50/50 to-amber-50/30 border border-orange-200/40 p-6 shadow-[0_16px_45px_rgba(251,146,60,0.12)] flex flex-col gap-3"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-orange-600/80">
              Модуль 4
            </p>
            <h3 className="text-base font-semibold text-[var(--text-primary)]">
              Прогноз выручки
            </h3>
            <p className="text-xs italic text-[var(--text-muted)]">
              Строить план на цифрах, а не на надежде.
            </p>
            <ul className="space-y-1.5 text-xs">
              <li>· Выручка по месяцам с учётом воронки.</li>
              <li>· Прогноз по сделкам в работе.</li>
              <li>· Отклонения от плана и рекомендации, где давить.</li>
            </ul>
          </ScrollReveal>

          {/* Модуль 5: Контроль дисциплины */}
          <ScrollReveal
            variants={fadeUpItem}
            className="rounded-3xl bg-gradient-to-br from-red-50/50 to-rose-50/30 border border-red-200/40 p-6 shadow-[0_16px_45px_rgba(239,68,68,0.12)] flex flex-col gap-3"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-red-600/80">
              Модуль 5
            </p>
            <h3 className="text-base font-semibold text-[var(--text-primary)]">
              Контроль дисциплины
            </h3>
            <p className="text-xs italic text-[var(--text-muted)]">
              Следить за процессом, не за людьми.
            </p>
            <ul className="space-y-1.5 text-xs">
              <li>· Соблюдение сроков звонков и задач.</li>
              <li>· Аудит качества разговоров и переписок.</li>
              <li>· Подсказки, где команда теряет лиды из-за невнимательности.</li>
            </ul>
          </ScrollReveal>

          {/* Модуль 6: Итоги и дайджесты */}
          <ScrollReveal
            variants={fadeUpItem}
            className="rounded-3xl bg-gradient-to-br from-cyan-50/50 to-teal-50/30 border border-cyan-200/40 p-6 shadow-[0_16px_45px_rgba(6,182,212,0.12)] flex flex-col gap-3"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-cyan-600/80">
              Модуль 6
            </p>
            <h3 className="text-base font-semibold text-[var(--text-primary)]">
              Итоги и дайджесты
            </h3>
            <p className="text-xs italic text-[var(--text-muted)]">
              Получать готовые отчёты на почту и в Telegram.
            </p>
            <ul className="space-y-1.5 text-xs">
              <li>· Утренний дайджест: что важно сегодня.</li>
              <li>· Недельные и месячные итоги по ключевым метрикам.</li>
              <li>· Автоматические отчёты для собственника и руководителей.</li>
            </ul>
          </ScrollReveal>
        </ScrollReveal>

        <ScrollReveal
          variants={fadeUp}
          className="mt-8 max-w-3xl mx-auto px-4 text-center text-sm text-[var(--text-secondary)]"
        >
          Модули работают поверх Endora Core — общей платформы, которая собирает
          данные из всех систем. Выбираешь, какие модули нужны сейчас, и
          подключаешь остальные по мере роста команды и процессов.
        </ScrollReveal>
      </Section>

      {/* Блок: Как запускается Павел (5 шагов) */}
      <Section className="pb-16 border-t border-[rgba(15,23,42,0.04)]">
        <ScrollReveal
          variants={fadeUp}
          className="max-w-5xl mx-auto px-4 text-center space-y-3"
        >
          <p className="text-[11px] tracking-[0.24em] uppercase text-[var(--text-muted)]">
            Как проходит запуск
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--text-primary)]">
            От первого подключения до управленческих дайджестов каждый день
          </h2>
          <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-3xl mx-auto">
            Мы не просто «включаем платформу». Павел учится на ваших данных,
            встраивается в текущие процессы и выходит в полноценную работу
            поэтапно, под контролем РОПа и собственника.
          </p>
        </ScrollReveal>

        <ScrollReveal
          variants={fadeUpStaggerContainer}
          className="mt-8 max-w-6xl mx-auto px-4 grid gap-6 md:grid-cols-5 text-sm text-[var(--text-secondary)]"
        >
          {[
            {
              step: "Шаг 1",
              title: "Диагностика",
              text: "Разбираем текущую воронку, CRM, телефонию. Смотрим, где теряются деньги.",
            },
            {
              step: "Шаг 2",
              title: "Подключение Core",
              text: "Подключаем Endora Core к вашим системам: CRM, звонки, оплаты, мессенджеры.",
            },
            {
              step: "Шаг 3",
              title: "Обучение Павла",
              text: "Настраиваем модули, учим Павла на ваших данных, правилах и сценариях.",
            },
            {
              step: "Шаг 4",
              title: "Пилот с командой",
              text: "Запускаем с частью отдела, проверяем качество сигналов и дайджестов.",
            },
            {
              step: "Шаг 5",
              title: "Масштабирование",
              text: "Расширяем на весь отдел, добавляем новые модули, настраиваем прогнозы.",
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
              <p className="leading-snug text-xs">{item.text}</p>
            </ScrollReveal>
          ))}
        </ScrollReveal>
      </Section>

      {/* Блок: Для кого Павел */}
      <Section className="pb-16 border-t border-[rgba(15,23,42,0.04)]">
        <ScrollReveal
          variants={fadeUp}
          className="max-w-5xl mx-auto px-4 space-y-4 text-center"
        >
          <p className="text-[11px] tracking-[0.24em] uppercase text-[var(--text-muted)]">
            Для кого
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--text-primary)]">
            Павел создан для компаний с отделом продаж от 3+ человек
          </h2>
          <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-3xl mx-auto">
            Особенно полезен там, где уже есть CRM и процессы, но нет чёткой
            картины: что происходит с воронкой, где застревают сделки, кто из
            менеджеров тянет вниз, а кто — несёт план.
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
              IT и SaaS компании
            </p>
            <ul className="space-y-1.5">
              <li>· Много сделок с длинными циклами.</li>
              <li>· Несколько каналов лидогенерации.</li>
              <li>· Нужна прозрачность воронки для инвесторов и роста.</li>
            </ul>
          </ScrollReveal>

          <ScrollReveal
            variants={fadeUpItem}
            className="rounded-3xl bg-[var(--glass-bg)]/80 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] p-5 shadow-[0_16px_45px_rgba(15,23,42,0.08)] flex flex-col gap-2"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
              Услуги и B2B-продажи
            </p>
            <ul className="space-y-1.5">
              <li>· Агентства, консалтинг, аутсорс, внедрение.</li>
              <li>· Команда продаж 3-10+ человек.</li>
              <li>· РОП хочет видеть, где «утекают» деньги.</li>
            </ul>
          </ScrollReveal>

          <ScrollReveal
            variants={fadeUpItem}
            className="rounded-3xl bg-[var(--glass-bg)]/80 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] p-5 shadow-[0_16px_45px_rgba(15,23,42,0.08)] flex flex-col gap-2"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
              Малый и средний бизнес
            </p>
            <ul className="space-y-1.5">
              <li>· Собственник сам управляет продажами.</li>
              <li>· Есть CRM, но нет времени копаться в отчётах.</li>
              <li>· Нужны дайджесты и сигналы, а не дашборды.</li>
            </ul>
          </ScrollReveal>
        </ScrollReveal>
      </Section>

      {/* FAQ про Павла */}
      <Section className="pb-16 border-t border-[rgba(15,23,42,0.04)]">
        <ScrollReveal
          variants={fadeUp}
          className="max-w-5xl mx-auto px-4 space-y-4"
        >
          <p className="text-[11px] tracking-[0.24em] uppercase text-[var(--text-muted)]">
            Частые вопросы
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--text-primary)]">
            Что обычно спрашивают про Павла
          </h2>
        </ScrollReveal>

        <ScrollReveal
          variants={fadeUpStaggerContainer}
          className="mt-6 max-w-5xl mx-auto px-4 space-y-4 text-sm text-[var(--text-secondary)]"
        >
          <ScrollReveal
            variants={fadeUpItem}
            className="rounded-3xl bg-[var(--glass-bg)]/80 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] p-5 shadow-[0_14px_40px_rgba(15,23,42,0.08)]"
          >
            <p className="font-medium mb-1 text-[var(--text-primary)]">
              Сколько времени занимает запуск Павла?
            </p>
            <p>
              Базовое подключение Endora Core и первые модули обычно занимают
              2-4 недели. Дальше идёт обучение на ваших данных и пилотный запуск
              с частью команды. Полноценное масштабирование на весь отдел — ещё
              4-6 недель.
            </p>
          </ScrollReveal>

          <ScrollReveal
            variants={fadeUpItem}
            className="rounded-3xl bg-[var(--glass-bg)]/80 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] p-5 shadow-[0_14px_40px_rgba(15,23,42,0.08)]"
          >
            <p className="font-medium mb-1 text-[var(--text-primary)]">
              Павел заменяет РОПа или помогает ему?
            </p>
            <p>
              Павел не заменяет РОПа, а усиливает его. Он забирает рутину:
              сбор цифр, анализ воронки, напоминания команде, подготовку отчётов.
              РОП получает готовые дайджесты и сигналы, а не часами копается в
              дашбордах и таблицах.
            </p>
          </ScrollReveal>

          <ScrollReveal
            variants={fadeUpItem}
            className="rounded-3xl bg-[var(--glass-bg)]/80 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] p-5 shadow-[0_14px_40px_rgba(15,23,42,0.08)]"
          >
            <p className="font-medium mb-1 text-[var(--text-primary)]">
              Какие системы нужны для работы Павла?
            </p>
            <p>
              Минимально — CRM и телефония. Идеально — ещё мессенджеры, почта и
              платёжная система. Endora Core умеет интегрироваться с AmoCRM,
              Битрикс24, Pipedrive, VoIP-провайдерами, Telegram, WhatsApp и
              большинством популярных сервисов.
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
            Хочешь посмотреть, как Павел будет управлять твоим отделом продаж?
          </h2>
          <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-2xl mx-auto">
            Расскажи, как сейчас устроен ваш отдел продаж и какие цели по выручке.
            Мы покажем, как Павел будет смотреть на вашу воронку и где найдёт
            дополнительные деньги.
          </p>
          <div className="flex justify-center">
            <Link href="/start">
              <Button className="px-8 py-3 text-sm">
                Разобрать воронку вместе с Павлом
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </Section>
    </main>
  );
}
