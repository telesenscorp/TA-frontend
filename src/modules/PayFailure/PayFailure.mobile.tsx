import { useEffect, useState } from "react";
import { Button, Link, Text } from "../../components";
import { Get } from "../../config/server";

interface Props extends Content.PayFailure {}
function PayFailure({
  action,
  anchor,
  bg,
  contactTitle,
  desc,
  phonesList,
  title,
}: Props) {
  const [description, setDescription] = useState<string>(desc.text);
  const [btnAction, setBtnAction] = useState<string>(action.to!);
  const id = new URLSearchParams(window.location.search).get("id");
  const replace = (str: string, course: Gen.O) => {
    if (course) {
      return str.replace(/\{courseName}/g, course?.name || "");
    }
    return str;
  };
  useEffect(() => {
    id &&
      Get<Gen.O>(["productId", id], (res) => {
        setDescription(replace(desc.text, res));
        setBtnAction(`/courses/${res?.name.toLowerCase().replace(" ", "-")}`);
      });
  }, [id]);
  return (
    <section id={anchor} className={`bg${bg} m-pay-failure`}>
      <div className="container bgw">
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
        <Button className="mt32 full-width" {...{ ...action, to: btnAction }} />
      </div>
    </section>
  );
}

export default PayFailure;
