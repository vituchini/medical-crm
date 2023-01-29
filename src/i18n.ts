import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './translations/en.json';
import nl from './translations/nl.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translations: en,
      },
      nl: {
        translations: nl,
      },
    },
    lng: localStorage.getItem('i18nextLng') || 'en',
    fallbackLng: 'en',
    debug: false,

    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
