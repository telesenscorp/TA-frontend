import { Formik } from "formik";
import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { storeSelector, type TD } from "../config/redux";
import {
  createCart,
  selectCartProduct,
  updateCart,
} from "../config/redux/cart.slice";
import { validationSchema } from "../modules/ContactForm/validation";
import { getPlaceholderByName, t } from "../utils";
import { Button, Input } from "./index";
import Text from "./Text";
interface Props {
  code: string;
  children?: React.ReactNode;
  action: Content.Button;
  partial?: boolean;
  productId: number;
  refToScroll?: React.RefObject<HTMLElement>;
  privacyPolicy: Content.Text;
  onSubmitted?: (values: string[]) => void;
}
const inputList = [
  ["name", "clientName"],
  ["email", "clientEmail"],
  ["phone", "clientPhone"],
  ["username", "clientSocialMediaID"],
];
const filterValues = (o: Gen.O) => {
  const res: Gen.O = { promo: "" };
  inputList.forEach(([a, b]) => {
    res[a] = o[b];
  });
  return res;
};
function ChangeProfessionForm({
  code = "",
  children,
  action,
  partial,
  productId,
  refToScroll,
  privacyPolicy,
  onSubmitted,
}: Props) {
  const dispatch = useDispatch<TD>();
  const { cart } = storeSelector((s) => s.cart);
  const onBlur = ({ name, phone, email, username, promo }: Gen.O) => {
    dispatch(
      updateCart({
        id: cart.id,
        clientName: name,
        clientPhone: phone,
        clientEmail: email,
        clientSocialMediaID: username,
        orderStatus: "Abandoned",
        partial,
        promo,
      })
    );
  };
  const replaceButtonName = (text: string) => {
    return text.replace(/\{buttonName}/g, action.text || "");
  };
  useEffect(() => {
    if (!cart.id) {
      dispatch(createCart());
    }
  }, [cart?.id]);
  return (
    <Formik
      initialValues={filterValues(cart)}
      validationSchema={validationSchema}
      onSubmit={async (v, f) => {
        if (code && v?.promo && code !== v.promo) {
          f.setFieldError("promo", t("errorPromo"));
        } else {
          const type = partial
            ? "cartDetailsInstalmentId"
            : v.promo
            ? "cartDetailsPromoId"
            : "cartProductId";
          onSubmitted &&
            onSubmitted([
              cart.id,
              v.name,
              v.email,
              v.phone,
              v.username,
              "Pending",
              v.promo,
            ]);
          await dispatch(
            updateCart({
              id: cart.id,
              clientName: v.name,
              clientPhone: v.phone,
              clientEmail: v.email,
              clientSocialMediaID: v.username,
              orderStatus: "Pending",
            })
          );
          dispatch(selectCartProduct({ type: [type, cart.id], productId }));
        }
      }}
    >
      {({ handleSubmit, values }) => (
        <Fragment>
          {inputList.map(([item], i) => (
            <Input
              key={item}
              name={item}
              placeholder={t(getPlaceholderByName(item))}
              maxLength={128}
              // onBlur={() => onBlur(values)}
              last={i === inputList.length - 1 && partial}
            />
          ))}
          {partial ? null : (
            <Input
              name="promo"
              placeholder={t(getPlaceholderByName("promo"))}
              maxLength={128}
              last={!partial}
            />
          )}
          {children}
          <Text {...privacyPolicy}>
            {replaceButtonName(privacyPolicy.text)}
          </Text>
          <Button
            {...action}
            className="submit"
            to=""
            onClick={() => {
              refToScroll?.current?.scrollIntoView({ behavior: "smooth" });
              handleSubmit();
            }}
          ></Button>
        </Fragment>
      )}
    </Formik>
  );
}
export default ChangeProfessionForm;
