import test from 'tape';
import take from './take.js';

test('take', assert => {
  assert.same(take([1, 2, 3], 1), [1]);
  assert.same(take([1, 2, 3], 2), [1, 2]);
  assert.same(take([1, 2, 3], 3), [1, 2, 3]);
  assert.end();
});