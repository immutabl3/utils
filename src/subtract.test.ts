import { expect, test } from 'bun:test';
import subtract from './subtract';

test('subtract', () => {
  expect(subtract(1, 1)).toBe(0);
  expect(subtract(0, 1)).toBe(-1);
  expect(subtract(Infinity, 1)).toBe(Infinity);
});