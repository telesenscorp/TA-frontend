import { useDispatch } from "react-redux";
import { actions } from "../config/redux";
import Link from "./Link";
import Text from "./Text";

interface Props {
  list: Content.Link[];
  copyright: Content.Text;
}

function Menu({ list, copyright }: Props) {
  const dispatch = useDispatch();
  return (
    <div className="menu">
      <ul className="list pages">
        {list.map((props, idx) => (
          <li
            key={"links" + idx}
            className="link-label"
            onClick={() => {
              document.body.style.overflow = "auto";
              dispatch(actions.layout.update({ visible: false, hiddenHeader: true }));
            }}>
            {Array.isArray(props) ? (
              <Link {...props[0]}>
                <Text className="link" {...props[0]}>
                  {props[0].text}
                </Text>
              </Link>
            ) : (
              <Link {...props}>
                <Text className="link" {...props}>
                  {props.text}
                </Text>
              </Link>
            )}
          </li>
        ))}
      </ul>
      <Text {...copyright}>{copyright.text}</Text>
    </div>
  );
}

export default Menu;
