import { expect, test } from 'bun:test';
import roundTo from './roundTo';

test('roundTo', () => {
  expect(roundTo(1.1111, 2)).toBe(1.11);
  expect(roundTo(1.119, 2)).toBe(1.12);
});