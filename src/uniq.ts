export default function uniq<T>(arr: T[]): T[] {
  return [...new Set(arr)];
};