export default function isSymbol(value?: unknown): boolean {
  return typeof value === 'symbol';
};