import { storeSelector } from "../../config/redux";
import Main from "./WhyUs.main";
import Mobile from "./WhyUs.mobile";
interface Props extends Content.WhyUs {}
function WhyUs(props: Props) {
  const { isMobile, mobileBrowser } = storeSelector(({ layout }) => layout);
  return isMobile && mobileBrowser ? <Mobile {...props} /> : <Main {...props} />;
}
export default WhyUs;
