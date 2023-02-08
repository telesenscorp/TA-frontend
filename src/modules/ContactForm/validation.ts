import * as Yup from "yup";

const mailRegex = /^\s*[\w-\.]+@([\w-]+\.)+[\w-]{2,4}\s*$/g;
const phoneRegex =
  /^\s*(?:[0-9]\d|\+*)([1-4]\d|[1-9]\d+)?((?:\d{1,}?)*)(?:(\d+))?\s*$/i;
export const validationSchema = Yup.object().shape({
  name: Yup.string().max(128, "errorMax128").required("errorRequired").trim(),
  email: Yup.string()
    .max(128, "errorMax128")
    .email("errorEmail")
    .matches(mailRegex, "errorEmail")
    .required("errorRequired")
    .trim(),
  phone: Yup.string()
    .max(128, "errorMax128")
    .required("errorRequired")
    .matches(phoneRegex, "errorPhone")
    .trim(),
  username: Yup.string().max(128, "errorMax128"),
  promo: Yup.string(),
});
