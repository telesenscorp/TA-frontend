export const getPlaceholderByName = (name: string) => {
  return "placeholder" + name[0].toUpperCase() + name.substring(1);
};
