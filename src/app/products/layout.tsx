// src/app/products/layout.tsx
import type { Metadata } from "next";

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

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
