import { expect, test } from 'bun:test';
import keyBy from './keyBy';

test('keyBy', () => {
  const items = [
    { id: 'foo', idx: 1 },
    { id: 'bar', idx: 2 },
    { id: 'baz', idx: 3 },
  ];

  expect(keyBy(items, 'id')).toEqual({
    foo: { id: 'foo', idx: 1 },
    bar: { id: 'bar', idx: 2 },
    baz: { id: 'baz', idx: 3 },
  });
});