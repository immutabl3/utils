import { expect, test } from 'bun:test';
import first from './first';

test('first', () => {
  expect(first([1, 2, 3])).toBe(1);
  expect(first([1])).toBe(1);
  expect(first([])).toBeUndefined();
});