import { expect, test } from 'bun:test';
import divide from './divide';

test('divide', () => {
  expect(divide(1, 1)).toBe(1);
  expect(divide(2, 4)).toBe(0.5);
  expect(divide(Infinity, 1)).toBe(Infinity);
});