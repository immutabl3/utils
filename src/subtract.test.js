import test from 'tape';
import subtract from './subtract.js';

test('subtract', assert => {
  assert.is(subtract(1, 1), 0);
  assert.is(subtract(0, 1), -1);
  assert.is(subtract(Infinity, 1), Infinity);
  assert.end();
});