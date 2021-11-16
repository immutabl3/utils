import test from 'tape';
import noop from './noop.js';
import isFunction from './isFunction.js';

test('noop', assert => {
  assert.ok(isFunction(noop));
  assert.end();
});