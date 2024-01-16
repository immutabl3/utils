export default function first<T>(arr: T[] = []): T {
  return arr.at(0) as T;
};