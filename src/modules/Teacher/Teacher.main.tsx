import { Image, Text } from "../../components";
interface Props extends Content.Teacher {}
function Teacher({ bg, bgTop, desc, title, subTitle, image: { width, height, image, name }, percentage, anchor }: Props) {
  return (
    <section id={anchor} className={`bg${bg} teacher`}>
      <div className="double-container d-flex full-width">
        <div className={`double-col bg${bgTop} block-width-${percentage}`}>
          <div className={`teacher-image fcc`}>
            <Image image={image} alt={name} h={height} w={width} />
          </div>
        </div>
        <div className={`double-col wrapper block-width-${100 - percentage}`}>
          <div className="double-box">
            <Text {...title}>{title.text}</Text>
            <div className="description">
              <Text {...subTitle}>{subTitle.text}</Text>
              <Text {...desc}>{desc.text}</Text>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Teacher;
