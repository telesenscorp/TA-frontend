import { useEffect, useState } from "react";
import { Button, Link, Text } from "../../components";
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
    <section id={anchor} className={`bg${bg} m-pay-success`}>
      <div className="container bgw">
        {/*<BackTo text={t("backToCourse")} onClick={() => {}} />*/}
        <Text {...title}>{title.text}</Text>
        <Text {...desc}>{description}</Text>
        <ul>
          <li>
            <Text {...contactTitle}>{contactTitle.text}</Text>
          </li>
          {phonesList.map((phone, i) => (
            <li key={"links" + i} className="fit-content">
              <Link {...phone} external>
                <Text className="link-label" mt8 {...phone}>
                  {phone.text}
                </Text>
              </Link>
            </li>
          ))}
        </ul>
        <Button className="mt32 full-width" {...action} />
      </div>
    </section>
  );
}

export default PaySuccess;
