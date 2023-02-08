import { useRef } from "react";
import { Text } from "../../components";
import Slide from "../../components/slideElement";

interface Props extends Content.Graduates {}
function Graduates({ bg, bgTop, desc, list, listTitle, title, percentage, gridTitle, anchor }: Props) {
  const carousel = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    carousel.current!.style.animationPlayState = "paused";
  };
  const handleMouseLeave = () => {
    carousel.current!.style.animationPlayState = "running";
  };

  return (
    <section id={anchor} className={`bg${bg} graduates`}>
      <div className="double-container">
        <div className={`double-col bg${bgTop} block-width-${percentage}`}>
          <div className="animated-content">
            <img
              src={require("../../assets/hand-victory.webp")}
              loading="lazy"
              alt="ok"
              className="animated-hand spring-animation wave z1"
            />
            <div className="spring-animation wave triangle" />
          </div>
        </div>
        <div className={`double-col block-width-${100 - percentage}`}>
          <div className="double-box">
            <Text {...title}>{title.text}</Text>
            <Text {...desc}>{desc.text}</Text>
          </div>
        </div>
      </div>
      <div className="carousel-container" /*onMouseEnter={handleMouseEnter}*/>
        <div ref={carousel} className="image-carousel z1" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {list.map((property, i) => (
            <Slide key={"g-" + i} {...property} />
          ))}
          {list.map((property, i) => (
            <Slide key={"g2-" + i} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Graduates;
