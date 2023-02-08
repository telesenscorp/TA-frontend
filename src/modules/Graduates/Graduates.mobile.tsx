import { useRef } from "react";
import { Text } from "../../components";
import Slide from "../../components/slideElement";
interface Props extends Content.Graduates {}
function Graduates({ bg, desc, list, listTitle, title, anchor }: Props) {
  const triangle = useRef<HTMLDivElement>(null);
  return (
    <section id={anchor} className={`bg${bg} m-graduates`}>
      <div className="double-container">
        <div className={`double-col text-container`}>
          <div className="double-box">
            <Text {...title}>{title.text}</Text>
            <Text {...desc}>{desc.text}</Text>
          </div>
        </div>
        <div className={`double-col anim-container`}>
          <div className="animated-content">
            <img
              src={require("../../assets/hand-victory-m.webp")}
              loading="lazy"
              alt="ok"
              className="animated-hand spring-animation wave z1"
            />
            <div ref={triangle} className="spring-animation wave triangle" />
          </div>
          <div className="list-title z1">
            <Text {...listTitle}>{listTitle.text}</Text>
          </div>
        </div>
      </div>
      <div className="carousel-container">
        <div className="image-carousel z1">
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
