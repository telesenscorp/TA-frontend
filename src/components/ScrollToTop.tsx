import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      try {
        document.querySelector(hash)?.scrollIntoView();
      } catch (e) {}
    }
  }, [pathname]);
  return null;
}

export default ScrollToTop;
