import { storeSelector } from "../../config/redux";
import { handleWide } from "../../utils";
import Main from "./Graduates.main";
import Mobile from "./Graduates.mobile";
interface Props extends Content.Graduates {}
function Graduates(props: Props) {
  const { isMobile, mobileBrowser, isWide } = storeSelector(({ layout }) => layout);
  return isMobile && mobileBrowser ? <Mobile {...props} /> : <Main {...props} percentage={handleWide(isWide, props)} />;
}
export default Graduates;
