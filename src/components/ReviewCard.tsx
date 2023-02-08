import { useLayoutEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { actions, storeSelector } from "../config/redux";
import { styler } from "../utils";
import Card from "./Card";
import Text from "./Text";

import Button from "./Button";
interface Props extends Content.Review {
  bg: string;
  position?: "before" | "after" | "active";
  action: Content.Button;
}
function ReviewCard({
  bg,
  action = {
    text: "Press me",
    size: 14,
    color: "w",
    type: "ft-pr",
    align: "center",
    bg: "c8",
  },
  author,
  authorLabel,
  teacher,
  teacherLabel,
  text,
  position,
}: Props) {
  const dispatch = useDispatch();
  const textEl = useRef(null);
  const [showLink, setShowLink] = useState(false);
  const { isMobile, mobileBrowser } = storeSelector(({ layout }) => layout);

  useLayoutEffect(() => {
    setTimeout(() => {
      if (
        //@ts-ignore
        (isMobile && mobileBrowser && 10 * text.size * 1.5 < textEl.current?.scrollHeight) ||
        //@ts-ignore
        (!(isMobile || mobileBrowser) && 5 * text.size * 1.5 < textEl.current?.scrollHeight)
      ) {
        setShowLink(true);
      } else {
        setShowLink(false);
      }
    }, 300);
  }, []);

  return (
    <Card bgw className={styler([`shadow-${bg}`, position])}>
      <div className="card-head">
        <div className="flex-c">
          <Text {...authorLabel}>{authorLabel.text}</Text>
          <Text {...author}>{author.text}</Text>
        </div>
      </div>
      <div ref={textEl} className="card-body">
        <Text {...text}>{text.text}</Text>
      </div>
      {showLink && (
        <Button
          onClick={() =>
            dispatch(
              actions.event.eventsUpdate({
                id: "review-modal",
                value: { text, authorLabel, author, offset: window.scrollY },
                active: true,
              })
            )
          }
          {...action}
          to=""
        />
      )}
      <div className="card-footer">
        <Text {...teacherLabel}>{teacherLabel.text}</Text>
        <Text {...teacher}>{teacher.text}</Text>
      </div>
    </Card>
  );
}
export default ReviewCard;
