export default function constant<T>(val: T): () => T {
  return () => val;
};