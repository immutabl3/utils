export default function isBoolean(value?: unknown): boolean {
  return value === !!value;
};