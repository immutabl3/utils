import isObject from './isObject.js';

export default function isPrimitive(value) {
  return !isObject(value);
};