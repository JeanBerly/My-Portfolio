import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import PTBR from './public/locales/pt/translation.json';
import EN from './public/locales/en/translation.json';

i18n
  // pass the i18n instance to react-i18next.
  .use(Backend)
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'pt',
    debug: false,

    resources: {
        en: {...EN},
        pt: {...PTBR},
    },

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });


export default i18n;