import { useCallback } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
interface Props extends Content.Link {
  children?: JSX.Element | JSX.Element[];
  external?: boolean;
  onClick?: () => void;
  className?: string;
}
function Link({ to, onClick = () => 0, external, children, className }: Props) {
  const { pathname, search } = useLocation();
  const handleNavigate = useCallback(() => {
    if (to.charAt(0) === "#") {
      document.querySelector(to)?.scrollIntoView({ behavior: "smooth" });
    }
    onClick();
  }, [to, onClick]);
  return external ? (
    <a
      className={`link cant-select pointy ${className}`}
      {...{ target: "_blank", rel: "noopener noreferrer", href: to, onClick }}
    >
      {children}
    </a>
  ) : (
    <RouterLink
      className={`link cant-select pointy ${className}`}
      to={{
        pathname: to.startsWith("#") ? pathname : to.split("#")[0],
        hash: to.includes("#")
          ? `#${to.split("#")[to.split("#").length - 1]}`
          : "",
        search: to.startsWith("#") ? search : "",
      }}
      onClick={handleNavigate}
    >
      {children}
    </RouterLink>
  );
}
export default Link;
