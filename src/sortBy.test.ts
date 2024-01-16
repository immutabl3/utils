import { expect, test } from 'bun:test';
import sortBy from './sortBy';

test('sortBy', () => {
  const arr = [
    { index: 3 },
    { index: 2 },
    { index: 1 },
  ];

  expect(sortBy(arr, 'index')).toEqual([
    { index: 1 },
    { index: 2 },
    { index: 3 },
  ]);
  expect(sortBy(arr, ({ index }) => index)).toEqual([
    { index: 1 },
    { index: 2 },
    { index: 3 },
  ]);
});