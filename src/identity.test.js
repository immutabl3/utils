import test from 'tape';
import identity from './identity.js';
import isFunction from './isFunction.js';

test('identity', assert => {
  assert.ok(isFunction(identity));
  assert.is(identity(1), 1);

  const ref = { hello: 'world' };
  assert.is(identity(ref), ref);

  assert.end();
});