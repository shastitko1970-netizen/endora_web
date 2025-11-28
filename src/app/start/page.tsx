"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/ui/glass/Button";

type FormState = {
  name: string;
  phone: string;
  email: string;
  telegram: string;
  comment: string;
  privacy: boolean;
  personalData: boolean;
};

type FormErrors = Partial<FormState> & { form?: string };

const STORAGE_KEY = "endora-start-form-v1";

const initialFormState: FormState = {
  name: "",
  phone: "",
  email: "",
  telegram: "",
  comment: "",
  privacy: false,
  personalData: false,
};

export default function StartPage() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // 1) Загружаем сохранённое состояние формы из localStorage
  useEffect(() => {
    try {
      if (typeof window === "undefined") return;
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as FormState;
        setForm({ ...initialFormState, ...parsed });
      }
    } catch (e) {
      console.warn("[start] Failed to read form from localStorage", e);
    }
  }, []);

  // 2) Сохраняем форму при каждом изменении
  useEffect(() => {
    try {
      if (typeof window === "undefined") return;
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
    } catch (e) {
      console.warn("[start] Failed to save form to localStorage", e);
    }
  }, [form]);

  const updateField =
    (field: keyof FormState) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      let value = event.target.value;

      if (field === "phone") {
        // Разрешаем только цифры и +
        value = value.replace(/[^\d+]/g, "");
      }

      setForm((prev) => ({
        ...prev,
        [field]: value,
      }));

      // Сбрасываем ошибку по конкретному полю
      setErrors((prev) => ({
        ...prev,
        [field]: "",
        form: field === "name" || field === "phone" || field === "email" ? prev.form : prev.form,
      }));
    };

  const toggleCheckbox = (field: "privacy" | "personalData") => {
    setForm((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Введите имя.";
    }

    const phoneRaw = form.phone.trim();
    if (!phoneRaw) {
      newErrors.phone = "Укажите номер телефона.";
    } else {
      const cleaned = phoneRaw.replace(/\s/g, "");
      if (!/^\+?\d{7,20}$/.test(cleaned)) {
        newErrors.phone = "Телефон должен быть в международном формате: только цифры и «+».";
      }
    }

    if (!form.email.trim()) {
      newErrors.email = "Укажите адрес электронной почты.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = "Похоже, e-mail указан некорректно.";
    }

    if (!form.privacy) {
      newErrors.privacy = "Нужно подтвердить политику конфиденциальности.";
    }

    if (!form.personalData) {
      newErrors.personalData = "Нужно согласиться на обработку персональных данных.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSuccessMessage("");
    setErrors({});

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/start", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          phone: form.phone.trim(),
          email: form.email.trim(),
          telegram: form.telegram.trim() || "",
          comment: form.comment.trim() || "",
        }),
      });

      let data: any = null;
      try {
        data = await res.json();
      } catch {
        data = null;
      }

      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || "Server error");
      }

      setSuccessMessage("Заявка отправлена. Мы свяжемся с вами в ближайшее время.");
      setErrors({});

      const cleared = { ...initialFormState };
      setForm(cleared);
      if (typeof window !== "undefined") {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    } catch (error) {
      console.error("[start] handleSubmit error", error);
      setErrors((prev) => ({
        ...prev,
        form:
          "Не получилось отправить заявку. Попробуйте ещё раз или напишите нам напрямую в Telegram.",
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputBase =
    "w-full rounded-2xl border bg-[var(--glass-bg)]/70 backdrop-blur-[var(--glass-blur)] px-4 py-2.5 text-sm outline-none transition focus:border-[var(--gold-soft)]";

  const errorBorder =
    "border-[#f97316] shadow-[0_0_0_1px_rgba(248,113,113,0.35)]";

  return (
    <main className="min-h-screen w-full pt-28 pb-20">
      <section className="max-w-lg mx-auto px-4 space-y-6">
        <div className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-semibold text-[var(--text-primary)]">
            Давай запустим цифрового сотрудника
          </h1>
          <p className="text-sm md:text-base text-[var(--text-secondary)]">
            Оставьте контакты и пару слов о бизнесе. Мы вернёмся с предложением,
            как именно Мария и Пётр могут закрыть вашу рутину.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Имя */}
          <div className="space-y-1">
            <label className="text-xs font-medium text-[var(--text-muted)]">
              Имя *
            </label>
            <input
              value={form.name}
              onChange={updateField("name")}
              className={`${inputBase} ${
                errors.name ? errorBorder : "border-[var(--glass-border)]"
              }`}
              placeholder="Как к вам обращаться"
              autoComplete="name"
            />
            {errors.name && (
              <p className="text-xs text-[#c2410c]">{errors.name}</p>
            )}
          </div>

          {/* Телефон */}
          <div className="space-y-1">
            <label className="text-xs font-medium text-[var(--text-muted)]">
              Телефон *
            </label>
            <input
              value={form.phone}
              onChange={updateField("phone")}
              className={`${inputBase} ${
                errors.phone ? errorBorder : "border-[var(--glass-border)]"
              }`}
              placeholder="+7 999 123-45-67"
              inputMode="tel"
              autoComplete="tel"
            />
            <p className="text-[10px] text-[var(--text-muted)]">
              В международном формате: +код страны и номер. Можно из любой страны.
            </p>
            {errors.phone && (
              <p className="text-xs text-[#c2410c]">{errors.phone}</p>
            )}
          </div>

          {/* Почта */}
          <div className="space-y-1">
            <label className="text-xs font-medium text-[var(--text-muted)]">
              Почта *
            </label>
            <input
              value={form.email}
              onChange={updateField("email")}
              className={`${inputBase} ${
                errors.email ? errorBorder : "border-[var(--glass-border)]"
              }`}
              placeholder="you@example.com"
              autoComplete="email"
            />
            {errors.email && (
              <p className="text-xs text-[#c2410c]">{errors.email}</p>
            )}
          </div>

          {/* Telegram */}
          <div className="space-y-1">
            <label className="text-xs font-medium text-[var(--text-muted)]">
              Telegram (опционально)
            </label>
            <input
              value={form.telegram}
              onChange={updateField("telegram")}
              className={`${inputBase} border-[var(--glass-border)]`}
              placeholder="@username"
              autoComplete="off"
            />
          </div>

          {/* Комментарий */}
          <div className="space-y-1">
            <label className="text-xs font-medium text-[var(--text-muted)]">
              Кратко о бизнесе и задаче (опционально)
            </label>
            <textarea
              rows={4}
              value={form.comment}
              onChange={updateField("comment")}
              className={`${inputBase} border-[var(--glass-border)] resize-none align-top`}
              placeholder="Например: клиника, 3 администратора, хотим снизить нагрузку на ресепшен и не терять звонки..."
            />
          </div>

          {/* Чекбоксы */}
          <div className="space-y-2 pt-1 text-xs text-[var(--text-secondary)]">
            {/* Privacy */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={form.privacy}
                onChange={() => toggleCheckbox("privacy")}
                className="peer sr-only"
              />
              <span
                className={`mt-[2px] inline-flex h-4 w-4 items-center justify-center rounded-md border transition ${
                  form.privacy
                    ? "border-[var(--gold-soft)] bg-[var(--gold-soft)] shadow-[0_0_0_1px_rgba(217,119,6,0.35)]"
                    : "border-[var(--glass-border)] bg-[var(--glass-bg)]/80"
                }`}
              >
                <span className="h-2 w-2 rounded-sm bg-[rgba(255,255,255,0.9)] opacity-90" />
              </span>
              <span>
                Я подтверждаю, что ознакомлен(а) с{" "}
                <Link
                  href="/privacy"
                  className="underline underline-offset-2 decoration-[var(--gold-soft)]"
                >
                  Политикой конфиденциальности
                </Link>
                .
              </span>
            </label>
            {errors.privacy && (
              <p className="pl-7 text-[11px] text-[#c2410c]">{errors.privacy}</p>
            )}

            {/* Personal data */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={form.personalData}
                onChange={() => toggleCheckbox("personalData")}
                className="peer sr-only"
              />
              <span
                className={`mt-[2px] inline-flex h-4 w-4 items-center justify-center rounded-md border transition ${
                  form.personalData
                    ? "border-[var(--gold-soft)] bg-[var(--gold-soft)] shadow-[0_0_0_1px_rgba(217,119,6,0.35)]"
                    : "border-[var(--glass-border)] bg-[var(--glass-bg)]/80"
                }`}
              >
                <span className="h-2 w-2 rounded-sm bg-[rgba(255,255,255,0.9)] opacity-90" />
              </span>
              <span>
                Я даю согласие на обработку моих персональных данных в целях связи
                по оставленной заявке.
              </span>
            </label>
            {errors.personalData && (
              <p className="pl-7 text-[11px] text-[#c2410c]">
                {errors.personalData}
              </p>
            )}
          </div>

          {/* Сообщения об ошибке / успехе */}
          {errors.form && (
            <p className="text-xs text-[#c2410c]">{errors.form}</p>
          )}
          {successMessage && (
            <p className="text-xs text-[var(--text-secondary)]">
              {successMessage}
            </p>
          )}

          {/* Кнопка */}
          <div className="pt-3 space-y-2">
            <Button
              type="submit"
              variant="primary"
              className="px-8 py-3 text-sm w-full md:w-auto"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Отправляем заявку..." : "Отправить заявку"}
            </Button>
          </div>
        </form>
      </section>
    </main>
  );
}
