import en from "./en/translation.json";
import ru from "./ru/translation.json";
import he from "./he/translation.json";
import ar from "./ar/translation.json";
import fr from "./fr/translation.json";
import i18n from "i18next";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { detectLanguage } from "./detectLanguage";

export const resources = {
  ar: {
    translation: ar,
    displayName: "عربى",
  },
  en: {
    translation: en,
    displayName: "English",
  },
  fr: {
    translation: fr,
    displayName: "Français",
  },
  he: {
    translation: he,
    displayName: "עברית",
  },
  ru: {
    translation: ru,
    displayName: "Pусский",
  },
};

const isRtl = () => i18next.dir() === "rtl";

const onLanguageChanged = () => {
  const appRoot = document.getElementById("root");
  appRoot!.dir = isRtl() ? "rtl" : "ltr";
};

export const initI18n = async ({ language }: { language?: string }) => {
  i18n.on("languageChanged", onLanguageChanged);

  await i18n.use(initReactI18next).init({
    resources,
    lng: language || detectLanguage() || "en",
    fallbackLng: "en",
    compatibilityJSON: "v3",
    interpolation: {
      escapeValue: false,
    },
  });
};

export default i18n;
