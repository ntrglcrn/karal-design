import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

// Инициализация i18next
// Файлы переводов будут храниться в public/locales/{lng}/{ns}.json

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'ru'],
    lng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false, // не требуется для React
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n; 