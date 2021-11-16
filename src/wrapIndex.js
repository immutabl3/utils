export default function wrapIndex(arr, i) {
  const { length } = arr;
  const timesWrapped = ~~(i / length);
  const idx = i - (timesWrapped * length);
  return idx >= length ? 0 : idx;
};
