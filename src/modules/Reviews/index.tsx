import { storeSelector } from "../../config/redux";
import { handleWide } from "../../utils";
import Main from "./Reviews.main";
import Mobile from "./Reviews.mobile";
interface Props extends Content.Reviews {
  Id?: string;
  promptTitle?: Content.Text;
  promptMessage?: Content.Text;
}
function Reviews(props: Props) {
  const { isMobile, mobileBrowser, isWide } = storeSelector(({ layout }) => layout);
  return isMobile && mobileBrowser ? <Mobile {...props} /> : <Main {...props} percentage={handleWide(isWide, props)} />;
}
export default Reviews;
