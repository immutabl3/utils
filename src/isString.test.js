import test from 'tape';
import isString from './isString.js';

test('isString', assert => {
  assert.is(isString(''), true);
  assert.is(isString(), false);
  assert.is(isString(null), false);
  assert.is(isString({}), false);
  assert.is(isString([]), false);

  assert.end();
});