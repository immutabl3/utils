import test from 'tape';
import isFunction from './isFunction.js';

test('isFunction', assert => {
  assert.is(isFunction(() => {}), true);
  assert.is(isFunction(), false);
  assert.is(isFunction(true), false);
  assert.is(isFunction(async function() {}), true);

  assert.end();
});