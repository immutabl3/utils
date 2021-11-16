import test from 'tape';
import isInt from './isInt.js';

test('isInt', assert => {
  assert.is(isInt(1), true);
  assert.is(isInt(0), true);
  assert.is(isInt(1.01), false);
  assert.is(isInt(), false);
  assert.is(isInt(true), false);
  assert.is(isInt(NaN), false);

  assert.end();
});