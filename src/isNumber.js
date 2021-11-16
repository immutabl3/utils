export default function isNumber(num) {
  return Number.isFinite(num) || num === Infinity || num === -Infinity;
};