import { storeSelector } from "../../config/redux";
import Main from "./TextBlock.main";
import Mobile from "./TextBlock.mobile";
interface Props extends Content.Empty {
  list: Content.Block[];
  anchor: string;
}
function TextBlock(props: Props) {
  const { isMobile, mobileBrowser } = storeSelector(({ layout }) => layout);
  return isMobile && mobileBrowser ? <Mobile {...props} /> : <Main {...props} />;
}
export default TextBlock;
