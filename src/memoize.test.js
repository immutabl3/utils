import test from 'tape';
import memoize from './memoize.js';
import isFunction from './isFunction.js';

test('memoize', assert => {
  const func = a => +a;

  const memoized = memoize(func);

  assert.ok(isFunction(memoized));
  assert.ok(!!memoized.cache);
  
  const ret0 = memoized('42');
  assert.is(ret0, 42);
  const ret1 = memoized('42');
  assert.is(ret1, 42);

  const memoized2 = memoize((str, arr) => ({
    str,
    arr,
  }));

  const ret2 = memoized2('', ['1', '2'])
  assert.is(ret2.str, '');
  assert.same(ret2.arr, ['1', '2']);

  assert.end();
});