import { expect, test } from 'bun:test';
import degreesToRadians from './degreesToRadians';

test('degreesToRadians', () => {
  expect(degreesToRadians(180)).toBe(Math.PI);
  expect(degreesToRadians(90)).toBe(Math.PI / 2);
  expect(degreesToRadians(0)).toBe(0);
  expect(degreesToRadians(360)).toBe(Math.PI * 2);
});