import { expect, test } from 'bun:test';
import isRegExp from './isRegExp';

test('isRegExp', () => {
  expect(isRegExp(/a/)).toBe(true);
  expect(isRegExp()).toBe(false);
  expect(isRegExp(null)).toBe(false);
  expect(isRegExp({})).toBe(false);
  expect(isRegExp([])).toBe(false);
});