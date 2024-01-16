export default function isEmpty(value?: unknown): boolean {
  if (!value) return true;
  for (const _ in value) return false;
  return true;
};