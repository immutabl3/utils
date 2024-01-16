import { expect, test } from 'bun:test';
import last from './last';

test('last', () => {
  expect(last([1, 2, 3])).toBe(3);
  expect(last([1])).toBe(1);
  expect(last([])).toBeUndefined();
});