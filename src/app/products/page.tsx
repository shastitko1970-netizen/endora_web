// src/app/products/page.tsx
"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/ui/glass/Button";
import { Section } from "@/ui/primitives/Section";
import { ScrollReveal } from "@/ui/primitives/ScrollReveal";
import {
  fadeUp,
  fadeUpItem,
  fadeUpStaggerContainer,
} from "@/lib/animations/homeVariants";
import { useState, useEffect } from "react";


export const metadata: Metadata = {
  title: "Endora Core — Платформа цифровых сотрудников | Модули и возможности",
  description: "Endora Core — мозг и шина данных компании. Подключение систем, аналитика, мониторинг, коммуникации. 6 модулей для создания цифровых сотрудников под любые задачи бизнеса.",
  keywords: "endora core, цифровые сотрудники, AI платформа, бизнес аналитика, автоматизация процессов, интеграция систем",
  openGraph: {
    title: "Endora Core — Платформа цифровых сотрудников",
    description: "Мозг и шина данных компании. 6 модулей для создания AI-сотрудников под ваши задачи.",
    type: "website",
    locale: "ru_RU",
  },
};


export default function EndoraCoreПродуктыPage() {
  // Анимированные счетчики для статистики
  const [integrations, setIntegrations] = useState(0);
  const [events, setEvents] = useState(0);

  useEffect(() => {
    const intInterval = setInterval(() => {
      setIntegrations(prev => prev >= 50 ? 50 : prev + 1);
    }, 40);
    
    const eventsInterval = setInterval(() => {
      setEvents(prev => prev >= 10000 ? 10000 : prev + 200);
    }, 20);

    return () => {
      clearInterval(intInterval);
      clearInterval(eventsInterval);
    };
  }, []);

  return (
    <main className="min-h-screen w-full pt-28 pb-20">
      
      {/* HERO: Endora Core — мозг и шина данных */}
      <Section className="pb-20">
        <ScrollReveal
          variants={fadeUp}
          className="max-w-6xl mx-auto px-4 space-y-6"
        >
          <p className="text-[11px] tracking-[0.24em] uppercase text-[var(--text-muted)] text-center">
            ENDORA CORE
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--text-primary)] leading-tight text-center max-w-4xl mx-auto">
            Мозг и шина данных компании
          </h1>

          <p className="text-base md:text-lg text-[var(--text-secondary)] max-w-3xl mx-auto text-center">
            Endora Core подключается к вашим системам, собирает данные в единую модель
            и даёт «мозгу» цифровых сотрудников полный контекст: кто, что, где, когда
            и в каком состоянии.
          </p>

         {/* Анимированная статистика */}
              <ScrollReveal variants={fadeUp} className="mt-8">
                <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                  <motion.div 
                    className="text-center"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
                      {integrations}+
                    </div>
                    <p className="text-xs md:text-sm text-[var(--text-muted)] mt-1">типов интеграций</p>
                  </motion.div>

                  <motion.div 
                    className="text-center"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <div className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
                      {events.toLocaleString()}+
                    </div>
                    <p className="text-xs md:text-sm text-[var(--text-muted)] mt-1">событий в секунду</p>
                  </motion.div>

                  <motion.div 
                    className="text-center"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <div className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
                      24/7
                    </div>
                    <p className="text-xs md:text-sm text-[var(--text-muted)] mt-1">мониторинг и аудит</p>
                  </motion.div>
                </div>
              </ScrollReveal>


          {/* Видео блок */}
          <ScrollReveal variants={fadeUp} className="mt-12">
            <motion.div
              className="relative overflow-hidden rounded-[40px] shadow-[0_34px_80px_rgba(15,23,42,0.28)] border border-[var(--glass-border)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
                <video
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/menegers/team.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                <div className="absolute left-6 bottom-6 inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-sm bg-[var(--glass-bg)]/90 border border-[var(--glass-border)] text-[var(--text-secondary)] backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-medium">Endora Core в работе</span>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Ключевые возможности ядра (теперь 6!) */}
          <div className="mt-16 max-w-5xl mx-auto">
            <ScrollReveal variants={fadeUp} className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-semibold text-[var(--text-primary)] mb-3">
                Ключевые возможности ядра
              </h3>
              <p className="text-sm text-[var(--text-secondary)] max-w-2xl mx-auto">
                Всё, что нужно для превращения хаоса данных в управляемую систему
              </p>
            </ScrollReveal>

            <ScrollReveal
              variants={fadeUpStaggerContainer}
              className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
            >
              {[
                {
                  num: 1,
                  title: "Подключение всех систем",
                  desc: "CRM, телефония, мессенджеры, почта, задачи, финансы, видео и датчики — всё в одном месте",
                  gradient: "from-blue-400 to-indigo-500"
                },
                {
                  num: 2,
                  title: "Единые профили объектов",
                  desc: "Клиенты, сотрудники, точки, проекты и оборудование — каждый объект со своей историей",
                  gradient: "from-emerald-400 to-teal-500"
                },
                {
                  num: 3,
                  title: "Общий мозг на LLM",
                  desc: "Обучаемый на данных и регламентах вашей компании, понимающий контекст",
                  gradient: "from-violet-400 to-purple-500"
                },
                {
                  num: 4,
                  title: "Временная ось и аудит",
                  desc: "Полная история событий и действий — кто, что, когда и почему сделал",
                  gradient: "from-amber-400 to-orange-500"
                },
                {
                  num: 5,
                  title: "Настройки ролей и прав",
                  desc: "Собственник, руководители, линейные сотрудники — каждый видит своё",
                  gradient: "from-rose-400 to-pink-500"
                },
                {
                  num: 6,
                  title: "Event-driven архитектура",
                  desc: "Реакция в реальном времени на события — алерты, эскалации, автодействия",
                  gradient: "from-cyan-400 to-sky-500"
                }
              ].map((item, idx) => (
                <ScrollReveal
                  key={idx}
                  variants={fadeUpItem}
                  className="group relative overflow-hidden rounded-2xl bg-[var(--glass-bg)]/70 border border-[var(--glass-border)] backdrop-blur-sm p-5 hover:bg-[var(--glass-bg)]/90 hover:shadow-[0_20px_55px_rgba(15,23,42,0.15)] transition-all duration-500"
                >
                  <div className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white text-sm font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {item.num}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-[var(--text-primary)] text-sm mb-1.5 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  
                  {/* Hover эффект */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </ScrollReveal>
              ))}
            </ScrollReveal>
          </div>

          <p className="text-xs text-[var(--text-muted)] text-center max-w-2xl mx-auto mt-10 px-4">
            Всё остальное в Endora — это модули, которые навешиваются на Core
            и превращаются в конкретных цифровых сотрудников под ваши задачи.
          </p>
        </ScrollReveal>
      </Section>

      {/* ЧТО ОТЛИЧАЕТ ENDORA CORE */}
      <Section className="py-20 bg-gradient-to-b from-blue-50/30 to-transparent border-t border-[rgba(15,23,42,0.04)]">
        <ScrollReveal variants={fadeUp} className="max-w-6xl mx-auto px-4 text-center space-y-4 mb-12">
          <p className="text-[11px] tracking-[0.24em] uppercase text-[var(--text-muted)]">
            ПОЧЕМУ ENDORA CORE
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text-primary)]">
            Что отличает нас от обычных интеграций
          </h2>
        </ScrollReveal>

        <ScrollReveal
          variants={fadeUpStaggerContainer}
          className="max-w-6xl mx-auto px-4 grid gap-6 md:grid-cols-3"
        >
          {[
            {
              icon: "🧠",
              title: "Не просто интеграция",
              desc: "Мы не просто соединяем системы — мы создаём общую память и контекст для AI"
            },
            {
              icon: "🔄",
              title: "Живая система",
              desc: "Не статичные дашборды, а активная платформа, которая сама видит проблемы и предлагает решения"
            },
            {
              icon: "💹",
              title: "Модульная архитектура",
              desc: "Начните с минимума, масштабируйтесь по мере роста — платите только за то, что используете"
            }
          ].map((item, idx) => (
            <ScrollReveal
              key={idx}
              variants={fadeUpItem}
              className="rounded-3xl bg-white/80 border border-blue-100 backdrop-blur-sm p-6 text-center shadow-[0_8px_30px_rgba(59,130,246,0.08)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.12)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                {item.desc}
              </p>
            </ScrollReveal>
          ))}
        </ScrollReveal>
      </Section>

      {/* 6 МОДУЛЕЙ ПЛАТФОРМЫ */}
      <Section className="py-24 border-t border-[rgba(15,23,42,0.04)]">
        <ScrollReveal variants={fadeUp} className="max-w-6xl mx-auto px-4 text-center space-y-4 mb-12">
          <p className="text-[11px] tracking-[0.24em] uppercase text-[var(--text-muted)]">
            МОДУЛИ ПЛАТФОРМЫ
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text-primary)]">
            6 основных модулей Endora Core
          </h2>
          <p className="text-base text-[var(--text-secondary)] max-w-3xl mx-auto">
            Из этих модулей собираются конкретные цифровые сотрудники: операционный директор,
            РОП, HR-аналитик, управляющий сетью точек и другие роли.
          </p>
        </ScrollReveal>

        <ScrollReveal
          variants={fadeUpStaggerContainer}
          className="max-w-7xl mx-auto px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {/* Модуль 1: Аналитика и индексы */}
          <ScrollReveal
            variants={fadeUpItem}
            className="group rounded-3xl bg-gradient-to-br from-blue-50/60 via-indigo-50/40 to-purple-50/50 border border-blue-200/40 p-6 shadow-[0_20px_60px_rgba(59,130,246,0.12)] hover:shadow-[0_24px_70px_rgba(59,130,246,0.20)] hover:-translate-y-2 transition-all duration-500"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-blue-600/80 mb-2 font-medium">
                  МОДУЛЬ 1
                </p>
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                  Аналитика и индексы
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4">
                  Превращает хаос данных в понятные цифры, воронки и рейтинги.
                </p>
              </div>

              <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-0.5 text-base">•</span>
                  <span>Воронки, LTV, CAC, маржа, окупаемость активностей</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-0.5 text-base">•</span>
                  <span>Индексы эффективности людей, отделов и точек</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-0.5 text-base">•</span>
                  <span>Карта провалов и «красных зон» по процессам</span>
                </li>
              </ul>

              <p className="text-[10px] text-[var(--text-muted)] pt-3 border-t border-blue-200/40">
                → Цифровые сотрудники: операционный аналитик, финансовый аналитик
              </p>
            </div>
          </ScrollReveal>

          {/* Модуль 2: Дайджесты */}
          <ScrollReveal
            variants={fadeUpItem}
            className="group rounded-3xl bg-gradient-to-br from-emerald-50/60 via-teal-50/40 to-cyan-50/50 border border-emerald-200/40 p-6 shadow-[0_20px_60px_rgba(16,185,129,0.12)] hover:shadow-[0_24px_70px_rgba(16,185,129,0.20)] hover:-translate-y-2 transition-all duration-500"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-emerald-600/80 mb-2 font-medium">
                  МОДУЛЬ 2
                </p>
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                  Дайджесты и отчёты
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4">
                  Собирает все важные события в один понятный дайджест.
                </p>
              </div>

              <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5 text-base">•</span>
                  <span>Ежедневный дайджест: деньги, риски, ключевые события</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5 text-base">•</span>
                  <span>Еженедельные обзоры по отделам и точкам</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5 text-base">•</span>
                  <span>Персональные дайджесты для сотрудников</span>
                </li>
              </ul>

              <p className="text-[10px] text-[var(--text-muted)] pt-3 border-t border-emerald-200/40">
                → Цифровые сотрудники: AI-ассистент собственника, операционный директор
              </p>
            </div>
          </ScrollReveal>

          {/* Модуль 3: Мониторинг и алерты */}
          <ScrollReveal
            variants={fadeUpItem}
            className="group rounded-3xl bg-gradient-to-br from-red-50/60 via-rose-50/40 to-pink-50/50 border border-red-200/40 p-6 shadow-[0_20px_60px_rgba(239,68,68,0.12)] hover:shadow-[0_24px_70px_rgba(239,68,68,0.20)] hover:-translate-y-2 transition-all duration-500"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-400 to-rose-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-red-600/80 mb-2 font-medium">
                  МОДУЛЬ 3
                </p>
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                  Мониторинг и алерты
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4">
                  Живой радар, который круглосуточно следит за процессами.
                </p>
              </div>

              <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5 text-base">•</span>
                  <span>Контроль SLA, сроков, очередей и задержек</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5 text-base">•</span>
                  <span>Выявление нарушений регламентов</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5 text-base">•</span>
                  <span>Радары рисков: отток, выгорание, инциденты</span>
                </li>
              </ul>

              <p className="text-[10px] text-[var(--text-muted)] pt-3 border-t border-red-200/40">
                → Цифровые сотрудники: дежурный по компании, контролёр SLA
              </p>
            </div>
          </ScrollReveal>

          {/* Модуль 4: Коммуникации */}
          <ScrollReveal
            variants={fadeUpItem}
            className="group rounded-3xl bg-gradient-to-br from-violet-50/60 via-purple-50/40 to-fuchsia-50/50 border border-violet-200/40 p-6 shadow-[0_20px_60px_rgba(139,92,246,0.12)] hover:shadow-[0_24px_70px_rgba(139,92,246,0.20)] hover:-translate-y-2 transition-all duration-500"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-400 to-purple-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-violet-600/80 mb-2 font-medium">
                  МОДУЛЬ 4
                </p>
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                  Коммуникации и ассистенты
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4">
                  Понимает все разговоры — голос, чаты и почту.
                </p>
              </div>

              <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
                <li className="flex items-start gap-2">
                  <span className="text-violet-500 mt-0.5 text-base">•</span>
                  <span>Транскрибация звонков, анализ чатов и писем</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-500 mt-0.5 text-base">•</span>
                  <span>Реал-тайм подсказки по скриптам</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-500 mt-0.5 text-base">•</span>
                  <span>Поиск конфликтных диалогов</span>
                </li>
              </ul>

              <p className="text-[10px] text-[var(--text-muted)] pt-3 border-t border-violet-200/40">
                → Цифровые сотрудники: РОП, контролёр качества, ассистент поддержки
              </p>
            </div>
          </ScrollReveal>

          {/* Модуль 5: Люди и знания */}
          <ScrollReveal
            variants={fadeUpItem}
            className="group rounded-3xl bg-gradient-to-br from-amber-50/60 via-yellow-50/40 to-orange-50/50 border border-amber-200/40 p-6 shadow-[0_20px_60px_rgba(245,158,11,0.12)] hover:shadow-[0_24px_70px_rgba(245,158,11,0.20)] hover:-translate-y-2 transition-all duration-500"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-amber-600/80 mb-2 font-medium">
                  МОДУЛЬ 5
                </p>
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                  Люди и знания
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4">
                  Видит состояние команды и превращает опыт в базу знаний.
                </p>
              </div>

              <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5 text-base">•</span>
                  <span>Профили сотрудников по реальному поведению</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5 text-base">•</span>
                  <span>Мониторинг адаптации и риска выгорания</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5 text-base">•</span>
                  <span>Авто-сбор базы знаний и регламентов</span>
                </li>
              </ul>

              <p className="text-[10px] text-[var(--text-muted)] pt-3 border-t border-amber-200/40">
                → Цифровые сотрудники: HR-аналитик, наставник, хранитель регламентов
              </p>
            </div>
          </ScrollReveal>

          {/* Модуль 6: Операции, точки и рынок */}
          <ScrollReveal
            variants={fadeUpItem}
            className="group rounded-3xl bg-gradient-to-br from-slate-50/60 via-gray-50/40 to-zinc-50/50 border border-slate-200/40 p-6 shadow-[0_20px_60px_rgba(71,85,105,0.12)] hover:shadow-[0_24px_70px_rgba(71,85,105,0.20)] hover:-translate-y-2 transition-all duration-500"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-slate-400 to-gray-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-slate-600/80 mb-2 font-medium">
                  МОДУЛЬ 6
                </p>
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                  Операции, точки и рынок
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4">
                  Соединяет оффлайн-процессы, оборудование, маркетинг и продукт.
                </p>
              </div>

              <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
                <li className="flex items-start gap-2">
                  <span className="text-slate-500 mt-0.5 text-base">•</span>
                  <span>Анализ видео: очереди, простои, нарушения</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-500 mt-0.5 text-base">•</span>
                  <span>Аналитика маркетинга с фокусом на выручке</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-500 mt-0.5 text-base">•</span>
                  <span>Прогноз продаж, нагрузки и оттока</span>
                </li>
              </ul>

              <p className="text-[10px] text-[var(--text-muted)] pt-3 border-t border-slate-200/40">
                → Цифровые сотрудники: управляющий сетью, операционный контролёр
              </p>
            </div>
          </ScrollReveal>
        </ScrollReveal>
      </Section>

      {/* КАК СОБИРАЮТСЯ ПРОДУКТЫ */}
      <Section className="py-24 bg-gradient-to-b from-purple-50/20 to-transparent border-t border-[rgba(15,23,42,0.04)]">
        <ScrollReveal variants={fadeUp} className="max-w-6xl mx-auto px-4 text-center space-y-4 mb-12">
          <p className="text-[11px] tracking-[0.24em] uppercase text-[var(--text-muted)]">
            КАК РАБОТАЕТ КОНСТРУКТОР
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text-primary)]">
            Из модулей собираются конкретные цифровые сотрудники
          </h2>
          <p className="text-base text-[var(--text-secondary)] max-w-3xl mx-auto">
            Вы не покупаете все модули сразу. Вы собираете цифрового сотрудника под задачу —
            он использует только нужные модули.
          </p>
        </ScrollReveal>

        <ScrollReveal
          variants={fadeUpStaggerContainer}
          className="max-w-6xl mx-auto px-4 grid gap-6 md:grid-cols-2"
        >
          {/* Пример 1: Цифровой РОП */}
          <ScrollReveal
            variants={fadeUpItem}
            className="group rounded-3xl bg-white/90 border border-orange-100 backdrop-blur-sm p-6 shadow-[0_20px_55px_rgba(251,146,60,0.10)] hover:shadow-[0_28px_70px_rgba(251,146,60,0.18)] hover:-translate-y-1 transition-all duration-500"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white text-base font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  РОП
                </div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                  Цифровой РОП / руководитель продаж
                </h3>
              </div>

              <p className="text-sm text-[var(--text-secondary)]">
                Следит за воронкой, подсвечивает риски и дает управленческие подсказки.
              </p>

              <div className="space-y-2 text-xs">
                <p className="text-[var(--text-muted)] uppercase tracking-wider font-medium">Использует модули:</p>
                <div className="flex flex-wrap gap-2">
                  {["Ядро", "Аналитика", "Коммуникации", "Мониторинг", "Дайджесты"].map((mod) => (
                    <span
                      key={mod}
                      className="px-3 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-[10px] font-medium"
                    >
                      {mod}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Пример 2: Цифровой HR */}
          <ScrollReveal
            variants={fadeUpItem}
            className="group rounded-3xl bg-white/90 border border-amber-100 backdrop-blur-sm p-6 shadow-[0_20px_55px_rgba(245,158,11,0.10)] hover:shadow-[0_28px_70px_rgba(245,158,11,0.18)] hover:-translate-y-1 transition-all duration-500"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center text-white text-base font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  HR
                </div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                  Цифровой HR-аналитик и наставник
                </h3>
              </div>

              <p className="text-sm text-[var(--text-secondary)]">
                Видит состояние команды, обучает сотрудников и собирает базу знаний.
              </p>

              <div className="space-y-2 text-xs">
                <p className="text-[var(--text-muted)] uppercase tracking-wider font-medium">Использует модули:</p>
                <div className="flex flex-wrap gap-2">
                  {["Ядро", "Люди и знания", "Дайджесты"].map((mod) => (
                    <span
                      key={mod}
                      className="px-3 py-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-700 text-[10px] font-medium"
                    >
                      {mod}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Пример 3: Управляющий сетью точек */}
          <ScrollReveal
            variants={fadeUpItem}
            className="group rounded-3xl bg-white/90 border border-slate-100 backdrop-blur-sm p-6 shadow-[0_20px_55px_rgba(100,116,139,0.10)] hover:shadow-[0_28px_70px_rgba(100,116,139,0.18)] hover:-translate-y-1 transition-all duration-500"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-400 to-gray-500 flex items-center justify-center text-white text-base font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  ОП
                </div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                  Цифровой управляющий сетью точек
                </h3>
              </div>

              <p className="text-sm text-[var(--text-secondary)]">
                Анализирует оффлайн-точки, оборудование, продажи и выявляет проблемы.
              </p>

              <div className="space-y-2 text-xs">
                <p className="text-[var(--text-muted)] uppercase tracking-wider font-medium">Использует модули:</p>
                <div className="flex flex-wrap gap-2">
                  {["Ядро", "Операции и точки", "Аналитика", "Мониторинг", "Прогнозы"].map((mod) => (
                    <span
                      key={mod}
                      className="px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-[10px] font-medium"
                    >
                      {mod}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Пример 4: AI-дайджест для собственника */}
          <ScrollReveal
            variants={fadeUpItem}
            className="group rounded-3xl bg-white/90 border border-emerald-100 backdrop-blur-sm p-6 shadow-[0_20px_55px_rgba(16,185,129,0.10)] hover:shadow-[0_28px_70px_rgba(16,185,129,0.18)] hover:-translate-y-1 transition-all duration-500"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white text-base font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  AI
                </div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                  AI-дайджест для собственника
                </h3>
              </div>

              <p className="text-sm text-[var(--text-secondary)]">
                Минимальный быстрый вход — один дайджест в день с ключевыми событиями.
              </p>

              <div className="space-y-2 text-xs">
                <p className="text-[var(--text-muted)] uppercase tracking-wider font-medium">Использует модули:</p>
                <div className="flex flex-wrap gap-2">
                  {["Ядро", "Аналитика", "Дайджесты"].map((mod) => (
                    <span
                      key={mod}
                      className="px-3 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-[10px] font-medium"
                    >
                      {mod}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </ScrollReveal>
      </Section>

      {/* ДЛЯ КАКИХ ОТРАСЛЕЙ */}
      <Section className="py-20 border-t border-[rgba(15,23,42,0.04)]">
        <ScrollReveal variants={fadeUp} className="max-w-6xl mx-auto px-4 text-center space-y-4 mb-12">
          <p className="text-[11px] tracking-[0.24em] uppercase text-[var(--text-muted)]">
            УНИВЕРСАЛЬНАЯ ПЛАТФОРМА
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text-primary)]">
            Endora Core подходит для любой отрасли
          </h2>
        </ScrollReveal>

        <ScrollReveal
          variants={fadeUpStaggerContainer}
          className="max-w-6xl mx-auto px-4 grid gap-4 grid-cols-2 md:grid-cols-4"
        >
          {[
            { icon: "🏥", name: "Медицина" },
            { icon: "🏪", name: "Ритейл" },
            { icon: "💼", name: "B2B-услуги" },
            { icon: "📞", name: "Колл-центры" },
            { icon: "🏭", name: "Производство" },
            { icon: "🚚", name: "Логистика" },
            { icon: "💻", name: "IT и SaaS" },
            { icon: "🎓", name: "Образование" }
          ].map((industry, idx) => (
            <ScrollReveal
              key={idx}
              variants={fadeUpItem}
              className="rounded-2xl bg-[var(--glass-bg)]/60 border border-[var(--glass-border)] backdrop-blur-sm p-4 text-center hover:bg-[var(--glass-bg)]/90 hover:shadow-[0_12px_40px_rgba(15,23,42,0.08)] transition-all duration-300"
            >
              <div className="text-3xl mb-2">{industry.icon}</div>
              <p className="text-sm font-medium text-[var(--text-primary)]">{industry.name}</p>
            </ScrollReveal>
          ))}
        </ScrollReveal>
      </Section>

      {/* ФИНАЛЬНЫЙ CTA */}
      <Section className="pt-8 pb-16">
        <ScrollReveal
          variants={fadeUp}
          className="max-w-4xl mx-auto px-4 text-center space-y-6"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--text-primary)]">
            Начните с консультации
          </h2>
          <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-2xl mx-auto">
            Мы разберём ваши процессы, поймём, какие модули нужны, и соберём
            цифрового сотрудника под вашу задачу. Без переплаты за лишнее.
          </p>
          <div className="flex justify-center">
            <Link href="/start">
              <Button className="px-8 py-3.5 text-sm font-medium shadow-lg hover:shadow-xl transition-shadow">
                Обсудить внедрение Endora Core
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </Section>

    </main>
  );
}
