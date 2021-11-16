import test from 'tape';
import toUpper from './toUpper.js';

test('toUpper', assert => {
  assert.is(toUpper('abc'), 'ABC');
  assert.is(toUpper('|,"'), '|,"');
  assert.end();
});