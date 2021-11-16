import test from 'tape';
import multiply from './multiply.js';

test('multiply', assert => {
  assert.is(multiply(1, 1), 1);
  assert.is(multiply(2, 2), 4);
  assert.is(multiply(Infinity, 1), Infinity);
  assert.end();
});