import { expect, test } from 'bun:test';
import identity from './identity';
import isFunction from './isFunction';

test('identity', () => {
  expect(isFunction(identity)).toBe(true);
  expect(identity(1)).toBe(1);

  const ref = { hello: 'world' };
  expect(identity(ref)).toBe(ref);
});