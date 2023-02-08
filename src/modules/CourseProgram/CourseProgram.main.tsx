import { useState } from "react";
import { Text } from "../../components";
import { styler } from "../../utils";
interface Props extends Content.CourseProgram {}
function CourseProgram({ bg, bgTop, desc, title, list, anchor }: Props) {
  const [index, setIndex] = useState(0);

  const handleExpandButtonClick = (i: number) => {
    if (i === index) {
      setIndex(-1);
    } else {
      document.querySelector("section.course-program")!.scrollIntoView({ behavior: "smooth" });
      setIndex(i);
    }
  };

  return (
    <section id={anchor} className={`bg${bg} course-program`}>
      <Text className="title" {...title} pb40>
        {title.text}
      </Text>
      <div className="details">
        <div className="modules">
          {list.map(({ desc, status, count, duration, title }, i) => (
            <div key={"e-" + i} className={styler([`bg${bgTop} module`, { selected: i === index }])}>
              <Text {...title} pb16 className="title">
                {title.text}
              </Text>
              <Text {...desc} pb12>
                {desc.text}
              </Text>
              <div className="extra-info">
                <Text {...status}>{status.text}</Text>
                <Text {...count}>{count.text}</Text>
                <Text {...duration}>{duration.text}</Text>
              </div>
              <div className={`bg${bg} expand-button`} onClick={() => handleExpandButtonClick(i)} />
            </div>
          ))}
        </div>
        {index !== -1 ? (
          <div className={`bg${bgTop} module-description`}>
            <div className={"close-description"} onClick={() => setIndex(-1)} />
            {list[index]?.list?.map(({ title, desc }, i) => (
              <div key={`w-${i}`} className="topic">
                <Text {...title} pb14>
                  {title.text}
                </Text>
                <Text {...desc}>{desc.text}</Text>
              </div>
            ))}
          </div>
        ) : (
          <div className="animated-content">
            <Text {...desc} className="choose-text z1">
              {desc.text}
            </Text>
            <img src={require("../../assets/point.webp")} loading="lazy" alt="select course" className="animated-hand" />
          </div>
        )}
      </div>
    </section>
  );
}
export default CourseProgram;
