import { expect, test } from 'bun:test';
import toUpper from './toUpper';

test('toUpper', () => {
  expect(toUpper('abc')).toBe('ABC');
  expect(toUpper('|,"')).toBe('|,"');
});