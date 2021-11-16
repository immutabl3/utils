import test from 'tape';
import isBoolean from './isBoolean.js';

test('isBoolean', assert => {
  assert.is(isBoolean(true), true);
  assert.is(isBoolean(false), true);
  assert.is(isBoolean(), false);
  assert.is(isBoolean(null), false);
  assert.is(isBoolean({}), false);
  assert.is(isBoolean([]), false);

  assert.end();
});