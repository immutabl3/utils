import isFunction from './isFunction.js';

const sortByFn = fn => (left, right) => {
  const a = fn(left);
  const b = fn(right);
  return a > b 
    ? 1 
    : b > a
      ? -1 
      : 0;
};

const sortByKey = key => (a, b) => (
  a[key] > b[key] 
    ? 1 
    : b[key] > a[key] 
      ? -1 
      : 0
);

export default function sortBy(arr, key) {
  return arr.sort(isFunction(key) ? sortByFn(key) : sortByKey(key));
};