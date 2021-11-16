import test from 'tape';
import isObject from './isObject.js';

test('isObject', assert => {
  assert.is(isObject({}), true);
  assert.is(isObject([]), true);
  assert.is(isObject(null), false);
  assert.is(isObject(), false);
  assert.is(isObject(''), false);
  assert.is(isObject(1), false);
  assert.end();
});