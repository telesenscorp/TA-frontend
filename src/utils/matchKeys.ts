export const matchKeys = (a: Gen.O, b: Gen.O) => {
  const result: Gen.O = {};
  let bucket = Object.entries(b);
  bucket.forEach(([k, v]) => {
    result[k] = Object.hasOwn(a, k) ? a[k] : v;
  });
  return { result, shouldChange: Object.keys(a).length !== bucket.length, bucketA: a, bucketB: b };
};
export const extractKeys = (origin: Gen.O, modified: Gen.O) => {
  const result: Gen.O = {};
  Object.keys(origin).forEach((k) => {
    if (origin[k] !== modified[k]) result[k] = modified[k];
  });
  return result;
};
