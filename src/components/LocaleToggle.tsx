import { useDispatch } from "react-redux";
import { actions, storeSelector } from "../config/redux";

const LocaleToggle = () => {
  const dispatch = useDispatch();
  const { locale } = storeSelector(({ layout }) => layout.user);
  return (
    <div className="locale-btn">
      <input
        className="locale-input"
        type="checkbox"
        checked={locale === "en"}
        onChange={() =>
          dispatch(actions.layout.updateLocale(locale === "ua" ? "en" : "ua"))
        }
      />
      <div data-left="ua" data-right="en" className="knobs" />
      <div data-left="ua" data-right="en" className="labels" />
    </div>
  );
};
export default LocaleToggle;
