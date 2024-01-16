import { expect, test } from 'bun:test';
import isObject from './isObject';

test('isObject', () => {
  expect(isObject({})).toBe(true);
  expect(isObject([])).toBe(true);
  expect(isObject(null)).toBe(false);
  expect(isObject()).toBe(false);
  expect(isObject('')).toBe(false);
  expect(isObject(1)).toBe(false);
});