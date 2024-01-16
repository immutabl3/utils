import { expect, test } from 'bun:test';
import take from './take';

test('take', () => {
  expect(take([1, 2, 3], 1)).toEqual([1]);
  expect(take([1, 2, 3], 2)).toEqual([1, 2]);
  expect(take([1, 2, 3], 3)).toEqual([1, 2, 3]);
});