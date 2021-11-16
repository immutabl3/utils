import test from 'tape';
import first from './first.js';

test('first', assert => {
  assert.is(first([1, 2, 3]), 1);
  assert.is(first([1]), 1);
  assert.is(first([]), undefined);

  assert.end();
});