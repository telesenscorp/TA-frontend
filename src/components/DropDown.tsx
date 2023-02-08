import { useEffect, useState } from "react";
import { styler } from "../utils";
import Link from "./Link";
import Text from "./Text";
interface Props {
  list: Content.Link[];
}
function DropDown({ list }: Props) {
  const [active, setActive] = useState(false);
  useEffect(() => {
    function handleTouch(e: PointerEvent) {
      const target = e.target as HTMLElement;
      if (active) setActive(target.classList.contains("dropdown-link"));
    }
    window.addEventListener("pointerup", handleTouch);
    return () => {
      window.removeEventListener("pointerup", handleTouch);
    };
  }, [active]);

  return (
    <div
      className={styler(["dropdown-list", { active }])}
      onClick={() => {
        setActive((v) => !v);
      }}>
      <Text className="cant-select arrow dropdown-link" {...list[0]}>
        {list[0].text}
      </Text>
      <ul className={styler(["dropdown-menu", { active }])}>
        {list.map((link, i) =>
          i > 0 ? (
            <Link key={"dl" + i} {...link}>
              <Text {...link}>{link.text}</Text>
            </Link>
          ) : null
        )}
      </ul>
    </div>
  );
}
export default DropDown;
