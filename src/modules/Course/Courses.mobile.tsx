import { CourseCard, Text } from "../../components";
interface Props extends Content.Courses {}
function Courses({ bg, bgTop, desc, list, listTitle, title, percentage, anchor }: Props) {
  return (
    <section id={anchor} className={`bg${bg} m-courses`}>
      <div className="double-container overflow-hidden">
        <div className={`double-col bg${bgTop}`}>
          <div className="courses-box">
            <Text {...listTitle}>{listTitle.text}</Text>
            <div className="courses-list mt40">
              {list.map((v, i) => (
                <CourseCard key={"c-" + i} {...v} bg={bgTop} mobile />
              ))}
            </div>
          </div>
        </div>
        <div className={`double-col`}>
          <div className="double-box">
            <Text {...title}>{title.text}</Text>
            <Text {...desc}>{desc.text}</Text>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Courses;
