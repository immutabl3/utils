import { expect, test } from 'bun:test';
import remove from './remove';

test('remove', () => {
  const arr = [1, 2, 3];
  const result = remove(arr, 2);
  expect(result).toBe(true);
  expect(arr).toEqual([1, 3]);
});