import { expect, test } from 'bun:test';
import isNumber from './isNumber';

test('isNumber', () => {
  expect(isNumber(1)).toBe(true);
  expect(isNumber(NaN)).toBe(false);
  expect(isNumber(Infinity)).toBe(true);
  expect(isNumber(-Infinity)).toBe(true);
  expect(isNumber()).toBe(false);
});