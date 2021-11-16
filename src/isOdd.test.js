import test from 'tape';
import isOdd from './isOdd.js';

test('isOdd', assert => {
  assert.is(isOdd(2), false);
  assert.is(isOdd(0), false);
  assert.is(isOdd(1), true);

  assert.end();
});