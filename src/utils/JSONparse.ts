export const JSONparse = (content: string) => {
  try {
    return JSON.parse(content);
  } catch (e) {
    return content;
  }
};
