import { expect, test } from 'bun:test';
import omit from './omit';

test('omit', () => {
  const obj = {
    foo: 1,
    bar: 2,
    baz: 3,
  };

  const obj2 = omit(obj, ['baz']);

  expect(obj2).toEqual({
    foo: 1,
    bar: 2,
  });

  expect(obj).not.toEqual(obj2);
});