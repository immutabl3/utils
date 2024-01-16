import { expect, test } from 'bun:test';
import repeat from './repeat';

test('repeat', () => {
  expect(repeat(1, 3)).toEqual([1, 1, 1]);
  expect(repeat('1', 3)).toEqual(['1', '1', '1']);
});