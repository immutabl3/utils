import { expect, test } from 'bun:test';
import attempt from './attempt';
import isError from './isError';

test('attempt', () => {
  const value = attempt(() => 1);
  expect(value).toEqual(1);
  
  // @ts-expect-error
  const accessErr = attempt(() => ({}).foo.bar = 'baz');
  expect(isError(accessErr)).toBe(true);
  
  const thrownErr = attempt(() => {
    throw new Error('error');
  });
  expect(isError(thrownErr)).toBe(true);
});