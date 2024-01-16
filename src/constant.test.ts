import { expect, test } from 'bun:test';
import constant from './constant';
import isFunction from './isFunction';

test('constant', () => {
  expect(isFunction(constant(1))).toBe(true);
  expect(constant(1)()).toBe(1);
  expect(constant([1])()).toEqual([1]);
});