import test from 'tape';
import copy from './copy.js';

test('copy', assert => {
  assert.same(copy({ hello: 'world' }), { hello: 'world' });
  assert.isNot(copy({}), {});

  assert.end();
});