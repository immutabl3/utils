import isPrimitive from './isPrimitive.js';

const toKey = key => isPrimitive(key) ? key : JSON.stringify(key);

const Cache = () => {
  const cache = new Map();
  return {
    has(key) {
      return cache.has(toKey(key));
    },
    get(key) {
      return cache.get(toKey(key));
    },
    set(key, value) {
      cache.set(toKey(key), value);
      return value;
    },
    clear() {
      cache.clear();
    },
  };
};

export default function memoize(fn) {
  const cache = Cache();
  
  const memoized = function(...args) {
    if (cache.has(args)) return cache.get(args);
    
    return cache.set(args, fn(...args));
  };

  memoized.cache = cache;
  
  return memoized;
};