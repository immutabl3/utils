import test from 'tape';
import wait from './wait.js';
import isFunction from './isFunction.js';

test('wait', assert => {
  assert.ok(wait() instanceof Promise);
  assert.ok(isFunction(wait().then));
  assert.end();
});