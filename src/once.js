export default function once(fn) {
  let memo;
  let called = false;
  return function once() {
    if (called) return memo;
    called = true;
    return (memo = fn());
  };
};