export const waiter = (timeout: number) => {
  return new Promise((resolve) => setTimeout(resolve, timeout * 1000));
};
export const waiterCallback = async (timeout: number, fn = () => {}) => {
  await waiter(timeout);
  fn();
};
