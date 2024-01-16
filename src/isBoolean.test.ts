import { expect, test } from 'bun:test';
import isBoolean from './isBoolean';

test('isBoolean', () => {
  expect(isBoolean(true)).toBe(true);
  expect(isBoolean(false)).toBe(true);
  expect(isBoolean()).toBe(false);
  expect(isBoolean(null)).toBe(false);
  expect(isBoolean({})).toBe(false);
  expect(isBoolean([])).toBe(false);
});