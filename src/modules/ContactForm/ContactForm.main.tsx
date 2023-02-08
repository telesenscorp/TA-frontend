import { Formik, FormikHelpers } from "formik";
import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, CopyButton, Input, Text } from "../../components";
import Icons from "../../components/Icons";
import { actions } from "../../config/redux";
import { Post } from "../../config/server";
import { copy, styler, t } from "../../utils";
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
  const togglePromo = () => {
    setState(!hidden);
  };
  const [copied, setCopied] = useState<boolean>(false);
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
    <section id={anchor} className={`bg${hidden ? bg : "g2"} contact-form overflow-hidden`}>
      <div className={`block-container z1 ${hidden ? "" : "open-secret"}`}>
        <img src={require("../../assets/arm-spok.webp")} loading="lazy" alt="ok" className="animated-hand cant-touch" />
        <img src={require("../../assets/arm-spok.webp")} loading="lazy" alt="ok" className="animated-hand cant-touch" />
        <div className="content">
          <Text className="contact-form-title" {...title}>
            {title.text}
          </Text>
          <div className="contact-form-desc-wrapper">
            <Text className="contact-form-desc" {...desc}>
              {desc.text}
            </Text>
          </div>
          <div className="form-wrapper">
            <Formik {...{ initialValues, onSubmit, validationSchema }}>
              {({ handleSubmit }) => (
                <Fragment>
                  <Input name="name" placeholder={t("placeholderName")} maxLength={128} />
                  <Input name="email" placeholder={t("placeholderEmail")} maxLength={128} />
                  <Input name="phone" placeholder={t("placeholderPhone")} maxLength={128} />
                  <Input name="username" placeholder={t("placeholderUsername")} maxLength={128} last={hidden} />
                  <Button
                    text={t("btnSend")}
                    size={16}
                    color="w"
                    type="ft-pr"
                    align="center"
                    bg="c4"
                    icon={<Icons name="arrow" />}
                    className={"full-width submit-button mt6"}
                    onClick={handleSubmit}
                  />
                  <Text {...privacyPolicy} className="row-2">
                    {privacyPolicy.text}
                  </Text>
                  {!hidden && (
                    <Input name="promo" className="row-2-column-4" placeholder={t("placeholderPromo")} maxLength={128} last={!hidden} />
                  )}
                  <div className="row-2-column-5 d-flex justify-right">
                    <Button
                      text=""
                      size={16}
                      color="w"
                      type="ft-pr"
                      align="center"
                      bg={hidden ? "t" : "g1"}
                      icon={<Icons name="magicStick" />}
                      className={styler([{ transparent: hidden }, "promo-button", "mt6", "full-width"])}
                      onClick={togglePromo}
                    />
                  </div>
                </Fragment>
              )}
            </Formik>
          </div>
          {!hidden && (
            <div className="secret-wrapper">
              <div className="secret-card">
                <Text {...secretTitle}>{secretTitle.text}</Text>
                <Text {...secretDesc}>{secretDesc.text}</Text>
                <div className="d-flex align-center justify-between">
                  <Text {...code} className="code">
                    {code.text}
                  </Text>
                  {code.text ? (
                    <div className="ml40 d-flex justify-between full-width align-center">
                      <div className="icon-wrapper fcc">
                        <CopyButton onClick={onCopy} />
                      </div>
                      {copied && (
                        <div className="bgc14 notification">
                          <Text size={16} color="c12" className="lh130">
                            {t("copied")}
                          </Text>
                        </div>
                      )}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
