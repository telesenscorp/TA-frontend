import { storeSelector } from "../../config/redux";
import Main from "./PayFailure.main";
import Mobile from "./PayFailure.mobile";
interface Props extends Content.PayFailure {}
const PayFailure = (props: Props) => {
  const { isMobile, mobileBrowser } = storeSelector(({ layout }) => layout);
  return isMobile && mobileBrowser ? (
    <Mobile {...props} />
  ) : (
    <Main {...props} />
  );
};
export default PayFailure;
