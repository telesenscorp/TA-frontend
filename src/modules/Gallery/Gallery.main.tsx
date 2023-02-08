import { useEffect, useRef, useState } from "react";
import { Image, Text } from "../../components";
import { storeSelector } from "../../config/redux";
interface Props extends Content.Gallery {
  hint: Content.Text;
}
function Gallery({ bg, list, listTitle, anchor, hint }: Props) {
  const { screenWidth } = storeSelector(({ layout }) => layout);
  const slider = useRef<HTMLDivElement>(null);
  const [state] = useState({
    pressed: false,
    startX: 0,
    posX: 0,
    busy: false,
    sliderWidth: 1,
  });
  const mouseDown = ({ pageX }: Gen.PointerEv) => {
    slider.current!.style.transition = "none";
    window.addEventListener("mouseup", mouseUp, { once: true });
    let posX = slider.current!.getBoundingClientRect().x;
    state.pressed = true;
    state.posX = posX;
    state.startX = posX - pageX;
  };
  const mouseUp = () => {
    if (state.pressed) {
      state.pressed = false;
      let posX = slider.current!.getBoundingClientRect().x;
      if (posX > 0 || posX < -(state.sliderWidth - screenWidth)) {
        slider.current!.style.transition = "transform 0.3s ease-out";
        slider.current!.style.transform = `translateX(${posX > 0 ? 0 : -(state.sliderWidth - screenWidth)}px)`;
      }
    }
  };
  const mouseMove = ({ pageX, pointerId }: Gen.PointerEv) => {
    if (state.pressed) {
      if (!slider.current!.hasPointerCapture(pointerId)) {
        slider.current!.setPointerCapture(pointerId);
      }
      slider.current!.style.transform = `translateX(${state.startX + pageX}px)`;
    }
  };
  useEffect(() => {
    state.sliderWidth = slider.current!.clientWidth;
  }, [list]);
  return (
    <section id={anchor} className={`bg${bg} gallery-section`}>
      <div className="block-container">
        <Text className="gallery-title" {...listTitle}>
          {listTitle.text}
        </Text>
        <div className="gallery-container">
          <div ref={slider} className="gallery-box" onPointerDown={mouseDown} onPointerMove={mouseMove}>
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
