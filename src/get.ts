export default function get(base: object, path: (string | number)[]) {
  let current = base;

  for (let idx = 0; idx < path.length; idx++) {
    if (current === null || current === undefined) return current;
    current = current[path[idx]! as keyof typeof current];
  }

  return current;
};
