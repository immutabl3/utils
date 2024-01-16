import { expect, test } from 'bun:test';
import memoize from './memoize';
import isFunction from './isFunction';

test('memoize', () => {
  const func = (a: number): number => +a;

  const memoized = memoize(func);

  expect(isFunction(memoized)).toBe(true);
  expect(!!memoized.cache).toBe(true);
  
  const ret0 = memoized('42');
  expect(ret0).toBe(42);
  const ret1 = memoized('42');
  expect(ret1).toBe(42);

  const memoized2 = memoize((str, arr) => ({
    str,
    arr,
  }));

  const ret2 = memoized2('', ['1', '2'])
  expect(ret2.str).toBe('');
  expect(ret2.arr).toEqual(['1', '2']);
});