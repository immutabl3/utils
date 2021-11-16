import test from 'tape';
import uniq from './uniq.js';

test('uniq', assert => {
  assert.same(uniq([1, 1, 2]), [1, 2]);
  assert.end();
});