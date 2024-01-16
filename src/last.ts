export default function last<T>(arr: T[] = []): T {
  return arr.at(-1) as T;
};