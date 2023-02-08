import { Button, Text } from "../../components";
interface Props extends Content.NotFound {}
function NotFound({ desc, action, title, anchor }: Props) {
  return (
    <section id={anchor} className="bgg2 not-found">
      <div className="hand-container" />
      <div className="content-container">
        <Text {...title}>{title.text}</Text>
        <Text {...desc}>{desc.text}</Text>
        <div className="fit-content">
          <Button {...action} />
        </div>
      </div>
    </section>
  );
}
export default NotFound;
