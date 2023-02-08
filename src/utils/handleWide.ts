type fn = (w: boolean, p: { percentage: number; percentage1440: number }) => number;
export const handleWide: fn = (w: boolean, { percentage, percentage1440 }) => {
  return w && percentage1440 ? percentage1440 : percentage;
};
