import test from 'tape';
import random from './random.js';

test('random', assert => {
  const val1 = random(0, 1);
  assert.ok(val1 >= 0 && val1 <= 1);

  const val2 = random(5, 10);
  assert.ok(val2 >= 5 && val2 <= 10);

  const val3 = random(-10, -5);
  assert.ok(val3 >= -10 && val3 <= -5);

  assert.end();
});