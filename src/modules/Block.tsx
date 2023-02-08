import { Text } from "../components";
interface Props extends Content.Block {}
function Block({ title, desc }: Props) {
  return (
    <>
      <Text {...title}>{title.text}</Text>
      <Text {...desc}>{desc.text}</Text>
    </>
  );
}
export default Block;
