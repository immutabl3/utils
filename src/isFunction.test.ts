import { expect, test } from 'bun:test';
import isFunction from './isFunction';

test('isFunction', () => {
  expect(isFunction(() => {})).toBe(true);
  expect(isFunction()).toBe(false);
  expect(isFunction(true)).toBe(false);
  expect(isFunction(async function() {})).toBe(true);
});