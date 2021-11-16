import test from 'tape';
import isPrimitive from './isPrimitive.js';

test('isPrimitive', assert => {
  assert.is(isPrimitive({}), false);
  assert.is(isPrimitive([]), false);
  assert.is(isPrimitive(null), true);
  assert.is(isPrimitive(), true);
  assert.is(isPrimitive(''), true);
  assert.is(isPrimitive(1), true);
  assert.end();
});