import { storeSelector } from "../../config/redux";
import { handleWide } from "../../utils";
import Main from "./Courses.main";
import Mobile from "./Courses.mobile";
interface Props extends Content.Courses {}
function Courses(props: Props) {
  const { isMobile, mobileBrowser, isWide } = storeSelector(({ layout }) => layout);
  return isMobile && mobileBrowser ? <Mobile {...props} /> : <Main {...props} percentage={handleWide(isWide, props)} />;
}
export default Courses;
