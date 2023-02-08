import { storeSelector } from "../../config/redux";
import Main from "./Gallery.main";
import Mobile from "./Gallery.mobile";
interface Props extends Content.Gallery {
  hint: Content.Text;
}
function Courses(props: Props) {
  const { isMobile, mobileBrowser } = storeSelector(({ layout }) => layout);
  return isMobile && mobileBrowser ? <Mobile {...props} /> : <Main {...props} />;
}
export default Courses;
