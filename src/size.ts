export default function size(obj: unknown) {
  if (!obj) return 0;
  return Object.hasOwn(obj, 'length')
    ? (obj as []).length
    : Object.keys(obj).length;
};