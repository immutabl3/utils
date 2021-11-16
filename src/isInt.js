import isNumber from './isNumber.js';

export default function isInt(num) {
  return isNumber(num) && ~~num === num;
};