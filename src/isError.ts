export default function isError(value?: unknown): boolean {
  return !!(value && value instanceof Error);
};