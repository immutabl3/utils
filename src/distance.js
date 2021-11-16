const square = x => x * x;
export default function distance(x1, y1, x2, y2) {
  return Math.sqrt(square(x2 - x1) + square(y2 - y1));
};