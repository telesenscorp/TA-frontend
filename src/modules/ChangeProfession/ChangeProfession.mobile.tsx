import { Fragment, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BackTo,
  Button,
  ChangeProfessionCard,
  ChangeProfessionForm,
} from "../../components";
import { ProposalBar } from "../../components/changeProfession";
import Text from "../../components/Text";
import { t } from "../../utils";
import { Post } from "../../config/server";
interface Props extends Content.ChangeProfession {
  product?: States.ShopProduct;
}
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
  action,
  proposalText1,
  proposalText2,
  payFull,
  payFullTitle,
  payFullDesc,
  payPartial,
  payPartialTitle,
  payPartialDesc,
  product,
  codeForDiscount,
  Id,
  notReadyTitle,
  notReadyButton,
  privacyPolicy,
}: Props) {
  const top = useRef<number>(0);
  const ref = useRef<HTMLDivElement>(null);
  const refToScroll = useRef<HTMLDivElement>(null);
  const refSection = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [step, setStep] = useState<"desc" | "full" | "partial">("desc");
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
  const handleClick = (name: "desc" | "full" | "partial") => {
    setStep(name);
    refSection.current?.scrollIntoView({ behavior: "smooth" });
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
    <section
      ref={refSection}
      id={anchor}
      className={`bg${bg} m-change-profession`}
    >
      {product?.stock && product?.stock > 0 ? <ProposalBar
        top={top.current}
        title={proposalText1}
        desc={proposalText2}
        action={action}
        stock={product?.stock}
        mobile
      /> : null}
      <div className="double-container overflow-hidden z1">
        <div className="wrapper">
          <div className="content z1">
            {step === "desc" ? (
              <Fragment>
                <BackTo
                  onClick={() => navigate("/")}
                  text={t("backToHome")}
                  className="mb32"
                />
                <Text {...title}>{title.text}</Text>
                <Text {...desc}>{desc.text}</Text>
                <ChangeProfessionCard
                  product={product}
                  {...details.full.row}
                  className="flex-c mt32"
                />
                {product?.stock && product?.stock > 0 ? (
                  <div className="btn-box">
                    <Button
                      {...payFull}
                      to=""
                      onClick={() => handleClick("full")}
                      className="full-width mt16 btn-pay"
                    />
                    <Button
                      {...payPartial}
                      to=""
                      onClick={() => handleClick("partial")}
                      className="full-width mt16 btn-pay"
                    />
                  </div>
                ) : (
                  <div className="pay-box mt32">
                <Text {...notReadyTitle}>{notReadyTitle.text}</Text>
                <Button {...notReadyButton} className="btn-pay" />
              </div>
                )
                }

              </Fragment>
            ) : (
              <Fragment>
                <BackTo
                  onClick={() => handleClick("desc")}
                  text={t("backToSelect")}
                  className="fs-14 mb32"
                />
                <Text {...details[step].info.title}>
                  {details[step].info.title.text}
                </Text>
                <div ref={refToScroll} />
                <Text {...details[step].info.desc}>
                  {details[step].info.desc.text}
                </Text>
                <ChangeProfessionForm
                  code={codeForDiscount}
                  action={details[step].pay}
                  partial={step === "partial"}
                  productId={+Id}
                  refToScroll={refToScroll}
                  privacyPolicy={privacyPolicy}
                  onSubmitted={onSubmitted}
                >
                  <ChangeProfessionCard
                    product={product}
                    {...details[step].row}
                    className="flex-c mt32"
                    partial={step === "partial"}
                  />
                </ChangeProfessionForm>
              </Fragment>
            )}
            <div ref={ref} />
          </div>
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
