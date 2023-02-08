import { Fragment, useEffect, useLayoutEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { ScrollToTop, Snackbar } from "./components";
import Modal from "./components/Modal";
import { actions, storeSelector } from "./config/redux";
import { Get, Post } from "./config/server";
import Page from "./pages/Page";
import "./styles/root.scss";
import { eventLeave, eventVisit } from "./utils";
import { rawContent } from "./utils/factories";

function App() {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);
  const { content, homeId, user } = storeSelector(({ layout }) => layout);
  const off = () => {
    setLoaded(true);
    //@ts-ignore
    document.getElementById("splash").style.height = 0;
  };
  const initiate = async () => {
    if (user.locale) {
      Get<ServerRes.content[]>(
        ["contentId", "ac-" + user.locale],
        (res) => {
          dispatch(
            actions.layout.update({ ...rawContent(res), language: user.locale })
          );
          off();
        },
        off
      );
    } else {
      Post<{ data: ServerRes.content[]; info: ServerRes.info }>(
        "first",
        { dataMap: { def: "ac-en", ua: "ac-ua" } },
        (res) => {
          const loc = res.info?.country?.toLowerCase() === "ua" ? "ua" : "en";
          dispatch(
            actions.layout.update({
              ...rawContent(res.data),
              language: loc,
              user: {
                ip: res.info?.ip,
                locale: loc,
                location: res.info?.country,
              },
            })
          );
        }
      );
    }
  };
  useLayoutEffect(() => {
    initiate();
  }, [user.locale]);

  useEffect(() => {
    function screenResize() {
      const ratio = window.devicePixelRatio || 1;
      const sw = window.innerWidth || document.documentElement.clientWidth;
      dispatch(
        actions.layout.setScreen({ sw: ratio === 1.25 ? sw * ratio : sw })
      );
    }
    screenResize();
    window.addEventListener("resize", screenResize);
    // send event "visit" to analytics
    eventVisit();
    // create event for leave to site and send to analytics
    window.addEventListener("beforeunload", eventLeave);
    return () => {
      window.removeEventListener("resize", screenResize);
      window.removeEventListener("beforeunload", eventLeave);
    };
  }, []);
  if (!loaded) return null;
  return (
    <Fragment>
      <ScrollToTop />
      <Modal />
      <Snackbar />
      <Routes>
        { content.routes.map(({ route, id }) => (
          <Route
            key={ id }
            path={ "/" + route.toLowerCase() }
            element={ <Page { ...{ id, route, locale: user.locale } } /> }
          />
        )) }
        <Route
          index
          element={ <Page route="Home" id={ homeId } locale={ user.locale } /> }
        />
        <Route path="*" element={ <Navigate to="/not-found" replace /> } />
      </Routes>
    </Fragment>
  );
}
export default App;
