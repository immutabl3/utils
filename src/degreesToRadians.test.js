import test from 'tape';
import degreesToRadians from './degreesToRadians.js';

test('degreesToRadians', assert => {
  assert.is(degreesToRadians(180), Math.PI);
  assert.is(degreesToRadians(90), Math.PI / 2);
  assert.is(degreesToRadians(0), 0);
  assert.is(degreesToRadians(360), Math.PI * 2);

  assert.end();
});