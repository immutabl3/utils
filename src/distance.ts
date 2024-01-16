const square = (x: number) => x * x;
export default function distance(x1: number, y1: number, x2: number, y2: number): number {
  return Math.sqrt(square(x2 - x1) + square(y2 - y1));
};