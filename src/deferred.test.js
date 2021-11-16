import test from 'tape';
import deferred from './deferred.js';
import isFunction from './isFunction.js';

test('deferred', async function(assert) {
  assert.plan(4);

  const def = await deferred();

  assert.ok(def.promise instanceof Promise);
  assert.ok(isFunction(def.resolve));
  assert.ok(isFunction(def.reject));

  def.promise
    .then(() => assert.pass('then called'));

  def.resolve();
});