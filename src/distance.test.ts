import { expect, test } from 'bun:test';
import distance from './distance';

test('distance', () => {
  expect(distance(0, 0, 0, 0)).toBe(0);
  expect(distance(0, 0, 1, 1)).toBe(1.4142135623730951);
  expect(distance(1, 1, -5, -5)).toBe(8.48528137423857);
});