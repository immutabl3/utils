export default function isObject(value?: unknown): boolean {
  return !!(value && value instanceof Object);
};