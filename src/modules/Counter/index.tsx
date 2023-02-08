import { storeSelector } from "../../config/redux";
import Main from "./Counter.main";
import Mobile from "./Counter.mobile";
interface Props extends Content.Counter {}
function Counter(props: Props) {
  const { isMobile, mobileBrowser } = storeSelector(({ layout }) => layout);
  return isMobile && mobileBrowser ? <Mobile {...props} /> : <Main {...props} />;
}
export default Counter;
