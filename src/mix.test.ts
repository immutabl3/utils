import { expect, test } from 'bun:test';
import mix from './mix';

test('mix', () => {
  let value: number | undefined;
  let accessed = false;
  const result = mix({
    get foo() {
      accessed = true;
      return value;
    },
  }, {
    set foo(val: number) {
      value = val;
    },
  }) as {
    foo: number | undefined;
  };

  expect(accessed).toBe(false);
  expect(value).toBeUndefined();
  expect('foo' in result).toBe(true);
  expect(result).toEqual({ foo: undefined });

  result.foo = 1;
  expect(value).toBe(1);
});