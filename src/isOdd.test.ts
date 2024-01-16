import { expect, test } from 'bun:test';
import isOdd from './isOdd';

test('isOdd', () => {
  expect(isOdd(2)).toBe(false);
  expect(isOdd(0)).toBe(false);
  expect(isOdd(1)).toBe(true);
});