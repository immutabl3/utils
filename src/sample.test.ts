import { expect, test } from 'bun:test';
import sample from './sample';

test('sample', () => {
  const arr = [1, 2, 3];
  expect(arr.includes(sample(arr))).toBeTrue();
});