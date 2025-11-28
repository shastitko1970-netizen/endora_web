"use client";

export function Hero() {
  return (
    <div className="relative w-full h-[85vh] flex flex-col items-center justify-center text-center">
      {/* Место под фон-видео/картинку */}
      <div className="absolute inset-0 -z-10 bg-[url('/textures/desert-gradient.png')] bg-cover bg-center opacity-60" />

      {/* Заголовок */}
      <div className="space-y-6">
        {/* Позже подключим ScrollReveal и анимации */}
        <h1 className="text-4xl md:text-6xl font-semibold text-[var(--text-primary)]">
          Твои цифровые сотрудники
        </h1>
        <p className="max-w-2xl mx-auto text-[var(--text-secondary)]">
          Голосовые и видео-ассистенты, которые берут на себя звонки, письма и рутину.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-10 flex gap-4">
        {/* Кнопки вставятся позже */}
      </div>
    </div>
  );
}
