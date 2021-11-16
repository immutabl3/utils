import test from 'tape';
import add from './add.js';

test('add', assert => {
  assert.is(add(1, 1), 2);
  assert.is(add(0, 0), 0);
  assert.is(add(Infinity, 1), Infinity);
  assert.end();
});