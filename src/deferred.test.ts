import { expect, test } from 'bun:test';
import deferred from './deferred';
import isFunction from './isFunction';

test('deferred', async function() {
  const def = await deferred();

  expect(def.promise instanceof Promise).toBe(true);
  expect(isFunction(def.resolve)).toBe(true);
  expect(isFunction(def.reject)).toBe(true);

  def.promise.then(() => expect().pass('then called'));

  def.resolve();
});