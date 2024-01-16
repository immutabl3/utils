import isFunction from './isFunction';

const sortByFn = <T>(fn: (arg: T) => any) => (left: T, right: T) => {
  const a = fn(left);
  const b = fn(right);
  return a > b 
    ? 1 
    : b > a
      ? -1 
      : 0;
};

const sortByKey = <T, K extends keyof T>(key: K) => (a: T, b: T) => (
  a[key] > b[key] 
    ? 1 
    : b[key] > a[key] 
      ? -1 
      : 0
);

export default function sortBy<T, K extends keyof T>(arr: T[], key: K | ((arg: T) => any)) {
  // @ts-ignore This is too much for ts
  return arr.sort(isFunction(key) ? sortByFn(key) : sortByKey(key));
};