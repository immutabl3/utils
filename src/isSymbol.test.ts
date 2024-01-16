import { expect, test } from 'bun:test';
import isSymbol from './isSymbol';

test('isSymbol', () => {
  expect(isSymbol('')).toBe(false);
  expect(isSymbol()).toBe(false);
  expect(isSymbol(null)).toBe(false);
  expect(isSymbol({})).toBe(false);
  expect(isSymbol([])).toBe(false);
  expect(isSymbol(Symbol('symbol'))).toBe(true);
});