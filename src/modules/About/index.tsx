import { storeSelector } from "../../config/redux";
import { handleWide } from "../../utils";
import Main from "./About.main";
import Mobile from "./About.mobile";
interface Props extends Content.About {}
const About = (props: Props) => {
  const { isMobile, mobileBrowser, isWide } = storeSelector(({ layout }) => layout);
  return isMobile && mobileBrowser ? <Mobile {...props} /> : <Main {...props} percentage={handleWide(isWide, props)} />;
};
export default About;
