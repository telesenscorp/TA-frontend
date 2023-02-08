import { Image, Text } from "../../components";
interface Props extends Content.Gallery {
  hint: Content.Text;
}
function Gallery({ bg, list, listTitle, anchor, hint }: Props) {
  return (
    <section id={anchor} className={`bg${bg} mob-gallery`}>
      <div className="block-container">
        <Text className="gallery-title" {...listTitle}>
          {listTitle.text}
        </Text>
        <div className="gallery-container">
          <div className="gallery-box">
            {list.map(({ image, name, to, width, height }, i) => (
              <div key={"g-" + i} className={`gallery-image w${width}`}>
                <Image image={image} alt={name} h={height} w={width} />
              </div>
            ))}
          </div>
        </div>
        <div className="hint">
          <Text {...hint}>{hint.text}</Text>
          <div className="arrow" />
        </div>
      </div>
    </section>
  );
}
export default Gallery;
