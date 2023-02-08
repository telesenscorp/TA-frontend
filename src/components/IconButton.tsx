import { styler } from "../utils";
import { useNavigate } from "react-router-dom";
interface Props extends Content.Button {
  onClick?: () => void;
  className?: string;
  classNameF?: string;
  dropShadow?: boolean;
  fullWidth?: boolean;
  children?: React.ReactNode;
}
function Button({ to, color, text, align, size, type, onClick = () => {}, className, bg, icon, dropShadow, fullWidth, children }: Props) {
  const navigate = useNavigate();
  const handlerClick = () => {
    if (to) {
      navigate(to);
    }
    onClick();
  }
  return (
      <div
          onClick={handlerClick}
          className={styler(["icon-button", className, `border-${bg}`, { "drop-shadow": dropShadow, "full-width": fullWidth }])}
      >
        {children}
      </div>
  );
}
export default Button;
