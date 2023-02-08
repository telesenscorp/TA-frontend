import { File_URL } from "../common/constants";

interface Props {
  image?: string;
  h?: number;
  w?: number;
  alt?: string;
}
function Image({ alt, image = "", h, w }: Props) {
  if (!image) return null;
  return <img draggable="false" loading="lazy" src={File_URL + image} alt={alt} height={h} width={w} />;
}
export default Image;
