// src/app/company/page.tsx

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
  title: "О компании Endora AI",
  description:
    "Endora AI - команда, которая создает цифровых сотрудников для автоматизации сервисных процессов, продаж и клиентского сервиса.",
};

export default function CompanyPage() {
  return (
    <main className="min-h-screen w-full pt-28 pb-20">
      {/* HERO: о компании + заглушка под видео */}
      <Section className="pb-16">
        <ScrollReveal
          variants={fadeUp}
          className="max-w-5xl mx-auto px-4 grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] items-center"
        >
          {/* Текстовая часть */}
          <div className="space-y-5 text-[var(--text-secondary)]">
            <p className="text-[11px] tracking-[0.24em] uppercase text-[var(--text-muted)]">
              О компании
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-[40px] font-semibold text-[var(--text-primary)] leading-tight">
              Endora AI — цифровые сотрудники, которые берут задачи на себя
            </h1>

            <p className="text-sm md:text-base max-w-3xl">
              Мы создаём голосовых и текстовых цифровых сотрудников, которые
              работают как живой интеллект: понимают контекст, ведут диалоги и
              помогают бизнесу закрывать реальные задачи — от первого контакта
              до встречи.
            </p>

            <p className="text-sm md:text-base max-w-3xl text-[var(--text-primary)]">
              Наша миссия — дать каждому бизнесу персональных цифровых
              сотрудников, способных работать без выгорания, без выходных и без
              человеческого фактора.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/start">
                <Button className="px-7 py-3 text-sm">
                  Обсудить ваши задачи с Endora AI
                </Button>
              </Link>
              <Link href="/products">
                <Button
                  variant="ghost"
                  className="px-7 py-3 text-sm border border-[rgba(15,23,42,0.08)] bg-[rgba(255,255,255,0.6)] hover:bg-[rgba(255,255,255,0.9)]"
                >
                  Посмотреть линейку решений
                </Button>
              </Link>
            </div>
          </div>

         {/* Заглушка под видео о компании — без «проигрывателя» */} 
         {/*  <div className="relative">
            <div className="pointer-events-none absolute -inset-6 rounded-[40px] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.85),_rgba(214,187,150,0.55))] opacity-70 blur-2xl" />
            <div className="relative aspect-[16/10] rounded-3xl bg-[rgba(255,255,255,0.96)] border border-[rgba(255,255,255,0.95)] shadow-[0_28px_80px_rgba(15,23,42,0.25)] overflow-hidden flex flex-col">
              <div className="flex items-start justify-between gap-4 px-5 pt-4">
                <div className="space-y-1">
                  <p className="text-[11px] tracking-[0.22em] uppercase text-[var(--text-muted)]">
                    Видео о компании
                  </p>
                  <p className="text-sm font-medium text-[var(--text-primary)] max-w-xs">
                    Здесь будет ролик о том, как работают цифровые сотрудники
                    Endora AI.
                  </p>
                </div>
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[rgba(15,23,42,0.9)] shadow-[0_12px_30px_rgba(15,23,42,0.45)]">
                  <div className="ml-0.5 h-0 w-0 border-y-[7px] border-y-transparent border-l-[11px] border-l-[rgba(255,255,255,0.95)]" />
                </div>
              </div> 

               Превью под будущий плеер 
              <div className="mt-4 mx-5 mb-4 flex-1 rounded-2xl bg-[rgba(15,23,42,0.03)] border border-[rgba(15,23,42,0.04)]" />

              <p className="px-5 pb-4 text-[11px] text-[var(--text-muted)]">
                После записи видео сюда можно будет встроить плеер или превью-ролик
                с YouTube / Vimeo / собственного хостинга.
              </p>
            </div>
          </div> */}
        </ScrollReveal>
      </Section> 


      {/* БЛОК: что именно мы делаем */}
      <Section className="pb-16 border-t border-[rgba(15,23,42,0.04)]">
        <ScrollReveal
          variants={fadeUp}
          className="max-w-5xl mx-auto px-4 space-y-4 text-center md:text-left"
        >
          <p className="text-[11px] tracking-[0.24em] uppercase text-[var(--text-muted)]">
            Чем мы занимаемся
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--text-primary)]">
            Цифровые сотрудники вместо отдельного бота под каждый канал
          </h2>
          <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-3xl">
            Мы строим решения вокруг цифровых сотрудников, а не отдельных
            скриптов. Голос, чаты и интеграции работают как единая система,
            которая помогает вашей команде, а не конкурирует с ней.
          </p>
        </ScrollReveal>

        <ScrollReveal
          variants={fadeUpStaggerContainer}
          className="mt-8 max-w-5xl mx-auto px-4 grid gap-6 md:grid-cols-3 text-sm text-[var(--text-secondary)]"
        >
          {/* Голосовые ассистенты */}
          <ScrollReveal
            variants={fadeUpItem}
            className="rounded-3xl bg-[var(--glass-bg)]/85 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] p-6 shadow-[0_18px_55px_rgba(15,23,42,0.12)] flex flex-col gap-3"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
              Голос
            </p>
            <h3 className="text-base font-semibold text-[var(--text-primary)]">
              Голосовые ассистенты
            </h3>
            <p>
              Цифровые сотрудники, которые отвечают на звонки, записывают
              клиентов, делают follow-up и назначают встречи. Работают 24/7 и
              не устают.
            </p>
          </ScrollReveal>

          {/* Чат-ассистенты */}
          <ScrollReveal
            variants={fadeUpItem}
            className="rounded-3xl bg-[var(--glass-bg)]/85 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] p-6 shadow-[0_18px_55px_rgba(15,23,42,0.12)] flex flex-col gap-3"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
              Чаты
            </p>
            <h3 className="text-base font-semibold text-[var(--text-primary)]">
              Чат-боты нового поколения
            </h3>
            <p>
              Умные ассистенты для Telegram и других платформ. Понимают
              контекст, ведут диалог «по-человечески» и умеют работать с вашими
              данными и сервисами.
            </p>
          </ScrollReveal>

          {/* Интеграции */}
          <ScrollReveal
            variants={fadeUpItem}
            className="rounded-3xl bg-[var(--glass-bg)]/85 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] p-6 shadow-[0_18px_55px_rgba(15,23,42,0.12)] flex flex-col gap-3"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
              Интеграции
            </p>
            <h3 className="text-base font-semibold text-[var(--text-primary)]">
              Интеграции и потоки данных
            </h3>
            <p>
              Подключаем CRM, таблицы, телефонию и другие системы. Данные о
              клиентах автоматически оказываются там, где они нужны вашей
              команде.
            </p>
          </ScrollReveal>
        </ScrollReveal>
      </Section>

