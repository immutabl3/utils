import { expect, test } from 'bun:test';
import multiply from './multiply';

test('multiply', () => {
  expect(multiply(1, 1)).toBe(1);
  expect(multiply(2, 2)).toBe(4);
  expect(multiply(Infinity, 1)).toBe(Infinity);
});