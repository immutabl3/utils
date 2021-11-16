import test from 'tape';
import distance from './distance.js';

test('distance', assert => {
  assert.is(distance(0, 0, 0, 0), 0);
  assert.is(distance(0, 0, 1, 1), 1.4142135623730951);
  assert.is(distance(1, 1, -5, -5), 8.48528137423857);

  assert.end();
});