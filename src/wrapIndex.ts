export default function wrapIndex<T>(arr: T[], i: number): number {
  const { length } = arr;
  const timesWrapped = Math.floor(i / length);
  const idx = i - (timesWrapped * length);
  return idx >= length ? 0 : idx;
};
