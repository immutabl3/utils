import { expect, test } from 'bun:test';
import isBuffer from './isBuffer';

test('isBuffer', () => {
  const buffer = Buffer.from([1, 2, 3]);
  expect(isBuffer(buffer)).toBe(true);
  expect(isBuffer()).toBe(false);
  expect(isBuffer(null)).toBe(false);
  expect(isBuffer({})).toBe(false);
  expect(isBuffer([])).toBe(false);
});