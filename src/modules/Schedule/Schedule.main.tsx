import { ScheduleCard, Text } from "../../components";
interface Props extends Content.Schedule {}
function Schedule({ bg, bgTop, desc, timetableTag, timetableDesc, timetableTitle, list, title, percentage, anchor }: Props) {
  return (
    <section id={anchor} className={`bg${bg} schedule`}>
      <div className="double-container full-width d-flex">
        <div className={`double-col bg${bgTop} block-width-${percentage}`}>
          <div className="double-box">
            <Text {...title}>{title.text}</Text>
            <Text {...desc}>{desc.text}</Text>
          </div>
          <div className="animated-content">
            <img src={require("../../assets/hand-write.webp")} alt="hand-write" className="animated-hand" />
          </div>
        </div>
        <div className={`double-col block-width-${100 - percentage}`}>
          <div className="schedule-box">
            <div className="full-width mb64">
              <Text {...timetableTag}>{timetableTag.text}</Text>
              <Text {...timetableTitle}>{new Date().toLocaleDateString()}</Text>
              <Text {...timetableDesc}>{timetableDesc.text}</Text>
            </div>
            {list.map((v, i) => (
              <ScheduleCard key={"s-" + i} {...v} bg={bg} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Schedule;
