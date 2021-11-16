import test from 'tape';
import defer from './defer.js';
import wait from './wait.js';

test('defer', async function(assert) {
  assert.plan(1);

  const start = performance.now();
  
  let end;
  defer(() => (end = performance.now()));

  await wait(16);

  const delay = end - start;
  assert.ok(delay > 0);
});