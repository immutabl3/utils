export default function memoize(fn) {
  let value;
  let called = false;
  
  return function memoizedFn(...args) {
    if (called) return value;
    
    called = true;
    return (value = fn(...args));
  };
};