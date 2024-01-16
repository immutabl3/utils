import { expect, test } from 'bun:test';
import get from './get';

test('get', () => {
  // @ts-ignore
  expect(get({ foo: { bar: { baz: true } } }, ['foo', 'bar', 'baz'])).toBe(true);
  expect(get({}, ['foo', 'bar', 'baz'])).toBeUndefined();
  expect(get({ foo: { bar: { baz: true } } }, [])).toEqual({ foo: { bar: { baz: true } } });
});