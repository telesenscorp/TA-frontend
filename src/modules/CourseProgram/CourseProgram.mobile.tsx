import { useRef, useState } from "react";
import { Text } from "../../components";
import { styler } from "../../utils";
interface Props extends Content.CourseProgram {}
function CourseProgram({ bg, bgTop, title, list, anchor }: Props) {
  const ref = useRef<HTMLDivElement[]>([]);
  const [index, setIndex] = useState(0);
  const handleSelect = (i: number) => {
    setIndex(i);
    if (i > 0) {
      ref.current[i - 1].scrollIntoView();
    }
  };
  return (
    <section id={anchor} className={`bg${bg} m-course-program`}>
      <Text {...title}>{title.text}</Text>
      <div className="modules">
        {list.map(({ desc, status, count, duration, title, list: descList }, i) => (
          <div key={"e-" + i} className={styler([`bg${bgTop} module`, { selected: i === index }])}>
            <div ref={(v) => (v ? (ref.current[i] = v) : null)} className="brief-desc">
              <Text {...title} pb16 className="title">
                {title.text}
              </Text>
              <Text {...desc} pb12>
                {desc.text}
              </Text>
              <div className="d-flex g16">
                <Text {...status}>{status.text}</Text>
                <Text {...count}>{count.text}</Text>
                <Text {...duration}>{duration.text}</Text>
              </div>
              <div className={`bg${bg} expand-button`} onClick={() => handleSelect(i === index ? -1 : i)} />
            </div>
            <div className="module-description">
              {descList?.map(({ title, desc }, i) => (
                <div key={`w-${i}`} className="topic">
                  <Text {...title} pb14>
                    {title.text}
                  </Text>
                  <Text {...desc} pb32>
                    {desc.text}
                  </Text>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default CourseProgram;
