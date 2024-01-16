import { expect, test } from 'bun:test';
import wrapIndex from './wrapIndex';

test('wrapIndex', () => {
  const arr = [1, 2, 3];
  expect(wrapIndex(arr, 0)).toBe(0);
  expect(wrapIndex(arr, 2)).toBe(2);
  expect(wrapIndex(arr, 3)).toBe(0);
  expect(wrapIndex(arr, 6)).toBe(0);
  expect(wrapIndex(arr, 7)).toBe(1);
});