import { expect, test } from 'bun:test';
import range from './range';

test('range', () => {
  expect(range(3)).toEqual([0, 1, 2]);
});