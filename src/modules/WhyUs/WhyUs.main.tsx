import { Text } from "../../components";
interface Props extends Content.WhyUs {}
function WhyUs({ anchor, bg, title, desc, list, listTitle }: Props) {
  return (
    <section id={anchor} className={`bg${bg} why-us`}>
      <div className="double-container">
        <Text className="title" {...title}>
          {title.text}
        </Text>
        <Text className="description" {...desc}>
          {desc.text}
        </Text>
        <Text className="subtitle" {...listTitle}>
          {listTitle.text}
        </Text>
        <div className="advantages d-grid">
          {list.map((el, i) => (
            <div key={`w-${i}`}>
              <Text className="pb14 advantage-title" {...el.title}>
                {el.title.text}
              </Text>
              <Text className="advantage-desc" {...el.desc}>
                {el.desc.text}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default WhyUs;
