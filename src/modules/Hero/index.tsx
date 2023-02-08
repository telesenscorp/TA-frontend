import { storeSelector } from "../../config/redux";
import { handleWide } from "../../utils";
import Main from "./Hero.main";
import Mobile from "./Hero.mobile";
interface Props extends Content.Hero {}
function Hero(props: Props) {
  const { isMobile, mobileBrowser, isWide } = storeSelector(({ layout }) => layout);
  return isMobile && mobileBrowser ? <Mobile {...props} /> : <Main {...props} percentage={handleWide(isWide, props)} />;
}
export default Hero;
