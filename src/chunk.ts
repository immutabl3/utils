export default function chunk<T = unknown>(
  arr: T[],
  chunkSize = 1,
  cache = [] as T[][],
): T[][] {
  const tmp = [...arr];
  if (chunkSize <= 0) return cache;
  while (tmp.length) cache.push(tmp.splice(0, chunkSize));
  return cache;
};