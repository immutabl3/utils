import { expect, test } from 'bun:test';
import isEmpty from './isEmpty';

test('isEmpty', () => {
  expect(isEmpty({})).toBe(true);
  expect(isEmpty()).toBe(true);
  expect(isEmpty(null)).toBe(true);
  expect(isEmpty({})).toBe(true);
  expect(isEmpty([])).toBe(true);
  expect(isEmpty({ hello: 'world' })).toBe(false);
  expect(isEmpty({ hello: null })).toBe(false);
  expect(isEmpty([undefined])).toBe(false);
});