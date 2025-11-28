export const metadata = {
  title: "Политика использования файлов cookie — Endora AI",
};

export default function CookiesPage() {
  return (
    <main className="min-h-screen w-full pt-28 pb-20">
      <section className="max-w-4xl mx-auto px-4 space-y-8">
        <header className="space-y-3">
          <p className="text-[11px] tracking-[0.24em] uppercase text-[var(--text-muted)]">
            Юридическая информация
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-[var(--text-primary)]">
            Политика использования файлов cookie
          </h1>
          <p className="text-sm md:text-base text-[var(--text-secondary)]">
            Здесь описано, какие cookie-файлы может использовать сайт Endora AI,
            зачем они нужны и как вы можете управлять ими.
          </p>
        </header>

        <div className="space-y-6 text-sm md:text-[15px] leading-relaxed text-[var(--text-secondary)]">
          <section className="space-y-2">
            <h2 className="font-semibold text-[var(--text-primary)]">
              1. Что такое cookie
            </h2>
            <p>
              Cookie — это небольшие текстовые файлы, которые сохраняются на
              устройстве пользователя при посещении сайта. Они позволяют
              распознавать браузер, сохранять настройки и улучшать работу Сайта.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-semibold text-[var(--text-primary)]">
              2. Какие cookie мы можем использовать
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <span className="font-medium">Технически необходимые</span> — нужны
                для корректной работы Сайта, обеспечения безопасности, показа
                форм и т.п. Без них использование Сайта может быть частично
                невозможно.
              </li>
              <li>
                <span className="font-medium">Функциональные</span> — помогают
                запоминать ваши настройки и предыдущие действия (например,
                сохранённые поля форм).
              </li>
              <li>
                <span className="font-medium">Аналитические</span> — позволяют
                понимать, как пользователи взаимодействуют с Сайтом, и помогают
                улучшать интерфейсы и контент. Собранная информация
                обрабатывается в обезличенном виде.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-semibold text-[var(--text-primary)]">
              3. Для чего мы используем cookie
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>для обеспечения стабильной и безопасной работы Сайта;</li>
              <li>для запоминания ваших настроек и ранее введённых данных;</li>
              <li>для анализа посещаемости и улучшения контента и интерфейсов.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-semibold text-[var(--text-primary)]">
              4. Управление cookie
            </h2>
            <p>
              При первом посещении Сайта вы видите баннер с предложением
              согласиться на использование файлов cookie. Вы можете:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>принять все cookie;</li>
              <li>
                принять только технически необходимые cookie, отказавшись от
                аналитических;
              </li>
              <li>
                изменить настройки в браузере и удалить сохранённые cookie.
              </li>
            </ul>
            <p>
              Управление cookie осуществляется через настройки браузера. Вы
              можете удалить сохранённые cookie и запретить их использование,
              однако это может повлиять на корректность работы Сайта.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-semibold text-[var(--text-primary)]">
              5. Связь с Политикой конфиденциальности
            </h2>
            <p>
              Cookie-файлы могут относиться к персональным данным, если позволяют
              прямо или косвенно идентифицировать пользователя. Порядок обработки
              таких данных описан в{" "}
              <a
                href="/privacy"
                className="underline underline-offset-2 hover:text-[var(--gold-strong)]"
              >
                Политике конфиденциальности
              </a>
              .
            </p>
          </section>
        </div>

        <p className="text-xs text-[var(--text-muted)]">
          Дата последнего обновления: {new Date().toLocaleDateString("ru-RU")}.
        </p>
      </section>
    </main>
  );
}
