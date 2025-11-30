// src/app/start/page.tsx

import type { Metadata } from "next";
import StartClientPage from "./StartClientPage";

export const metadata: Metadata = {
  title: "Начать работу с Endora AI",
  description:
    "Оставьте заявку, чтобы запустить цифровых сотрудников Endora AI для вашего бизнеса: внедрение, пилот и интеграция под ваши процессы.",
};

export default function StartPage() {
  return <StartClientPage />;
}
