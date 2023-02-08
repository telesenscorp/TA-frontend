export function clamp(value: number, lower: number, upper: number) {
  if (value > upper) return upper;
  if (value < lower) return lower;
  return value;
}
