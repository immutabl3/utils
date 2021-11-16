import test from 'tape';
import isRegExp from './isRegExp.js';

test('isRegExp', assert => {
  assert.is(isRegExp(/a/), true);
  assert.is(isRegExp(), false);
  assert.is(isRegExp(null), false);
  assert.is(isRegExp({}), false);
  assert.is(isRegExp([]), false);

  assert.end();
});