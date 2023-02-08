import { useEffect, useState } from "react";
import { storeSelector } from "../../config/redux";
import { Get } from "../../config/server";
import { handleWide } from "../../utils";
import Main from "./ChangeProfession.main";
import Mobile from "./ChangeProfession.mobile";
interface Props extends Content.ChangeProfession {}
const ChangeProfession = (props: Props) => {
  const { isMobile, mobileBrowser, isWide } = storeSelector(({ layout }) => layout);
  const [product, setProduct] = useState<States.ShopProduct>();
  useEffect(() => {
    Get<States.ShopProduct>(["productId", props.Id], (v) => setProduct(v));
  }, []);
  return isMobile && mobileBrowser ? (
    <Mobile {...props} product={product} />
  ) : (
    <Main {...props} product={product} percentage={handleWide(isWide, props)} />
  );
};
export default ChangeProfession;
