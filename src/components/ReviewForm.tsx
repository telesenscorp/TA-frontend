import { Formik, FormikHelpers } from "formik";
import { Fragment, useState } from "react";
import { styler, t } from "../utils";
import { Button, Input } from "../components";
import Icons from "../components/Icons";
import { Post } from "../config/server";
import { reviewsValidationSchema as validationSchema } from "../modules/Reviews/validation";
import { actions } from "../config/redux";
import { useDispatch } from "react-redux";
const initialValues = {
  course: "",
  name: "",
  comment: "",
  teacher: "",
};

interface Props {
  bg: Mapper.Colors;
  hidden?: boolean;
  Id?: string;
  promptTitle?: Content.Text;
  promptMessage?: Content.Text;
}
interface FormValues {
  course: string;
  name: string;
  comment: string;
  teacher: string;
}
function ReviewForm({ bg, hidden, Id, promptTitle, promptMessage }: Props) {
  const dispatch = useDispatch();
  const [submit, setSubmit] = useState(0);
  const onSubmit = (val: FormValues, opt: FormikHelpers<FormValues>) => {
    const formValues = { ...val };
    Object.keys(formValues).forEach((key) => {
      formValues[key as keyof FormValues] = formValues[key as keyof FormValues].trim();
    });
    const { name, course, comment, teacher } = formValues;
    const values = {
      firstName: name,
      lastName: "",
      email: "",
      phone: "",
      content: JSON.stringify({ course, comment, teacher }),
      type: "academy-review",
      sourceId: Id,
      forward: true,
    };
    Post("createMail", values, () => {
      opt.resetForm();
      setSubmit((v) => v + 1);
      dispatch(
        actions.event.eventsUpdate({
          id: "message-modal",
          value: { promptTitle, promptMessage },
          active: true,
        })
      );
    });
  };
  return (
    <div className={styler([`form-wrapper bgw shadow-${bg}`, { hidden }])}>
      <Formik {...{ initialValues, onSubmit, validationSchema }}>
        {({ handleSubmit }) => (
          <Fragment>
            <Input name="course" placeholder={t("placeholderCourse")} maxLength={128} />
            <Input name="name" placeholder={t("placeholderFullName")} maxLength={128} />
            <Input key={submit} name="comment" placeholder={t("placeholderComment")} maxLength={2000} multi />
            <Input name="teacher" placeholder={t("placeholderTeacher")} maxLength={128} last />
            <Button
              text={t("btnSend")}
              size={16}
              color="w"
              type="ft-pr"
              align="center"
              bg="c4"
              icon={<Icons name="arrow" />}
              className="submit-button"
              onClick={handleSubmit}
            />
          </Fragment>
        )}
      </Formik>
    </div>
  );
}

export default ReviewForm;
