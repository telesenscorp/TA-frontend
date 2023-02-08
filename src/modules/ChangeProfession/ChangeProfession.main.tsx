import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BackTo,
  Button,
  ChangeProfessionCard,
  ChangeProfessionForm,
  Text,
} from "../../components";
import { ProposalBar } from "../../components/changeProfession";
import { t } from "../../utils";
import { Post } from "../../config/server";
interface Props extends Content.ChangeProfession {
  product?: States.ShopProduct;
}
type Steps = "desc" | "full" | "partial";
function ChangeProfession({
  bg,
  bgTop,
  desc,
  title,
  percentage,
  anchor,
  priceTitle,
  priceDesc,
  pricePartialTitle,
  pricePartialDesc,
  instalmentCountDesc,
  payFull,
  payFullTitle,
  payFullDesc,
  payPartial,
  payPartialTitle,
  payPartialDesc,
  product,
  notReadyButton,
  notReadyTitle,
  codeForDiscount,
  privacyPolicy,
  proposalText1,
  proposalText2,
  action,
  Id,
}: Props) {
  const top = useRef<number>(0);
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [step, setStep] = useState<Steps>("desc");
  const details = {
    full: {
      row: { title: priceTitle, desc: priceDesc, count: instalmentCountDesc },
      pay: payFull,
      info: { title: payFullTitle, desc: payFullDesc },
    },
    partial: {
      row: { title: pricePartialTitle, desc: pricePartialDesc, count: instalmentCountDesc },
      pay: payPartial,
      info: { title: payPartialTitle, desc: payPartialDesc },
    },
  };
  const updateCart = (v: Steps) => {
    setStep(v);
  };
  const onSubmitted = async (values: string[]) => {
    await Post("addToSheet", {
      data: [
        ...values,
        product?.name,
        product?.startDate,
      ],
      sheetName: step === "partial" ? "payPart" : "payFull",
    });
  }
  useEffect(() => {
    top.current =
      ref.current?.getBoundingClientRect().top || 0 + window.pageYOffset;
  }, [ref.current]);
  return (
    <section id={anchor} className={`bg${bg} change-profession`}>
      {product?.stock && product?.stock > 0 ?
      <ProposalBar
        top={top.current}
        title={proposalText1}
        desc={proposalText2}
        action={action}
        stock={product?.stock}
      /> : null}
      <div className="double-container overflow-hidden z1">
        <div className="wrapper">
          <div className="content z1">
            {step === "desc" ? (
              <div className="desc">
                <BackTo onClick={() => navigate("/")} text={t("backToHome")} />
                {product?.stock && product?.stock > 0 ? (
                  <div className="btn-box">
                  <Button
                  {...payFull}
                  onClick={() => updateCart("full")}
                  className="btn-pay full"
                />
                <Button
                  {...payPartial}
                  onClick={() => updateCart("partial")}
                  className="btn-pay partial"
                />
                </div>
                ) : <div className="pay-box">
                <Text {...notReadyTitle}>{notReadyTitle.text}</Text>
                <Button {...notReadyButton} className="btn-pay" />
              </div>}
                <div className="block-width-70 min-h360">
                  <Text {...title}>{title.text}</Text>
                  <Text {...desc}>{desc.text}</Text>
                </div>
                <div className="animated-hand shadow z-1" />
                <ChangeProfessionCard
                  product={product}
                  {...details.full.row}
                  bg="c14"
                />
              </div>
            ) : (
              <div className="step-2">
                <BackTo
                  onClick={() => updateCart("desc")}
                  text={t("backToSelect")}
                />
                <div className="block-width-50">
                  <Text {...details[step].info.title}>
                    {details[step].info.title.text}
                  </Text>
                  <Text {...details[step].info.desc}>
                    {details[step].info.desc.text}
                  </Text>
                </div>
                <div className="animated-hand shadow z-1" />
                <ChangeProfessionForm
                  code={codeForDiscount}
                  action={details[step].pay}
                  partial={step === "partial"}
                  productId={+Id}
                  privacyPolicy={privacyPolicy}
                  onSubmitted={onSubmitted}
                >
                  <ChangeProfessionCard
                    className="mt64"
                    product={product}
                    {...details[step].row}
                    partial={step === "partial"}
                  />
                </ChangeProfessionForm>
              </div>
            )}
          </div>
          <div ref={ref} />
        </div>
        <div
          className={`background-row bg${bgTop} z-1 block-height-${
            100 - percentage
          }`}
        />
      </div>
    </section>
  );
}
export default ChangeProfession;
