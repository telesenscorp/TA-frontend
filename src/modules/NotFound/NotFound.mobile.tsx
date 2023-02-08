import { Button, Text } from "../../components";
interface Props extends Content.NotFound {}
function NotFound({ desc, action, title, anchor }: Props) {
  return (
    <section id={anchor} className="bgg2 m-not-found">
      <Text {...title}>{title.text}</Text>
      <Text {...desc}>{desc.text}</Text>
      <Button {...action} className="full-width" />
      <div className="hand-container" />
    </section>
  );
}
export default NotFound;
