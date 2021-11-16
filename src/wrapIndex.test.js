import test from 'tape';
import wrapIndex from './wrapIndex.js';

test('wrapIndex', assert => {
  const arr = [1, 2, 3];
  assert.is(wrapIndex(arr, 0), 0);
  assert.is(wrapIndex(arr, 2), 2);
  assert.is(wrapIndex(arr, 3), 0);
  assert.is(wrapIndex(arr, 6), 0);
  assert.is(wrapIndex(arr, 7), 1);
  
  assert.end();
});