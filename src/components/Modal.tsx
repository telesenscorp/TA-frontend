import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { actions, storeSelector } from "../config/redux";
import Text from "./Text";

function Modal() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const { isMobile, mobileBrowser } = storeSelector(({ layout }) => layout);
  const { id, value, active } = storeSelector(({ events }) => events);
  useEffect(() => {
    if (id === "review-modal" && active) {
      setShow(true);
      document.body.style.position = "fixed";
      document.body.style.top = `-${value?.offset}px`;
    } else {
      setShow(false);
    }
  }, [id]);

  const closeModal = () => {
    dispatch(actions.event.eventsClear());
    const scrollY = document.body.style.top;
    document.body.style.position = "";
    document.body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  };

  const outsideModalClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === document.querySelectorAll(".review-modal")[0]) {
      closeModal();
    }
  };

  return show ? (
    <div className="review-modal" onClick={(e) => outsideModalClick(e)}>
      <div className={isMobile && mobileBrowser ? "content mobile" : "content"}>
        <Text {...value?.authorLabel}>{value?.authorLabel.text}</Text>
        <Text {...value?.author} pb16>
          {value?.author.text}
        </Text>
        <div className="main-text">
          <Text {...value?.text} lh150>
            {value?.text.text}
          </Text>
        </div>
        <div className="close" onClick={() => closeModal()} />
      </div>
    </div>
  ) : null;
}

export default Modal;
