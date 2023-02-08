import { useRef } from "react";
import { Text } from "../../components";
import CounterSpan from "../../components/CounterSpan";
import { useInView } from "../../hooks";
interface Props extends Content.Counter {}
function Counter({ bg, list, anchor }: Props) {
  const eagle = useRef<HTMLDivElement>(null);
  function trigger(inView: boolean) {
    if (inView) {
      eagle.current?.classList.add("animate");
    }
  }
  const { ref } = useInView("all", true, trigger);
  return (
    <section id={anchor} ref={ref} className={`bg${bg} mob-counter`}>
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