{/* БЛОК: почему именно Endora AI */}
<Section className="pb-16 border-t border-[rgba(15,23,42,0.04)]">
  <ScrollReveal
    variants={fadeUp}
    className="max-w-5xl mx-auto px-4 grid gap-10 md:grid-cols-2 items-start"
  >
    <div className="space-y-4">
      <p className="text-[11px] tracking-[0.24em] uppercase text-[var(--text-muted)]">
        Почему Endora AI
      </p>
      <h2 className="text-2xl md:text-3xl font-semibold text-[var(--text-primary)]">
        Не технологии ради технологий, а измеримый результат для бизнеса
      </h2>
      <p className="text-sm md:text-base text-[var(--text-secondary)]">
        Наша задача&nbsp;— не показать, «какой у нас умный ИИ», а сделать так,
        чтобы цифровые сотрудники закрывали реальные участки работы: звонки,
        заявки, письма и рутину команды. Мы смотрим на метрики, а не на модные
        названия.
      </p>
    </div>

    <div className="rounded-3xl bg-[var(--glass-bg)]/90 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] p-6 shadow-[0_20px_60px_rgba(15,23,42,0.14)] text-sm text-[var(--text-secondary)] space-y-3">
      <div>
        <p className="font-semibold text-[var(--text-primary)] mb-1">
          Понимание процессов
        </p>
        <p>
          Мы начинаем не с настройки бота, а с разбора ваших процессов: как
          приходят заявки, где теряются клиенты, на каком этапе выгорает
          команда. Цифровой сотрудник встраивается в эту цепочку, а не живёт
          отдельно.
        </p>
      </div>

      <div>
        <p className="font-semibold text-[var(--text-primary)] mb-1">
          Цифровые сотрудники вместо «скриптовых роботов»
        </p>
        <p>
          Мы проектируем роли так, как будто нанимаем живого человека: зона
          ответственности, стиль общения, сценарии в сложных ситуациях,
          передача диалога живому менеджеру, если нужно.
        </p>
      </div>

      <div>
        <p className="font-semibold text-[var(--text-primary)] mb-1">
          Фокус на воронке и цифрах
        </p>
        <p>
          Важны не только диалоги, а то, к чему они приводят: запись, встреча,
          оплаченный счёт, вернувшийся клиент. Мы смотрим на конверсию и
          нагрузку на команду, а не на количество «умных ответов».
        </p>
      </div>

      <div>
        <p className="font-semibold text-[var(--text-primary)] mb-1">
          Настройка под вашу нишу
        </p>
        <p>
          У каждого бизнеса свои правила общения, ограничения и тон. Мы
          настраиваем цифровых сотрудников под ваш бренд, регламенты и уровень
          контроля, а не предлагаем «одного и того же бота для всех».
        </p>
      </div>
    </div>
  </ScrollReveal>
