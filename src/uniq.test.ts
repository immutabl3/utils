import { expect, test } from 'bun:test';
import uniq from './uniq';

test('uniq', () => {
  expect(uniq([1, 1, 2])).toEqual([1, 2]);
});