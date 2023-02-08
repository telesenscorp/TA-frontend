import { useRef } from "react";
import { Icons, Text } from "../../components";
import { useInView } from "../../hooks";
interface Props extends Content.About {}
function About({ bg, bgTop, desc, title, percentage, anchor }: Props) {
  const eagle = useRef<HTMLDivElement>(null);
  function trigger(inView: boolean) {
    if (inView) {
      eagle.current?.classList.add("animate");
    }
  }
  const { ref } = useInView("all", true, trigger);
  return (
    <section id={anchor} ref={ref} className={`bg${bg} about`}>
      <div className="double-container overflow-hidden">
        <div className={`double-col bg${bgTop} block-width-${percentage}`}>
          <div ref={eagle} className="animated-content">
            <Icons name="eagle" />
            <div className="spring-animation rectangle-212 white-2 rotate anim-delay-0" />
            <div className="spring-animation rectangle-72 white-2 rotate" />
          </div>
        </div>
        <div className={`double-col block-width-${100 - percentage}`}>
          <div className="double-box">
            <Text className="title mb32" {...title}>
              {title.text}
            </Text>
            <Text className="desc" {...desc}>
              {desc.text}
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
