export default function invertMap(map) {
  return new Map(
    Array.from(map.entries())
      .map(([key, value]) => [value, key])
  );
};