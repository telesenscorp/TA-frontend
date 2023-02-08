import { storeSelector } from "../../config/redux";
import { handleWide } from "../../utils";
import Main from "./Schedule.main";
import Mobile from "./Schedule.mobile";
interface Props extends Content.Schedule {}
function Schedule(props: Props) {
  const { isMobile, mobileBrowser, isWide } = storeSelector(({ layout }) => layout);
  return isMobile && mobileBrowser ? <Mobile {...props} /> : <Main {...props} percentage={handleWide(isWide, props)} />;
}
export default Schedule;
