import { expect, test } from 'bun:test';
import isInt from './isInt';

test('isInt', () => {
  expect(isInt(1)).toBe(true);
  expect(isInt(0)).toBe(true);
  expect(isInt(1.01)).toBe(false);
  expect(isInt()).toBe(false);
  expect(isInt(true)).toBe(false);
  expect(isInt(NaN)).toBe(false);
});