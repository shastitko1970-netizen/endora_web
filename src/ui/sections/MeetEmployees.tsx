"use client";

export function MeetEmployees() {
  return (
    <div className="w-full">
      {/* Заголовок */}
      <h2 className="text-3xl font-semibold text-center mb-16">
        Познакомься с Марией и Пётром
      </h2>

      {/* Два холдера под будущие видео/изображения */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Мария */}
        <div className="rounded-3xl bg-[var(--glass-bg)]/50 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] p-6">
          <div className="h-48 rounded-2xl bg-black/10 mb-4" /> {/* placeholder для видео */}
          <h3 className="text-lg font-semibold">Мария</h3>
        </div>

        {/* Пётр */}
        <div className="rounded-3xl bg-[var(--glass-bg)]/50 border border-[var(--glass-border)] backdrop-blur-[var(--glass-blur)] p-6">
          <div className="h-48 rounded-2xl bg-black/10 mb-4" />
          <h3 className="text-lg font-semibold">Пётр</h3>
        </div>
      </div>
    </div>
  );
}
