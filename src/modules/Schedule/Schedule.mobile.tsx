import { ScheduleCard, Text } from "../../components";
interface Props extends Content.Schedule {}
function Schedule({ bg, bgTop, desc, timetableTag, timetableDesc, timetableTitle, list, title, anchor }: Props) {
  return (
    <section id={anchor} className={`bg${bg} m-schedule`}>
      <div className="double-container full-width flex-c">
        <div className={`double-col bg${bgTop}`}>
          <div className="double-box">
            <Text {...title}>{title.text}</Text>
            <Text {...desc}>{desc.text}</Text>
          </div>
          <div className="animated-content">
            <img src={require("../../assets/hand-write-m.webp")} alt="hand-write" className="animated-hand" />
          </div>
        </div>
        <div className={`double-col`}>
          <div className="schedule-box">
            <div className="schedule-header">
              <Text mb4 {...timetableTag}>
                {timetableTag.text}
              </Text>
              <Text {...timetableTitle}>{new Date().toLocaleDateString()}</Text>
              <Text {...timetableDesc}>{timetableDesc.text}</Text>
            </div>
            {list.map((v, i) => (
              <ScheduleCard key={"s-" + i} {...v} bg={bg} mobile />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Schedule;
