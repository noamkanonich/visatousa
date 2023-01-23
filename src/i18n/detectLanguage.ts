import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

export const detectLanguage: () => string | null = () => {
  console.log(LanguageDetector);
  return null;
  //   const detectedLocales = getLocales().map(locale => locale.languageCode);
  //   return detectedLocales.length ? detectedLocales[0] : null;
};
