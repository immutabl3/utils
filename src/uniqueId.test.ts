import { expect, test } from 'bun:test';
import uniqueId from './uniqueId';

test('uniqueId', () => {
  expect(uniqueId()).toBe(1);
  expect(uniqueId()).toBe(2);
  expect(uniqueId()).toBe(3);
});