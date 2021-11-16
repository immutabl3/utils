import test from 'tape';
import roundTo from './roundTo.js';

test('roundTo', assert => {
  assert.is(roundTo(1.1111, 2), 1.11);
  assert.is(roundTo(1.119, 2), 1.12);
  assert.end();
});