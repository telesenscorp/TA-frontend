import { useEffect, useRef, useState } from "react";
function useInView(type: "all" | "top" | "bottom", once?: boolean, trigger: Gen.FB = () => {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setState] = useState(false);
  useEffect(() => {
    const ratio = window.devicePixelRatio || 1;
    let top = window.innerHeight || document.documentElement.clientHeight;
    let width = window.innerWidth || document.documentElement.clientWidth;
    if (ratio === 1.25) {
      top = top * ratio;
      width = width * ratio;
    }
    function callback() {
      if (ref.current !== null) {
        const distance = ref.current.getBoundingClientRect();
        let condition = false;
        if (type === "top") {
          condition = distance.top >= 0 && distance.top + 1 <= top;
        } else if (type === "bottom") {
          condition = distance.top >= 0 && distance.top + distance.height + 1 <= top;
        } else {
          condition = distance.top >= 0 && distance.left >= 0 && distance.bottom <= top && distance.right <= width;
        }
        if (condition !== inView) {
          trigger(condition);
          setState(condition);
          window.removeEventListener("scroll", callback);
          if (!once) {
            window.addEventListener("scroll", callback);
          }
        }
      }
    }
    window.addEventListener("scroll", callback);
    return () => {
      window.removeEventListener("scroll", callback);
    };
  }, [type]);
  return { ref, inView };
}
export default useInView;
