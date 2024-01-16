import { expect, test } from 'bun:test';
import isError from './isError';

test('isError', () => {
  expect(isError(new Error())).toBe(true);
  expect(isError()).toBe(false);
  expect(isError(null)).toBe(false);
  expect(isError('')).toBe(false);
});