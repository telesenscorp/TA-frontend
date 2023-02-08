import { createElement, FC, Fragment } from "react";
import { storeSelector } from "../config/redux";
import { Modules } from "../modules";
import { rawProps } from "../utils/factories";
interface Props {
  id: number;
  route: string;
  locale: string;
}
function Page({ id, route, locale }: Props) {
  const { isMobile, mobileBrowser, content } = storeSelector(({ layout }) => layout);
  return (
    <Fragment>
      {content.pages[route].map(({ section, props, override }, i) =>
        props?.visible
          ? createElement(Modules[section] as FC<Gen.O>, {
              ...rawProps(props, override, isMobile && mobileBrowser),
              key: route + id + locale + section + i,
            })
          : null
      )}
    </Fragment>
  );
}
export default Page;
