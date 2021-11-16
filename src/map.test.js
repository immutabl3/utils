import test from 'tape';
import map from './map.js';

test('map', assert => {
  assert.same(map([{ id: 'foo' }, { id: 'bar' }, { id: 'baz' }], 'id'), ['foo', 'bar', 'baz']);
  assert.same(map([{ id: 'foo' }, { id: 'bar' }, { id: 'baz' }], ({ id }) => id), ['foo', 'bar', 'baz']);
  
  assert.same(map({ one: { id: 1 }, two: { id: 2 }, three: { id: 3 } }, 'id'), { one: 1, two: 2, three: 3 });
  assert.same(map({ one: { id: 1 }, two: { id: 2 }, three: { id: 3 } }, ({ id }) => id), { one: 1, two: 2, three: 3 });

  assert.end();
});