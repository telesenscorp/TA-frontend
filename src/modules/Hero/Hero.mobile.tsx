import { useEffect, useRef } from "react";
import { Button, Text } from "../../components";
interface Props extends Content.Hero {}
function Hero({ bg, bgTop, desc, action, title, anchor }: Props) {
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
    <section id={anchor} className={`bg${bg} m-hero`}>
      <div className="double-container">
        <div className={`double-col bg${bgTop}`}>
          <div className="animated-content">
            <img ref={hand} src={require("../../assets/arm-ok-m.webp")} alt="ok" className="animated-hand z1" />
            <img src={require("../../assets/arm-ok-m.webp")} alt="ok" className="animated-hand shadow z1" />
            <div ref={triangle} className="spring-animation triangle" />
          </div>
        </div>
        <div className={`double-col`}>
          <div className="double-box">
            <Text mb24 {...title}>
              {title.text}
            </Text>
            <Text mb32 {...desc}>
              {desc.text}
            </Text>
            <Button {...action} dropShadow fullWidth />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
