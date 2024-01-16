const { EPSILON } = Number;

export default function roundTo(x: number, arity = 2): number {
  const y = 10 ** arity;
  return Math.round((x + EPSILON) * y) / y;
};