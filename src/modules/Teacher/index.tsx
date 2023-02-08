import { storeSelector } from "../../config/redux";
import { handleWide } from "../../utils";
import Main from "./Teacher.main";
import Mobile from "./Teacher.mobile";
interface Props extends Content.Teacher {}
function Teacher(props: Props) {
  const { isMobile, mobileBrowser, isWide } = storeSelector(({ layout }) => layout);
  return isMobile && mobileBrowser ? <Mobile {...props} /> : <Main {...props} percentage={handleWide(isWide, props)} />;
}
export default Teacher;
