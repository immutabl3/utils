import { expect, test } from 'bun:test';
import radiansToDegrees from './radiansToDegrees';

test('radiansToDegrees', () => {
  expect(radiansToDegrees(Math.PI)).toBe(180);
  expect(radiansToDegrees(Math.PI / 2)).toBe(90);
  expect(radiansToDegrees(0)).toBe(0);
  expect(radiansToDegrees(Math.PI * 2)).toBe(360);
});