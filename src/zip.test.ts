import { expect, test } from 'bun:test';
import zip from './zip';

test('zip', () => {
  const arr1 = [1, 2, 3];
  const arr2 = ['1', '2', '3'];
  const arr3 = [[1, '1'], [2, '2'], [3, '3']];
  expect(zip(arr1, arr2)).toEqual(arr3 as [number, string][]);
});