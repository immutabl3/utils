import isObject from './isObject';

export default function isPrimitive(value?: unknown): boolean {
  return !isObject(value);
};