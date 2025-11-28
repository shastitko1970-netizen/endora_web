// src/ui/primitives/Footer.tsx
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-[var(--glass-border)]/70 bg-[var(--sand-soft)]/60 mt-24">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 space-y-6">
        {/* Верхняя сетка карточек */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {/* Логотип / бренд */}
          <div className="space-y-4">
            <div className="rounded-3xl bg-[var(--glass-bg)]/85 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] px-5 py-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-[var(--gold-soft)]/80 flex items-center justify-center">
                  <Image
                    src="/logo-endora-mark.svg"
                    alt="Endora AI"
                    width={32}
                    height={32}
                    className="opacity-90"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-[var(--text-primary)]">
                    Endora AI
                  </span>
                  <span className="text-[11px] text-[var(--text-muted)]">
                    Digital employees
                  </span>
                </div>
              </div>
            </div>

            {/* Workers / Мария / Пётр */}
            <div className="rounded-3xl bg-[var(--glass-bg)]/85 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] px-5 py-5">
              <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3">
                Цифровые сотрудники
              </h4>
              <ul className="space-y-1 text-sm text-[var(--text-secondary)]">
                <li>
                  <Link
                    href="/maria"
                    className="hover:text-[var(--gold-strong)] transition"
                  >
                    Мария · цифровой администратор
                  </Link>
                </li>
                <li>
                  <Link
                    href="/petr"
                    className="hover:text-[var(--gold-strong)] transition"
                  >
                    Пётр · цифровой продавец
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Быстрые ссылки */}
          <div className="rounded-3xl bg-[var(--glass-bg)]/85 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] px-5 py-6">
            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-4">
              Навигация
            </h4>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li>
                <Link
                  href="/"
                  className="hover:text-[var(--gold-strong)] transition"
                >
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-[var(--gold-strong)] transition"
                >
                  Продукты
                </Link>
              </li>
              <li>
                <Link
                  href="/company"
                  className="hover:text-[var(--gold-strong)] transition"
                >
                  Компания
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-[var(--gold-strong)] transition"
                >
                  Блог
                </Link>
              </li>
              <li>
                <Link
                  href="/start"
                  className="hover:text-[var(--gold-strong)] transition"
                >
                  Начать
                </Link>
              </li>
            </ul>
          </div>

          {/* Адрес / локации */}
          <div className="space-y-4">
            <div className="rounded-3xl bg-[var(--glass-bg)]/85 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] px-5 py-5">
              <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-1">
                Санкт-Петербург
              </h4>
              <p className="text-sm text-[var(--text-secondary)]">
                Офис и команда разработки Endora AI. Здесь живут наши цифровые
                сотрудники и инфраструктура.
              </p>
            </div>

            <div className="rounded-3xl bg-[var(--glass-bg)]/85 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] px-5 py-4">
              <p className="text-xs text-[var(--text-muted)]">
                Скоро здесь появятся адреса партнёрских офисов и дата-центров.
              </p>
            </div>
          </div>

          {/* Соцсети + легал */}
          <div className="space-y-4">
            <div className="rounded-3xl bg-[var(--glass-bg)]/85 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] px-5 py-5">
              <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3">
                Мы на связи
              </h4>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="#"
                  aria-label="Соцсеть 1"
                  className="h-9 w-9 rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)]/90 backdrop-blur-[var(--glass-blur)] flex items-center justify-center text-xs text-[var(--text-secondary)] hover:text-[var(--gold-strong)]"
                >
                  in
                </Link>
                <Link
                  href="#"
                  aria-label="Соцсеть 2"
                  className="h-9 w-9 rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)]/90 backdrop-blur-[var(--glass-blur)] flex items-center justify-center text-xs text-[var(--text-secondary)] hover:text-[var(--gold-strong)]"
                >
                  X
                </Link>
                <Link
                  href="#"
                  aria-label="Соцсеть 3"
                  className="h-9 w-9 rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)]/90 backdrop-blur-[var(--glass-blur)] flex items-center justify-center text-xs text-[var(--text-secondary)] hover:text-[var(--gold-strong)]"
                >
                  TG
                </Link>
              </div>
            </div>

            <div className="rounded-3xl bg-[var(--glass-bg)]/85 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] px-5 py-5 space-y-2 text-sm text-[var(--text-secondary)]">
              <Link
                href="/privacy"
                className="block text-left hover:text-[var(--gold-strong)]"
              >
                Политика конфиденциальности
              </Link>
              <Link
                href="/terms"
                className="block text-left hover:text-[var(--gold-strong)]"
              >
                Пользовательское соглашение
              </Link>
              <Link
                href="/cookies"
                className="block text-left hover:text-[var(--gold-strong)]"
              >
                Использование cookies
              </Link>
            </div>
          </div>
        </div>

        {/* Нижняя строчка */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 border-t border-[var(--glass-border)]/60 mt-4 pt-4">
          <p className="text-xs text-[var(--text-muted)]">
            {/* Если захочешь — вернём динамический год */}
            © Endora AI.
          </p>
          <p className="text-xs text-[var(--text-muted)]">
            Сделано с любовью.
          </p>
        </div>
      </div>
    </footer>
  );
}
