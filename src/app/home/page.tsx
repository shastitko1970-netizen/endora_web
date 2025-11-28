// src/app/home/page.tsx
"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/ui/glass/Button";
import { Section } from "@/ui/primitives/Section";
import { ScrollReveal } from "@/ui/primitives/ScrollReveal";
import {
  fadeUp,
  fadeUpItem,
  fadeUpStaggerContainer,
  fadeIn,
} from "@/lib/animations/homeVariants";
import { cn } from "@/lib/utils/cn";

const WAVE_BARS = Array.from({ length: 32 }, (_, i) => i);

function AudioWavePlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <div className="relative flex-1 rounded-full bg-[rgba(255,255,255,0.82)] px-6 py-3 shadow-[0_16px_40px_rgba(0,0,0,0.18)] overflow-hidden">
        <div
          className={cn(
            "flex items-end gap-[3px] h-8 transition-opacity duration-300",
            isPlaying ? "opacity-100" : "opacity-70"
          )}
        >
          {WAVE_BARS.map((_, i) => (
            <span
              key={i}
              className={cn(
                "w-[3px] rounded-full bg-[rgba(193,143,57,0.95)] origin-bottom",
                isPlaying && "wave-bar-playing"
              )}
              style={{
                height: `${10 + ((i * 7) % 24)}px`,
                animationDelay: `${i * 35}ms`,
              }}
            />
          ))}
        </div>

        <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
          Нажмите, чтобы послушать демо голоса и логику диалога.
        </p>

        <audio
          ref={audioRef}
          src="/demo/DemoDialog.mp3" // твой файл в public/demo
          preload="metadata"
        />

      </div>

      <button
        type="button"
        onClick={togglePlay}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#f7e0b4,#e2b96f)] shadow-[0_14px_30px_rgba(0,0,0,0.25)]"
      >
        <span className="sr-only">
          {isPlaying ? "Поставить на паузу" : "Воспроизвести"}
        </span>
        <div className="ml-[2px] h-0 w-0 border-y-[7px] border-y-transparent border-l-[11px] border-l-[#7a541b]" />
      </button>
    </div>
  );
}

function DemoDialogSection() {
  return (
    <Section id="demo-dialog" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <ScrollReveal variants={fadeUp}>
          <motion.div
            className="relative overflow-hidden rounded-[40px] shadow-[0_34px_80px_rgba(15,23,42,0.52)]"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Фоновая картинка без дополнительного квадрата позади */}
            <div className="absolute inset-0">
              <Image
                src="/demo/DemoDialog.jpg"
                alt="Марсианский пейзаж — фон демо-диалога"
                fill
                priority
                sizes="(min-width: 1024px) 1120px, 100vw"
                className="object-cover"
              />
              {/* Градиент, чтобы текст слева читался на любой картинке */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(0,0,0,0.78)_0,rgba(0,0,0,0.78)_32%,rgba(0,0,0,0.35)_62%,rgba(0,0,0,0.2)_100%)]" />
            </div>

            {/* Контент поверх картинки */}
            <div className="relative z-10 grid items-stretch gap-8 px-8 py-9 md:px-12 md:py-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
              {/* Левая часть — текст про демо-звонок */}
              <div className="flex flex-col justify-between text-[#f9f5ec]">
                <div className="space-y-4">
                  <p className="inline-flex items-center rounded-full bg-[rgba(0,0,0,0.55)] px-4 py-1 text-[11px] uppercase tracking-[0.24em] text-[rgba(249,245,236,0.86)]">
                    Демо диалог · реальный звонок
                  </p>

                  <h2 className="text-2xl md:text-3xl lg:text-[32px] font-semibold leading-snug">
                    Послушайте, как Мария и Пётр отрабатывают ваши сценарии
                  </h2>

                  <p className="max-w-xl text-sm md:text-base text-[rgba(249,245,236,0.86)]">
                    Небольшой фрагмент живого разговора: Мария отвечает на
                    входящий звонок, Пётр делает follow-up и доводит клиента
                    до встречи. Точно такой же стиль общения и логика работы,
                    как будут у вас.
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.18em] text-[rgba(249,245,236,0.8)]">
                  <span className="rounded-full bg-[rgba(0,0,0,0.55)] px-4 py-1">
                    40–60 секунд
                  </span>
                  <span className="rounded-full bg-[rgba(0,0,0,0.55)] px-4 py-1">
                    можно слушать прямо на сайте
                  </span>
                  <span className="rounded-full bg-[rgba(0,0,0,0.55)] px-4 py-1">
                    голос + логика диалога
                  </span>
                </div>
              </div>

              {/* Правая часть — белая карточка с плеером */}
              <div className="flex items-center">
                <div className="w-full rounded-[28px] bg-[rgba(255,252,247,0.98)] px-7 py-6 shadow-[0_26px_70px_rgba(0,0,0,0.45)]">
                  <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
                    Фрагмент работы цифровых сотрудников
                  </p>

                  <p className="mb-5 text-sm text-[var(--text-secondary)]">
                    Нажмите на кнопку, чтобы услышать, как Мария бережно
                    коммуницирует с клиентом, а Пётр аккуратно доводит его
                    до встречи.
                  </p>

                  <AudioWavePlayer />

                  <p className="mt-4 text-[10px] text-[var(--text-muted)]">
                    Можно ставить на паузу, слушать несколько раз и показывать
                    коллегам.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </Section>
  );
}





  const OUTCOME_ROWS: string[][] = [
  [
    "Не терять входящие звонки",
    "24/7 обработка заявок",
    "Меньше нагрузки на администраторов",
    "Больше записей на приёмы",
    "Сокращение потерь из-за пропущенных лидов",
  ],
  [
    "Автоматический follow-up",
    "Напоминания клиентам без ручной рутины",
    "Чистая CRM без дыр в воронке",
    "Контроль качества диалогов",
    "Стабильный поток встреч",
  ],
  [
    "Снижение затрат на найм и обучение",
    "Прозрачная аналитика звонков и заявок",
    "Быстрый запуск без отдела разработки",
    "Масштабирование без расширения штата",
    "Гибкая подстройка под процессы компании",
  ],
];



