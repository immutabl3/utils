import test from 'tape';
import constant from './constant.js';
import isFunction from './isFunction.js';

test('constant', assert => {
  assert.ok(isFunction(constant(1)));
  assert.is(constant(1)(), 1);
  assert.same(constant([1])(), [1]);

  assert.end();
});