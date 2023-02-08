import * as Yup from 'yup';
export const reviewsValidationSchema =  Yup.object().shape({
    course: Yup.string()
        .max(128, "errorMax128")
        .trim(),
    name: Yup.string()
        .max(128, "errorMax128")
        .required("errorRequired")
        .trim(),
    comment: Yup.string()
        .max(2000, "errorMax2000")
        .required("errorRequired")
        .trim(),
    teacher: Yup.string()
        .max(128, "errorMax128")
        .trim(),
});