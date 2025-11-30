import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../styles/globals.css";

import { Header } from "@/ui/primitives/Header";
import { Footer } from "@/ui/primitives/Footer";
import { I18nProvider } from "@/i18n/I18nProvider";
import { CookieBanner } from "@/ui/primitives/CookieBanner";

export const metadata: Metadata = {
  metadataBase: new URL("https://endora-ai.ru"),
  title: {
    default: "Endora AI - цифровые сотрудники для бизнеса",
    template: "%s - Endora AI",
  },
  description:
    "Endora AI создаёт цифровых сотрудников - голосовых и текстовых ассистентов, которые берут на себя рутину в продажах и сервисе.",
  keywords: [
    "Endora AI",
    "эндора",
    "цифровые сотрудники",
    "AI менеджер",
    "голосовой ассистент",
    "чат-бот для бизнеса",
    "искусственный интеллект",
    "digital employees",
    "voice AI",
    "voice & video AI workers",
  ],
  authors: [{ name: "Endora AI" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
  openGraph: {
    title: "Endora AI - цифровые сотрудники для бизнеса",
    description:
      "Мария и Пётр - цифровые сотрудники, которые берут на себя рутину в сервисе и продажах.",
    url: "https://endora-ai.ru",
    siteName: "Endora AI",
    locale: "ru_RU",
    type: "website",
  },
  alternates: {
    canonical: "https://endora-ai.ru",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Endora AI",
    url: "https://endora-ai.ru",
    logo: "https://endora-ai.ru/logo-endora-mark.svg",
    description:
      "Endora AI создаёт цифровых сотрудников для автоматизации сервисных задач и продаж.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Санкт-Петербург",
      addressCountry: "RU",
    },
  };

  return (
    <html lang="ru">
      <head>
        {/* Верификация для Google Search Console */}
        <meta
          name="google-site-verification"
          content="kiz88_HoZs_ED7oFc-PgCK02lAJUC2qxxySdavN6KqM"
        />

        {/* Верификация для Яндекс.Webmaster */}
        <meta
          name="yandex-verification"
          content="6d10b5196bb9a863"
        />

         {/* Вторая верификация для Яндекс.Webmaster */}
        <meta name="yandex-verification" 
        content="6d10b5196bb9a863" 
        />


        {/* Yandex.Metrika counter */}
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `
(function(m,e,t,r,i,k,a){
  m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
  m[i].l=1*new Date();
  for (var j = 0; j < document.scripts.length; j++) {
    if (document.scripts[j].src === r) { return; }
  }
  k=e.createElement(t);
  a=e.getElementsByTagName(t)[0];
  k.async=1;
  k.src=r;
  a.parentNode.insertBefore(k,a);
})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js?id=105574662", "ym");

ym(105574662, "init", {
  ssr: true,
  webvisor: true,
  clickmap: true,
  ecommerce: "dataLayer",
  accurateTrackBounce: true,
  trackLinks: true
});
            `,
          }}
        />

        {/* JSON-LD разметка организации */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="bg-[var(--sand-soft)] text-[var(--text-primary)]">
        {/* noscript для Метрики */}
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/105574662"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>

        <I18nProvider>
          <Header />
          {children}
        </I18nProvider>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
