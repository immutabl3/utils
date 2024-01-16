export default function remove<T = unknown>(arr: T[], value: T): boolean {
  const index = arr.indexOf(value);
  if (index === -1) return false;
  arr.splice(index, 1);
  return true;
};