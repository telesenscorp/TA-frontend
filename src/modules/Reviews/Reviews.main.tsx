import { useState } from "react";
import { Icons, Text } from "../../components";
import ReviewCard from "../../components/ReviewCard";
import ReviewForm from "../../components/ReviewForm";
import { styler } from "../../utils";
interface Props extends Content.Reviews {
  Id?: string;
  promptTitle?: Content.Text;
  promptMessage?: Content.Text;
}
function Reviews({ bg, bgTop, desc, list, listTitle, action, title, percentage, anchor, Id, promptTitle, promptMessage }: Props) {
  const [active, setActive] = useState(0);
  const [hidden, setState] = useState<boolean>(true);
  function switchReview(dir: number) {
    let to = active + dir;
    setActive(to === list.length ? 0 : to < 0 ? list.length - 1 : to);
  }
  return (
    <section id={anchor} className={`bg${bg} reviews`}>
      <div className="double-container">
        <div className={`double-col bg${bgTop} block-width-${percentage}`}>
          <div className="reviews-box">
            <Text mb64 {...listTitle}>
              {listTitle.text}
            </Text>
            <div className="review-container">
              <div className="reviews-cards">
                {list.map((v, i) => (
                  <ReviewCard
                    key={"r-" + i}
                    {...v}
                    action={action}
                    bg={bgTop}
                    position={active > i ? "after" : active < i ? "before" : "active"}
                  />
                ))}
              </div>
              <div className="reviews-controller z8">
                <div className="control-box frc g10 ml16">
                  <div className="pointy" onClick={() => switchReview(-1)}>
                    <Icons name="arrowLeft" />
                  </div>
                  <div className="pointy" onClick={() => switchReview(1)}>
                    <Icons name="arrowLeft" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styler(["toggle-form ml16", { active: !hidden }])} onClick={() => setState(!hidden)} />
          </div>
          <ReviewForm bg={bgTop} {...{ hidden, Id, promptTitle, promptMessage }} />
        </div>
        <div className={`double-col block-width-${100 - percentage}`}>
          <div className="double-box">
            <Text {...title} className="title">
              {title.text}
            </Text>
            <Text {...desc}>{desc.text}</Text>
          </div>
          <div className="animated-content">
            <img src={require("../../assets/hand-ok.webp")} loading="lazy" alt="ok" className="animated-hand z1 spring-animation elevate" />
            <div className="rect white-2 spring-animation wave" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Reviews;
