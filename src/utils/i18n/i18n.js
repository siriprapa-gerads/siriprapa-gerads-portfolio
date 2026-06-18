import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enLang from '../locales/en.json'
import thLang from '../locales/th.json'


const resources = {
  en: {
    translation: enLang
  },
  th: {
    translation: thLang
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    lng: "th",

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;