export default function isRegExp(value?: unknown): boolean {
  return !!(value && value instanceof RegExp);
};