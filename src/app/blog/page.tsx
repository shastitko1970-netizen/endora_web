// src/app/start/page.tsx

import type { Metadata } from "next";
import BlogClientPage from "./BlogClientPage";

export const metadata: Metadata = {
  title: "Блог Endora AI",
  description:
    "Блог Endora AI: разборы по голосовому AI, цифровым сотрудникам, автоматизации бизнес-процессов и кейсам внедрений.",
};

export default function StartPage() {
  return <BlogClientPage />;
}
