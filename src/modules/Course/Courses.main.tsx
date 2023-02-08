import { CourseCard, Text } from "../../components";
interface Props extends Content.Courses {}
function Courses({ bg, bgTop, desc, list, listTitle, title, percentage, anchor }: Props) {
  return (
    <section id={anchor} className={`bg${bg} courses`}>
      <div className="double-container overflow-hidden">
        <div className={`double-col bg${bgTop} block-width-${percentage}`}>
          <div className="courses-box">
            <Text {...listTitle}>{listTitle.text}</Text>
            <div className="courses-list mt64">
              {list.map((v, i) => (
                <CourseCard key={"c-" + i} {...v} bg={bgTop} />
              ))}
            </div>
          </div>
        </div>
        <div className={`double-col block-width-${100 - percentage}`}>
          <div className="double-box">
            <Text {...title}>{title.text}</Text>
            <Text {...desc}>{desc.text}</Text>
          </div>
          <div className="animated-content">
            <img src={require("../../assets/arm-point.webp")} loading="lazy" alt="ok" className="animated-hand z1" />
          </div>
          <div className="round white-2" />
        </div>
      </div>
    </section>
  );
}
export default Courses;
