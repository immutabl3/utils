import test from 'tape';
import isEven from './isEven.js';

test('isEven', assert => {
  assert.is(isEven(2), true);
  assert.is(isEven(0), true);
  assert.is(isEven(1), false);

  assert.end();
});