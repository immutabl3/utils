import { expect, test } from 'bun:test';
import clamp from './clamp';

test('clamp', () => {
  expect(clamp(0.5, 0, 1)).toBe(0.5);
  expect(clamp(1, 0.5, 0.5)).toBe(0.5);
  expect(clamp(-11, -10, -5)).toBe(-10);
});