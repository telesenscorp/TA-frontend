import { useEffect, useState } from "react";
import Block from "../Block";

interface Props extends Content.Empty {
  list: Content.Block[];
  anchor: string;
}
function TextBlock({ list, bg, anchor }: Props) {
  const [state, setState] = useState<{
    rightSide: Content.Block[];
    leftSide: Content.Block[];
  }>({
    rightSide: [],
    leftSide: [],
  });
  useEffect(() => {
    if (list.length) {
      const half = Math.floor(list.length / 2);
      setState({
        leftSide: list.slice(0, half),
        rightSide: list.slice(half),
      });
    }
  }, [list]);
  return (
    <section id={anchor} className={`bg${bg} mob-module`}>
      <div className="block">
        <div className="left-side">
          {state.leftSide.map((props, i) => (
            <Block key={"left" + i} {...props} />
          ))}
        </div>
        <div className="right-side">
          {state.rightSide.map((props, i) => (
            <Block key={"right" + i} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default TextBlock;
