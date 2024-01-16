import isEven from './isEven';

export default function isOdd(num: number): boolean {
  return !isEven(num);
};