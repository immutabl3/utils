export default function isDate(value?: unknown): boolean {
  return !!(value && value instanceof Date && !Number.isNaN(value));
};