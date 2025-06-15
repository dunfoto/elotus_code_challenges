import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: require("i18n/locales/en/source.json"),
    },
    vi: {
      translation: require("i18n/locales/vi/source.json"),
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

export const useTranslate = ({
  namespace,
  prefix,
}: {
  namespace: string;
  prefix?: string;
}) => {
  const { t } = useTranslation();
  let path = `${namespace}`
  if (prefix) {
    path += `.${prefix}`;
  }
  return { t: (key: string) => t(`${path}.${key}`) }; // Wait for other functions to be added later
};
