import test from 'tape';
import chunk from './chunk.js';

test('chunk', assert => {
  assert.same(chunk([1, 2, 3], 1), [[1], [2], [3]]);
  assert.same(chunk([1, 2, 3], 2), [[1, 2], [3]]);
  assert.same(chunk([1, 2, 3], 3), [[1, 2, 3]]);

  assert.end();
});