</Section>


      {/* БЛОК: экосистема Endora */}
      {/* <Section className="pb-16 border-t border-[rgba(15,23,42,0.04)]">
        <ScrollReveal
          variants={fadeUp}
          className="max-w-5xl mx-auto px-4 space-y-4 text-center md:text-left"
        >
          <p className="text-[11px] tracking-[0.24em] uppercase text-[var(--text-muted)]">
            Экосистема Endora
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--text-primary)]">
            От голосовых ассистентов до собственной инфраструктуры
          </h2>
          <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-3xl">
            Мы смотрим дальше одного продукта и строим платформу, вокруг
            которой можно развивать весь стек цифровых сотрудников и сервисов
            для бизнеса.
          </p>
        </ScrollReveal>

        <ScrollReveal
          variants={fadeUpStaggerContainer}
          className="mt-8 max-w-5xl mx-auto px-4 grid gap-5 md:grid-cols-3 text-sm text-[var(--text-secondary)]"
        >
          <ScrollReveal
            variants={fadeUpItem}
            className="rounded-3xl bg-[var(--glass-bg)]/85 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] p-5 flex flex-col gap-2"
          >
            <h3 className="text-base font-semibold text-[var(--text-primary)]">
              Endora Voice
            </h3>
            <p>
              Голосовые ассистенты и цифровые сотрудники для телефонии, колл-центров
              и сервисного бизнеса.
            </p>
          </ScrollReveal>

          <ScrollReveal
            variants={fadeUpItem}
            className="rounded-3xl bg-[var(--glass-bg)]/85 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] p-5 flex flex-col gap-2"
          >
            <h3 className="text-base font-semibold text-[var(--text-primary)]">
              Endora Chat
            </h3>
            <p>
              Текстовые ассистенты и чат-боты для мессенджеров, сайта и внутренних
              интерфейсов компании.
            </p>
          </ScrollReveal>

          <ScrollReveal
            variants={fadeUpItem}
            className="rounded-3xl bg-[var(--glass-bg)]/85 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] p-5 flex flex-col gap-2"
          >
            <h3 className="text-base font-semibold text-[var(--text-primary)]">
              Endora OS &amp; CRM
            </h3>
            <p>
              Операционная система и CRM с AI-ядром для управления процессами,
              задачами и клиентскими данными.
            </p>
          </ScrollReveal>
        </ScrollReveal>

        <ScrollReveal
          variants={fadeUpStaggerContainer}
          className="mt-5 max-w-5xl mx-auto px-4 grid gap-5 md:grid-cols-2 text-sm text-[var(--text-secondary)]"
        >
          <ScrollReveal
            variants={fadeUpItem}
            className="rounded-3xl bg-[var(--glass-bg)]/85 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] p-5 flex flex-col gap-2"
          >
            <h3 className="text-base font-semibold text-[var(--text-primary)]">
              Endora Infra
            </h3>
            <p>
              Собственная инфраструктура: GPU-кластеры и LLM-ядра, на которых
              работают цифровые сотрудники и продукты Endora.
            </p>
          </ScrollReveal>

          <ScrollReveal
            variants={fadeUpItem}
            className="rounded-3xl bg-[var(--glass-bg)]/85 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] p-5 flex flex-col gap-2"
          >
            <h3 className="text-base font-semibold text-[var(--text-primary)]">
              Партнёрские проекты
            </h3>
            <p>
              Совместные решения с компаниями, которым нужна платформа цифровых
              сотрудников под их продукты и рынки.
            </p>
          </ScrollReveal>
        </ScrollReveal>
      </Section> */}

      {/* БЛОК: технологическая база (без раскрытия стека) */}
