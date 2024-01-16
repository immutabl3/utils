import { expect, test } from 'bun:test';
import copy from './copy';

test('copy', () => {
  expect(copy({ hello: 'world' })).toEqual({ hello: 'world' });
  expect(copy({})).toEqual({});
});