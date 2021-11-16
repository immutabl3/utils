import test from 'tape';
import repeat from './repeat.js';

test('repeat', assert => {
  assert.same(repeat(1, 3), [1, 1, 1]);
  assert.same(repeat('1', 3), ['1', '1', '1']);
  assert.end();
});