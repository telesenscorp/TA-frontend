import { useEffect, useRef, useState } from "react";
import { ReactComponent as LogoSvg } from "../../assets/logo.svg";
import { Link, Text } from "../../components";
import DropDown from "../../components/DropDown";
import LocaleToggle from "../../components/LocaleToggle";
import { styler } from "../../utils";
interface Props extends Content.Header {}
function Header({ list }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [mini, setState] = useState(false);
  useEffect(() => {
    function trackPointer() {
      setState(window.scrollY > 50);
    }
    window.addEventListener("scroll", trackPointer);
    return () => {
      window.removeEventListener("scroll", trackPointer);
    };
  }, []);
  return (
    <header ref={ref} className={styler(["backdrop", { mini }, "header"])}>
      <div className="logo">
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <LogoSvg />
        </Link>
      </div>
      <div className="navigation-list">
        {list.map((link, i) =>
          Array.isArray(link) ? (
            <DropDown key={"l" + i} list={link} />
          ) : (
            <Link key={"l" + i} {...link}>
              <Text {...link}>{link.text}</Text>
            </Link>
          )
        )}
        <LocaleToggle />
      </div>
    </header>
  );
}

export default Header;
