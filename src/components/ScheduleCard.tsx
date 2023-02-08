import Button from "./Button";
import IconButton from "./IconButton";
import Card from "./Card";
import Text from "./Text";
import { useEffect, useState } from "react";
import { Get } from "../config/server";
interface Props extends Content.ScheduleCard {
  bg: string;
  mobile?: boolean;
  Id?: string;
}
function ScheduleCard({
  Id,
  count,
  date,
  desc,
  duration,
  action,
  tag,
  title,
  bg,
  mobile,
}: Props) {
  const [d, setDate] = useState("");
  useEffect(() => {
    if (Id) Get<States.ShopProduct>(["productId", +Id], (v) => setDate(v.startDate.replaceAll("/", ".")));
  }, [])
  
  return (
    <Card bgw className={`shadow-${bg} full-width`}>
      <div className="content">
        <Text {...date}>{d || date.text}</Text>
        <Text {...title}>{title.text}</Text>
        <Text {...desc}>{desc.text}</Text>
        <div className="d-flex extra align-center">
          <Text {...tag}>{tag.text}</Text>
          <Text {...count}>{count.text}</Text>
          <Text {...duration}>{duration.text}</Text>
        </div>
      </div>
      <div className="action d-flex justify-right mt24">
        {mobile ? (
          <IconButton {...action}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.8867 13L12 18L9.11322 13L11.5 13L11.5 6L12.5 6L12.5 13L14.8867 13Z"
                fill={`var(--${action.bg})`}
              />
            </svg>
          </IconButton>
        ) : (
          <Button {...action} compact />
        )}
      </div>
    </Card>
  );
}
export default ScheduleCard;
