type Style = string | object | undefined;
const styler = (styles: Style[] = []) => {
  let res: string[] = [];
  styles.forEach((style) => {
    if (typeof style === "string" && style.length) {
      res.push(style);
    } else if (typeof style === "object") {
      for (const [key, value] of Object.entries(style)) {
        if (value !== undefined && value !== false) res.push(key);
      }
    }
  });
  return res.join(" ");
};
export default styler;
