import "../styles/globals.css";
import { Header } from "@/ui/primitives/Header";
import { Footer } from "@/ui/primitives/Footer";
import { I18nProvider } from "@/i18n/I18nProvider";
import { CookieBanner } from "@/ui/primitives/CookieBanner";

export const metadata = {
  title: "Endora AI — Digital Employees",
  description: "Voice & Video AI Workers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <I18nProvider>
          <Header />
          {children}
        </I18nProvider>
          <Footer />
      </body>
    </html>
  );
}
