import test from 'tape';
import divide from './divide.js';

test('divide', assert => {
  assert.is(divide(1, 1), 1);
  assert.is(divide(2, 4), 0.5);
  assert.is(divide(Infinity, 1), Infinity);
  assert.end();
});