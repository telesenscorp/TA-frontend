import { styler } from "../utils";
interface Props extends Classes.Box, Classes.Text {
  id?: string;
  onClick?: React.MouseEventHandler<HTMLSpanElement> | undefined;
  className?: string;
  classNameF?: string;
  size?: number | string;
  center?: boolean;
  italic?: boolean;
  bold?: boolean;
  color?: Mapper.Colors;
  align?: "center" | "left" | "right";
  type?: keyof Classes.FontType;
  text?: string;
  force?: boolean;
  mark?: boolean;
  children: any;
}
function Text({
  id,
  onClick,
  className,
  classNameF,
  size,
  type,
  center,
  italic,
  bold,
  color,
  align,
  children,
  text,
  force = true,
  mark,
  ...props
}: Props) {
  return children ? (
    <p
      ref={(e) => {
        if (force && e !== null) e.innerText = children;
        if (mark && e !== null) e.innerHTML = children;
      }}
      {...{ id, onClick }}
      className={styler([
        "ft-pr",
        className,
        {
          "text-center": center,
          ["text-" + align]: align,
          ["fs-" + size]: size,
          ["c" + color]: color,
          "ft-pb": bold,
          "ft-pi": italic,
        },
        type,
        props,
        classNameF,
      ])}>
      {children}
    </p>
  ) : null;
}
export default Text;
