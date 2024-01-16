import isNumber from './isNumber';

export default function isInt(value?: unknown): boolean {
  return isNumber(value) && ~~value! === value;
};