import { Formik, FormikHelpers } from "formik";
import { Fragment, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, CopyButton, Input, Text } from "../../components";
import Icons from "../../components/Icons";
import { actions } from "../../config/redux";
import { Post } from "../../config/server";
import { copy, t } from "../../utils";
import { validationSchema } from "./validation";
interface Props extends Content.ContactForm {
  Id?: string;
  promptTitle?: Content.Text;
  promptMessage?: Content.Text;
}
const initialValues = {
  name: "",
  email: "",
  phone: "",
  username: "",
  promo: "",
};
interface FormValues {
  name: string;
  email: string;
  phone: string;
  username: string;
  promo: string;
}
function ContactForm({ bg, title, desc, secretTitle, secretDesc, code, anchor, privacyPolicy, Id, promptTitle, promptMessage }: Props) {
  const dispatch = useDispatch();
  const [hidden, setState] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);
  const ref = useRef<HTMLElement>(null);

  const togglePromo = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setState(!hidden);
  };
  const onCopy = () => {
    copy(code.text);
    setCopied(true);
  };
  const onSubmit = (val: FormValues, opt: FormikHelpers<FormValues>) => {
    const formValues = { ...val };
    Object.keys(formValues).forEach((key) => {
      formValues[key as keyof FormValues] = formValues[key as keyof FormValues].trim();
    });
    const { name, email, phone, username, promo } = formValues;
    const values = {
      firstName: name,
      lastName: "",
      email,
      phone,
      socialId: username,
      content: JSON.stringify({ promo }),
      type: "academy-mail",
      sourceId: Id,
      forward: true,
    };
    Post("createMail", values, () => {
      opt.resetForm();
      dispatch(
        actions.event.eventsUpdate({
          id: "message-modal",
          value: { promptTitle, promptMessage },
          active: true,
        })
      );
    });
    const dataForSheet = {
      name,
      email,
      phone,
      username,
      promo,
      Id,
    };
    Post("addToSheet", {data: Object.values(dataForSheet), sheetName: "form"}, () => {});
  };
  return (
    <section ref={ref} id={anchor} className={`bg${hidden ? bg : "g2"} m-contact-form overflow-hidden`}>
      <div className="block-container z1">
        <img src={require("../../assets/arm-spok.webp")} loading="lazy" alt="ok" className="animated-hand cant-touch" />
        <Text className="contact-form-title" {...title}>
          {title.text}
        </Text>
        <Text className="contact-form-desc" {...desc}>
          {desc.text}
        </Text>
        <div className="form-wrapper flex-c mt40">
          <Formik {...{ initialValues, onSubmit, validationSchema }}>
            {({ handleSubmit }) => (
              <Fragment>
                {!hidden && (
                  <Fragment>
                    <Button
                      text=""
                      size={16}
                      color="w"
                      type="ft-pr"
                      align="center"
                      bg="g1"
                      icon={<Icons name="magicStick" />}
                      className="promo-button full-width"
                      onClick={togglePromo}
                    />
                    <div className="secret-card full-width p16">
                      <Text {...secretTitle}>{secretTitle.text}</Text>
                      <Text {...secretDesc}>{secretDesc.text}</Text>
                      <div className="d-flex justify-between align-center">
                        <Text {...code}>{code.text}</Text>
                        {code.text ? <CopyButton onClick={onCopy} /> : null}
                      </div>
                      {copied && (
                        <div className="bgc14 notification mt10">
                          <Text color="c12" size={16} className="hl130">
                            {t("copied")}
                          </Text>
                        </div>
                      )}
                    </div>
                  </Fragment>
                )}
                <Input name="name" placeholder={t("placeholderName")} maxLength={128} />
                <Input name="email" placeholder={t("placeholderEmail")} maxLength={128} />
                <Input name="phone" placeholder={t("placeholderPhone")} maxLength={128} />
                <Input name="username" placeholder={t("placeholderUsername")} maxLength={128} last={hidden} />
                {!hidden && <Input name="promo" placeholder={t("placeholderPromo")} maxLength={128} last={!hidden} />}
                <Button
                  text={t("btnSend")}
                  size={16}
                  color="w"
                  type="ft-pr"
                  align="center"
                  bg="c4"
                  icon={<Icons name="arrow" />}
                  className="full-width"
                  onClick={handleSubmit}
                />
                <Text {...privacyPolicy} className="row-2">
                  {privacyPolicy.text}
                </Text>
                {hidden && (
                  <Button
                    text=""
                    size={16}
                    color="w"
                    type="ft-pr"
                    align="center"
                    bg="t"
                    icon={<Icons name="magicStick" />}
                    className="promo-button transparent"
                    onClick={togglePromo}
                  />
                )}
              </Fragment>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
}
export default ContactForm;
