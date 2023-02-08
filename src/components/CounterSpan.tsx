import { useInView } from "../hooks";
interface Props {
  start?: number;
  target: number;
  speed: number;
}
function CounterSpan({ start = 0, target, speed = 3 }: Props) {
  const { ref } = useInView("bottom", true, fn);
  function fn(v: boolean) {
    if (!v) return null;
    let startTimestamp: null | number = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (speed * 1000), 1);
      // @ts-ignore: Unreachable code error
      ref.current.innerHTML = Math.floor(progress * (target - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  return <span ref={ref}>{start}</span>;
}
export default CounterSpan;
