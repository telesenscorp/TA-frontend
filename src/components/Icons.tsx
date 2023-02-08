import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
import { ReactComponent as Arrow } from "../assets/arrow.svg";
import { ReactComponent as Eagle } from "../assets/eagle-icon.svg";
import { ReactComponent as MagicStick } from "../assets/magic-stick.svg";
import { ReactComponent as BankAlfa } from "../assets/bank-alfa.svg";
import { ReactComponent as BankMono } from "../assets/bank-mono.svg";
import { ReactComponent as BankPrivat } from "../assets/bank-privat.svg";
const list = {
  eagle: <Eagle />,
  arrowLeft: <ArrowLeft />,
  arrow: <Arrow />,
  magicStick: <MagicStick />,
  bankAlfa: <BankAlfa />,
  bankMono: <BankMono />,
  bankPrivat: <BankPrivat />,
  none: null,
};
export type IconsName = "eagle" | "arrowLeft" | "arrow" | "magicStick" | "none" | "bankAlfa" | "bankMono" | "bankPrivat";
interface Props {
  name?: IconsName;
}
function Icons({ name = "none" }: Props) {
  return list[name];
}
export default Icons;
