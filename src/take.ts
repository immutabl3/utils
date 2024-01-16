export default function take<T = unknown>(arr: T[], qty = 1): T[] {
  return [...arr].splice(0, qty);
};