import test from 'tape';
import radiansToDegrees from './radiansToDegrees.js';

test('radiansToDegrees', assert => {
  assert.is(radiansToDegrees(Math.PI), 180);
  assert.is(radiansToDegrees(Math.PI / 2), 90);
  assert.is(radiansToDegrees(0), 0);
  assert.is(radiansToDegrees(Math.PI * 2), 360);

  assert.end();
});