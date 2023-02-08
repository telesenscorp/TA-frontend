import { flatten, unflatten } from "flat";
export const rawContent = (data: ServerRes.content[]) => {
  let routes: { route: string; id: number }[] = [];
  let pages: Gen.O = {};
  let homeId;
  data.forEach(({ route, content, id }) => {
    if (route.toLowerCase() === "home") {
      homeId = id;
    }
    routes.push({ route, id });
    pages[route] = JSON.parse(content);
  });
  return { content: { routes, pages }, homeId };
};
type RowProps = (p: Gen.O, o: Gen.O, m: boolean) => Gen.O;
export const rawProps: RowProps = (p, o = {}, m) => {
  if (m) {
    let propsFlat: Gen.O = flatten(p);
    Object.entries(o).forEach(([k, v]) => {
      propsFlat[k] = v;
    });
    return unflatten(propsFlat);
  }
  return p;
};
