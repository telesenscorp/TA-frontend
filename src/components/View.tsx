import { styler } from "../utils";
interface Props extends Classes.Box, Classes.Container {
  className?: string;
  classNameF?: string;
  children?: JSX.Element | JSX.Element[];
}
function View({ className = "", classNameF = "", children, ...props }: Props) {
  return <div className={styler([className, props, classNameF])}>{children}</div>;
}
export default View;
