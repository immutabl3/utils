import { expect, test } from 'bun:test';
import map from './map';

test('map', () => {
  expect(map([{ id: 'foo' }, { id: 'bar' }, { id: 'baz' }], 'id')).toEqual(['foo', 'bar', 'baz']);
  expect(map([{ id: 'foo' }, { id: 'bar' }, { id: 'baz' }], ({ id }) => id)).toEqual(['foo', 'bar', 'baz']);
  
  expect(map({ one: { id: 1 }, two: { id: 2 }, three: { id: 3 } }, 'id')).toEqual({ one: 1, two: 2, three: 3 });
  expect(map({ one: { id: 1 }, two: { id: 2 }, three: { id: 3 } }, ({ id }) => id)).toEqual({ one: 1, two: 2, three: 3 });
});