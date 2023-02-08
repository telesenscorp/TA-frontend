import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { actions, storeSelector } from "../config/redux";
import Text from "./Text";

function Snackbar() {
  const dispatch = useDispatch();
  const { id, value, active } = storeSelector(({ events }) => events);
  const clearSnackbar = useCallback(() => {
    dispatch(actions.event.eventsClear());
  }, []);
  useEffect(() => {
    document.body.style.overflow = id === "message-modal" && active ? "hidden" : "";
  }, [active, id]);
  return id === "message-modal" && active ? (
    <div className="snackbar" onClick={clearSnackbar}>
      <div className="snackbar-box" onClick={(e) => e.stopPropagation()}>
        <Text {...value.promptTitle}>{value.promptTitle.text}</Text>
        <Text {...value.promptMessage}>{value.promptMessage.text}</Text>
        <div className="close" onClick={clearSnackbar} />
      </div>
    </div>
  ) : null;
}

export default Snackbar;