<Section className="pb-16 border-t border-[rgba(15,23,42,0.04)]">
  <ScrollReveal
    variants={fadeUp}
    className="max-w-5xl mx-auto px-4 space-y-4 text-center md:text-left"
  >
    <p className="text-[11px] tracking-[0.24em] uppercase text-[var(--text-muted)]">
      Технологическая база
    </p>
    <h2 className="text-2xl md:text-3xl font-semibold text-[var(--text-primary)]">
      Архитектура, которая выдерживает живые диалоги и рост нагрузки
    </h2>
    <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-3xl">
      Под капотом у Endora AI — продуманная многослойная архитектура: слой
      интерфейсов, логика и интеллект, коммуникационные каналы и управляемая
      инфраструктура. Для клиента это означает стабильную работу цифровых
      сотрудников и возможность расти без боли с переездами.
    </p>
  </ScrollReveal>

  <ScrollReveal
    variants={fadeUpStaggerContainer}
    className="mt-8 max-w-5xl mx-auto px-4 grid gap-5 md:grid-cols-2 text-sm text-[var(--text-secondary)]"
  >
    {/* Интерфейсы */}
    <ScrollReveal
      variants={fadeUpItem}
      className="rounded-3xl bg-[var(--glass-bg)]/80 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] p-5 space-y-2"
    >
      <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
        Интерфейсы
      </p>
      <p className="font-semibold text-[var(--text-primary)]">
        Быстрые веб-интерфейсы и личные кабинеты
      </p>
      <p>
        Современный подход к фронтенду даёт быстрые страницы, плавную анимацию
        и аккуратные интерфейсы без ощущения тяжёлой корпоративной системы.
      </p>
    </ScrollReveal>

    {/* Логика и интеллект */}
    <ScrollReveal
      variants={fadeUpItem}
      className="rounded-3xl bg-[var(--glass-bg)]/80 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] p-5 space-y-2"
    >
      <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
        Логика и интеллект
      </p>
      <p className="font-semibold text-[var(--text-primary)]">
        От сценариев до адаптивных моделей
      </p>
      <p>
        Комбинируем сценарную логику, обработку естественного языка и
        адаптивные модели, чтобы цифровые сотрудники не просто отвечали, а
        доводили клиента до записи, встречи или сделки.
      </p>
    </ScrollReveal>

    {/* Коммуникации */}
    <ScrollReveal
      variants={fadeUpItem}
      className="rounded-3xl bg-[var(--glass-bg)]/80 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] p-5 space-y-2"
    >
      <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
        Коммуникационные каналы
      </p>
      <p className="font-semibold text-[var(--text-primary)]">
        Голос, мессенджеры, почта и CRM в одной системе
      </p>
      <p>
        Цифровые сотрудники работают там, где живут ваши клиенты: в звонках,
        чатах, мессенджерах и письмах. Все действия возвращаются в CRM и
        внутренние системы, чтобы не терялись заявки и история общения.
      </p>
    </ScrollReveal>

    {/* Инфраструктура */}
    <ScrollReveal
      variants={fadeUpItem}
      className="rounded-3xl bg-[var(--glass-bg)]/80 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] p-5 space-y-2"
    >
      <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
        Инфраструктура
      </p>
      <p className="font-semibold text-[var(--text-primary)]">
        Управляемая инфраструктура под требования бизнеса
      </p>
      <p>
        Решения можно разворачивать в облаке или на выделенных серверах под
        требования по безопасности и нагрузке. Мы следим за масштабированием,
        резервированием и стабильностью, чтобы система просто работала.
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
            Давайте посмотрим, где цифровые сотрудники помогут вам больше всего
          </h2>
          <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-2xl mx-auto">
            Можно прийти просто с описанием процессов и боли: «у нас много
            звонков, много писем, команда не успевает». Мы аккуратно разберём
            воронку, предложим формат цифровых сотрудников и покажем,
            как это будет работать вживую.
          </p>
          <div className="flex justify-center">
            <Link href="/start">
              <Button className="px-8 py-3 text-sm">
                Обсудить проект с Endora AI
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </Section>
    </main>
  );
}
