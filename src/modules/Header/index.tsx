import { storeSelector } from "../../config/redux";
import Main from "./Header.main";
import Mobile from "./Header.mobile";
interface Props extends Content.Header {
  copyright: Content.Text;
}
const modifyProps = (props: Props) => {
  let modified: Gen.O = {};
  const visible: Content.Link[] = props.list.filter((v) => !v.parent);
  props.list.forEach((v) => {
    if (v.parent) {
      modified[v.parent] ? modified[v.parent].push(v) : (modified[v.parent] = [v]);
    }
  });
  const ids = Object.keys(modified);
  return { list: visible.map((v) => (v.text && ids.includes(v.text) ? [v, ...modified[v.text]] : v)), copyright: props.copyright } as Props;
};
function Header(props: Props) {
  const { isMobile, mobileBrowser } = storeSelector(({ layout }) => layout);
  return isMobile && mobileBrowser ? <Mobile {...modifyProps(props)} /> : <Main {...modifyProps(props)} />;
}
export default Header;
