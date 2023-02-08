import { useCallback, useEffect, useState } from "react";
import Button from "../Button";
import Text from "../Text";

interface Props extends Content.Block {
  top: number;
  action: Content.Button;
  mobile?: boolean;
  stock?: number;
}
function ProposalBar({ top, title, desc, action, mobile, stock = 0 }: Props) {
  const [show, setShow] = useState<boolean>(false);
  const removeListener = useCallback(
    function () {
      setShow(false);
      window.removeEventListener("scroll", checkScroll);
    },
    [top]
  );
  const checkScroll = useCallback(
    function () {
      setShow(top < window.pageYOffset);
    },
    [top]
  );
  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return removeListener;
  }, [top]);

  if (!show) return null;
  // hello
  return mobile ? (
    <div className="proposal bgw frc full-width">
      <Button {...action} />
      <div className="wrapper-close-proposal">
        <div className="close-proposal" onClick={removeListener} />
      </div>
    </div>
  ) : (
    <div className="proposal frc justify-between bgw full-width">
      <Text {...title}>{title.text}</Text>
      <Text {...desc}>{`${desc.text}${stock}`}</Text>
      <div className="frc">
        <Button {...action} />
        <div className="close-proposal ml24" onClick={removeListener} />
      </div>
    </div>
  );
}
export default ProposalBar;
