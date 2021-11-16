const { round, pow } = Math;
const { EPSILON } = Number;

export default function roundTo(x, arity = 2) {
  const y = pow(10, arity);
  return round((x + EPSILON) * y) / y;
};