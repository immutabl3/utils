export default function once<T extends any[], R>(fn: (...args: T) => R): (...args: T) => R | undefined {
  let memo: R | undefined;
  let called = false;
  return function once(...args: T): R | undefined {
    if (called) return memo;
    called = true;
    return (memo = fn(...args));
  };
};