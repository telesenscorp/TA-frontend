import { Image, Text } from "../../components";
interface Props extends Content.Teacher {}
function Teacher({ bg, desc, title, subTitle, image: { width, height, image, name }, anchor }: Props) {
  return (
    <section id={anchor} className={`bg${bg} m-teacher`}>
      <div className="double-container flex-cr">
        <div className={`double-col`}>
          <div className={`teacher-image fcc`}>
            <Image image={image} alt={name} h={height} w={width} />
          </div>
        </div>
        <div className={`double-col`}>
          <div className="double-box">
            <Text {...title}>{title.text}</Text>
            <Text {...subTitle}>{subTitle.text}</Text>
            <Text {...desc}>{desc.text}</Text>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Teacher;
