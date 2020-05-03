import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      de: {
        translations: {
          "Name": "Name",
          "Email":"Email",
          "Phone": "Phone",
          "Salary": "Gehalt",
          "Review": "Rezension",
          "Enter your name": "Gib deinen Namen ein",
          "First Name": "Vorname",
          "First name": "Vorname",
          "Last Name": "Nachname",
          "Last name": "Nachname",
          "Enter your Email Address": "Geben sie ihre E-Mail Adresse ein",
          "Enter your phone": "Geben Sie Ihr Telefon ein",
          "Enter your Salary": "Geben Sie Ihr Gehalt ein",
          "Kindly review your input": "Bitte überprüfen Sie Ihre Eingabe",
          "Over 4000": "Mehs als 4000",
          "submit":"Registrieren",
          next: "weiter",
          back: "Bisherige"
        },
      },
      en: {
        translations: {
          "Name": "Name",
          "Email":"Email",
          "Phone": "Phone",
          "Salary": "Salary",
          "Review": "Review", 
          "Enter your name": "Enter your name",
          "First Name": "First Name",
          "First name": "First Name",
          "Last Name": "Last Name",
          "Last name": "Last Name",
          "Enter your Email Address": "Enter your Email Address",
          "Enter your phone": "Enter your Email Phone",
          "Enter your Salary": "Enter your Email Salary",
          "Kindly review your input":"Kindly review your input",
          "Over 4000": "Over 4000",
          "submit":"submit",
          next: "next",
          back: "back"
        },
      },
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
