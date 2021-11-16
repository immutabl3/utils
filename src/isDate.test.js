import test from 'tape';
import isDate from './isDate.js';

test('isDate', assert => {
  const date = new Date();
  assert.is(isDate(date), true);
  assert.is(isDate(), false);
  assert.is(isDate(null), false);
  assert.is(isDate({}), false);
  assert.is(isDate([]), false);

  assert.end();
});