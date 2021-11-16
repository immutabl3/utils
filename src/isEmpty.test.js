import test from 'tape';
import isEmpty from './isEmpty.js';

test('isEmpty', assert => {
  assert.is(isEmpty({}), true);
  assert.is(isEmpty(), true);
  assert.is(isEmpty(null), true);
  assert.is(isEmpty({}), true);
  assert.is(isEmpty([]), true);
  assert.is(isEmpty({ hello: 'world' }), false);
  assert.is(isEmpty({ hello: null }), false);
  assert.is(isEmpty([undefined]), false);

  assert.end();
});