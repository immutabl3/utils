import { expect, test } from 'bun:test';
import add from './add';

test('add', () => {
  expect(add(1, 1)).toBe(2);
  expect(add(0, 0)).toBe(0);
  expect(add(Infinity, 1)).toBe(Infinity);
});