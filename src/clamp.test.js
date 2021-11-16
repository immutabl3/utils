import test from 'tape';
import clamp from './clamp.js';

test('clamp', assert => {
  assert.is(clamp(0.5, 0, 1), 0.5);
  assert.is(clamp(1, 0.5, 0.5), 0.5);
  assert.is(clamp(-11, -10, -5), -10);

  assert.end();
});