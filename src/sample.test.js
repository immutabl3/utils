import test from 'tape';
import sample from './sample.js';

test('sample', assert => {
  const arr = [1, 2, 3];
  assert.ok(arr.includes(sample(arr)));
  assert.end();
});