import { expect, test } from 'bun:test';
import isEven from './isEven';

test('isEven', () => {
  expect(isEven(2)).toBe(true);
  expect(isEven(0)).toBe(true);
  expect(isEven(1)).toBe(false);
});