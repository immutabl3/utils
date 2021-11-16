import test from 'tape';
import invertMap from './invertMap.js';

test('invertMap', assert => {
  const map = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
  ]);

  const inverted = invertMap(map);

  assert.ok(inverted instanceof Map);
  assert.same(Array.from(inverted.entries()), [
    ['one', 1],
    ['two', 2],
    ['three', 3],
  ]);

  assert.end();
});