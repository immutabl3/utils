const { EPSILON } = Number;

export default function roundTo(x, arity = 2) {
  const y = Math.pow(10, arity);
  return Math.round((x + EPSILON) * y) / y;
};