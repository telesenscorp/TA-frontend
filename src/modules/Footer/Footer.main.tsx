import { Link, Text } from "../../components";

interface Props {
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
function Footer({
  bg,
  pagesTitle,
  pagesList,
  addressesTitle,
  addressesList,
  phonesTitle,
  phonesList,
  emailsTitle,
  emailsList,
  followTitle,
  followList,
  copyright,
  anchor,
}: Props) {
  return (
    <footer id={anchor} className={`bg${bg} footer`}>
      <div className="top-footer">
        <ul className="list pages">
          {pagesList.map((props, idx) => (
            <li key={"links" + idx} className="link-label">
              <Link {...props}>
                <Text {...props}>{props.text}</Text>
              </Link>
            </li>
          ))}
        </ul>
        <div className="contacts">
          <ul className="list">
            <li className="label">
              <Text {...phonesTitle}>{phonesTitle.text}</Text>
            </li>
            {phonesList.map((props, idx) => (
              <li key={"links" + idx} className="link-label">
                <Text {...props} className="lh130">
                  {props.text}
                </Text>
              </li>
            ))}
          </ul>
          <ul className="list">
            <li className="label">
              <Text {...emailsTitle}>{emailsTitle.text}</Text>
            </li>
            {emailsList.map((props, idx) => (
              <li key={"links" + idx} className="link-label">
                <Text {...props} className="lh130">
                  {props.text}
                </Text>
              </li>
            ))}
          </ul>
          <ul className="list">
            <li className="label">
              <Text {...addressesTitle}>{addressesTitle.text}</Text>
            </li>
            {addressesList.map((props, idx) => (
              <li key={"links" + idx} className="link-label">
                <Link {...props}>
                  <Text {...props} className="lh130">
                    {props.text}
                  </Text>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <ul className="list follows">
          <li className="label">
            <Text {...followTitle}>{followTitle.text}</Text>
          </li>
          {followList.map((props, idx) => (
            <li key={"links" + idx} className="link-label">
              <Link {...props}>
                <Text {...props} className="lh130">
                  {props.text}
                </Text>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <img src={require("../../assets/arm-rock.webp")} loading="lazy" alt="ok" className="animated-hand" />
      <div className="bottom-footer">
        <Text {...copyright}>{copyright.text}</Text>
      </div>
    </footer>
  );
}
export default Footer;
