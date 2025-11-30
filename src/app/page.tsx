// src/app/page.tsx

import type { Metadata } from "next";
import HomePage from "./home/page";

// метаданные для главного входа на сайт (страница "/")
export const metadata: Metadata = {
  title: "Endora AI - цифровые сотрудники для бизнеса",
  description:
    "Endora AI создает цифровых сотрудников, которые берут на себя рутину в продажах, сервисе и поддержке клиентов.",
};

export default function RootPage() {
  return <HomePage />;
}
