import { expect, test } from 'bun:test';
import rgba from './rgba';

test('rgba', () => {
  expect(rgba('#000000', 0.5)).toBe('rgba(0, 0, 0, 0.5)');
  expect(rgba('#ffffff', 0.5)).toBe('rgba(255, 255, 255, 0.5)');
});