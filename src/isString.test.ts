import { expect, test } from 'bun:test';
import isString from './isString';

test('isString', () => {
  expect(isString('')).toBe(true);
  expect(isString()).toBe(false);
  expect(isString(null)).toBe(false);
  expect(isString({})).toBe(false);
  expect(isString([])).toBe(false);
});