export default function HomePage() {
  return (
    <main className="min-h-screen w-full">

      
{/* HERO с видео-фоном */}
<section className="relative w-full min-h-screen overflow-hidden bg-[#050301]">
  {/* Видео-слой (самый нижний) */}
  <video
    className="absolute inset-0 z-0 h-full w-full object-cover"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="/video/desert-hero.mp4" type="video/mp4" />
  </video>

  {/* Мягкий градиент поверх видео, но с прозрачностью */}
  <div
    className="pointer-events-none absolute inset-0 z-10"
    style={{
      background:
        "radial-gradient(circle at top left, rgba(248,248,244,0.7) 0%, rgba(248,248,244,0.5) 35%, rgba(248,248,244,0.3) 55%, rgba(0,0,0,0.65) 100%)",
    }}
  />

  {/* Контент hero (самый верхний слой) */}
  <div className="relative z-20 max-w-6xl mx-auto px-4 pt-32 pb-28">
    <ScrollReveal variants={fadeUp} className="max-w-3xl space-y-8">
      <p className="text-[11px] tracking-[0.24em] uppercase text-[var(--text-muted)]">
        ЦИФРОВЫЕ СОТРУДНИКИ ДЛЯ РЕАЛЬНОГО БИЗНЕСА
      </p>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-[var(--text-primary)]">
        Цифровые сотрудники{" "}
        <span className="text-[var(--gold-strong)]"></span>, которые
        работают вместо команды людей. Эффективней людей.
      </h1>

      <p className="text-base md:text-lg text-[var(--text-secondary)] max-w-xl">
        Мария отвечает на звонки и сообщения, Пётр ищет клиентов и дожимает лиды до
        встречи. Они говорят голосом, пишут письма и встраиваются в ваши процессы.
      </p>

      <div className="flex flex-wrap items-center gap-4">
        <Link href="/start">
          <Button className="px-7 py-3 text-sm">Начать с консультации</Button>
        </Link>
        <Link href="/products">
          <Button variant="ghost" className="px-7 py-3 text-sm">
            Смотреть продукты
          </Button>
        </Link>
      </div>

      <p className="text-[11px] text-[var(--text-muted)]">
        Без найма, отпусков и выгорания. Вы оплачиваете не людей, а результат их работы.
      </p>
    </ScrollReveal>
  </div>
</section>



{/* МАРИЯ / ПЁТР – Meet your digital employees */}
<Section
  id="maria-petr"
  className=" pt-16 pb-20 space-y-10"
>
  <ScrollReveal variants={fadeUp} className="text-center space-y-4">
    <p className="text-[11px] tracking-[0.24em] uppercase text-[var(--text-muted)]">
      MEET YOUR DIGITAL EMPLOYEES
    </p>
    <h2 className="text-2xl md:text-3xl lg:text-[32px] font-semibold text-[var(--text-primary)]">
      Два цифровых сотрудника, которые закрывают большую часть рутины
    </h2>
    <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-2xl mx-auto">
      Мария берёт на себя сервис, запись и входящие обращения. Пётр — продажи,
      письма и follow-up. Вместе они ведут клиентов от первого контакта до
      встречи.
    </p>
  </ScrollReveal>

  <div className="grid gap-8 md:grid-cols-2">
    {/* Карточка Марии */}
    <ScrollReveal variants={fadeUp}>
      <article className="h-full rounded-[32px] bg-[var(--glass-bg)]/80 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] shadow-[0_26px_60px_rgba(15,23,42,0.08)] p-5 md:p-6 flex flex-col gap-5">
        {/* Превью Марии */}
        <div className="relative w-full aspect-[3/4] overflow-hidden rounded-3xl bg-[var(--sand-soft)]/80 border border-[var(--glass-border)]">
          <Image
            src="/menegers/maria.png"
            alt="Мария — цифровой администратор Endora AI"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
            priority
          />

          <div className="absolute left-4 bottom-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] bg-[var(--glass-bg)]/80 border border-[var(--glass-border)] text-[var(--text-secondary)]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Мария · в сети
          </div>
        </div>

        {/* Текстовая часть */}
        <div className="space-y-3 text-sm text-[var(--text-secondary)]">
          <h3 className="text-base font-semibold text-[var(--text-primary)]">
            Мария · цифровой администратор
          </h3>
          <p>
            Заботится о клиентах, отвечает на звонки и сообщения, записывает и
            переносит встречи — вежливо, без усталости и 24/7.
          </p>
          <ul className="space-y-1">
            <li>· Виртуальный администратор и оператор входящих звонков</li>
            <li>· Работает в телефонии, WhatsApp, Telegram и на сайте</li>
            <li>· Готовые сценарии: запись, перенос, отмена, FAQ</li>
            <li>
              · Идеальна для клиник, салонов, студий и сервисного бизнеса
            </li>
          </ul>
          <div className="flex items-center justify-between pt-2">
            <p className="text-xs text-[var(--text-muted)]">
              Тарифы: от 25 000 / мес
            </p>
            <Link href="/maria">
              <Button variant="ghost" className="px-4 py-2 text-xs">
                Подробнее о Марии
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </ScrollReveal>

    {/* Карточка Петра */}
    <ScrollReveal variants={fadeUp}>
      <article className="h-full rounded-[32px] bg-[var(--glass-bg)]/80 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] shadow-[0_26px_60px_rgba(15,23,42,0.08)] p-5 md:p-6 flex flex-col gap-5">
        {/* Превью Петра */}
        <div className="relative w-full aspect-[3/4] overflow-hidden rounded-3xl bg-[var(--sand-soft)]/80 border border-[var(--glass-border)]">
          <Image
            src="/menegers/piter.png"
            alt="Пётр — цифровой продавец Endora AI"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />

          <div className="absolute left-4 bottom-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] bg-[var(--glass-bg)]/80 border border-[var(--glass-border)] text-[var(--text-secondary)]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Пётр · активная кампания
          </div>
        </div>

        {/* Текстовая часть */}
        <div className="space-y-3 text-sm text-[var(--text-secondary)]">
          <h3 className="text-base font-semibold text-[var(--text-primary)]">
            Пётр · цифровой продавец
          </h3>
          <p>
            Ищет клиентов, пишет письма и сообщения, делает follow-up и
            дожимает лиды до встречи — без выгорания и человеческого фактора.
          </p>
          <ul className="space-y-1">
            <li>· AI-SDR для B2B-продаж и outbound-кампаний</li>
            <li>· Email, мессенджеры, CRM — всё в одном контуре</li>
            <li>· Сценарии: холодный аутрич, прогрев, «разбудить базу»</li>
            <li>· Подходит для IT, услуг, SaaS и сложных B2B-продуктов</li>
          </ul>
          <div className="flex items-center justify-between pt-2">
            <p className="text-xs text-[var(--text-muted)]">
              Тарифы: от 35 000 / мес
            </p>
            <Link href="/petr">
              <Button variant="ghost" className="px-4 py-2 text-xs">
                Подробнее о Пётре
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </ScrollReveal>
  </div>
</Section>


{/* РЕЗУЛЬТАТЫ / OUTCOMES ПОД МАРИЕЙ И ПЕТРОМ */}
<Section id="outcomes" className="py-24">
  <ScrollReveal variants={fadeUp} className="max-w-3xl mx-auto text-center space-y-5">
    <p className="text-[11px] tracking-[0.24em] uppercase text-[var(--text-muted)]">
      РЕЗУЛЬТАТЫ ДЛЯ БИЗНЕСА
    </p>

    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--text-primary)]">
      Цифровые сотрудники усиливают команду, а не заменяют её
    </h2>

    <p className="text-base md:text-lg text-[var(--text-secondary)]">
      Мария и Пётр берут на себя звонки, заявки и follow-up. Клиенты получают живое,
      человеческое общение, а ты - предсказуемый поток встреч и меньше потерь по дороге.
    </p>

          <Link href="/start">
        <Button className="px-8 py-3 text-sm">
          Посмотреть, как это работает
        </Button>
      </Link>

  </ScrollReveal>

  <div className="mt-14">
    <div className="outcomes-shell">
      {/* Центральная мини-карточка, как у 11x */}
      <div className="outcomes-central-card">
        <div className="outcomes-central-card-copy">
          <p className="outcomes-central-tag">Кейс клиники</p>
          <h3 className="outcomes-central-title">
            +30% записей без найма новой смены
          </h3>
          <p className="outcomes-central-text">
            Клиника с тремя администраторами переносит записи, отмены и напоминания
            на Марию. Пётр догревает пропущенные заявки и делает follow-up по базе.
            В итоге меньше потерь, больше оплаченных приёмов и спокойная команда без перегруза.
          </p>
          <ul className="outcomes-central-list">
            <li>Не теряем входящие звонки и заявки</li>
            <li>Follow-up и напоминания уходят из головы людей в систему</li>
            <li>Команда фокусируется на сложных задачах, а не на рутине</li>
          </ul>
        </div>

        {/* Макет «мини-интерфейса», как у 11x */}
        <div className="outcomes-central-ui">
          <div className="outcomes-central-ui-window">
            <div className="outcomes-ui-header">
              <span className="outcomes-ui-dot" />
              <span className="outcomes-ui-dot" />
              <span className="outcomes-ui-dot" />
              <span className="outcomes-ui-title">Сегодня</span>
            </div>

            <div className="outcomes-ui-body">
              <div className="outcomes-ui-line">
                <span className="outcomes-ui-label">Мария</span>
                <span className="outcomes-ui-pill">20 входящих звонков</span>
              </div>
              <div className="outcomes-ui-line">
                <span className="outcomes-ui-label">Пётр</span>
                <span className="outcomes-ui-pill">12 follow-up по заявкам</span>
              </div>
              <div className="outcomes-ui-line outcomes-ui-line-muted">
                <span className="outcomes-ui-label">Команда</span>
                <span className="outcomes-ui-pill">+7 назначенных встреч</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Три ряда бегущих чипов - теперь в «окне» */}
      <div className="outcomes-marquee-stack">
        {OUTCOME_ROWS.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={
              "outcomes-marquee-viewport" +
              (rowIndex % 2 === 1 ? " outcomes-marquee-viewport--reverse" : "")
            }
          >
            <div
              className="outcomes-marquee-row"
              aria-hidden="true"
            >
              {[...row, ...row].map((label, index) => (
                <div key={`${rowIndex}-${index}`} className="outcomes-pill">
                  {label}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</Section>


{/* КАК МЫ РАБОТАЕМ / HOW IT WORKS */}
<Section id="how-it-works" className="pb-24 pt-10">
  {/* Заголовок + тайминг */}
  <ScrollReveal variants={fadeUp} className="text-center space-y-3">
    <p className="text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">
      How it works
    </p>

    <h2 className="text-2xl md:text-3xl font-semibold text-[var(--text-primary)]">
      Как мы внедряем цифровых сотрудников под процессы компании
    </h2>

    <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-2xl mx-auto">
      Мы не продаём «бота из коробки». Мария и Пётр встраиваются в ваши воронки,
      телефонию, CRM и каналы коммуникации так, чтобы не ломать текущий поток,
      а усиливать команду.
    </p>

    <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
      обычно 2–4 недели от первой встречи до запуска
    </p>
  </ScrollReveal>

  {/* Лента шагов – «дорожка» над карточками */}
  <ScrollReveal variants={fadeUp} className="mt-10 hidden md:block">
    <div className="how-rail-shell max-w-4xl mx-auto">
      <div className="how-rail-line" />
      <div className="relative z-10 flex justify-between">
        {[
          "Диагностика процессов",
          "Проектирование ролей",
          "Обучение и интеграция",
          "Запуск и рост",
        ].map((label, index) => (
          <div key={label} className="flex flex-col items-center gap-2">
            <div className="how-rail-dot">
              <span className="how-rail-dot-number">{index + 1}</span>
            </div>
            <span className="text-[11px] text-[var(--text-muted)] text-center max-w-[9rem]">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </ScrollReveal>

  {/* Карточки шагов */}
  <ScrollReveal
    variants={fadeUpStaggerContainer}
    className="mt-10 grid gap-6 md:grid-cols-4 text-sm text-[var(--text-secondary)]"
  >
    {[
      {
        step: "Шаг 1",
        title: "Диагностика процессов",
        do: [
          "Созваниваемся с командой, смотрим звонки, заявки, письма и CRM.",
        ],
        gain:
          "На руках карта воронки и список точек, где цифровой сотрудник даст максимальный эффект.",
      },
      {
        step: "Шаг 2",
        title: "Проектирование ролей",
        do: [
          "Определяем, где работает Мария, где Пётр и какие задачи они забирают.",
        ],
        gain:
          "Появляется понятная схема «кто за что отвечает», без страха, что ИИ будет мешать людям.",
      },
      {
        step: "Шаг 3",
        title: "Обучение и интеграция",
        do: [
          "Берём скрипты, переписку, записи звонков, подключаем телефонию и мессенджеры.",
        ],
        gain:
          "Первая версия Марии и Петра начинает работать на реальном трафике под контролем живой команды.",
      },
      {
        step: "Шаг 4",
        title: "Запуск и рост",
        do: [
          "Смотрим метрики, докручиваем сценарии, масштабируем нагрузку и зону ответственности.",
        ],
        gain:
          "Предсказуемый поток звонков и встреч, понятная отчётность и устойчивая экономика по штату.",
      },
    ].map((item) => (
      <ScrollReveal
        key={item.step}
        variants={fadeUpItem}
        className="how-card flex flex-col gap-3"
      >
        <div className="flex items-center justify-between text-xs font-semibold text-[var(--text-muted)]">
          <span>{item.step}</span>
          {/* можно дописать тайминг по шагу, если захочешь */}
        </div>

        <p className="font-medium text-[var(--text-primary)]">
          {item.title}
        </p>

        <div className="space-y-2">
          <p className="how-card-label">Что делаем</p>
          <ul className="space-y-1">
            {item.do.map((line) => (
              <li key={line} className="leading-snug">
                {line}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2 mt-2">
          <p className="how-card-label how-card-label--accent">
            Что получает бизнес
          </p>
          <p className="leading-snug">
            {item.gain}
          </p>
        </div>
      </ScrollReveal>
    ))}
  </ScrollReveal>

  {/* CTA под блоком – ведёт на форму /start */}
  <ScrollReveal variants={fadeUp} className="mt-10 flex justify-center">
    <Link href="/start">
      <Button className="px-8 py-3 text-sm">
        Разобрать ваши процессы на консультации
      </Button>
    </Link>
  </ScrollReveal>
</Section>



{/* ДЛЯ КОГО / ТАРИФНЫЙ ТИЗЕР */}
<Section id="who-for" className="pb-16 pt-10">
  <div className="grid gap-10 lg:grid-cols-2 items-start">
    {/* Левая часть – кому и как можно расти */}
    <ScrollReveal variants={fadeUp} className="space-y-4">
      <p className="text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">
        Для кого
      </p>

      <h2 className="text-2xl md:text-3xl font-semibold text-[var(--text-primary)]">
        От малого бизнеса до цифрового отдела под ключ
      </h2>

      <p className="text-sm md:text-base text-[var(--text-secondary)]">
        Можно зайти с простого шаблонного бота, а затем перейти к
        полноценному цифровому отделу, где несколько Марий и Петров
        закрывают большинство коммуникаций.
      </p>

      {/* Сегменты бизнеса — в виде небольших «пилюль» */}
      <div className="flex flex-wrap gap-2 pt-2 text-xs md:text-[13px]">
        <span className="inline-flex items-center rounded-full px-3 py-1 bg-[rgba(255,255,255,0.7)] border border-[rgba(255,255,255,0.9)]">
          Малый бизнес · салон, клиника, студия, сервис
        </span>
        <span className="inline-flex items-center rounded-full px-3 py-1 bg-[rgba(255,255,255,0.55)] border border-[rgba(255,255,255,0.8)]">
          Средний бизнес · отдел продаж, заявки, поддержка
        </span>
        <span className="inline-flex items-center rounded-full px-3 py-1 bg-[rgba(255,255,255,0.45)] border border-[rgba(255,255,255,0.75)]">
          Enterprise · цифровой отдел с глубокой интеграцией
        </span>
      </div>

      <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--text-muted)] pt-1">
        можно начать с тарифа 0 и шаг за шагом прийти к цифровому отделу
      </p>

      <Link href="/products">
        <Button variant="ghost" className="mt-4 px-6 py-2 text-xs">
          Смотреть тарифы и примеры конфигураций
        </Button>
      </Link>
    </ScrollReveal>

    {/* Правая часть – трек тарифов, как лестница роста */}
    <ScrollReveal
      variants={fadeUpStaggerContainer}
      className="pricing-track-shell"
    >
      {[
        {
          segment: "Старт",
          badge: "Попробовать",
          title: "Тариф 0 · Шаблонный бот",
          subtitle: "Минимальный вход без внедрения",
          text: "Простой сценарный бот, чтобы понять формат цифрового сотрудника и посмотреть на первые заявки.",
          price: "от 10 000 / мес",
        },
        {
          segment: "Операционка",
          badge: "Админ",
          title: "Мария · Базовый администратор",
          subtitle: "Голос + мессенджер",
          text: "Запись, переносы, напоминания и ответы на типовые вопросы во входящих каналах.",
          price: "от 25 000 / мес",
        },
        {
          segment: "Продажи",
          badge: "Продажи",
          title: "Пётр · Базовый продавец",
          subtitle: "AI-SDR для B2B и аутрича",
          text: "Исходящие звонки и сообщения, догрев лидов, первичная квалификация без тяжёлой интеграции.",
          price: "от 35 000 / мес",
        },
        {
          segment: "Digital Dept",
          badge: "Максимум",
          title: "Смарт-отдел и Digital Dept",
          subtitle: "Несколько ролей + интеграции",
          text: "Мария, Пётр и дополнительные роли, глубоко встроенные в CRM, телефонию, BI и отчётность.",
          price: "Интеграция: от 200 000 ₽, абонплата: от 80 000 ₽ / мес",
        },
      ].map((item) => (
        <ScrollReveal
          key={item.title}
          variants={fadeUpItem}
          className="pricing-card-wrapper"
        >
          <div className="pricing-track-dot" />
          <div className="pricing-card">
            <div className="flex items-start justify-between gap-3 mb-2">
              <div>
                <p className="pricing-card-segment">{item.segment}</p>
                <h3 className="pricing-card-title">{item.title}</h3>
                <p className="pricing-card-subtitle">{item.subtitle}</p>
              </div>
              <span className="pricing-card-badge">{item.badge}</span>
            </div>

            <p className="pricing-card-text">{item.text}</p>
            <p className="pricing-card-price">{item.price}</p>
          </div>
        </ScrollReveal>
      ))}
    </ScrollReveal>
  </div>
</Section>


{/* ДЕМО-ДИАЛОГ МАРИИ И ПЕТРА */}
 {/*  <DemoDialogSection />  */}



    </main>
  );
}
