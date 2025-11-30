// src/app/products/page.tsx
"use client";

import Link from "next/link";
import { Button } from "@/ui/glass/Button";
import { Section } from "@/ui/primitives/Section";
import { ScrollReveal } from "@/ui/primitives/ScrollReveal";
import {
  fadeUp,
  fadeUpItem,
  fadeUpStaggerContainer,
} from "@/lib/animations/homeVariants";

export default function ProductsPage() {
  return (
    <main className="min-h-screen w-full pt-28 pb-20">
      {/* HERO: обзор экосистемы продуктов */}
      <Section className="pb-16">
        <ScrollReveal
          variants={fadeUp}
          className="max-w-5xl mx-auto px-4 space-y-6 text-[var(--text-secondary)]"
        >
          <p className="text-[11px] tracking-[0.24em] uppercase text-[var(--text-muted)]">
            Продукты Endora AI
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-[40px] font-semibold text-[var(--text-primary)] leading-tight">
            Линейка решений для голосовых, текстовых и цифровых сотрудников
          </h1>

          <p className="text-sm md:text-base max-w-3xl">
            Endora AI — это не один бот, а платформа. На ней можно запускать
            простые шаблонные боты, собирать цифровых сотрудников под задачи
            бизнеса и выстраивать полноценный цифровой отдел с глубокой
            интеграцией в телефонию, CRM, почту и мессенджеры.
          </p>

          <div className="flex flex-wrap gap-2 pt-2 text-[11px] md:text-xs">
            <span className="inline-flex items-center rounded-full px-3 py-1 bg-[rgba(255,255,255,0.7)] border border-[rgba(255,255,255,0.9)]">
              Шаблонные боты без внедрения
            </span>
            <span className="inline-flex items-center rounded-full px-3 py-1 bg-[rgba(255,255,255,0.6)] border border-[rgba(255,255,255,0.85)]">
              Цифровые сотрудники под задачи
            </span>
            <span className="inline-flex items-center rounded-full px-3 py-1 bg-[rgba(255,255,255,0.5)] border border-[rgba(255,255,255,0.8)]">
              Смарт-отдел и цифровой отдел end-to-end
            </span>
            <span className="inline-flex items-center rounded-full px-3 py-1 bg-[rgba(255,255,255,0.45)] border border-[rgba(255,255,255,0.75)]">
              Интеграции и инфраструктура
            </span>
          </div>

          <p className="text-[11px] text-[var(--text-muted)] pt-1">
            У цифровых сотрудников (администратор, продавец и другие роли) будут
            отдельные страницы. Здесь — обзор остальных продуктов и уровней
            решений.
          </p>

          <div className="pt-2">
            <Link href="/start">
              <Button className="px-7 py-3 text-sm">
                Обсудить, что подойдёт вашему бизнесу
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </Section>

{/* Линейка решений: от простого бота до цифрового отдела */}
<Section className="pt-20 pb-24">
  {/* Заголовок секции */}
  <ScrollReveal variants={fadeUp} className="max-w-3xl mx-auto text-center px-4">
    <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--text-muted)] mb-3">
      Линейка решений
    </p>
    <h2 className="text-2xl md:text-[28px] font-semibold text-[var(--text-primary)] mb-4">
      От простого бота до цифрового отдела
    </h2>
    <p className="text-sm md:text-[15px] text-[var(--text-secondary)] leading-relaxed">
      Вся линейка строится вокруг двух осей: глубина интеграции и масштаб компании.
      Можно начать с простого теста, а затем перейти к смарт-отделу и полноценному
      цифровому отделу без смены платформы.
    </p>
  </ScrollReveal>

  {/* Карточки линейки */}
  <ScrollReveal
    variants={fadeUpStaggerContainer}
    className="mt-10 grid gap-6 md:grid-cols-3 max-w-6xl mx-auto px-4"
  >
    {/* Быстрый старт — шаблонные боты */}
    <ScrollReveal
      variants={fadeUpItem}
      className="relative min-h-[340px] md:min-h-[360px] lg:min-h-[380px]"
    >
      <div className="flex h-full flex-col justify-between rounded-3xl bg-[var(--glass-bg)]/90 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] p-5 shadow-[0_20px_50px_rgba(15,23,42,0.14)] text-left">
        <div className="space-y-3 text-sm">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
            Быстрый старт
          </p>
          <h3 className="text-base md:text-lg font-semibold text-[var(--text-primary)]">
            Шаблонные боты как сервис
          </h3>
          <p className="text-[var(--text-secondary)]">
            Готовые сценарные боты без внедрения. Подходят, чтобы безопасно
            протестировать формат цифрового сотрудника и посмотреть первые заявки.
          </p>
        </div>
        <div className="pt-4 text-xs text-[var(--text-muted)]">
          Наведите курсор, чтобы узнать, когда это лучший выбор.
        </div>
      </div>
    </ScrollReveal>

    {/* Смарт-отдел */}
    <ScrollReveal
      variants={fadeUpItem}
      className="group relative min-h-[340px] md:min-h-[360px] lg:min-h-[380px] [perspective:1200px]"
    >
      <div className="relative h-full w-full transition-transform duration-700 transform-gpu [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Лицевая сторона */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(0deg)]">
          <div className="flex h-full flex-col justify-between rounded-3xl bg-[var(--glass-bg)]/90 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] p-5 shadow-[0_20px_50px_rgba(15,23,42,0.16)] text-left">
            <div className="space-y-3 text-sm">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
                Для растущего бизнеса
              </p>
              <h3 className="text-base md:text-lg font-semibold text-[var(--text-primary)]">
                Смарт-отдел на цифровых сотрудниках
              </h3>
              <p className="text-[var(--text-secondary)]">
                Комбинация нескольких цифровых сотрудников: отдельные роли
                под входящие обращения, продажи, follow-up и работу с базой.
                Всё работает поверх вашей телефонии и CRM.
              </p>
            </div>
            <div className="pt-4 text-xs text-[var(--text-muted)]">
              Наведите курсор, чтобы увидеть, как выглядит такой отдел.
            </div>
          </div>
        </div>

        {/* Обратная сторона */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="flex h-full flex-col justify-between rounded-3xl bg-[var(--glass-bg)]/97 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] p-5 shadow-[0_24px_60px_rgba(15,23,42,0.16)] text-left">
            <div className="space-y-3 text-[13px] leading-snug text-[var(--text-secondary)]">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
                Как это устроено
              </p>
              <ul className="space-y-1">
                <li>· Цифровой сотрудник для входящих звонков и чатов.</li>
                <li>· Цифровой сотрудник для исходящих писем и аутрича.</li>
                <li>· Интеграция с CRM: статусы, задачи, комментарии.</li>
                <li>· Общая воронка: от первого контакта до встречи.</li>
                <li>· Единая отчётность по звонкам, заявкам и конверсии.</li>
              </ul>
            </div>
            <p className="pt-3 text-[10px] text-[var(--text-muted)]">
              Формат для компаний, где ручной операционки уже слишком много
              для одной команды.
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>

    {/* Цифровой отдел End-to-End */}
    <ScrollReveal
      variants={fadeUpItem}
      className="group relative min-h-[340px] md:min-h-[360px] lg:min-h-[380px] [perspective:1200px]"
    >
      <div className="relative h-full w-full transition-transform duration-700 transform-gpu [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Лицевая сторона */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(0deg)]">
          <div className="flex h-full flex-col justify-between rounded-3xl bg-[var(--glass-bg)]/95 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] p-5 shadow-[0_20px_50px_rgba(15,23,42,0.18)] text-left">
            <div className="space-y-3 text-sm">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
                Enterprise-уровень
              </p>
              <h3 className="text-base md:text-lg font-semibold text-[var(--text-primary)]">
                Цифровой отдел End-to-End
              </h3>
              <p className="text-[var(--text-secondary)]">
                Несколько цифровых сотрудников под разные роли, полная карта
                процессов и глубокая интеграция: от первого контакта до
                договора и отчётности в BI.
              </p>
            </div>
            <div className="pt-4 text-xs text-[var(--text-muted)]">
              Наведите курсор, чтобы увидеть, какие сущности здесь связываются.
            </div>
          </div>
        </div>

        {/* Обратная сторона */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="flex h-full flex-col justify-between rounded-3xl bg-[var(--glass-bg)]/97 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] p-5 shadow-[0_24px_60px_rgba(15,23,42,0.16)] text-left">
            <div className="space-y-3 text-[13px] leading-snug text-[var(--text-secondary)]">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
                Что внутри
              </p>
              <ul className="space-y-1">
                <li>· Роли под входящие, продажи, поддержку и операции.</li>
                <li>· Интеграция: телефония, CRM, почта, мессенджеры, BI.</li>
                <li>· Обучение на скриптах, переписке и записях звонков.</li>
                <li>· Индивидуальные дашборды по KPI для руководителей.</li>
                <li>· Сопровождение и развитие после запуска.</li>
              </ul>
            </div>
            <p className="pt-3 text-[10px] text-[var(--text-muted)]">
              Формат для компаний, где AI-система становится частью
              инфраструктуры, а не отдельным экспериментом.
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  </ScrollReveal>
</Section>



      {/* ПЛАТФОРМА: другие цифровые сотрудники и интеграции */}
      <Section className="pb-16 border-t border-[rgba(15,23,42,0.04)]">
        <ScrollReveal
          variants={fadeUp}
          className="max-w-5xl mx-auto px-4 space-y-4 text-center md:text-left"
        >
          <p className="text-[11px] tracking-[0.24em] uppercase text-[var(--text-muted)]">
            Платформа Endora AI
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--text-primary)]">
            Не только голос и продажи: цифровые сотрудники под любые роли
          </h2>
          <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-3xl">
            На той же архитектуре можно собирать отдельных цифровых сотрудников
            для внутренних задач: работы с почтой, документами, базами, аналитикой
            и поддержкой команды. Всё это соединяется через общую интеграционную
            шину.
          </p>
        </ScrollReveal>

        <ScrollReveal
          variants={fadeUpStaggerContainer}
          className="mt-8 max-w-5xl mx-auto px-4 grid gap-6 md:grid-cols-2 text-sm text-[var(--text-secondary)]"
        >
          {/* Цифровые сотрудники под задачу */}
          <ScrollReveal
            variants={fadeUpItem}
            className="rounded-3xl bg-[var(--glass-bg)]/80 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] p-6 shadow-[0_20px_55px_rgba(15,23,42,0.12)] flex flex-col gap-3"
          >
            <h3 className="text-base font-semibold text-[var(--text-primary)] mb-1">
              Цифровые сотрудники под задачу
            </h3>
            <p>
              Поверх базовых ролей можно собрать специализированных цифровых
              сотрудников под конкретные процессы компании.
            </p>
            <ul className="space-y-1.5">
              <li>· Обработка входящей почты и распределение задач по людям.</li>
              <li>· Внутренний ассистент для команды: поиск информации, документы, регламенты.</li>
              <li>· Специализированные роли под отрасль: логистика, девелопмент, производство.</li>
              <li>· Помощники для руководителей: сводки, отчёты, контроль по KPI.</li>
            </ul>
            <p className="pt-2 text-xs text-[var(--text-muted)]">
              Продукт для тех, кто хочет автоматизировать не только коммуникации с клиентами,
              но и внутреннюю операционку.
            </p>
          </ScrollReveal>

          {/* Интеграции и инфраструктура */}
          <ScrollReveal
            variants={fadeUpItem}
            className="rounded-3xl bg-[var(--glass-bg)]/80 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] p-6 shadow-[0_20px_55px_rgba(15,23,42,0.12)] flex flex-col gap-3"
          >
            <h3 className="text-base font-semibold text-[var(--text-primary)] mb-1">
              Интеграции и AI-инфраструктура
            </h3>
            <p>
              Отдельное направление — связать все каналы и системы в одну архитектуру,
              а затем разместить ИИ-нагрузку на надёжной инфраструктуре.
            </p>
            <ul className="space-y-1.5">
              <li>· Интеграция телефонии, CRM, почты, мессенджеров и сайта.</li>
              <li>· Настройка потоков данных: лиды, заявки, статусы, задачи, отчётность.</li>
              <li>· Подготовка проектной архитектуры под локальные GPU-серверы или облако.</li>
              <li>· Настройка мониторинга, логирования и базовой безопасности для AI-сервисов.</li>
            </ul>
            <p className="pt-2 text-xs text-[var(--text-muted)]">
              Подходит, когда компания хочет, чтобы цифровые сотрудники стали частью
              единой IT-системы, а не отдельными экспериментами в стороне.
            </p>
          </ScrollReveal>
        </ScrollReveal>
      </Section>

      {/* КАК ВЫБРАТЬ ПРОДУКТ */}
      <Section className="pb-16 border-t border-[rgba(15,23,42,0.04)]">
        <ScrollReveal
          variants={fadeUp}
          className="max-w-5xl mx-auto px-4 space-y-4 text-center"
        >
          <p className="text-[11px] tracking-[0.24em] uppercase text-[var(--text-muted)]">
            Как выбрать формат
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--text-primary)]">
            Разный масштаб бизнеса — разные уровни решения
          </h2>
          <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-3xl mx-auto">
            Чтобы не утонуть в выборе, можно оттолкнуться от текущего состояния:
            объёма обращений, зрелости процессов и готовности что-то менять внутри.
          </p>
        </ScrollReveal>

        <ScrollReveal
          variants={fadeUpStaggerContainer}
          className="mt-8 max-w-5xl mx-auto px-4 grid gap-6 md:grid-cols-3 text-sm text-[var(--text-secondary)]"
        >
          {/* Малый бизнес */}
          <ScrollReveal
            variants={fadeUpItem}
            className="rounded-3xl bg-[var(--glass-bg)]/80 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] p-5 shadow-[0_16px_45px_rgba(15,23,42,0.08)] flex flex-col gap-3"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
              Малый бизнес
            </p>
            <h3 className="text-base font-semibold text-[var(--text-primary)]">
              Салоны, клиники, студии, сервис
            </h3>
            <ul className="space-y-1.5">
              <li>· Много звонков и сообщений, мало времени на ответы.</li>
              <li>· Чаще всего нужен быстрый, понятный результат.</li>
              <li>· Хорошая точка входа — шаблонные боты или один цифровой сотрудник.</li>
            </ul>
          </ScrollReveal>

          {/* Средний бизнес */}
          <ScrollReveal
            variants={fadeUpItem}
            className="rounded-3xl bg-[var(--glass-bg)]/80 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] p-5 shadow-[0_16px_45px_rgba(15,23,42,0.08)] flex flex-col gap-3"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
              Средний бизнес
            </p>
            <h3 className="text-base font-semibold text-[var(--text-primary)]">
              Отдел продаж, заявки, поддержка
            </h3>
            <ul className="space-y-1.5">
              <li>· Уже есть CRM и понятная воронка продаж.</li>
              <li>· Много ручной рутины: обзвоны, письма, follow-up.</li>
              <li>· Логичный выбор — смарт-отдел и цифровые сотрудники под ключевые роли.</li>
            </ul>
          </ScrollReveal>

          {/* Крупный / enterprise */}
          <ScrollReveal
            variants={fadeUpItem}
            className="rounded-3xl bg-[var(--glass-bg)]/80 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] p-5 shadow-[0_16px_45px_rgba(15,23,42,0.08)] flex flex-col gap-3"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
              Крупный / Enterprise
            </p>
            <h3 className="text-base font-semibold text-[var(--text-primary)]">
              Несколько отделов и сложные процессы
            </h3>
            <ul className="space-y-1.5">
              <li>· Много каналов: телефония, колл-центр, филиалы, партнёры.</li>
              <li>· Требуется прозрачная аналитика и контроль качества.</li>
              <li>· Оптимален формат цифрового отдела end-to-end и проект по интеграции.</li>
            </ul>
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
            Не обязательно выбирать продукт самому
          </h2>
          <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-2xl mx-auto">
            Можно прийти с задачей: «у нас есть такие-то процессы, такие-то
            обращения и боли». На консультации мы вместе разберём воронку и
            предложим формат: от простого шаблонного бота до цифрового отдела.
          </p>
          <div className="flex justify-center">
            <Link href="/start">
              <Button className="px-8 py-3 text-sm">
                Разобрать ваши процессы и подобрать решение
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </Section>
    </main>
  );
}
