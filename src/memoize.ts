import isPrimitive from './isPrimitive';

type Key = string | number | boolean | null | undefined | object;
type CacheValue = any;
type MemoizeFunction = (...args: any[]) => unknown;

const toKey = (key: Key): string => isPrimitive(key) ? String(key) : JSON.stringify(key);

const Cache = () => {
  const cache = new Map<string, CacheValue>();
  return {
    has(key: Key) {
      return cache.has(toKey(key));
    },
    get(key: Key) {
      return cache.get(toKey(key));
    },
    set(key: Key, value: CacheValue) {
      cache.set(toKey(key), value);
      return value;
    },
    clear() {
      cache.clear();
    },
  };
};

export default function memoize(fn: MemoizeFunction) {
  const cache = Cache();
  
  const memoized = function(...args: unknown[]) {
    if (cache.has(args)) return cache.get(args);
    
    return cache.set(args, fn(...args));
  };

  memoized.cache = cache;
  
  return memoized;
};