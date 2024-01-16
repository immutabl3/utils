import { expect, test } from 'bun:test';
import isPrimitive from './isPrimitive';

test('isPrimitive', () => {
  expect(isPrimitive({})).toBe(false);
  expect(isPrimitive([])).toBe(false);
  expect(isPrimitive(null)).toBe(true);
  expect(isPrimitive()).toBe(true);
  expect(isPrimitive('')).toBe(true);
  expect(isPrimitive(1)).toBe(true);
});