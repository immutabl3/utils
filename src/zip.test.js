import test from 'tape';
import zip from './zip.js';

test('zip', assert => {
  const arr1 = [1, 2, 3];
  const arr2 = ['1', '2', '3'];
  const arr3 = [[1, '1'], [2, '2'], [3, '3']];
  assert.same(zip(arr1, arr2), arr3);
  
  assert.end();
});