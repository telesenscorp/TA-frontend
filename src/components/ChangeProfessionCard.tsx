import { Fragment } from "react";
import { Text } from "./index";
import Icons from "./Icons";
interface Props extends Content.PriceBlock {
  bg?: Mapper.Colors;
  className?: string;
  partial?: boolean;
  product?: States.ShopProduct;
}
function ChangeProfessionCard({
  bg = "c14",
  className,
  title,
  desc,
  count,
  partial,
  product,
}: Props) {
  return (
    <div
      className={`change-profession-card d-flex justify-between bg${bg} ${className}`}
    >
      <div className="item">
        <Text {...title}>{title.text}</Text>
        <Text {...desc}>{`${product?.price}${desc.text}`}</Text>
      </div>
      {partial ? (
        <Fragment>
          <div className="item">
            <Text {...title}>{title.instalmentCount}</Text>
            <Text {...desc}>{`${product?.instalmentCount}${count.text}`}</Text>
          </div>
          <div className="item">
            <Text {...title}>{title.instalmentPrice}</Text>
            <div className="d-flex icon-container">
              <div className="icon-card flex-center">
                <Icons name="bankAlfa"/>
              </div>
              <div className="icon-card flex-center">
                <Icons name="bankPrivat"/>
              </div>
              <div className="icon-card flex-center">
                <Icons name="bankMono"/>
              </div>
            </div>
          </div>
        </Fragment>
      ) : null}
      <div className="item">
        <Text {...title}>{title.startDate}</Text>
        <Text {...desc}>{product?.startDate}</Text>
      </div>
      <div className="item">
        <Text {...title}>{title.stock}</Text>
        <Text {...desc}>{`${product?.stock}`}</Text>
      </div>
    </div>
  );
}
export default ChangeProfessionCard;
