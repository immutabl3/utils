import test from 'tape';
import isNumber from './isNumber.js';

test('isNumber', assert => {
  assert.is(isNumber(1), true);
  assert.is(isNumber(NaN), false);
  assert.is(isNumber(Infinity), true);
  assert.is(isNumber(-Infinity), true);
  assert.is(isNumber(), false);

  assert.end();
});