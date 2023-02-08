import { styler } from "../utils";
interface Props extends Classes.Box, Classes.Container {
  className?: string;
  children?: any;
}
function Card({ className = "", children, ...props }: Props) {
  return <div className={styler(["card", className, props])}>{children}</div>;
}
export default Card;
