import test from 'tape';
import isBuffer from './isBuffer.js';

test('isBuffer', assert => {
  const buffer = Buffer.from([1, 2, 3]);
  assert.is(isBuffer(buffer), true);
  assert.is(isBuffer(), false);
  assert.is(isBuffer(null), false);
  assert.is(isBuffer({}), false);
  assert.is(isBuffer([]), false);

  assert.end();
});