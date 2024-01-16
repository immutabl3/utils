import { expect, test } from 'bun:test';
import noop from './noop';
import isFunction from './isFunction';

test('noop', () => {
  expect(isFunction(noop)).toBeTrue();
});