import { useEffect, useRef } from "react";
import { Button, Text } from "../../components";
interface Props extends Content.Hero {}
function Hero({ bg, bgTop, desc, action, title, percentage, anchor }: Props) {
  const hand = useRef<HTMLImageElement>(null);
  const triangle = useRef<HTMLDivElement>(null);
  useEffect(() => {
    hand.current?.addEventListener(
      "animationend",
      (v) => {
        // @ts-ignore: Unreachable code error
        v.target.style.display = "none";
      },
      { once: true }
    );
    setTimeout(() => {
      triangle.current?.classList.add("wiggle-rotate");
    }, 600);
  }, []);
  return (
    <section id={anchor} className={`bg${bg} hero`}>
      <div className="double-container">
        <div className={`double-col bg${bgTop} block-width-${percentage}`}>
          <div className="animated-content">
            <img ref={hand} src={require("../../assets/arm-ok.webp")} alt="ok" className="animated-hand z1" />
            <img src={require("../../assets/arm-ok.webp")} alt="ok" className="animated-hand shadow z1" />
            <div ref={triangle} className="spring-animation triangle" />
          </div>
        </div>
        <div className={`double-col z2 block-width-${100 - percentage}`}>
          <div className="double-box">
            <Text {...title}>{title.text}</Text>
            <Text {...desc}>{desc.text}</Text>
            <Button {...action} />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
