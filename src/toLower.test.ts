import { expect, test } from 'bun:test';
import toLower from './toLower';

test('toLower', () => {
  expect(toLower('ABC')).toBe('abc');
  expect(toLower('|,"')).toBe('|,"');
});