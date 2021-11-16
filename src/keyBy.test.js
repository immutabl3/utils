import test from 'tape';
import keyBy from './keyBy.js';

test('keyBy', assert => {
  const items = [
    { id: 'foo', idx: 1 },
    { id: 'bar', idx: 2 },
    { id: 'baz', idx: 3 },
  ];

  assert.same(keyBy(items, 'id'), {
    foo: { id: 'foo', idx: 1 },
    bar: { id: 'bar', idx: 2 },
    baz: { id: 'baz', idx: 3 },
  });

  assert.end();
});