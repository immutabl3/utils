import { expect, test } from 'bun:test';
import defer from './defer';
import wait from './wait';

test('defer', async function() {
  const start = performance.now();
  
  let end: number;
  defer(() => (end = performance.now()));

  await wait(16);

  const delay = end! - start;
  expect(delay > 0);
});