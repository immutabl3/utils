import test from 'tape';
import remove from './remove.js';

test('remove', assert => {
  const arr = [1, 2, 3];
  const result = remove(arr, 2);
  assert.same(result, true);
  assert.same(arr, [1, 3]);
  assert.end();
});