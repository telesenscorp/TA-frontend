import { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as LogoSvg } from "../../assets/logo.svg";
import { Link, Menu } from "../../components";
import LocaleToggle from "../../components/LocaleToggle";
import { actions, storeSelector } from "../../config/redux";
import { styler } from "../../utils";
interface Props extends Content.Header {
  copyright: Content.Text;
}
function Header(props: Props) {
  const dispatch = useDispatch();
  const { visible, hiddenHeader } = storeSelector(({ layout }) => layout);
  const [mini, setState] = useState(false);
  useEffect(() => {
    function trackPointer() {
      setState(window.scrollY > 50);
    }
    function handleTouch(e: TouchEvent) {
      const target = e.target as HTMLElement;
      if (!visible)
        dispatch(actions.layout.update({ hiddenHeader: target.classList.contains("link") && !target.classList.contains("link-button") }));
    }
    window.addEventListener("touchend", handleTouch);
    window.addEventListener("scroll", trackPointer);
    return () => {
      window.removeEventListener("scroll", trackPointer);
      window.removeEventListener("touchend", handleTouch);
    };
  }, [visible]);
  useLayoutEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "auto";
  }, [visible]);
  return (
    <section className={styler(["header-menu", { visible }])}>
      <header className={styler(["backdrop", { mini, hidden: hiddenHeader }, "mob-header"])}>
        <div className="logo">
          <Link
            to="/"
            onClick={() => {
              dispatch(actions.layout.update({ visible: false }));
              window.scrollTo(0, 0);
            }}>
            <LogoSvg />
          </Link>
        </div>
        <div className="navigation-list">
          <LocaleToggle />
          <div className="menu-button" onClick={() => dispatch(actions.layout.update({ visible: !visible }))} />
        </div>
      </header>
      <Menu {...props} />
    </section>
  );
}
export default Header;
