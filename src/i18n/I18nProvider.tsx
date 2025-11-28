'use client';

import { createContext, useContext, useState } from "react";
import ru from "./dictionaries/ru";
import en from "./dictionaries/en";

const dicts = { ru, en };

const I18nContext = createContext({
  lang: "ru",
  t: (key) => key,
  setLang: () => {},
});

export function I18nProvider({ children }) {
  const [lang, setLang] = useState("ru");
  const t = (key) => dicts[lang][key] || key;

  return (
    <I18nContext.Provider value={{ lang, t, setLang }}>
      {children}
    </I18nContext.Provider>
  );
}

export const useI18n = () => useContext(I18nContext);
