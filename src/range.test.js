import test from 'tape';
import range from './range.js';

test('range', assert => {
  assert.same(range(3), [0, 1, 2]);

  assert.end();
});