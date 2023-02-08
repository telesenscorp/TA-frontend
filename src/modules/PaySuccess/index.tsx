import { storeSelector } from "../../config/redux";
import Main from "./PaySuccess.main";
import Mobile from "./PaySuccess.mobile";
interface Props extends Content.PaySuccess {}
const PaySuccess = (props: Props) => {
  const { isMobile, mobileBrowser } = storeSelector(({ layout }) => layout);
  return isMobile && mobileBrowser ? <Mobile {...props} /> : <Main {...props} />;
};
export default PaySuccess;
