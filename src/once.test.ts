import { expect, test } from 'bun:test';
import once from './once';

test('once', () => {
  let count = 0;

  const inc = once(() => count++);

  expect(count).toBe(0);
  inc();
  expect(count).toBe(1);
  inc();
  expect(count).toBe(1);
});