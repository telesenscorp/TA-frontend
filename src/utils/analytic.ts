import { Post } from "../config/server";
import store, { actions } from "../config/redux";

const eventVisit = () => {
  const {
    isMobile,
    mobileBrowser,
    user: { locale },
  } = store.getState().layout;
  Post<{ data: ServerRes.content[]; info: ServerRes.info }>(
    "first",
    { dataMap: { def: "ac-en", ua: "ac-ua" } },
    (res) => {
      const loc = locale
        ? locale
        : res.info?.country?.toLowerCase() === "ua"
          ? "ua"
          : "en";
      store.dispatch(
        actions.layout.update({
          language: loc,
          user: {
            ip: res.info?.ip,
            locale: loc,
            location: res.info?.country,
          },
        })
      );
      Post("createEvent", {
        ip: res.info?.ip,
        event: "visit-academy",
        type: "0",
        browser: navigator.userAgent,
        mode: isMobile && mobileBrowser ? "mobile" : "desktop",
        locale: loc,
        location: res.info?.country,
      });
    }
  );
};

const eventLeave = async (e: {
  preventDefault: () => void;
  returnValue: string;
}) => {
  const { ip, location, locale } = store.getState().layout.user;
  const sections = document.querySelectorAll("section");
  const sectionCoords = Array.from(sections).map((section) => {
    const rect = section.getBoundingClientRect();
    return {
      top: rect.top + window.scrollY,
      bottom: rect.bottom + window.scrollY,
    };
  });
  const currentSection = sectionCoords.findIndex(
    (section) =>
      window.scrollY >= section.top && window.scrollY <= section.bottom
  );
  await Post("createEvent", {
    ip,
    event: "leave-academy",
    type: "0",
    browser: navigator.userAgent,
    mode: `section: ${sections[currentSection]?.id} #${currentSection}`,
    locale,
    location,
  });
  e.preventDefault();
  e.returnValue = "";
};

export { eventVisit, eventLeave };
