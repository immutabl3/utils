export default function isNumber(value?: unknown): boolean {
  return Number.isFinite(value) || value === Infinity || value === -Infinity;
};