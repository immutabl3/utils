export default function isFunction(value?: unknown): boolean {
  return !!(value && typeof value === 'function');
};