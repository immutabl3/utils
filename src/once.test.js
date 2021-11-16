import test from 'tape';
import once from './once.js';

test('once', assert => {
  let count = 0;

  const inc = once(() => count++);

  assert.is(count, 0);
  inc();
  assert.is(count, 1);
  inc();
  assert.is(count, 1);

  assert.end();
});