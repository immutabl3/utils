import { expect, test } from 'bun:test';
import invertMap from './invertMap';

test('invertMap', () => {
  const map = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
  ]);

  const inverted = invertMap(map);

  expect(inverted instanceof Map).toBe(true);
  expect(Array.from(inverted.entries())).toEqual([
    ['one', 1],
    ['two', 2],
    ['three', 3],
  ]);
});