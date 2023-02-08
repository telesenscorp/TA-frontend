import { storeSelector } from "../../config/redux";
import Main from "./Footer.main";
import Mobile from "./Footer.mobile";
interface Props extends Content.Footer {
  bg: Mapper.Colors;
  addressesList: Content.Link[];
  phonesList: Content.Link[];
  followList: Content.Link[];
  emailsList: Content.Link[];
  pagesList: Content.Link[];
  pagesTitle: Content.Text;
  addressesTitle: Content.Text;
  phonesTitle: Content.Text;
  emailsTitle: Content.Text;
  followTitle: Content.Text;
  copyright: Content.Text;
  anchor?: string;
}
function Footer(props: Props) {
  const { isMobile, mobileBrowser } = storeSelector(({ layout }) => layout);
  return isMobile && mobileBrowser ? <Mobile {...props} /> : <Main {...props} />;
}
export default Footer;
