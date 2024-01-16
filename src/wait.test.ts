import { expect, test } from 'bun:test';
import wait from './wait';
import isFunction from './isFunction';

test('wait', () => {
  expect(wait() instanceof Promise).toBe(true);
  expect(isFunction(wait().then)).toBeDefined();
});