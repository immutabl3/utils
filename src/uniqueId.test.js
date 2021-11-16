import test from 'tape';
import uniqueId from './uniqueId.js';

test('uniqueId', assert => {
  assert.is(uniqueId(), 1);
  assert.is(uniqueId(), 2);
  assert.is(uniqueId(), 3);
  assert.end();
});