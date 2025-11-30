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

export default function MariaPage() {
  return (
    <main className="min-h-screen w-full pt-28 pb-20">
      {/* HERO: Мария + видео-заглушка */}
      <Section className="pb-16">
        <ScrollReveal
          variants={fadeUp}
          className="max-w-5xl mx-auto px-4"
        >
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-center">
            {/* Текстовая часть */}
            <div className="space-y-5">
              <p className="text-[11px] tracking-[0.24em] uppercase text-[var(--text-muted)]">
                Цифровой администратор
              </p>

              <h1 className="text-3xl md:text-4xl lg:text-[40px] font-semibold text-[var(--text-primary)] leading-tight">
                Мария — цифровой администратор, который бережно отвечает за все
                входящие обращения
              </h1>

              <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-xl">
                Она берёт на себя звонки, сообщения и запись клиентов. Вежливо
                общается, фиксирует каждый запрос, переносит и отменяет визиты,
                напоминает о приёмах и не выгорает от потока задач.
              </p>

              <ul className="text-sm text-[var(--text-secondary)] space-y-1.5">
                <li>· Отвечает голосом и в мессенджерах как живой администратор.</li>
                <li>· Работает по чёткому расписанию и правилам компании.</li>
                <li>· Освобождает команду от рутины и снижает количество потерь.</li>
              </ul>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link href="/start">
                  <Button className="px-7 py-3 text-sm">
                    Обсудить запуск Марии
                  </Button>
                </Link>
                <span className="text-[11px] text-[var(--text-muted)]">
                  Подойдёт для клиник, салонов, студий и любого сервисного бизнеса,
                  где важен каждый входящий звонок.
                </span>
              </div>
            </div>

            {/* Видео-заглушка для Марии */}
                        {/* Превью Марии — фото */}
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
                    <source src="/menegers/maria.mp4" type="video/mp4" />
                  </video>

                {/* Чип статуса */}
                <div className="absolute left-4 bottom-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] bg-[rgba(255,255,255,0.96)] border border-[rgba(15,23,42,0.06)] text-[var(--text-secondary)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Мария · в сети
                </div>
              </div>
            </div>


            
          </div>
        </ScrollReveal>
      </Section>

      {/* Блок: что именно Мария забирает на себя */}
      <Section className="pb-16 border-t border-[rgba(15,23,42,0.04)]">
        <ScrollReveal
          variants={fadeUp}
          className="max-w-5xl mx-auto px-4 space-y-4 text-center md:text-left"
        >
          <p className="text-[11px] tracking-[0.24em] uppercase text-[var(--text-muted)]">
            Роль Марии
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--text-primary)]">
            Мария берёт на себя всё, что отвлекает администраторов от людей вживую
          </h2>
          <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-3xl">
            Вместо того чтобы постоянно прыгать между звонками, чатами и ресепшеном,
            команда может спокойно работать с клиентами на месте. Мария забирает всю
            рутину по коммуникациям и записям, не теряя ни одного обращения.
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
              Коммуникация
            </p>
            <h3 className="text-base font-semibold text-[var(--text-primary)]">
              Отвечает на все входящие
            </h3>
            <ul className="space-y-1.5">
              <li>· Поднимает каждый звонок и берёт на себя «первую линию».</li>
              <li>· Отвечает в WhatsApp, Telegram и на сайте.</li>
              <li>· Использует ваши приветствия и стиль общений.</li>
            </ul>
          </ScrollReveal>

          <ScrollReveal
            variants={fadeUpItem}
            className="rounded-3xl bg-[var(--glass-bg)]/80 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.1)] flex flex-col gap-3"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
              Расписание
            </p>
            <h3 className="text-base font-semibold text-[var(--text-primary)]">
              Управляет записями и переносами
            </h3>
            <ul className="space-y-1.5">
              <li>· Записывает на приём по свободным слотам.</li>
              <li>· Переносит и отменяет визиты по правилам клиники/сервиса.</li>
              <li>· Отправляет подтверждения и инструкции по визиту.</li>
            </ul>
          </ScrollReveal>

          <ScrollReveal
            variants={fadeUpItem}
            className="rounded-3xl bg-[var(--glass-bg)]/80 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.1)] flex flex-col gap-3"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
              Забота о клиентах
            </p>
            <h3 className="text-base font-semibold text-[var(--text-primary)]">
              Снижает неявку и улучшает сервис
            </h3>
            <ul className="space-y-1.5">
              <li>· Напоминает о записи, чтобы клиент не забыл.</li>
              <li>· Отвечает на типовые вопросы без раздражения и спешки.</li>
              <li>· Передаёт сложные случаи живому специалисту.</li>
            </ul>
          </ScrollReveal>
        </ScrollReveal>
      </Section>

      {/* Для кого Мария — отдельный блок сегментов */}
      <Section className="pb-16 border-t border-[rgba(15,23,42,0.04)]">
        <ScrollReveal
          variants={fadeUp}
          className="max-w-5xl mx-auto px-4 space-y-4 text-center"
        >
          <p className="text-[11px] tracking-[0.24em] uppercase text-[var(--text-muted)]">
            Для кого
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--text-primary)]">
            Мария особенно хорошо заходит сервисному бизнесу
          </h2>
          <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-3xl mx-auto">
            Везде, где клиенты привыкли звонить и писать, а команда постоянно
            разрывается между стойкой, операционкой и телефоном, Мария даёт
            заметный эффект уже в первые недели.
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
              Клиники и здоровье
            </p>
            <ul className="space-y-1.5">
              <li>· Стоматологии и медицинские центры.</li>
              <li>· Клинико-диагностические и косметологические клиники.</li>
              <li>· Центры реабилитации и частные кабинеты.</li>
            </ul>
          </ScrollReveal>

          <ScrollReveal
            variants={fadeUpItem}
            className="rounded-3xl bg-[var(--glass-bg)]/80 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] p-5 shadow-[0_16px_45px_rgba(15,23,42,0.08)] flex flex-col gap-2"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
              Красота и сервис
            </p>
            <ul className="space-y-1.5">
              <li>· Салоны красоты, барбершопы, студии макияжа и маникюра.</li>
              <li>· SPA, массажные студии, студии загара.</li>
              <li>· Студии йоги, фитнеса и танцев.</li>
            </ul>
          </ScrollReveal>

          <ScrollReveal
            variants={fadeUpItem}
            className="rounded-3xl bg-[var(--glass-bg)]/80 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] p-5 shadow-[0_16px_45px_rgba(15,23,42,0.08)] flex flex-col gap-2"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
              Услуги и небольшие сети
            </p>
            <ul className="space-y-1.5">
              <li>· Автосервисы, детейлинг, шиномонтаж.</li>
              <li>· Школы, курсы, частные образовательные проекты.</li>
              <li>· Любой бизнес с записью по телефону или мессенджеру.</li>
            </ul>
          </ScrollReveal>
        </ScrollReveal>
      </Section>

      {/* Как запускается Мария — мини-процесс */}
      <Section className="pb-16 border-t border-[rgba(15,23,42,0.04)]">
        <ScrollReveal
          variants={fadeUp}
          className="max-w-5xl mx-auto px-4 text-center space-y-3"
        >
          <p className="text-[11px] tracking-[0.24em] uppercase text-[var(--text-muted)]">
            Как проходит запуск
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--text-primary)]">
            От первых звонков до уверенной работы в ваших процессах
          </h2>
          <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-3xl mx-auto">
            Мы не просто включаем бота. Мария учится у вашей команды: на скриптах,
            примерах переписок и реальных звонках, а затем выходит в продакшн
            под контролем живых людей.
          </p>
        </ScrollReveal>

        <ScrollReveal
          variants={fadeUpStaggerContainer}
          className="mt-8 max-w-5xl mx-auto px-4 grid gap-6 md:grid-cols-4 text-sm text-[var(--text-secondary)]"
        >
          {[
            {
              step: "Шаг 1",
              title: "Диагностика",
              text: "Разбираем текущие звонки и сообщения, смотрим, где сейчас теряются клиенты.",
            },
            {
              step: "Шаг 2",
              title: "Обучение Марии",
              text: "Собираем скрипты, примеры диалогов, FAQ и правила записи в одном месте.",
            },
            {
              step: "Шаг 3",
              title: "Пилот на реальных звонках",
              text: "Запускаем Марию на части трафика, сравниваем качество с живыми админами.",
            },
            {
              step: "Шаг 4",
              title: "Расширение роли",
              text: "Увеличиваем долю звонков и каналов, подключаем напоминания и доп. сценарии.",
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

      {/* FAQ про Марию */}
      <Section className="pb-16 border-t border-[rgba(15,23,42,0.04)]">
        <ScrollReveal
          variants={fadeUp}
          className="max-w-5xl mx-auto px-4 space-y-4"
        >
          <p className="text-[11px] tracking-[0.24em] uppercase text-[var(--text-muted)]">
            Частые вопросы
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--text-primary)]">
            Что обычно спрашивают про Марию
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
              Сколько времени занимает запуск Марии?
            </p>
            <p>
              Базовую конфигурацию обычно можно запустить за несколько недель:
              подключаем номер и мессенджеры, настраиваем расписание и скрипты,
              проверяем, как Мария ведёт себя на живых обращениях, и только после
              этого расширяем зону ответственности.
            </p>
          </ScrollReveal>

          <ScrollReveal
            variants={fadeUpItem}
            className="rounded-3xl bg-[var(--glass-bg)]/80 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] p-5 shadow-[0_14px_40px_rgba(15,23,42,0.08)]"
          >
            <p className="font-medium mb-1 text-[var(--text-primary)]">
              Мария говорит голосом или только пишет?
            </p>
            <p>
              По умолчанию Мария умеет и говорить по телефону, и работать в
              мессенджерах. Можно оставить только голос, только текст или
              комбинировать — в зависимости от того, как сейчас привыкли
              общаться ваши клиенты.
            </p>
          </ScrollReveal>

          <ScrollReveal
            variants={fadeUpItem}
            className="rounded-3xl bg-[var(--glass-bg)]/80 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] p-5 shadow-[0_14px_40px_rgba(15,23,42,0.08)]"
          >
            <p className="font-medium mb-1 text-[var(--text-primary)]">
              Мария заменяет администраторов или помогает им?
            </p>
            <p>
              Задача Марии — забрать повторяющиеся задачи и потоковые обращения.
              В сложных случаях она передаёт диалог живому сотруднику, фиксируя
              контекст. Так команда меньше выгорает и может уделять больше
              внимания людям на месте.
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
            Хочешь посмотреть, как Мария будет работать именно у тебя?
          </h2>
          <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-2xl mx-auto">
            Расскажи о своём бизнесе и текущем потоке обращений. Мы предложим
            конфигурацию Марии под твои процессы и покажем, как будет выглядеть
            работа цифрового администратора в живых сценариях.
          </p>
          <div className="flex justify-center">
            <Link href="/start">
              <Button className="px-8 py-3 text-sm">
                Разобрать твои процессы с Марией
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </Section>
    </main>
  );
}
