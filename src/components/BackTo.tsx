import IconArrow from "../assets/IconArrow";

interface Props {
  onClick: () => void;
  text: string;
  fill?: string;
  className?: string;
}
function BackTo({ onClick, text, fill = "#0B0F33", className }: Props) {
  return (
    <div onClick={onClick} className={`back-to-select frc justify-left g12 fs-16 lh150 cc11 ${className}`}>
      <IconArrow fill={fill} />
      <span className="lh150">{text}</span>
    </div>
  );
}
export default BackTo;
