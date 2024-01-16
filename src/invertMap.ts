export default function invertMap<K, V>(map: Map<K, V>): Map<V, K> {
  return new Map(
    Array.from(map.entries())
      .map(([key, value]) => [value, key])
  );
};