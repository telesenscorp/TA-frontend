import { styler } from "../utils";
import Link from "./Link";
import Text from "./Text";
interface Props extends Content.Button {
  onClick?: () => void;
  className?: string;
  classNameF?: string;
  dropShadow?: boolean;
  compact?: boolean;
  fullWidth?: boolean;
}
function Button({
  to,
  color,
  text,
  align,
  size,
  type,
  onClick = () => {},
  className,
  bg,
  icon,
  dropShadow,
  compact,
  fullWidth,
}: Props) {
  return to ? (
    <Link
      to={to}
      onClick={onClick}
      className={`link-button shadow-hover-s${bg}`}
    >
      <div
        className={styler([
          `button bg${bg} cant-touch`,
          className,
          { "drop-shadow": dropShadow, compact, "full-width": fullWidth },
        ])}
      >
        <Text className="lh150" {...{ color, align, size, type }}>
          {text}
        </Text>
        {icon}
      </div>
    </Link>
  ) : (
    <div
      onClick={onClick}
      className={styler([
        `button bg${bg} shadow-hover-s${bg}`,
        className,
        { "drop-shadow": dropShadow, compact, "full-width": fullWidth },
      ])}
    >
      <Text className="lh150" {...{ color, align, size, type }}>
        {text}
      </Text>
      {icon}
    </div>
  );
}
export default Button;
