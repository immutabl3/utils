import test from 'tape';
import last from './last.js';

test('last', assert => {
  assert.is(last([1, 2, 3]), 3);
  assert.is(last([1]), 1);
  assert.is(last([]), undefined);

  assert.end();
});