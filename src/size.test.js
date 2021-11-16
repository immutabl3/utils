import test from 'tape';
import size from './size.js';

test('size', assert => {
  assert.is(size([1, 2, 3]), 3);
  assert.is(size({ length: 3 }), 3);
  assert.is(size({ one: 1, two: 2, three: 3 }), 3);
  assert.end();
});