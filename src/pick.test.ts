import { expect, test } from 'bun:test';
import pick from './pick';

test('pick', () => {
  const obj = {
    foo: 1,
    bar: 2,
    baz: 3,
  };

  const obj2 = pick(obj, ['baz']);

  expect(obj2).toEqual({
    baz: 3,
  });

  expect(obj).not.toEqual(obj2);
});