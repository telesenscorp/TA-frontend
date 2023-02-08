import { storeSelector } from "../../config/redux";
import Main from "./NotFound.main";
import Mobile from "./NotFound.mobile";
interface Props extends Content.NotFound {}
function NotFound(props: Props) {
  const { isMobile, mobileBrowser } = storeSelector(({ layout }) => layout);
  return isMobile && mobileBrowser ? (
    <Mobile {...props} />
  ) : (
    <Main {...props} />
  );
}
export default NotFound;
