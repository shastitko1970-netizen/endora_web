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

export default function BlogPage() {
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
              <Link href="#vision">
                <Button className="px-7 py-3 text-sm">
                  Прочитать видение Endora AI
                </Button>
              </Link>
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
              Если коротко — это место, где можно понять, как цифровые
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
              Ниже — структура будущего блога. Первый материал уже доступен, ещё
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
          {/* Карта 1 — опубликованная статья */}
          <ScrollReveal
            variants={fadeUpItem}
            className="group rounded-3xl bg-[var(--glass-bg)]/90 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] p-5 flex flex-col justify-between shadow-[0_18px_50px_rgba(15,23,42,0.14)] transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="space-y-3">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
                Статья · Видение
              </p>
              <h3 className="text-base md:text-lg font-semibold text-[var(--text-primary)] group-hover:underline">
                Зачем бизнесу цифровые сотрудники, а не «очередной бот»
              </h3>
              <p>
                Разбираем базовую идею Endora AI: почему мы делаем именно
                цифровых сотрудников, с чего начинаем и что хотим изменить в
                повседневной работе команд.
              </p>
            </div>
            <div className="pt-4 flex items-center justify-between text-[11px] text-[var(--text-muted)]">
              <span>Ноябрь 2025 · ~7 минут чтения</span>
              <Link href="#vision" className="underline underline-offset-4">
                Читать
              </Link>
            </div>
          </ScrollReveal>

          {/* Карта 2 — кейсы (плейсхолдер) */}
          <ScrollReveal
            variants={fadeUpItem}
            className="rounded-3xl bg-[var(--glass-bg)]/60 border border-dashed border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] p-5 flex flex-col justify-between text-[var(--text-secondary)]"
          >
            <div className="space-y-3 opacity-70">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
                Кейсы · Скоро
              </p>
              <h3 className="text-base md:text-lg font-semibold text-[var(--text-primary)]">
                Реальные внедрения: клиники, сервис, B2B-продажи
              </h3>
              <p>
                Подборка кейсов: как Мария и Пётр закрывают звонки, записи,
                письма и follow-up, какие метрики меняются и какие выводы мы
                делаем вместе с клиентами.
              </p>
            </div>
            <div className="pt-4 text-[11px] text-[var(--text-muted)]">
              Материал в подготовке — появится после первых пилотов.
            </div>
          </ScrollReveal>

          {/* Карта 3 — практические разборы (плейсхолдер) */}
          <ScrollReveal
            variants={fadeUpItem}
            className="rounded-3xl bg-[var(--glass-bg)]/60 border border-dashed border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] p-5 flex flex-col justify-between text-[var(--text-secondary)]"
          >
            <div className="space-y-3 opacity-70">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
                Практика · Скоро
              </p>
              <h3 className="text-base md:text-lg font-semibold text-[var(--text-primary)]">
                Как подготовить процессы к цифровому сотруднику
              </h3>
              <p>
                Серия материалов о том, как описать воронку, привести в порядок
                скрипты и не утонуть в настройках, когда появляется новый
                цифровой сотрудник.
              </p>
            </div>
            <div className="pt-4 text-[11px] text-[var(--text-muted)]">
              Черновики уже есть — доводим до формата статьи.
            </div>
          </ScrollReveal>
        </ScrollReveal>
      </Section>

      {/* ПЕРВАЯ СТАТЬЯ: ВИДЕНИЕ ENDORA AI */}
      <Section
        id="vision"
        className="pb-16 border-t border-[rgba(15,23,42,0.04)]"
      >
        <ScrollReveal
          variants={fadeUp}
          className="max-w-5xl mx-auto px-4 space-y-6"
        >
          <div className="space-y-2">
            <p className="text-[11px] tracking-[0.24em] uppercase text-[var(--text-muted)]">
              Статья · Видение Endora AI
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--text-primary)]">
              Зачем мы делаем цифровых сотрудников и с чего начинаем
            </h2>
            <p className="text-[11px] text-[var(--text-muted)]">
              Ноябрь 2025 · автор: Ярослав Бросман, CPO & Co-Founder Endora AI
            </p>
          </div>

          <div className="prose prose-sm md:prose-base max-w-none prose-p:text-[var(--text-secondary)] prose-headings:text-[var(--text-primary)] prose-li:text-[var(--text-secondary)] prose-ul:marker:text-[var(--text-muted)]">
            <p>
              Наша идея проста: у бизнеса должно быть не ещё одно окно с ботом,
              а реальные цифровые сотрудники, которые берут на себя часть
              работы и отвечают за результат.
            </p>

            <h3>От бота к цифровому сотруднику</h3>
            <p>
              Классический бот - это набор кнопок и скриптов. Он живёт отдельно
              от процессов: не видит, что происходит в других каналах, не знает
              историю клиента и не отвечает за итог.
            </p>
            <p>
              Цифровой сотрудник - это роль с понятной зоной ответственности.
              Мария отвечает за сервис и запись, Пётр - за поиск клиентов и
              follow-up. У каждого есть свои задачи, каналы и метрики, на
              которые он влияет.
            </p>

            <h3>Где мы стартуем: голос, текст и B2B</h3>
            <p>
              Первое направление Endora AI - голосовые и текстовые цифровые
              сотрудники для сфер с большим объёмом однотипных коммуникаций:
              входящие звонки, запись и подтверждения, письма, догоняющие
              сообщения, поддержка.
            </p>
            <p>
              Мария берёт на себя сервис: звонки, сообщения, запись, переносы,
              напоминания. Пётр работает с исходящими коммуникациями: письма,
              follow-up, оживление старой базы. Вместе они закрывают заметную
              часть рутины отделов сервиса и продаж.
            </p>

            <h3>Почему это не игрушка ради эксперимента</h3>
            <p>
              Мы делаем так, чтобы цифровые сотрудники были частью процессов
              компании, а не отдельной «штукой». Важно не только то, что они
              говорят или пишут, но и то, что происходит после диалога:
              создаётся ли заявка, ставится ли задача, меняется ли статус
              сделки.
            </p>
            <p>В любом проекте есть три слоя:</p>
            <ul>
              <li>общение с клиентом;</li>
              <li>логика действий;</li>
              <li>связь с внутренними системами.</li>
            </ul>
            <p>
              Клиент видит только первый слой, но ценность дают второй и третий.
            </p>

            <h3>Куда всё движется дальше</h3>
            <p>
              Ближайшая цель - чтобы для малого и среднего бизнеса цифровые
              сотрудники стали таким же привычным инструментом, как CRM или
              телефония, без налёта «экспериментальности».
            </p>
            <p>
              Дальше мы будем добавлять новых цифровых сотрудников под другие
              роли: внутреннюю поддержку команды, работу с документами,
              аналитику, контроль задач. Начинаем с самых прикладных процессов,
              где эффект видно сразу.
            </p>

            <h3>Зачем следить за этим блогом</h3>
            <p>
              Здесь мы будем показывать путь честно: что работает, что оказалось
              сложнее, какие решения пришлось пересобрать.
            </p>
            <p>
              Если вы только присматриваетесь к цифровым сотрудникам и хотите
              понять, как это выглядит в реальности, этот блог про это.
            </p>
            <p>
              Если у вас уже есть выстроенные процессы и понятно, где болит
              сильнее всего, можно просто прийти с задачей. Мы разберём воронку
              и предложим, какую роль цифровой сотрудник может взять на себя в
              первую очередь.
            </p>
          </div>

          <div className="pt-4">
            <Link href="/start">
              <Button className="px-8 py-3 text-sm">
                Обсудить, подойдёт ли вам цифровой сотрудник
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </Section>
    </main>
  );
}
