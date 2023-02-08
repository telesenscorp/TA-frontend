import { Text } from "../../components";
import CounterSpan from "../../components/CounterSpan";
interface Props extends Content.Counter {}
function Counter({ bg, list = [], anchor }: Props) {
  return (
    <section id={anchor} className={`bg${bg} counter`}>
      <div className="block-container">
        {list.map(({ title, desc }, i) => (
          <div key={"c-" + i} className="counter-box">
            <Text mb4 {...title} force={false}>
              <CounterSpan target={+title.text} speed={3} />
            </Text>
            <Text {...desc}>{desc.text}</Text>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Counter;
