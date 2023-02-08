import { Text } from "../../components";
interface Props extends Content.About {}
function About({ bg, desc, title, anchor }: Props) {
  return (
      <section id={anchor} className={`bg${bg} m-about`}>
        <Text {...title}>{title.text}</Text>
        <Text {...desc}>{desc.text}</Text>
      </section>
  );
}
export default About;