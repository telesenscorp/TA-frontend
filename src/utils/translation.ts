import store from "../config/redux";
const translation: Translate.Fields = {
  placeholderName: {
    en: "Name*",
    ua: "Імʼя*",
  },
  placeholderEmail: {
    en: "Email*",
    ua: "Пошта*",
  },
  placeholderPhone: {
    en: "Phone*",
    ua: "Телефон*",
  },
  placeholderUsername: {
    en: "@username telegram",
    ua: "@username telegram",
  },
  placeholderPromo: {
    en: "Promo-code",
    ua: "Промокод",
  },
  placeholderCourse: {
    en: "I completed the course",
    ua: "Я пройшов курс",
  },
  placeholderFullName: {
    en: "Full name*",
    ua: "Ім’я Прізвище*",
  },
  placeholderComment: {
    en: "My impressions from the course*",
    ua: "Мої враження від курсу*",
  },
  placeholderTeacher: {
    en: "My teacher",
    ua: "Мій викладач",
  },
  btnSend: {
    en: "Send",
    ua: "Відправити",
  },
  btnMore: {
    en: "More",
    ua: "Детальніше",
  },
  errorRequired: {
    en: "Required field",
    ua: "Обовʼязкове поле",
  },
  errorEmail: {
    en: "The email should be like example@example.com",
    ua: "Пошта повинна бути схожа на example@example.com",
  },
  errorPhone: {
    en: "This field should have only digits",
    ua: "Користуйся тільки цифрами",
  },
  errorMax128: {
    en: "Max 128 symbols",
    ua: "Максимум 128 символів",
  },
  backToSelect: {
    en: "Back to payment selection",
    ua: "Повернутися до вибору оплати",
  },
  backToHome: {
    en: "Back to home page",
    ua: "Повернутися на головну",
  },
  errorPromo: {
    en: "Promo-code is invalid",
    ua: "Промокод недійсний",
  },
  copied: {
    en: "copied",
    ua: "скопійовано",
  },
  defaultError: {
    en: "Error",
    ua: "Помилка",
  },
  errorMax2000: {
    en: "Max 2000 symbols",
    ua: "Максимум 2000 символів",
  },
  backToCourse: {
    en: "Back to course",
    ua: "Повернутися до курсу",
  },
};
type Tran = (name?: string) => string;
export const t: Tran = (name = "defaultError") => {
  const { language } = store.getState().layout;
  try {
    return translation[name as Translate.FieldsKey][language];
  } catch (e) {
    return name;
  }
};
