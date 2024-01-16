export default function repeat<T = unknown>(value: T, length = 1): T[] {
  return Array(length).fill(value);
};