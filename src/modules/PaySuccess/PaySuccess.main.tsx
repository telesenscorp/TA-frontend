import { useEffect, useState } from "react";
import { Button, Text } from "../../components";
import { Get } from "../../config/server";

interface Props extends Content.PaySuccess {}
function PaySuccess({ action, anchor, bg, contactTitle, desc, phonesList, title }: Props) {
  const [description, setDescription] = useState<string>(desc.text);
  const id = new URLSearchParams(window.location.search).get("id");
  const replace = (str: string, course: Gen.O) => {
    if (course) {
      return str.replace(/\{courseName}/g, course?.name || "").replace(/\{courseDate}/g, course?.startDate || "");
    }
    return str;
  };
  useEffect(() => {
    id &&
      Get<Gen.O>(["productId", id], (res) => {
        setDescription(replace(desc.text, res));
      });
  }, [id]);
  return (
    <section id={anchor} className={`bg${bg} pay-success`}>
      <div className="bgw container overflow-hidden z1">
        {/*<BackTo text={t("backToCourse")} onClick={() => {}} />*/}
        <div className="title-wrapper">
          <Text {...title}>{title.text}</Text>
          <Text {...desc}>{description}</Text>
        </div>
        <ul>
          <li>
            <Text {...contactTitle}>{contactTitle.text}</Text>
          </li>
          {phonesList.map((phone, i) => (
            <li key={"links" + i} className="fit-content">
                <Text className="link-label" mt8 {...phone}>
                  {phone.text}
                </Text>
            </li>
          ))}
        </ul>
        <div className="mt64 fit-content">
          <Button {...action} />
        </div>
        <img src={require("../../assets/hand-claps.webp")} loading="lazy" alt="ok" className="animated-hand shadow z-1" />
      </div>
    </section>
  );
}

export default PaySuccess;
