import { expect, test } from 'bun:test';
import size from './size';

test('size', () => {
  expect(size([1, 2, 3])).toBe(3);
  expect(size({ length: 3 })).toBe(3);
  expect(size({ one: 1, two: 2, three: 3 })).toBe(3);
});