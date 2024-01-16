import { expect, test } from 'bun:test';
import isDate from './isDate';

test('isDate', () => {
  const date = new Date();
  expect(isDate(date)).toBe(true);
  expect(isDate()).toBe(false);
  expect(isDate(null)).toBe(false);
  expect(isDate({})).toBe(false);
  expect(isDate([])).toBe(false);
});