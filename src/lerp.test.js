import test from 'tape';
import lerp from './lerp.js';
import isNumber from './isNumber.js';

test('lerp', assert => {
  assert.ok(isNumber(lerp(0, 1)));

  const lerped = lerp(0, 1);
  assert.ok(lerped > 0 && lerped < 1);

  assert.end();
});